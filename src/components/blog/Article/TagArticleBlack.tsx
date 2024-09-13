"use client"
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
    children?: React.ReactNode;
    tag: string;
}
/*
|--------------------------------------------------------------------------
| Styles
|--------------------------------------------------------------------------
*/
const TagArticleStyled = styled(Box)(({ theme }) => ({
    backgroundColor: 'black',
    borderRadius: '1rem',
    width: 'fit-content',
    padding: '0.2rem 0.5rem',
    [theme.breakpoints.down('md')]: {
    },
}))

const TypographyStyled = styled(Typography)(({ theme }) => ({
    backgroundColor: 'black',
    borderRadius: '1rem',
    width: 'fit-content',

    fontFamily: 'Inter',
    fontWeight: '500',
    fontSize: '0.875',
    color: 'white',
    [theme.breakpoints.down('md')]: {
    },
}))


/*
|--------------------------------------------------------------------------
| Component
|--------------------------------------------------------------------------
*/
const TagArticleBlack: React.FC<TagArticleProps> = (props: TagArticleProps) => {

    // Render
    //--------------------------------------------------------------------------
    return (
        <TagArticleStyled>
            <TypographyStyled>
                {props.tag}
            </TypographyStyled>
        </TagArticleStyled>
    )
}

export default TagArticleBlack
