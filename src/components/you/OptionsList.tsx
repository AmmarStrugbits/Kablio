// /*
// | Developed by Reskue
// | Filename: OptionsList.tsx
// | Author: eric@reskue.art
// */

import { LogoCheckBox } from '@/assets/svgs/LogoCheckBox';
import { Button, Checkbox, FormControlLabel } from '@mui/material';
import { Box, styled } from '@mui/system';
import React from 'react'

// /*
// |--------------------------------------------------------------------------
// | Contracts
// |--------------------------------------------------------------------------
// */

/**
 * `OptionsListProps` defines the expected properties for the `OptionsList` component.
 * 
 * @param label JSX.Element[] - One or more JSX elements used to display the label above the options list.
 * @param options { id: string; name: string; }[] - An array of strings representing the available options that the user can select from.
 * @param selectedOptionsIds string[] - An array of identifiers (or names) of the options that are currently selected.
 * @param handleSelectedOption (option: string) => void - A function that is called when an option is selected or deselected.
 *        It takes the identifier (or name) of the concerned option as a parameter.
 * @param handleDeselectAll () => void - A function called when the user wishes to deselect all options.
 */

interface OptionsListProps {
    label: JSX.Element;
    options: { id: string; name: string; enum: string }[];
    selectedOptionsIds: string[];
    handleSelectedOption: (optionId: string) => void;
    handleDeselectAll: () => void;
}

// /*
// |--------------------------------------------------------------------------
// | Styles
// |--------------------------------------------------------------------------
// */
const FormControlLabelStyled = styled(FormControlLabel, {
    shouldForwardProp: (prop) => prop !== 'isChecked',
})<{ isChecked: boolean }>(({ isChecked }) => ({
    width: "100%",
    backgroundColor: isChecked ? '#00FBDF' : 'white',
    margin: "6px",
    borderRadius: "3px",
    boxShadow: isChecked ? "0px 2px 2px rgba(0, 0, 0, 0.25)" : 'none',
    '& .MuiTypography-root': {
        fontWeight: isChecked ? 'bold' : 'normal',
    },
    height: '42px'
}));

const ButtonStyled = styled(Button)(({ theme }) => ({
    fontFamily: 'Roboto',
    fontSize: '16px',
    color: 'DarkGrey',
    fontWeight: 'normal',
    cursor: 'pointer',
    width: '100%',
    height: 'fit-content',

    border: "1px solid rgba(0, 0, 0, 0.10)",
    '&:hover': {
        backgroundColor: 'transparent',
        color: 'DarkGrey',
        boxShadow: "0px 0px 8px rgba(0, 0, 0, 0.25)",
    },

    [theme.breakpoints.down('md')]: {
        fontSize: '14px',
        marginBottom: '0.5rem',
        border: "1px solid rgba(0, 0, 0, 0.10)",

    },
}));

const OptionsListBoxStyled = styled(Box)(() => ({
    display: "flex",
    flexDirection: "column",
    alignItems: 'center',
    width: "33rem",
    maxWidth: '90vw',
}));

const CheckboxStyled = styled(Checkbox)(() => ({
    '& .MuiSvgIcon-root': {
        width: '1.5rem',
        height: '1.5rem',
    },
}));

const OptionsList: React.FC<OptionsListProps> = ({ label, options, selectedOptionsIds, handleSelectedOption, handleDeselectAll }) => {
    return (
        <OptionsListBoxStyled>
            <ButtonStyled onClick={handleDeselectAll}>
                {label}
            </ButtonStyled>
            {options.map(option => (
                <FormControlLabelStyled
                    key={option.id}
                    control={
                        <CheckboxStyled
                            checked={selectedOptionsIds.includes(option.id)}
                            onChange={() => handleSelectedOption(option.id)}
                            checkedIcon={<LogoCheckBox />}
                        />
                    }
                    label={option.name}
                    isChecked={selectedOptionsIds.includes(option.id)}
                />
            ))}
        </OptionsListBoxStyled>
    );
};

export default OptionsList;