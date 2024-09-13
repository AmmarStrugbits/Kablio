/*
| Developed by Reskue
| Filename: ExperienceLevel.tsx
| Author: eric@reskue.art
*/

import React from 'react';
import OptionsSelector from '../../OptionsSelector';
// import { createExperienceMappings } from '@/app/auth/signup/QuizContext';
import { useFormContext } from 'react-hook-form';
import { ExperienceLevel } from '@/shared/enum/ExperienceLevel.enum';

/*
|--------------------------------------------------------------------------
| Contracts
|--------------------------------------------------------------------------
*/

interface ExperienceMapping {
    id: string;
    name: string;
    enum: ExperienceLevel;
}

export function createExperienceMappings(): ExperienceMapping[] {
    return [
        { id: '1', name: 'Internships', enum: ExperienceLevel.INTERNSHIP },
        { id: '2', name: 'Apprenticeships / Entry Level', enum: ExperienceLevel.APPRENTICESHIP },
        { id: '3', name: 'Graduates / Entry-level', enum: ExperienceLevel.ENTRYLEVEL },
        { id: '4', name: 'Junior (1-3 years)', enum: ExperienceLevel.JUNIOR },
        { id: '5', name: 'Intermediate (4-7 years)', enum: ExperienceLevel.MIDLEVEL },
        { id: '6', name: 'Experienced (8-12 years)', enum: ExperienceLevel.SENIOR },
        { id: '7', name: 'Expert & Leadership (13+ years)', enum: ExperienceLevel.EXPERT }
    ];
}

/*
|--------------------------------------------------------------------------
| Component
|--------------------------------------------------------------------------
*/

const ExperienceLevelComponent = () => {
    const { setValue } = useFormContext();

    const handleSetFormData = (dataTypeId: string, selectedIds: string[]) => {
        const mappings = createExperienceMappings();
        const selectedEnums = selectedIds.map(id => {
            const mapping = mappings.find(mapping => mapping.id === id);
            return mapping ? mapping.enum : null;
        }).filter(option => option !== null);
        setValue("experienceLevel", selectedEnums, { shouldValidate: true });
    };

    // Render
    //--------------------------------------------------------------------------
    return (
        <OptionsSelector
            createOptionsMappings={createExperienceMappings}
            label={<span>Select max 2</span>}
            setSelectedData={handleSetFormData}
            dataTypeId="experienceLevel"
            maxSelections={2}
        />
    );
};

export default ExperienceLevelComponent;


