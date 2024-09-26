/*
| Developed by Reskue
| Filename: JobLevelSeeking.tsx
| Author: eric@reskue.art
*/

import React, { useCallback, useEffect } from 'react';
import { Box, styled } from '@mui/material';
import { createExperienceMappings, useQuizContext } from './QuizContext';
import OptionsList from '@/components/quiz/OptionsList';

/*
|--------------------------------------------------------------------------
| Contracts
|--------------------------------------------------------------------------
*/

interface Option {
    id: string;
    name: string;
}


interface JobLevelProps {
    setIsValid: React.Dispatch<React.SetStateAction<boolean>>;
}

/*
|--------------------------------------------------------------------------
| Styles
|--------------------------------------------------------------------------
*/

const JobLevelSeekingBoxStyled = styled(Box)(() => ({
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

const JobLevelSeeking = ({ setIsValid }: JobLevelProps) => {
    const { selectedJobLevels, setSelectedJobLevels, } = useQuizContext();
    const availableExperiences = createExperienceMappings();

    useEffect(() => {
        const isEmpty = selectedJobLevels.length === 0;
        setIsValid(!isEmpty);
    }, [selectedJobLevels, setIsValid]);

    /**
     * Handles the selection of a job level.
     * @param id - The ID of the selected job level.
     */
    const HandleJobLevelSelection = useCallback((id: string) => {
        const isLevelSelected = selectedJobLevels.includes(id);

        let newSelectedJobLevels;
        if (isLevelSelected) {
            newSelectedJobLevels = selectedJobLevels.filter(levelId => levelId !== id);
        } else {
            if (selectedJobLevels.length >= 2)
                return;
            newSelectedJobLevels = [...selectedJobLevels, id];
        }
        setSelectedJobLevels(newSelectedJobLevels);
    }, [selectedJobLevels, setSelectedJobLevels]);

    const handleDeselectAll = useCallback(() => {
        setSelectedJobLevels([]);
    }, [setSelectedJobLevels]);

    /**
     * Renders the options list for job level selection.
     * 
     * @returns The rendered options list component.
     */
    const renderOptionsList = () => {
        const options: Option[] = availableExperiences.map(exp => ({
            id: exp.id,
            name: exp.name
        }));

        return (
            <OptionsList
                label={<span>(Select max 2)</span>}
                options={options}
                selectedOptionsIds={selectedJobLevels}
                handleSelectedOption={id => HandleJobLevelSelection(id)}
                handleDeselectAll={() => handleDeselectAll()}
            />
        );
    };
    // Render
    //--------------------------------------------------------------------------
    return (
        <JobLevelSeekingBoxStyled>
            {renderOptionsList()}
        </JobLevelSeekingBoxStyled>
    );
};

export default JobLevelSeeking;
