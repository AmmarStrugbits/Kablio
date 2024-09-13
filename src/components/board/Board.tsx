/*
| Developed by Reskue
| Filename: page.tsx
| Author: eric@reskue.art
*/

"use client"

import { theme } from '@/MUI/Theme'
import { Box, Button, Typography, useMediaQuery, styled } from '@mui/material'
import React, { useContext, useEffect, useState } from 'react'

import { BoardContext } from './BoardContext'

import JobCard from '@/components/board/JobCard'
import PreferencesButton from '@/components/board/PreferencesButton'
import StatusButton from '@/components/board/StatusButton'
import GetBackToSwiping from '@/components/board/GetBackToSwiping'
import LoadingAnimation from '@/shared/components/LoadingAnimation'

import { UserJobPostsStatus } from '../matches/Match'
import { JobPostStatus } from '@/shared/enum/JobPost.enum'

import { getJobsStatus } from '@/services/matches/match.services'
import { AuthContext } from '@/contexts/AuthContext'
import { JobPostDto } from '@/shared/interfaces/JobPostClass'
/*
|--------------------------------------------------------------------------
| Contracts
|--------------------------------------------------------------------------
*/
interface BoardProps {
}
enum SelectedStatus {
  SAVED = 'savedJobs',
  APPLIED = 'appliedJobs',
}

/*
|--------------------------------------------------------------------------
| Styles
|--------------------------------------------------------------------------
*/

const PageContainerStyled = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  minHeight: '95.625vh',
  justifyContent: 'flex-start',
  alignItems: 'center',
  backgroundColor: '#F9F9F9',
  [theme.breakpoints.down('md')]: {
    alignItems: 'flex-start'
  },
}))

const MainContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  width: '66%',
  gap: "20px",
  marginTop: '2rem',
  marginBottom: '1rem',

  [theme.breakpoints.down('md')]: {
    width: '100%',
    padding: '0.5rem',
    marginTop: '0rem',
  },
}))

const Title = styled(Typography)(() => ({
  fontFamily: "Anton",
  fontSize: "3.75rem",
  fontWeight: "normal",
}));

const CardSection = styled(Box)(({ theme }) => ({
  display: "flex",
  width: "auto",
  borderRadius: '0px 8px 8px 8px',
  justifyContent: "flex-start",
  alignItems: "center",
  padding: '10px',
  flexWrap: 'wrap',
  gap: '10px',
  backgroundColor: "rgba(0, 251, 223, 0.30)",

  [theme.breakpoints.down('sm')]: {
    borderRadius: '0px'
  },
}))

const ViewMoreButton = styled(Button)(({ theme }) => ({
  height: '30px',
  paddingLeft: '40px',
  fontFamily: "Roboto",
  fontSize: "16px",
  color: '#505662',
  backgroundColor: "none",
  display: 'flex',
  justifyContent: "flex-start",
  '&:hover': {
    backgroundColor: "transparent",
  },

  [theme.breakpoints.down('sm')]: {
    paddingLeft: "0px",
    justifyContent: "center",

  }
}))

const StatusButtonSection = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  width: "fit-content",
  justifyContent: "flex-start",
  alignItems: "flex-start",

  [theme.breakpoints.down('md')]: {
    width: '100%'
  }
}))

/*
|--------------------------------------------------------------------------
| Component
|--------------------------------------------------------------------------
*/

