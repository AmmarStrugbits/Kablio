import { createClient } from '@/prismicio'

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
    const articlesByTag = await client.getAllByTag(params.item);
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
    try {
        const articleByUID = await client.getByUID('article', params.item);
        return articleByUID;
    } catch (error) {
        console.log('Something went wrong');
        return null;
    }
};