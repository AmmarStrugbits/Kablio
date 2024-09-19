"use client"

/*
| Developed by Reskue
| Filename: Match.tsx
| Author: eric@reskue.art
*/

import { Box, styled, keyframes } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useFormContext } from 'react-hook-form'

import Image from 'next/image'

import SkeletonLeftBorder from '@/assets/images/SkeletonLeftBorder.png'
import SkeletonRightBorder from '@/assets/images/SkeletonRightBorder.png'

import PreviousButton from '@/components/matches/buttons/PreviousButton'
import SkipButton from '@/components/matches/buttons/SkipButton'
import ApplyButton from '@/components/matches/buttons/ApplyButton'
import SaveButton from '@/components/matches/buttons/SaveButton'
import JobPost from '@/components/matches/match/JobPost'
import NoMatchFound from '@/components/matches/NoMatchFound'
import SearchPreferencesQuestion from '@/components/matches/searchPreferencesQuestion/SearchPreferencesQuestion'
import LoadingAnimation from '@/shared/components/LoadingAnimation'

import { SearchPreferencesDataForm } from '@/shared/interfaces/SearchPreference.interfaces'
import { JobPostClass, JobPostDto } from '@/shared/interfaces/JobPostClass'
import { Action, Status } from '@/shared/enum/JobPost.enum'
import { FindPaginateResponseMeta } from '@/shared/interfaces/FindPaginateResponseMeta.interface'
import { keysToCheck } from '@/shared/const/NavLinksSidebarSearchPreferences'

import { useSearchPreferenceContext } from '@/contexts/searchPreferenceContext'
import { onSubmitPreferencesMatches, transformUserPreferencesToFormValues } from '@/services/searchpreferences/searchPreferences.services'
import { findEmptyArrayKeys, getJobsStatus, getMatches, toggleJobPostStatus } from '@/services/matches/match.services'
import { create } from 'domain'

/*
|--------------------------------------------------------------------------
| Contracts
|--------------------------------------------------------------------------
*/

export interface MatchPageProps {
}
const LIMIT: number = 100;

export interface UserJobPostsStatus {
    savedJobs: {
        jobPost: JobPostDto;
        createdAt: Date;
    }[];

    appliedJobs: {
        jobPost: JobPostDto;
        createdAt: Date;
    }[];

    skippedJobs: {
        jobPost: JobPostDto;
        createdAt: Date;
    }[];
}

interface JobPostStatus {
    isSaved: boolean;
    isApplied: boolean;
    isSkipped: boolean;
}

type JobPostStatusesMap = Record<string, JobPostStatus>;

/*
|--------------------------------------------------------------------------
| Styles
|--------------------------------------------------------------------------
*/

const MatchesPageBoxStyled = styled(Box)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',

    width: "100vw",
    height: "100%",

    backgroundColor: '#F9F9F9',
    marginTop: '1rem',
    [theme.breakpoints.down('md')]: {
        marginTop: '0rem',
        justifyContent: 'center',
        alignItems: 'center',
        paddingBottom: '4rem',
        backgroundColor: 'white',
    },
}))

const PreviousButtonBoxStyled = styled(Box)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    position: 'fixed',
    left: '11%',
    bottom: '65%',
    height: "auto",
    width: '3.125rem',
    gap: '0.6875rem',

    [theme.breakpoints.down('lg')]: {
        display: 'none',
    }
}))

const ActionButtonSection = styled(Box)(({ theme }) => ({
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',

    [theme.breakpoints.up('lg')]: {
        position: 'fixed',
        flexDirection: 'column',
        gap: '0.6875rem',
        right: '5%',
        bottom: '60%',
        height: "auto",
        width: '10.125rem',
    },

    [theme.breakpoints.down('lg')]: {
        position: 'fixed',
        width: '100%',
        gap: '10px',
        flexDirection: 'row',
        justifyContent: 'space-between',
        bottom: '5rem',
        padding: '0 1rem',
    }
}))

const slideInFromRight = keyframes`
  from {
    transform: translateX(100%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
`;

const slideInFromLeft = keyframes`
  from {
    transform: translateX(-100%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
`;

const MatchPageLayoutBoxstyled = styled(Box) <{ animationDirection: 'left' | 'right' }>`
  ${({ animationDirection }) => ({
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        gap: '1rem',
        animation: `${animationDirection === 'right' ? slideInFromRight : slideInFromLeft} 0.5s ease-out`,
        width: '100%'
    })}
`;

