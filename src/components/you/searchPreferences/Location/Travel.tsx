"use client"

/*
| Developed by Reskue
| Filename: Travel.tsx
| Author: eric@reskue.art
*/

import { TravelEnum } from '@/shared/enum/Travel.enum';
import React from 'react'
import OptionsSelector from '../../OptionsSelector';
import { useFormContext } from 'react-hook-form';

/*
|--------------------------------------------------------------------------
| Contracts
|--------------------------------------------------------------------------
*/
export interface TravelProps //extends buttonProps
{
    children?: React.ReactNode
}


export interface TravelMapping {
    id: string;
    name: string;
    enum: TravelEnum;
}

export function createTravelMappings(): TravelMapping[] {
    return [
        { id: '1', name: '0-25%', enum: TravelEnum.TWENTY_FIVE_PERCENT },
        { id: '2', name: '26%-50%', enum: TravelEnum.FIFTY_PERCENT },
        { id: '3', name: '51%-75%', enum: TravelEnum.SEVENTY_FIVE_PERCENT },
        { id: '4', name: '76%-100%', enum: TravelEnum.ONE_HUNDRED_PERCENT },
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
const Travel: React.FC<TravelProps> = () => {
    const { setValue } = useFormContext();

    const handleSetFormData = (dataTypeId: string, selectedIds: string[]) => {
        const mappings = createTravelMappings();
        const selectedEnums = selectedIds.map(id => {
            const mapping = mappings.find(mapping => mapping.id === id);
            return mapping ? mapping.enum : null;
        }).filter(option => option !== null);
        setValue("travel", selectedEnums, { shouldValidate: true });
    };
    // Render
    //--------------------------------------------------------------------------
    return (
        <OptionsSelector
            createOptionsMappings={createTravelMappings}
            label={<span>Select 1 max</span>}
            setSelectedData={handleSetFormData}
            dataTypeId="travel"
            maxSelections={1}
        />
    )
}

export default Travel
