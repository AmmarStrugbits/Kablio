/*
| Developed by Reskue
| Filename: Values.tsx
| Author: eric@reskue.art
*/

"use client"

import { ValuesEnum } from '@/shared/enum/Values.enum';
import React, { useEffect, useState } from 'react'
import SelectionButtonContainer from '@/components/quiz/SelectionButtonContainer';
import { useFormContext } from 'react-hook-form';
import WordListInput from '@/components/shared/WordListInput';
import { Box, Button, styled } from '@mui/material';

/*
|--------------------------------------------------------------------------
| Contracts
|--------------------------------------------------------------------------
*/

const maxSelections: number = 3;

export interface ValuesProps //extends buttonProps
{
    // children?: React.ReactNode
}

interface ValueMapping {
    id: string;
    name: string;
    enum: ValuesEnum;
}

export function createValuesMappings(): ValueMapping[] {
    return [
        { id: '1', name: 'Diversity & Inclusion', enum: ValuesEnum.DIVERSITY_INCLUSION },
        { id: '2', name: 'Challenging work', enum: ValuesEnum.CHALLENGING_WORK },
        { id: '3', name: 'Purposeful work', enum: ValuesEnum.PURPOSEFUL_WORK },
        { id: '4', name: 'Growth & Advancement', enum: ValuesEnum.GROWTH_ADVANCEMENT },
        { id: '5', name: 'Wellbeing', enum: ValuesEnum.WELLBEING },
        { id: '6', name: 'Flexibility', enum: ValuesEnum.FLEXIBILITY },
        { id: '7', name: 'Money', enum: ValuesEnum.MONEY },
        { id: '8', name: 'Great colleagues', enum: ValuesEnum.GREAT_COLLEAGUES },
        { id: '9', name: 'Having fun', enum: ValuesEnum.HAVING_FUN },
        { id: '10', name: 'Great leadership', enum: ValuesEnum.GREAT_LEADERSHIP },
        { id: '11', name: 'Innovation', enum: ValuesEnum.INNOVATION },
        { id: '12', name: 'Great tech and tools', enum: ValuesEnum.GREAT_TECH_TOOLS },
        { id: '13', name: 'Location', enum: ValuesEnum.LOCATION },
    ];
}
// /*
// |--------------------------------------------------------------------------
// | Styles
// |--------------------------------------------------------------------------
// */
const ButtonStyled = styled(Button)(({ theme }) => ({
    textAlign: 'center', // Centrer le texte horizontalement
    display: 'flex', // Utiliser flexbox pour aligner le texte verticalement
    alignItems: 'center', // Centrer verticalement
    justifyContent: 'center', // Centrer horizontalement
    fontFamily: 'Roboto',
    fontSize: '16px',
    color: 'DarkGrey',
    fontWeight: 'normal',
    cursor: 'pointer',
    width: '75%',
    height: 'fit-content',
    '&:hover': {
        backgroundColor: 'transparent',
        color: 'DarkGrey',
        boxShadow: "0px 0px 8px rgba(0, 0, 0, 0.25)",
    },

    [theme.breakpoints.down('md')]: {
        marginBottom: '0.5rem',
        border: "1px solid rgba(0, 0, 0, 0.10)",

    },
}));


/*
|--------------------------------------------------------------------------
| Component
|--------------------------------------------------------------------------
*/
const Values = () => {
    const [selectedValues, setSelectedValues] = useState<string[]>([]);
    const { watch, setValue } = useFormContext()

    const valueMappings = createValuesMappings();
    const choices = valueMappings.map(mapping => mapping.name);
    const formSelectedValues = watch("values");

    useEffect(() => {
        if (formSelectedValues) {
            setSelectedValues(formSelectedValues);
        }
    }, [formSelectedValues])

    const handleSelectedChoice = (selectedChoice: string) => {
        setSelectedValues(prevSelected => {
            const isSelected = prevSelected.includes(selectedChoice);
            if (isSelected) {
                const updatedSelectedValues = prevSelected.filter(choice => choice !== selectedChoice);
                setValue("values", updatedSelectedValues, { shouldValidate: true });
                return updatedSelectedValues;
            } else if (prevSelected.length < maxSelections) {
                const updatedSelectedValues = [...prevSelected, selectedChoice];
                setValue("values", updatedSelectedValues, { shouldValidate: true });
                return updatedSelectedValues;
            }
            return prevSelected;
        });
    };

    // Render
    //--------------------------------------------------------------------------
    return (
        <Box
            sx={{
                width: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                gap: '1rem'
            }}
        >
            <ButtonStyled>
                Select max {maxSelections}
            </ButtonStyled>
            <SelectionButtonContainer
                choices={choices}
                selectedChoices={selectedValues}
                handleSelectedChoice={handleSelectedChoice}
            />
            <WordListInput message={'Anything else? Type it here.'} />
        </Box>
    );
};

export default Values;