const ImageBorderBoxStyled = styled(Box)(({ theme }) => ({
    width: "15%",
    display: 'flex',
    overflow: 'hidden',

    [theme.breakpoints.down('lg')]: {
        display: 'none',
    }
}))
/*
|--------------------------------------------------------------------------
| Component
|--------------------------------------------------------------------------
*/
const MatchingJob: React.FC<MatchPageProps> = () => {
    const { isLoading, userPreferences, sectorsContext, locationsContext, jobsContext } = useSearchPreferenceContext();
    const { getValues, reset } = useFormContext();

    const [page, setPage] = useState<number>(0);
    const [meta, setMeta] = useState<FindPaginateResponseMeta>();
    const [jobPosts, setJobPosts] = useState<JobPostClass[]>([]);
    const [jobsStatus, setJobsStatus] = useState<UserJobPostsStatus>();
    const [jobPostStatuses, setJobPostStatuses] = useState<JobPostStatusesMap>({});
    const [IndexjobPostToDisplay, setIndexjobPostToDisplay] = useState<number>(0);
    const [firstFetch, setFirstFetch] = useState<boolean>(true);

    const [showNoMatchFound, setShowNoMatchFound] = useState<boolean>(false);
    const [skippedJobsCount, setSkippedJobsCount] = useState(0);
    const [showSearchPreference, setShowSearchPreference] = useState(false);

    const [animationDirection, setAnimationDirection] = useState<'left' | 'right'>('right');

    const updateJobsStatus = async () => {
        const updatedJobsStatus = await getJobsStatus();
        setJobsStatus(updatedJobsStatus);
    };

    //********************* useEffets *********************

    /**
    * This useEffect performs several operations related to fetching job posts:
    * 1. Halts execution if the `loading` state is true, indicating user data isn't ready yet.
    * 2. Fetches matched job posts based on the current page and predefined limit using `getMatches`.
    * 3. Appends new job posts to the existing list, ensuring a continuous flow as the user navigates through pages.
    * 4. Updates `meta` with the metadata from fetched matches to manage pagination and tracking of fetched data.
    * 5. Calls `updateJobsStatus` to refresh the job application statuses (saved, applied, skipped) for the user.
    * 6. Sets `showNoMatchFound` to false if any job posts are fetched, indicating that there are matches to be shown.
    * 7. Increments `IndexjobPostToDisplay` by 1 to show the next job post, only if it's not the first fetch and new job posts have been loaded. This helps in progressing to show newly loaded jobs.
    * 8. Sets `firstFetch` to false after the first load to enable future increments of `IndexjobPostToDisplay` as intended.
    * 
   **/
    // useEffect(() => {
    //     const fetchJobPosts = async () => {
    //         const fetchedMatches = await getMatches(page, LIMIT);
    //         const newJobPosts = fetchedMatches?.jobPosts || [];
    //         setJobPosts(prevJobPosts => [...prevJobPosts, ...newJobPosts]);
    //         setMeta(fetchedMatches?.meta);
    //         updateJobsStatus();

    //         if (fetchedMatches?.meta?.itemCount && fetchedMatches?.meta?.itemCount > 0) {
    //             setShowNoMatchFound(false);
    //         }
    //         else {
    //             setShowNoMatchFound(true);
    //         }
    //         if (!firstFetch && newJobPosts.length > 0) {
    //             setIndexjobPostToDisplay(prevIndex => prevIndex + 1);
    //         }
    //         setFirstFetch(false);
    //     };
    //     fetchJobPosts();
    // }, [page]);

    /**
       * Check if currentJobPost is present in all 3 element of jobpostStatus
       * Set le CurrentJobPostStatus (true || false)
    **/
    // useEffect(() => {
    //     const newStatuses: JobPostStatusesMap = jobPosts.reduce<JobPostStatusesMap>((acc, jobPost) => {
    //         const isSaved = jobsStatus?.savedJobs?.some(job => job.jobPost.id === jobPost.id) || false;
    //         const isApplied = jobsStatus?.appliedJobs?.some(job => job.jobPost.id === jobPost.id) || false;
    //         const isSkipped = jobsStatus?.skippedJobs?.some(job => job.jobPost.id === jobPost.id) || false;
    //         acc[jobPost.id] = { isSaved, isApplied, isSkipped };
    //         return acc;
    //     }, {});
    //     setJobPostStatuses(newStatuses);
    // }, [jobPosts, jobsStatus]);


    /**
   * Load search preferences context to display random question
   **/
    // useEffect(() => {
    //     if (!isLoading && userPreferences && sectorsContext && jobsContext && locationsContext) {
    //         const formValues = transformUserPreferencesToFormValues(userPreferences, locationsContext.items, sectorsContext.items, jobsContext.items);
    //         reset(formValues);
    //     }
    // }, [isLoading, userPreferences, sectorsContext, locationsContext, jobsContext]);

    /**
   * Track skipped jobPost to display search preference question if needed.
   **/
    // useEffect(() => {
    //     if (skippedJobsCount !== 0 && (skippedJobsCount) % 10 === 0) {
    //         const values = getValues();
    //         const emptyKeys = findEmptyArrayKeys(values, keysToCheck);
    //         if (emptyKeys.length > 0) {
    //             setShowSearchPreference(true);
    //         }
    //     }
    // }, [skippedJobsCount]);

    //*********************Handlers Job Post Interactions*********************

    /**
     * Decrement the index of the job post to be displayed
     * this handler rerender the component
     */
    const handlePreviousJobPost = () => {
        setIndexjobPostToDisplay(IndexCurrentJobPosts => IndexCurrentJobPosts > 0 ? IndexCurrentJobPosts - 1 : IndexCurrentJobPosts);
        setAnimationDirection('left');
    };

    /**
     * Handles the action to display the next job post in the list.
     * - If there is another job post in the current list, it increments `IndexjobPostToDisplay` to show the next job post.
     * - If the end of the current job posts list is reached, it checks if there are more pages of job posts available. If so, it triggers fetching the next page by incrementing the `page` state.
     * - If there are no more pages to fetchand the end of the job posts list is reached, it sets `showNoMatchFound` to true, indicating no more job posts are available to display.
     * - Regardless of the condition, it sets the animation direction to 'right', ensuring a consistent user experience as they navigate through job posts.
     * - Also, it marks the currently displayed job post as skipped by calling `handleSkippedJobPost`. This is a preemptive action to ensure that skipping is accounted for when navigating through posts.
     **/

    const handleNextJobPost = () => {
        if (IndexjobPostToDisplay + 1 < jobPosts.length) {
            setIndexjobPostToDisplay(IndexjobPostToDisplay + 1);
            setSkippedJobsCount(skippedJobsCount + 1);
        } else {
            if (meta && meta.currentPage + 1 < meta.totalPages) {
                setPage(meta.currentPage + 1);
            } else if (meta && meta.currentPage + 1 >= meta.totalPages && IndexjobPostToDisplay + 1 >= jobPosts.length) {
                setShowNoMatchFound(true);
            }
        }
        setAnimationDirection('right');
        handleSkippedJobPost();
    };


    const handleJobPostStatusChange = async (status: Status, action: Action, isCurrentStatusSet: boolean) => {
        if ((action === Action.ADD && !isCurrentStatusSet) || action === Action.REMOVE) {
            await toggleJobPostStatus(
                jobPosts[IndexjobPostToDisplay].id,
                status,
                action,
                updateJobsStatus
            );

            // Si on applique un job, on doit retirer le statut "skipped" et "saved"
            if (status === Status.APPLY && action === Action.ADD) {
                if (jobPostStatuses[jobPosts[IndexjobPostToDisplay].id]?.isSkipped) {
                    await toggleJobPostStatus(
                        jobPosts[IndexjobPostToDisplay].id,
                        Status.SKIP,
                        Action.REMOVE,
                        updateJobsStatus
                    );
                }
                if (jobPostStatuses[jobPosts[IndexjobPostToDisplay].id]?.isSaved) {
                    await toggleJobPostStatus(
                        jobPosts[IndexjobPostToDisplay].id,
                        Status.SAVE,
                        Action.REMOVE,
                        updateJobsStatus
                    );
                }
            }

            // Si on sauvegarde un job, on doit retirer le statut "skipped"
            if (status === Status.SAVE && action === Action.ADD) {
                if (jobPostStatuses[jobPosts[IndexjobPostToDisplay].id]?.isSkipped) {
                    await toggleJobPostStatus(
                        jobPosts[IndexjobPostToDisplay].id,
                        Status.SKIP,
                        Action.REMOVE,
                        updateJobsStatus
                    );
                }
            }
        }
    };

    /**
    * Add the current Job post to the saved job post
    */
    const handleSavedJobPost = () => {
        const currentJobPostId = jobPosts[IndexjobPostToDisplay]?.id;
        const isCurrentlySaved = jobPostStatuses[currentJobPostId]?.isSaved || false;
        const action = isCurrentlySaved ? Action.REMOVE : Action.ADD;

        handleJobPostStatusChange(Status.SAVE, action, isCurrentlySaved);
    };

    const handleSkippedJobPost = () => {
        const currentJobPostId = jobPosts[IndexjobPostToDisplay]?.id;
        const isCurrentlySkipped = jobPostStatuses[currentJobPostId]?.isSkipped || false;
        const isCurrentlySaved = jobPostStatuses[currentJobPostId]?.isSaved || false;
        const isCurrentlyApplied = jobPostStatuses[currentJobPostId]?.isApplied || false;

        // Check if the job post is already saved or applied
        if (!isCurrentlySaved && !isCurrentlyApplied) {
            // Only add to skipped list if it's not already skipped
            if (!isCurrentlySkipped) {
                handleJobPostStatusChange(Status.SKIP, Action.ADD, isCurrentlySkipped);
            }
        }
    };

    /**
    * Add the current Job post to the applied job post
    * Open new tab with the url company
    */
    const handleAppliedJobPost = () => {
        const currentJobPostId = jobPosts[IndexjobPostToDisplay]?.id;
        const isCurrentlyApplied = jobPostStatuses[currentJobPostId]?.isApplied || false;

        handleJobPostStatusChange(Status.APPLY, Action.ADD, isCurrentlyApplied);

        if (jobPosts[IndexjobPostToDisplay]?.url) {
            window.open(jobPosts[IndexjobPostToDisplay].url, '_blank');
        }
    };

    const handleCloseSearchPreferences = () => {
        setShowSearchPreference(false);
    };
    const handleSaveSearchPreferences = () => {
        const formData: SearchPreferencesDataForm = getValues() as SearchPreferencesDataForm;
        onSubmitPreferencesMatches(formData);
        setShowSearchPreference(false);
    };

    // Render
    // --------------------------------------------------------------------------

    // if (isLoading) {
    //     return <LoadingAnimation />;
    // }

    return (
        <MatchesPageBoxStyled>
            {showSearchPreference ? (
                <SearchPreferencesQuestion
                    onBack={() => {
                        // handleCloseSearchPreferences
                    }}
                    onSave={() => {
                        // handleSaveSearchPreferences();
                    }}
                />
            ) : (
                <>
                    {!showNoMatchFound && (
                        <PreviousButtonBoxStyled>
                            {/* <PreviousButton onClick={handlePreviousJobPost} disabled={IndexjobPostToDisplay === 0} /> */}
                            <PreviousButton onClick={() => { }} disabled={IndexjobPostToDisplay === 0} />
                        </PreviousButtonBoxStyled>
                    )}

                    {!showNoMatchFound && (
                        <ActionButtonSection>
                            {/* <SkipButton onClick={handleNextJobPost} disabled={false} />
                            <ApplyButton onClick={handleAppliedJobPost} />
                            <SaveButton onClick={handleSavedJobPost} isSaved={jobPostStatuses[jobPosts[IndexjobPostToDisplay]?.id]?.isSaved} /> */}
                            <SkipButton onClick={() => { }} disabled={false} />
                            <ApplyButton onClick={() => { }} />
                            <SaveButton onClick={() => { }} isSaved={jobPostStatuses[jobPosts[IndexjobPostToDisplay]?.id]?.isSaved} />
                        </ActionButtonSection>
                    )}

                    <MatchPageLayoutBoxstyled key={IndexjobPostToDisplay} animationDirection={animationDirection}>
                        <ImageBorderBoxStyled>
                            <Image alt={'left border'} src={SkeletonLeftBorder}></Image>
                        </ImageBorderBoxStyled>
                        {showNoMatchFound ? <NoMatchFound /> : <JobPost jobPost={jobPosts[IndexjobPostToDisplay]} />}
                        <ImageBorderBoxStyled sx={{ justifyContent: 'flex-end' }}>
                            <Image alt={'Right border'} src={SkeletonRightBorder}></Image>
                        </ImageBorderBoxStyled>
                    </MatchPageLayoutBoxstyled>
                </>
            )}
        </MatchesPageBoxStyled>
    );
}

export default MatchingJob
