import { createClient } from '@/prismicio'
import * as prismic from "@prismicio/client"
import { AllDocumentTypes } from '../../../../prismicio-types';

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

type Params = {
    item: string
}

const client = createClient();
export const getArticles = async (params: Params) => {
    const { item } = params
    const articlesByTag = await client.getAllByTag(item);
    const formattedArticles: ArticleDataOverview[] = articlesByTag.map((article) => ({
        uid: article.uid,
        title: article.data.article_title[0]?.text || '',
        imageUrl: article.data.article_main_image.url || null,
        tag: article.tags,
        authorName: article.data.article_informations[0]?.author_name || 'Unknown',
        authorAvatarUrl: article.data.article_informations[0]?.author_avatar.url || null,
        publicationDate: article.data.article_informations[0]?.publication_date || 'Unknown Date',
        rating: article.data.article_rating,
    }));
    return formattedArticles;
};


export const getArticlesByUid = async (params: Params) => {
    const { item } = params
    try {
        const articleByUID: AllDocumentTypes = await client.getByUID('article', item);
        return articleByUID;
    } catch (error) {
        console.log('Something went wrong');
        return null;
    }
};

export const getAllArticlesByTagType = async (params: Params) => {
    const { item } = params
    const articlesByTag = await client.getAllByType('article', {
        limit: 3,
        filters: [
            prismic.filter.not('my.article.uid', item)
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
    return formattedArticles
};