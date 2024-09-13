"use client"
/*
| Developed by Reskue
| Filename: WhatToReadNext.tsx
| Author: eric@reskue.art
*/

import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { BlogEyes } from '@/assets/images/blog/BlogEyes'
import { Box, Typography, styled } from '@mui/material'
import Link from 'next/link'
import ArticleCard from '../ArticleCard/ArticleCard'
import { ArticleDataOverview } from '../Topics'
import { createClient } from '@/prismicio'
import * as prismic from "@prismicio/client"
//import { styled } from '@mui/material'

/*
|--------------------------------------------------------------------------
| Contracts
|--------------------------------------------------------------------------
*/
export interface WhatToReadNextProps //extends buttonProps
{
    currentUidArticle: string;
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
    const [articles, setArticles] = useState<ArticleDataOverview[]>([]);
    const client = createClient();

    useEffect(() => {
        const fetchData = async () => {
            const articlesByTag = await client.getAllByType('article', {
                limit: 3,
                filters: [
                    prismic.filter.not('my.article.uid', props.currentUidArticle)
                ]
            });
            const formattedArticles: ArticleDataOverview[] = articlesByTag.map((article) => ({
                uid: article.uid,
                title: article.data.article_title[0]?.text || '',
                imageUrl: article.data.article_main_image.url || null,
                tag: article.tags,
                authorName: article.data.article_informations[0]?.author_name || 'Unknown',
                authorAvatarUrl: article.data.article_informations[0]?.author_avatar.url || null,
                publicationDate: article.data.article_informations[0]?.publication_date || 'Unknown Date',
                rating: article.data.article_rating || null,
            }));
            setArticles(formattedArticles);
        };
        fetchData();
    }, []);

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
                {articles.map(article => (
                    <Link key={article.title} href={`/blog/${article.uid}`} passHref>
                        <ArticleCard articleData={article} />
                    </Link>
                ))}
            </ArticleCardContainerStyled>
        </WhatToReadNextBoxStyled>
    )
}

export default WhatToReadNext
