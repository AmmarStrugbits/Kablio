/*
| Developed by Reskue
| Filename: JobseekerStatus.tsx
| Author: eric@reskue.art
*/

"use client"

import React from 'react'
import OptionsSelector from '../../OptionsSelector';
import { useFormContext } from 'react-hook-form';
import { JobseekerStatusEnum } from '@/shared/enum/JobseekerStatus.enum';
//import { styled } from '@mui/material'

/*
|--------------------------------------------------------------------------
| Contracts
|--------------------------------------------------------------------------
*/
export interface JobseekerStatusProps //extends buttonProps
{
    children?: React.ReactNode
}

export interface JobseekerStatusMapping {
    id: string;
    name: string;
    enum: JobseekerStatusEnum;
}

export function createJobseekerStatusMappings(): JobseekerStatusMapping[] {
    return [
        { id: '1', name: 'Not actively looking', enum: JobseekerStatusEnum.NOT_ACTIVELY },
        { id: '2', name: 'Casually looking', enum: JobseekerStatusEnum.CUASUALLY_LOOKING },
        { id: '3', name: 'Actively looking', enum: JobseekerStatusEnum.ACTIVELY_LOOKING },
    ];
}

/*
|--------------------------------------------------------------------------
| Component
|--------------------------------------------------------------------------
*/


const JobseekerStatus = () => {
    const { setValue } = useFormContext();

    const handleSetFormData = (dataTypeId: string, selectedIds: string[]) => {
        const mappings = createJobseekerStatusMappings();
        const selectedEnums = selectedIds.map(id => {
            const mapping = mappings.find(mapping => mapping.id === id);
            return mapping ? mapping.enum : null;
        }).filter(option => option !== null);
        setValue("jobseekerStatus", selectedEnums, { shouldValidate: true });
    };

    // Render
    //--------------------------------------------------------------------------
    return (
        <OptionsSelector
            createOptionsMappings={createJobseekerStatusMappings}
            label={<span>Select max 2</span>}
            setSelectedData={handleSetFormData}
            dataTypeId="jobseekerStatus"
            maxSelections={2}
        />
    );
};


export default JobseekerStatus
