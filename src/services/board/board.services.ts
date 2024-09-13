'use client'

import { apiAuth } from "@/services/axios/axios.interceptors"
import { Action, JobPostStatus, Status } from "@/shared/enum/JobPost.enum";


const setCorrespondingStatus = (status: JobPostStatus): Status => {
  switch (status) {
    case JobPostStatus.APPLIED : return Status.APPLY;
    case JobPostStatus.SAVED: return Status.SAVE;
    case JobPostStatus.SEEN: return Status.SKIP;
  }
}

export async function getJobPostInteractedWith() {
  return await apiAuth('/user/job-post/status');
}

export async function moveJobPost(jobPostId: string, currentStatus: JobPostStatus, newStatus: JobPostStatus) {
  const prevStat = setCorrespondingStatus(currentStatus);
  const newStat =  setCorrespondingStatus(newStatus)
 
  //Delete previous status
  await apiAuth.put('/user/job-post/status', {
    status: prevStat,
    action: Action.REMOVE,
    jobPostId
  })

  //Add to new status
  await apiAuth.put('/user/job-post/status', {
    status: newStat,
    action: Action.ADD,
    jobPostId
  })
}

export async function removeJobPost(jobPostId: string, status: JobPostStatus) {
  const stat = setCorrespondingStatus(status);
  await apiAuth.put('/user/job-post/status', {
    status: stat,
    action: Action.REMOVE,
    jobPostId
  })

}