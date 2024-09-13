/*
| Developed by Reskue
| Filename: JobRoleSeeking.tsx
| Author: eric@reskue.art
*/

import React, { useCallback, useEffect, useState } from 'react';
import { Box, styled } from '@mui/material';
import SelectionButtonsContainer from '@/components/quiz/SelectionButtonContainer';
import OptionsList from '@/components/quiz/OptionsList';
import { JobRoleData } from '@/shared/interfaces/SearchPreference.interfaces';
import { useSearchPreferenceContext } from '@/contexts/searchPreferenceContext';
import { useFormContext } from 'react-hook-form';
import WordListInput from '@/components/shared/WordListInput';

/*
|--------------------------------------------------------------------------
| Contracts
|--------------------------------------------------------------------------
*/

/*
|--------------------------------------------------------------------------
| Styles
|--------------------------------------------------------------------------
*/

const JobRoleBoxStyled = styled(Box)(() => ({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "2rem",
    margin: "2rem 0rem",
}));
/*
|--------------------------------------------------------------------------
| Component
|--------------------------------------------------------------------------
*/


const JobRoleSeeking = () => {
    const { watch, setValue } = useFormContext()
    const { jobsContext } = useSearchPreferenceContext();
    const [jobRolesData, setjobRolesData] = useState<JobRoleData[]>([]);

    const [availableWorkFields, setAvailableWorkFields] = useState<string[]>([]);
    const [selectedWorkFields, setSelectedWorkFields] = useState<string[]>([]);
    const [selectedJobRoles, setSelectedJobRoles] = useState<{ [key: string]: string[] }>({});


    const formSelectedWorkFields = watch("workFields");
    const formSelectedJobRoles = watch("jobRoles");


    useEffect(() => {
        if (formSelectedWorkFields) {
            setSelectedWorkFields(formSelectedWorkFields);
        }
        if (formSelectedJobRoles) {
            setSelectedJobRoles(formSelectedJobRoles);
        }
    }, [formSelectedWorkFields, formSelectedJobRoles]);

    useEffect(() => {
        if (jobsContext && jobsContext.items && jobsContext.items.length > 0) {
            const workFields = jobsContext.items.map((item: JobRoleData) => item.group.name);
            const uniqueWorkFields: string[] = Array.from(new Set(workFields));
            setAvailableWorkFields(uniqueWorkFields);
            setjobRolesData(jobsContext.items);
        }
    }, [jobsContext]);

    /**
     * Updates the selected JobRoles list.
     * @param workField - The selected workField.
     */
    const updateSelectedJobRoles = useCallback((workfield: string) => {
        const newSelectedJobRoles = jobRolesData
            .filter(jobrole => jobrole.group.name === workfield)
            .map(jobrole => jobrole.id);

        const { [workfield]: removed, ...rest } = selectedJobRoles;

        const updatedSelectedJobRoles = newSelectedJobRoles.length > 0
            ? { ...rest, [workfield]: newSelectedJobRoles }
            : rest;

        return updatedSelectedJobRoles;
    }, [jobRolesData, selectedJobRoles]);

    /**
     * Handles the selection of a work field.
     * @param {string} workField - The selected work field.
     */
    const handleWorkFieldSelection = useCallback((workField: string) => {
        const updateSelectedWorkFields = (prevSelectedWorkFields: string[]): string[] => {
            if (prevSelectedWorkFields.includes(workField)) {
                return prevSelectedWorkFields.filter((selectedWorkField: string) => selectedWorkField !== workField);
            } else {
                return [...prevSelectedWorkFields, workField];
            }
        };

        const newSelectedWorkFields = updateSelectedWorkFields(selectedWorkFields);
        setSelectedWorkFields(newSelectedWorkFields);
        setValue("workFields", newSelectedWorkFields, { shouldValidate: true });
        if (selectedWorkFields.includes(workField)) {
            const { [workField]: removed, ...rest } = selectedJobRoles;
            setSelectedJobRoles(rest);
            setValue("jobRoles", rest, { shouldValidate: true });
        } else {
            // const updatedSelectedJobRoles = updateSelectedJobRoles(workField);
            // setSelectedJobRoles(updatedSelectedJobRoles);
            // setValue("jobRoles", updatedSelectedJobRoles, { shouldValidate: true });
        }
    }, [selectedWorkFields, setSelectedWorkFields, updateSelectedJobRoles]);


    /**
     * Handles the selection of job roles.
     * 
     * @param id - The ID of the job role.
     * @param workField - The work field associated the job role.
     */
    const HandleJobRolesSelection = useCallback((id: string, workField: string) => {
        const isWorkFieldSelected = selectedJobRoles[workField];
        let newSelectedJobRoles;
        if (isWorkFieldSelected) {
            newSelectedJobRoles = { ...selectedJobRoles, [workField]: selectedJobRoles[workField].includes(id) ? selectedJobRoles[workField].filter((jobRoleId: string) => jobRoleId !== id) : [...selectedJobRoles[workField], id] };
        } else {
            newSelectedJobRoles = { ...selectedJobRoles, [workField]: [id] };
        }
        setSelectedJobRoles(newSelectedJobRoles);
        setValue("jobRoles", newSelectedJobRoles, { shouldValidate: true });
    }, [selectedJobRoles, setSelectedJobRoles]);

    /**
     * Handles the deselection of all job roles for a specific work field.
     * @param workField - The work field for which the job roles are being deselected.
     */
    const handleDeselectAll = useCallback((workField: string) => {
        const updatedSelectedJobRoles = {
            ...selectedJobRoles,
            [workField]: []
        };
        setSelectedJobRoles(updatedSelectedJobRoles);
        setValue("jobRoles", updatedSelectedJobRoles, { shouldValidate: true });
    }, [selectedJobRoles, setSelectedJobRoles]);

    /**
     * Renders the options list for each selected work field.
     * @returns {JSX.Element[]} The rendered options list components.
     */
    const renderOptionsList = () => {
        return selectedWorkFields.map(workField => {
            const filteredJobRoles = jobRolesData
                .filter(item => item.group.name === workField)
                .map(item => ({
                    id: item.id,
                    name: item.name
                }));

            return (
                <OptionsList
                    key={workField}
                    label={<span>Uncheck <strong>roles</strong> or <strong>functions</strong></span>}
                    options={filteredJobRoles}
                    selectedOptionsIds={selectedJobRoles[workField]}
                    handleSelectedOption={id => HandleJobRolesSelection(id, workField)}
                    handleDeselectAll={() => handleDeselectAll(workField)}
                />
            );
        });
    };

    // Render
    //--------------------------------------------------------------------------
    return (
        <JobRoleBoxStyled>
            <SelectionButtonsContainer
                choices={availableWorkFields}
                selectedChoices={selectedWorkFields}
                handleSelectedChoice={handleWorkFieldSelection}
            />
            {renderOptionsList()}

            <WordListInput message={'Not seeing your target role(s)? Type them here.'} />
        </JobRoleBoxStyled>
    );
};

export default JobRoleSeeking;
