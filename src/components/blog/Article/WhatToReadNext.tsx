"use client"
/*
| Developed by Reskue
| Filename: WhatToReadNext.tsx
| Author: eric@reskue.art
*/

import React from 'react'
import { BlogEyes } from '@/assets/images/blog/BlogEyes'
import { Box, Typography, styled } from '@mui/material'
import Link from 'next/link'
import ArticleCard from '../ArticleCard/ArticleCard'
import { ArticleDataOverview } from '../Topics'

/*
|--------------------------------------------------------------------------
| Contracts
|--------------------------------------------------------------------------
*/
export interface WhatToReadNextProps //extends buttonProps
{
    articlesTyTag: ArticleDataOverview[]
}
/*
|--------------------------------------------------------------------------
| Styles
|--------------------------------------------------------------------------
*/
const WhatToReadNextBoxStyled = styled(Box)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
    gap: '1rem',
    padding: '4rem 0rem',
    [theme.breakpoints.down('md')]: {
    },
}))
const ArticleCardContainerStyled = styled(Box)(() => ({
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    flexWrap: 'wrap',
    gap: '1rem',
    maxWidth: '1400px'
}))
/*
|--------------------------------------------------------------------------
| Component
|--------------------------------------------------------------------------
*/
const WhatToReadNext: React.FC<WhatToReadNextProps> = (props: WhatToReadNextProps) => {
    const { articlesTyTag } = props

    // Render
    //--------------------------------------------------------------------------
    return (
        <WhatToReadNextBoxStyled>
            <BlogEyes />
            <Typography
                sx={{
                    fontFamily: 'Roboto',
                    fontSize: '2.75rem',
                    fontWeight: '700',
                    textAlign: 'center'
                }}
            >What to read next</Typography>
            <ArticleCardContainerStyled>
                {articlesTyTag?.map(article => (
                    <Link key={article.title} href={`/blog/${article.uid}`} passHref >
                        <ArticleCard articleData={article} />
                    </Link>
                ))}
            </ArticleCardContainerStyled>
        </WhatToReadNextBoxStyled>
    )
}

export default WhatToReadNext
