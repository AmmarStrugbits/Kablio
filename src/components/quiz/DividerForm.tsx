"use client"

/*
| Developed by Reskue
| Filename: DividerForm.tsx
| Author: eric@reskue.art
*/

import React from 'react'
import { Divider, styled } from '@mui/material';


/*
|--------------------------------------------------------------------------
| Contracts
|--------------------------------------------------------------------------
*/
export interface DividerFormProps //extends buttonProps
{
    children?: React.ReactNode
}
/*
|--------------------------------------------------------------------------
| Styles
|--------------------------------------------------------------------------
*/

const DividerStyled = styled(Divider)({
    display: 'flex',
    alignItems: 'center',
    textTransform: 'uppercase',
    width: '100%',
    '&:before, &:after': {
        content: '""',
        flex: 1,
    },
    '&:before': {
        marginRight: '10px',
    },
    '&:after': {
        marginLeft: '10px',
    },
    '&.MuiDivider-root': {
        border: 'none',
    }
})

/*
|--------------------------------------------------------------------------
| Component
|--------------------------------------------------------------------------
*/
const DividerForm: React.FC<DividerFormProps> = ({ children }) => (
    <div style={{ display: 'flex', alignItems: 'center', width: '100%' }}>
        <DividerStyled />
        <span >{children}</span>
        <DividerStyled />
    </div>
);


export default DividerForm;