'use client'
/*
| Developed by Reskue
| Filename: Topics.tsx
| Author: eric@reskue.art
*/
import React from 'react'
import { Box, Typography, styled } from '@mui/material'
import ArticleCard from './ArticleCard/ArticleCard';
import { topics } from '@/services/blog/blog.services';
import Link from 'next/link';

/*
|--------------------------------------------------------------------------
| Contracts
|--------------------------------------------------------------------------
*/
export interface TopicsProps //extends buttonProps
{
    tag: string;
    onArticleSelect?: (uid: string) => void;
    topicArticles: ArticleDataOverview[]
}

export interface ArticleDataOverview {
    uid: string;
    title: string | undefined;
    imageUrl: string | null | undefined;
    tag: string[];
    authorName: string | undefined;
    authorAvatarUrl: string | null | undefined;
    publicationDate: string | undefined;
    rating: string | null;
}

/*
|--------------------------------------------------------------------------
| Styles
|--------------------------------------------------------------------------
*/
const TopicsBoxStyled = styled(Box)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    // justifyContent: 'center',
    maxWidth: '1280px',
    padding: '1rem 0rem',
    gap: '2rem',
    [theme.breakpoints.down('lg')]: {

    },
    [theme.breakpoints.down('md')]: {

    },
}))



const BreadcrumbBoxStyled = styled(Box)(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    gap: "0.5rem",
    fontFamily: 'Inter',
    fontSize: '0.75rem',
    fontWeight: '500',
}))

const TitleBoxStyled = styled(Box)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '1rem',
}))

// Styling for the different parts of the title
const BlogTitle = styled(Typography)(({ theme }) => ({
    color: '#8A909C',
    textDecoration: 'underline',
    textUnderlineOffset: '3px',
    [theme.breakpoints.down('md')]: {
    },
}));

const Separator = styled(Typography)(({ theme }) => ({
    color: '#8A909C',
    [theme.breakpoints.down('md')]: {
    },
}));

const TopicTitle = styled(Typography)(({ theme }) => ({
    color: '#505662',
    textDecoration: 'underline',
    textUnderlineOffset: '3px',
    [theme.breakpoints.down('md')]: {
    },
}));


const TopicTypographyStyled = styled('h1')(({ theme }) => ({
    fontFamily: 'Anton',
    fontSize: '3rem',
    color: 'black',
    textAlign: 'center',
    [theme.breakpoints.down('md')]: {
        fontSize: '2.25rem',
        padding: '0rem 0.5rem',
    },
}));

const ArticleCardContainerStyled = styled(Box)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    flexWrap: 'wrap',
    gap: '1rem',
}))

/*
|--------------------------------------------------------------------------
| Component
|--------------------------------------------------------------------------
*/
const Topics: React.FC<TopicsProps> = (props: TopicsProps) => {
    const { topicArticles, tag } = props

    return (
        <TopicsBoxStyled>
            <TitleBoxStyled>
                <BreadcrumbBoxStyled>
                    <Link href="/blog" passHref>
                        <BlogTitle>Blog</BlogTitle>
                    </Link>
                    <Separator>/</Separator>
                    <TopicTitle>{topics.find(t => t.tag === tag)?.title}</TopicTitle>
                </BreadcrumbBoxStyled>
                <TopicTypographyStyled
                >
                    {topics.find(t => t.tag === tag)?.title}
                </TopicTypographyStyled>
            </TitleBoxStyled>
            <ArticleCardContainerStyled>
                {topicArticles
                    .sort((a, b) => {
                        const ratingA = parseInt(a.rating || '0', 10);
                        const ratingB = parseInt(b.rating || '0', 10);
                        return ratingB - ratingA;
                    }).map((article: any) => (
                        <Box key={article.uid} onClick={() => { }}
                            sx={{
                                cursor: 'pointer',
                                display: 'flex',
                                justifyContent: 'center',
                                boxShadow: '0px 12px 16px -4px rgba(16, 24, 40, 0.18)',
                            }}>
                            <Link key={article.uid} href={`/blog/${article.uid}`} passHref suppressHydrationWarning>
                                <ArticleCard articleData={article} />
                            </Link>
                        </Box>
                    ))}
            </ArticleCardContainerStyled>
        </TopicsBoxStyled>
    );
};


export default Topics
