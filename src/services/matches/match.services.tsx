/*
| Developed by Reskue
| Filename: Match.service.tsx
| Author: eric@reskue.art
*/

"use server "

import { Action, Status } from '@/shared/enum/JobPost.enum';
import { JobPostClass, JobPostDto } from '@/shared/interfaces/JobPostClass';
import { apiAuth } from '../axios/axios.interceptors';
import { SearchPreferenceData } from '@/shared/interfaces/SearchPreference.interfaces';
import { UserJobPostsStatus } from '@/components/matches/Match';
/*
|--------------------------------------------------------------------------
| Contracts
|--------------------------------------------------------------------------
*/

export function findEmptyArrayKeys(obj: Record<string, any>, keysToCheck: string[]): string[] {
    return keysToCheck.filter(key => Array.isArray(obj[key]) && obj[key].length === 0);
}

export const postSearchPreference = async (searchPreferenceData: SearchPreferenceData) => {
    return await apiAuth.post('/search-preference', searchPreferenceData);
}

export const getMatches = async (page: number, limit: number) => {
    const response = await apiAuth.get('/user/matches', {
        params: {
            limit: limit,
            page: page
        },
    });
    const jobPosts = response.data.items.map((item: JobPostDto) => new JobPostClass(item));
    const meta = response.data.meta;
    return ({ jobPosts, meta });
}


/**
 * Change the current status of the jobpost, depending on its current state
 * @jobPostId - The Id of the current job post
 * @status - the status targeted (SAVE, SKIP, APPLY)
 * @currentStateAction - the current state of the job post status, whether Added or Removed
 * @returns -
*/
export const toggleJobPostStatus = async (
    jobPostId: string,
    status: Status,
    currentStateAction: Action,
    callback: () => Promise<void>
) => {
    const requestBody = {
        status,
        action: currentStateAction,
        jobPostId,
    };
    await apiAuth.put('/user/job-post/status', requestBody);
    await callback();
};

/**
 * Get the Saved , Skipped and Applied array filled with job post ids, based on user interaction
 * @returns - An UserJobPostsStatus filled with user interacted job post ids
 */
export const getJobsStatus = async (): Promise<UserJobPostsStatus | undefined> => {
    const response = await apiAuth.get('/user/job-post/status');
    const jobPostsStatus = response.data;
    return (jobPostsStatus);
}