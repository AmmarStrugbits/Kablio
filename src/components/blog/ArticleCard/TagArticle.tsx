'use client'
/*
| Developed by Reskue
| Filename: TagArticle.tsx
| Author: eric@reskue.art
*/

import React from 'react'
import { Box, Typography, styled } from '@mui/material'

/*
|--------------------------------------------------------------------------
| Contracts
|--------------------------------------------------------------------------
*/
export interface TagArticleProps //extends buttonProps
{
    tag: string;
    backgroundColor: string;
    textColor: string;
}
/*
|--------------------------------------------------------------------------
| Styles
|--------------------------------------------------------------------------
*/
const TagArticleStyled = styled(Box, {
    shouldForwardProp: (prop) => prop !== 'backgroundColor' && prop !== 'textColor',
})<{ backgroundColor: string; textColor: string }>(({ theme, backgroundColor }) => ({
    backgroundColor: backgroundColor,
    borderRadius: '1rem',
    width: 'fit-content',
    padding: '0.2rem 0.5rem',
    display: 'flex',
    alignItems: 'center',
    [theme.breakpoints.down('md')]: {},
}));


const TypographyStyled = styled(Typography, {
    shouldForwardProp: (prop) => prop !== 'textColor',
})<{ textColor: string }>(({ theme, textColor }) => ({
    fontFamily: 'Inter',
    fontWeight: '600',
    fontSize: '0.875rem',
    color: textColor,
    padding: '0.2rem 0.4rem',
    borderRadius: '1rem',
    width: 'fit-content',
    [theme.breakpoints.down('md')]: {},
}));
/*
|--------------------------------------------------------------------------
| Component
|--------------------------------------------------------------------------
*/
const TagArticle: React.FC<TagArticleProps> = (props: TagArticleProps) => {

    // Render
    //--------------------------------------------------------------------------
    return (
        <TagArticleStyled backgroundColor={props.backgroundColor} textColor={props.textColor}>
            <TypographyStyled textColor={props.textColor}>
                {props.tag}
            </TypographyStyled>
        </TagArticleStyled>
    )
}

export default TagArticle
