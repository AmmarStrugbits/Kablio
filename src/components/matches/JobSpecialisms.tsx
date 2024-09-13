/*
| Developed by Reskue
| Filename: JobSpecialisms.tsx
| Author: eric@reskue.art
*/

"use client"

import { Typography } from '@mui/material';
import { styled } from '@mui/system';
import React from 'react'
//import { styled } from '@mui/material'

/*
|--------------------------------------------------------------------------
| Contracts
|--------------------------------------------------------------------------
*/
export interface JobSpecialismsProps //extends buttonProps
{
    specialisms: string[] | null,
    children?: React.ReactNode
}
/*
|--------------------------------------------------------------------------
| Styles
|--------------------------------------------------------------------------
*/
const TextTypographyStyled = styled(Typography)(({ theme }) => ({
    fontSize: '1.125rem',
    fontFamily: "Roboto",

    [theme.breakpoints.down('md')]: {
        fontSize: '1rem',
    },

}))

/*
|--------------------------------------------------------------------------
| Component
|--------------------------------------------------------------------------
*/
const JobSpecialisms: React.FC<JobSpecialismsProps> = (props: JobSpecialismsProps) => {
    // Transform the specialisms array into the desired string format
    const formattedSpecialisms = props.specialisms?.map(specialism => `${specialism}`)
        .join(', ');

    // Render
    //--------------------------------------------------------------------------
    return (
        <TextTypographyStyled>{formattedSpecialisms}</TextTypographyStyled>
    );
};

export default JobSpecialisms
