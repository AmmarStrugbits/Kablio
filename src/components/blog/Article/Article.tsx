/*
| Developed by Reskue
| Filename: Article.tsx
| Author: eric@reskue.art
*/
import HeaderArticle from './HeaderArticle'
import { ArticleDataOverview } from '../Topics';
import { Box } from '@mui/material';
import Image from 'next/image';
import AuthorSpace from '../ArticleCard/AuthorSpace';
import DefaultArticleMainImage from '@/assets/images/blog/ImageArticle/ArticleImage.png'
import { AllDocumentTypes } from '../../../../prismicio-types';
import { components } from '@/slices';
import { SliceZone } from '@prismicio/react';
import WhatToReadNext from './WhatToReadNext';
import FooterArticle from './FooterArticle';
import { ArticleBoxStyled, AuthorBox, Divider, MainArticleBoxStyled, SubHeaderBoxStyled } from './ArticleStyles';
/*
|--------------------------------------------------------------------------
| Contracts
|--------------------------------------------------------------------------
*/
export interface ArticleProps //extends buttonProps
{
    articles: AllDocumentTypes
    tag: string
}
export interface ArticleData extends ArticleDataOverview {
    uid: string;
    // slices: SliceZone<ArticleDocumentDataSlicesSlice>
}
/*
|--------------------------------------------------------------------------
| Styles
|--------------------------------------------------------------------------
*/
/*
|--------------------------------------------------------------------------
| Component
|--------------------------------------------------------------------------
*/
const Article: React.FC<ArticleProps> = (props: ArticleProps) => {
    const { articles, tag } = props
    // Render
    //--------------------------------------------------------------------------
    return (
        <ArticleBoxStyled>
            <HeaderArticle article={articles} />
            <MainArticleBoxStyled>
                <SubHeaderBoxStyled>
                    {/* <Image
                        src={articles.data.article_main_image.url || DefaultArticleMainImage}
                        alt={''}
                        width={articles.data.article_main_image.dimensions?.width}
                        height={articles.data.article_main_image.dimensions?.height}
                        objectFit="cover"
                        layout="fixed" /> */}
                    <img
                        src={articles.data.article_main_image.url || DefaultArticleMainImage.src}
                        alt={''}
                        width={articles.data.article_main_image.dimensions?.width}
                        height={articles.data.article_main_image.dimensions?.height}
                        style={{
                            objectFit:'cover',
                        }}
                        />
                    <Divider></Divider>
                    <AuthorBox>
                        <AuthorSpace
                            publicationDate={articles.data.article_informations[0]?.publication_date || ''}
                            authorAvatar={articles.data.article_informations[0]?.author_avatar.url || null}
                            authorName={articles.data.article_informations[0]?.author_name || 'Guest'}
                        />
                    </AuthorBox>
                </SubHeaderBoxStyled>
                <Box
                    sx={{
                        width: '100%',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        padding: '1rem',
                        gap: '1rem',
                    }}
                >
                    <SliceZone
                        slices={articles.data.slices}
                        components={components}
                    />
                </Box>
                <FooterArticle articlesTags={articles.tags} />
            </MainArticleBoxStyled>
            <WhatToReadNext currentUidArticle={tag} />
        </ArticleBoxStyled >
    )
}
export default Article