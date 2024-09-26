'use client'

import Topics from '@/components/blog/Topics';
import Article from '@/components/blog/Article/Article';
import { Box } from '@mui/material';
import LoadingAnimation from '@/shared/components/LoadingAnimation';
import { AllDocumentTypes } from '../../../prismicio-types';

type PropsType = {
    topicExists: boolean
    articles: AllDocumentTypes
    topicArticles: ArticleDataOverview[]
    articlesByTag: ArticleDataOverview[]
    loading: boolean
    tag: string
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

const PageBoxStyle = {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100vw',
    minHeight: '30vh',
    backgroundColor: 'white',
    // [theme.breakpoints.down('md')]: {
    // },
}

const BlogPageHandler = ({
    topicExists,
    topicArticles,
    articlesByTag,
    articles,
    loading,
    tag
}: PropsType) => {

    if (loading) {
        return <LoadingAnimation />
    }

    return (
        <>
            <Box sx={PageBoxStyle}>

                {topicExists ?
                    (
                        <Topics topicArticles={topicArticles} tag={tag} />
                    ) :
                    (
                        <Article articlesByTag={articlesByTag} articles={articles} tag={tag} />
                    )}
            </Box>
        </>
    );
};

export default BlogPageHandler;