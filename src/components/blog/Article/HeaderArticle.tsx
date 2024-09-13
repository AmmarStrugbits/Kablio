"use client"

/*
| Developed by Reskue
| Filename: HeaderArticle.tsx
| Author: eric@reskue.art
*/

import { Box, styled } from '@mui/material'
import React from 'react'
import { AllDocumentTypes } from '../../../../prismicio-types';
import { PrismicRichText } from '@prismicio/react';
import { components } from '@/slices/RichText';
import TagArticle from '../ArticleCard/TagArticle';

/*
|--------------------------------------------------------------------------
| Contracts
|--------------------------------------------------------------------------
*/
export interface HeaderArticleProps //extends buttonProps
{
    article: AllDocumentTypes;
}
/*
|--------------------------------------------------------------------------
| Styles
|--------------------------------------------------------------------------
*/
const HeaderArticleStyled = styled(Box)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '1rem',
    padding: '1rem',
    width: '100%',
    maxWidth: '1024px',
    [theme.breakpoints.down('md')]: {
    },
}))

// const ArticleTiltle = styled('h1')(({ theme }) => ({
//     fontFamily: 'Anton',
//     fontSize: '3rem',
//     textAlign: 'center',
//     [theme.breakpoints.down('md')]: {
//         fontSize: '2rem',
//     },
// }))

const ArticleSubtitle = styled('h4')(({ theme }) => ({
    fontFamily: 'Inter',
    fontSize: '1.25rem',
    textAlign: 'center',
    color: '#505662',
    fontWeight: '400',
    [theme.breakpoints.down('md')]: {
        fontSize: '1.125rem',
    },
}))

/*
|--------------------------------------------------------------------------
| Component
|--------------------------------------------------------------------------
*/
const HeaderArticle: React.FC<HeaderArticleProps> = (props: HeaderArticleProps) => {

    // Render
    //--------------------------------------------------------------------------
    return (
        <HeaderArticleStyled>
            <TagArticle tag={props.article.tags[0]} backgroundColor='black' textColor='white' />
            {/* <ArticleTiltle> */}
                <PrismicRichText field={props.article.data.article_title} components={components} />
            {/* </ArticleTiltle> */}
            <ArticleSubtitle>
                <PrismicRichText field={props.article.data.article_subtitle} components={components} />
            </ArticleSubtitle>
        </HeaderArticleStyled>
    )
}

export default HeaderArticle
