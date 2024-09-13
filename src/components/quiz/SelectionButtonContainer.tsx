/*
| Developed by Reskue
| Filename: SelectionButtonContainer.tsx
| Author: eric@reskue.art
*/

import React from 'react';
import { Box } from '@mui/material';
import SelectionButton from '@/components/quiz/SelectionButton';
import { styled } from '@mui/system';

/*
|--------------------------------------------------------------------------
| Contracts
|--------------------------------------------------------------------------
*/

/**
 * `SelectionButtonContainerProps` defines the expected properties for the `SelectionButtonContainer` component.
 * 
 * @param choices string[] - An array of strings representing the options that the user can select from.
 *        Each string in the array represents a unique choice available for selection.
 * @param selectedChoices string[] - An array of strings representing the options that are currently selected.
 *        Each string should match one of the `choices` provided. This array is used to mark certain buttons as selected.
 * @param handleSelectedChoice (choice: string) => void - A function that is called when a choice is selected by the user.
 *        It takes the selected choice (a string matching one of the `choices`) as a parameter.
 *        Implement this function to update the state of selected choices or perform other actions in response to a selection.
 */
interface SelectionButtonContainerProps {
    choices: string[];
    selectedChoices: string[];
    handleSelectedChoice: (choice: string) => void;
    maxSelections?: number;
}
/*
|--------------------------------------------------------------------------
| Styles
|--------------------------------------------------------------------------
*/

const SelectionButtonContainerStyled = styled(Box)(({ theme }) => ({
    display: "flex",

    flexWrap: "wrap",
    flexDirection: "row",

    justifyContent: 'center',

    gap: "1rem",

    paddingLeft: "1rem",
    paddingRight: "1rem",
    width: '50vw',

    [theme.breakpoints.down('lg')]: {
        width: '100vw',
        gap: "8px",
        paddingLeft: "0px",
        paddingRight: "0px",
    },
}))

/*
|--------------------------------------------------------------------------
| Component
|--------------------------------------------------------------------------
*/
const SelectionButtonContainer: React.FC<SelectionButtonContainerProps> = ({
    choices,
    selectedChoices,
    handleSelectedChoice,
}) => {
    return (
        <SelectionButtonContainerStyled>
            {choices.map((choice, key) => (
                <SelectionButton
                    key={key}
                    onClick={() => handleSelectedChoice(choice)}
                    isSelected={selectedChoices.includes(choice)}
                >
                    {choice}
                </SelectionButton>
            ))}
        </SelectionButtonContainerStyled>
    );
};


export default SelectionButtonContainer;
