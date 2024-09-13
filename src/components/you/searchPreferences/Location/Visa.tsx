/*
| Developed by Reskue
| Filename: Visa.tsx
| Author: eric@reskue.art
*/

import React from 'react';
import { VisaOptions } from '@/shared/enum/Visa.enum';
import OptionsSelector from '../../OptionsSelector';
import { useFormContext } from 'react-hook-form';
/*
|--------------------------------------------------------------------------
| Contracts
|--------------------------------------------------------------------------
*/

export interface VisaMapping {
    id: string;
    name: string;
    enum: VisaOptions;
}

export function createVisaMappings(): VisaMapping[] {
    return [
        { id: '1', name: 'Yes', enum: VisaOptions.YES },
        { id: '2', name: 'For some of chosen locations', enum: VisaOptions.ONLY_FOR_SOME },
        { id: '3', name: "I don't need a visa", enum: VisaOptions.NO },
    ];
}


/*
|--------------------------------------------------------------------------
| Styles
|--------------------------------------------------------------------------
*/


/*
|--------------------------------------------------------------------------
| Component
|--------------------------------------------------------------------------
*/

const Visa = () => {
    const { setValue } = useFormContext();

    const handleSetFormData = (dataTypeId: string, selectedIds: string[]) => {
        const mappings = createVisaMappings();
        const selectedEnums = selectedIds.map(id => {
            const mapping = mappings.find(mapping => mapping.id === id);
            return mapping ? mapping.enum : null;
        }).filter(option => option !== null);
        setValue("visa", selectedEnums, { shouldValidate: true });
    };

    // Render
    //--------------------------------------------------------------------------
    return (
        <OptionsSelector
            createOptionsMappings={createVisaMappings}
            label={<span>Uncheck all</span>}
            setSelectedData={handleSetFormData}
            dataTypeId="visa"
        />
    );
};

export default Visa;
