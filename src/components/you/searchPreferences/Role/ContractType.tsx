/*
| Developed by Reskue
| Filename: ContractType.tsx
| Author: eric@reskue.art
*/

import React from 'react';
import OptionsSelector from '../../OptionsSelector';
import { ContractType } from '@/shared/enum/ContractType.enum';
import { useFormContext } from 'react-hook-form';

/*
|--------------------------------------------------------------------------
| Contracts
|--------------------------------------------------------------------------
*/


export interface ContractTypeMapping {
    id: string;
    name: string;
    enum: ContractType;
}

export function createContractTypeMappings(): ContractTypeMapping[] {
    return [
        { id: '1', name: 'Permanent', enum: ContractType.PERMANENT },
        { id: '2', name: 'Contractor', enum: ContractType.CONTRACTOR },
        { id: '3', name: 'Fixed-Term', enum: ContractType.FIXED_TERM },
        { id: '4', name: 'Zero-hour', enum: ContractType.ZERO_HOUR },
    ];
}

/*
|--------------------------------------------------------------------------
| Component
|--------------------------------------------------------------------------
*/

const ContractTypes = () => {
    const { setValue } = useFormContext();

    const handleSetFormData = (dataTypeId: string, selectedIds: string[]) => {
        const mappings = createContractTypeMappings();
        const selectedEnums = selectedIds.map(id => {
            const mapping = mappings.find(mapping => mapping.id === id);
            return mapping ? mapping.enum : null;
        }).filter(option => option !== null);
        setValue("contractType", selectedEnums, { shouldValidate: true });
    };
    // Render
    //--------------------------------------------------------------------------
    return (
        <OptionsSelector
            createOptionsMappings={createContractTypeMappings}
            label={<span>Uncheck all</span>}
            setSelectedData={handleSetFormData}
            dataTypeId="contractType"
        />
    );
};

export default ContractTypes;
