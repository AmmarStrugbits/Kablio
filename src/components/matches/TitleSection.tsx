/*
| Developed by Reskue
| Filename: TitleSection.tsx
| Author: eric@reskue.art
*/

"use client"

import { Typography } from '@mui/material';
import { styled } from '@mui/system';
import React from 'react'

/*
|--------------------------------------------------------------------------
| Contracts
|--------------------------------------------------------------------------
*/
export interface TitleSectionProps //extends buttonProps
{
    children?: React.ReactNode
}
/*
|--------------------------------------------------------------------------
| Styles
|--------------------------------------------------------------------------
*/
const StyledTitleSection = styled(Typography)(() => ({
    color: "black",
    fontFamily: "Roboto",
    fontSize: "1.25rem",
    fontWeight: "bold",
    marginBottom: "0.5rem",
    marginTop: "0.5rem",
}));
/*
|--------------------------------------------------------------------------
| Component
|--------------------------------------------------------------------------
*/
const TitleSection: React.FC<TitleSectionProps> = ({ children }) => {

    // Render
    //--------------------------------------------------------------------------
    return <StyledTitleSection >{children}</StyledTitleSection>;
}
export default TitleSection
