/*
| Developed by Reskue
| Filename: JobRoleSeeking.tsx
| Author: eric@reskue.art
*/

import React, { useCallback, useEffect } from 'react';
import { Box, styled } from '@mui/material';
import SelectionButtonsContainer from '@/components/quiz/SelectionButtonContainer';
import OptionsList from '@/components/quiz/OptionsList';
import { useQuizContext } from './QuizContext';
import { JobRoleData } from '@/shared/interfaces/SearchPreference.interfaces';
import { apiGetJobs } from '@/services/axios/axios.services';

/*
|--------------------------------------------------------------------------
| Contracts
|--------------------------------------------------------------------------
*/

interface JobRoleProps {
    setIsValid: React.Dispatch<React.SetStateAction<boolean>>;
}

const numberOfCalls = 2;
const itemsPerPage = 100;

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
    margin: "2rem",
}));
/*
|--------------------------------------------------------------------------
| Component
|--------------------------------------------------------------------------
*/


const JobRoleSeeking = ({ setIsValid }: JobRoleProps) => {
    const { jobRolesData, setjobRolesData, availableWorkFields, setAvailableWorkFields, selectedJobRoles, setSelectedJobRoles, selectedWorkFields, setSelectedWorkFields } = useQuizContext();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const allData: JobRoleData[] = [];

                for (let i = 0; i < numberOfCalls; i++) {
                    const response = await apiGetJobs(itemsPerPage, i);
                    const data = response.data;
                    allData.push(...data.items);
                }
                const workFields: string[] = Array.from(new Set(allData.map((item: JobRoleData) => item.group.name)));
                setAvailableWorkFields(workFields);
                setjobRolesData(allData);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData();
    }, []);


    useEffect(() => {
        const isEmpty = !Object.keys(selectedJobRoles).some(key => {
            const values = selectedJobRoles[key];
            return Array.isArray(values) && values.some(value => value.trim().length > 0);
        });
        setIsValid(!isEmpty);
    }, [selectedJobRoles]);

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

        if (selectedWorkFields.includes(workField)) {
            const { [workField]: removed, ...rest } = selectedJobRoles;
            setSelectedJobRoles(rest);
        } else {
            // const updatedSelectedJobRoles = updateSelectedJobRoles(workField);
            // setSelectedJobRoles(updatedSelectedJobRoles);
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
        </JobRoleBoxStyled>
    );
};

export default JobRoleSeeking;
