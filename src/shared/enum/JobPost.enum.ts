export enum Action {
    ADD = 'add',
    REMOVE = 'remove',
}

export enum Status {
    SAVE = 'save',
    SKIP = 'skip',
    APPLY = 'apply',
}

export enum JobPostStatus {
    SAVED = 'savedJobs',
    APPLIED = 'appliedJobs',
    SEEN = 'skippedJobs',
}