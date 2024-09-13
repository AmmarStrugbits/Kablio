/*
| Developed by Reskue
| Filename: SelectionButton.tsx
| Author: eric@reskue.art
*/

import { Button, ButtonProps } from '@mui/material'
import React from 'react'
import { styled } from '@mui/material'

/*
|--------------------------------------------------------------------------
| Contracts
|--------------------------------------------------------------------------
*/
export interface SelectionButtonProps extends ButtonProps {
    children?: React.ReactNode
    isSelected?: boolean
}
/*
|--------------------------------------------------------------------------
| Styles
|--------------------------------------------------------------------------
*/

const SelectionButtonStyled = styled(Button, { shouldForwardProp: (prop) => prop !== 'isSelected' })<SelectionButtonProps>(
    ({ theme, isSelected }) => ({
        color: 'black',
        backgroundColor: isSelected ? "#00FBDF" : "white !important",
        padding: "0.625rem 2rem",
        // paddingLeft: "2rem",
        // paddingRight: "2rem",
        fontFamily: "Roboto",
        fontSize: "16px",
        fontWeight: isSelected ? 700 : 400,
        borderRadius: '0.625rem',
        border: '1px solid #D9D9D9',
        boxShadow: isSelected ? "0px 2px 2px rgba(0, 0, 0, 0.25)" : 'none',
        width: "min-content%",
        "&:hover": {
            backgroundColor: isSelected ? "#00FBDF" : "white !important",
            color: "black",
        },

        [theme.breakpoints.down('lg')]: {
            padding: "0.625rem 0.5rem",
        },
    }));


/*
|--------------------------------------------------------------------------
| Component
|--------------------------------------------------------------------------
*/
const SelectionButton: React.FC<SelectionButtonProps> = (props: SelectionButtonProps) => {
    const { children } = props;

    // Render
    //--------------------------------------------------------------------------
    return (
        <SelectionButtonStyled {...props}>
            {children}
        </SelectionButtonStyled>)
}

export default SelectionButton