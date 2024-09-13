/*
| Developed by Reskue
| Filename: companySize.tsx
| Author: eric@reskue.art
*/

import React from 'react';
import OptionsSelector from '../../OptionsSelector';
import { useFormContext } from 'react-hook-form';
import { CompanySize } from '@/shared/enum/CompanySize.enum';

/*
|--------------------------------------------------------------------------
| Company Size
|--------------------------------------------------------------------------
*/


export interface CompanySizeMapping {
    id: string;
    name: string;
    enum: CompanySize;
}

export function createCompanySizeMappings(): CompanySizeMapping[] {
    return [
        { id: '1', name: 'Small', enum: CompanySize.SMALL },
        { id: '2', name: 'Medium', enum: CompanySize.MEDIUM },
        { id: '3', name: 'Large', enum: CompanySize.LARGE },
    ];
}

/*
|--------------------------------------------------------------------------
| Component
|--------------------------------------------------------------------------
*/

const CompanySizes = () => {
    const { setValue } = useFormContext();

    const handleSetFormData = (dataTypeId: string, selectedIds: string[]) => {
        const mappings = createCompanySizeMappings();
        const selectedEnums = selectedIds.map(id => {
            const mapping = mappings.find(mapping => mapping.id === id);
            return mapping ? mapping.enum : null;
        }).filter(option => option !== null);
        setValue("companySize", selectedEnums, { shouldValidate: true });
    };
    // Render
    //--------------------------------------------------------------------------
    return (
        <OptionsSelector
            createOptionsMappings={createCompanySizeMappings}
            label={<span>Uncheck all</span>}
            setSelectedData={handleSetFormData}
            dataTypeId="companySize"
        />
    );
};

export default CompanySizes;