const Board: React.FC<BoardProps> = () => {
  const { user } = useContext(AuthContext);
  const { needUpdate, setNeedUpdate } = useContext(BoardContext);
  const matchesMobile = useMediaQuery(theme.breakpoints.down('md'));

  /********useState*******/
  const [loading, setLoading] = useState(true);
  const [jobsPostStatus, setJobsPostStatus] = useState<UserJobPostsStatus | undefined>();
  const [selectedStatus, setSelectedStatus] = useState<SelectedStatus>(SelectedStatus.SAVED);
  const [maxJobPostDisplayed, setMaxJobPostDisplayed] = useState<number>(6);
  const [maxJobPostDisplayedSeenSection, setMaxJobPostDisplayedSeenSection] = useState<number>(6);

  /***************** UseEffects ****************/
  const fetchJobsPostStatus = async () => {
    const updatedJobs: UserJobPostsStatus | undefined = await getJobsStatus();
    if (updatedJobs) {

      updatedJobs.appliedJobs = updatedJobs.appliedJobs.map(job => ({
        jobPost: {
          ...job.jobPost,
          createdAt: new Date(job.createdAt)
        },
        createdAt: new Date(job.createdAt)
      }));

      updatedJobs.savedJobs = updatedJobs.savedJobs.map(job => ({
        jobPost: {
          ...job.jobPost,
          createdAt: new Date(job.createdAt)
        },
        createdAt: new Date(job.createdAt)
      }));


      updatedJobs.skippedJobs = updatedJobs.skippedJobs.map(job => ({
        jobPost: {
          ...job.jobPost,
          createdAt: new Date(job.createdAt)
        },
        createdAt: new Date(job.createdAt)
      }));

    }

    setJobsPostStatus(updatedJobs);
  };


  useEffect(() => {
    if (user) {
      fetchJobsPostStatus();
      setLoading(false);
    }
  }, [user]);

  useEffect(() => {
    if (needUpdate) {
      fetchJobsPostStatus();
      setNeedUpdate(false);
    }
  }, [needUpdate, setNeedUpdate])

  /***************** Handlers ****************/
  const handleSelectedStatus = (status: SelectedStatus) => {
    setSelectedStatus(status);
    setMaxJobPostDisplayed(3);
  };

  const handleViewMore = () => {
    setMaxJobPostDisplayed(maxJobPostDisplayed => maxJobPostDisplayed + 6);
  }

  const handleViewMoreSeenSection = () => {
    setMaxJobPostDisplayedSeenSection(maxJobPostDisplayedSeenSection => maxJobPostDisplayedSeenSection + 6);
  }

  const sortByDateAsc = (a: { createdAt: Date }, b: { createdAt: Date }) => {
    return b.createdAt.getTime() - a.createdAt.getTime();
  }

  const mapJobPostCard = (status: SelectedStatus | JobPostStatus): React.JSX.Element => {
    if (!jobsPostStatus?.[status]?.length) {
      return <GetBackToSwiping status={status as SelectedStatus} />;
    }

    const numberJobPostToDisplay = maxJobPostDisplayed;
    const sortedList = jobsPostStatus[status].sort((a, b) => sortByDateAsc(a, b)).map(job => job.jobPost);
    const truncatedList = sortedList.slice(0, numberJobPostToDisplay);

    return (
      <>
        {truncatedList.map((job) => {
          return <JobCard key={job.id} status={status as JobPostStatus} data={job} />
        })}
      </>
    );
  };




  // Render
  //--------------------------------------------------------------------------
  if (loading) {
    return <LoadingAnimation />
  };

  return (
    <PageContainerStyled>
      <MainContainer>
        <Box
          display={matchesMobile ? 'none' : ''}
        >
          <Title>Hello {user ? user.firstName : ''}</Title>
        </Box>
        <PreferencesButton />
        <Box>
          <StatusButtonSection>
            <StatusButton isSelected={selectedStatus === SelectedStatus.SAVED} onClick={() => handleSelectedStatus(SelectedStatus.SAVED)} >Saved</StatusButton>
            <StatusButton isSelected={selectedStatus === SelectedStatus.APPLIED} onClick={() => handleSelectedStatus(SelectedStatus.APPLIED)} >Applied</StatusButton>
          </StatusButtonSection>
          {!jobsPostStatus?.[selectedStatus].length ? <GetBackToSwiping status={selectedStatus} /> :
            <CardSection>
              {mapJobPostCard(selectedStatus)}
              {jobsPostStatus?.[selectedStatus] && (maxJobPostDisplayed >= jobsPostStatus?.[selectedStatus].length) ?
                <></>
                :
                <ViewMoreButton fullWidth onClick={() => handleViewMore()}>View More +</ViewMoreButton>}
            </CardSection>
          }
        </Box>

        {jobsPostStatus?.skippedJobs.length ?
          <Box>
            <StatusButtonSection>
              <StatusButton isSelected={true} disabled={true} >Seen</StatusButton>
            </StatusButtonSection>
            <CardSection>
              {mapJobPostCard(JobPostStatus.SEEN)}
              {jobsPostStatus?.skippedJobs && (maxJobPostDisplayedSeenSection >= jobsPostStatus.skippedJobs.length) ?
                <></>
                :
                <ViewMoreButton fullWidth onClick={() => handleViewMoreSeenSection()}>View More +</ViewMoreButton>
              }
            </CardSection>
          </Box>
          :
          <></>
        }
      </MainContainer >
    </PageContainerStyled >
  )
}

export default Board
