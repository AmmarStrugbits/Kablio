'use client'
/*
| Developed by Reskue
| Filename: ArticleCard.tsx
| Author: eric@reskue.art
*/
import { Box, Typography, styled, useMediaQuery } from '@mui/material'
import Image from 'next/image'
import React from 'react'
import { ArticleDataOverview } from '../Topics'
import DefaultArticleCard from '@/assets/images/blog/DefaultArticleCard.png'
import { ArrowUpRight } from '@/assets/svgs/ArrowUpRight'
import { theme } from '@/MUI/Theme'
import TagArticle from './TagArticle'
import AuthorSpace from './AuthorSpace'
import Link from 'next/link'
/*
|--------------------------------------------------------------------------
| Contracts
|--------------------------------------------------------------------------
*/
export interface ArticleCardProps {
  //extends buttonProps
  articleData: ArticleDataOverview
}
/*
|--------------------------------------------------------------------------
| Styles
|--------------------------------------------------------------------------
*/
const TopicCardBoxStyled = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  padding: '1rem 1.5rem',
  width: '384px',
  height: '100%',
  gap: '1rem',
  [theme.breakpoints.down('lg')]: {},
  [theme.breakpoints.down('md')]: {
    // width: '95%',
  },
  [theme.breakpoints.down(450)]: {
    // width: '95%',
  },
  backgroundColor: 'white',
}))
const TitleBoxStyled = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'flex-start',
  width: '100%',
  gap: '1rem',
  [theme.breakpoints.down('lg')]: {},
  [theme.breakpoints.down('md')]: {},
}))

// const TruncatedTypography = styled(Typography)(({ theme }) => ({
//   fontFamily: 'Roboto',
//   fontSize: '1.375rem',
//   fontWeight: '600',
//   overflow: 'hidden',
//   textOverflow: 'ellipsis',
//   display: '-webkit-box',
//   WebkitLineClamp: 4, // Limite le nombre de lignes à afficher
//   WebkitBoxOrient: 'vertical',
// }))

const BoxIcon = styled(Box)(({ theme }) => ({
  display: 'flex',
  paddingTop: '0.2rem',
  [theme.breakpoints.down('md')]: {},
}))
const TagsBoxStyled = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap',
  gap: '0.5rem',
  [theme.breakpoints.down('md')]: {},
}))
const ImageContainer = styled(Box)({
  width: 'fit-content',
  alignSelf: 'center',
  textAlign: 'center', // Centrer horizontalement l'image à l'intérieur de son conteneur
})

const AnchorTagStyled = styled(Link)({
  fontFamily: 'Roboto',
  fontSize: '1.375rem',
  fontWeight: '600',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  display: '-webkit-box',
  WebkitLineClamp: 4, // Limite le nombre de lignes à afficher
  WebkitBoxOrient: 'vertical',
})
/*
|--------------------------------------------------------------------------
| Component
|--------------------------------------------------------------------------
*/
const ArticleCard: React.FC<ArticleCardProps> = (props: ArticleCardProps) => {
  const matchesMobile = useMediaQuery(theme.breakpoints.down('md'))
  // Render
  //--------------------------------------------------------------------------
  return (
    <TopicCardBoxStyled>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: '1rem',
        }}
      >
        <ImageContainer>
          <Image
            src={props.articleData?.imageUrl || DefaultArticleCard}
            alt={'Main image article'}
            width={336}
            height={197}
            loading={'eager'}
          />

        </ImageContainer>
        <TitleBoxStyled>
          {/* Changed structure to add link */}
          <Typography component="h3">
            <AnchorTagStyled
              href={`/blog/${props.articleData.uid}`}
              key={props.articleData.uid}
              suppressHydrationWarning
            >
              {props.articleData.title}
            </AnchorTagStyled>
            {/* Previous code */}
            {/* <TruncatedTypography>
                {props.articleData.title}
              </TruncatedTypography> */}
          </Typography>
          <BoxIcon>
            <ArrowUpRight isMobile={matchesMobile} isArticleCard={true} />
          </BoxIcon>
        </TitleBoxStyled>
      </Box>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: '1rem',
        }}
      >
        <TagsBoxStyled>
          {props.articleData.tag.map((tag, index) => (
            <TagArticle
              key={index}
              tag={tag}
              backgroundColor="#F9F9F9"
              textColor="#8A909C"
            />
          ))}
        </TagsBoxStyled>
        <AuthorSpace
          publicationDate={props.articleData.publicationDate || ''}
          authorAvatar={props.articleData.authorAvatarUrl}
          authorName={props.articleData.authorName || 'Guest'}
        />
      </Box>
    </TopicCardBoxStyled>
  )
}
export default ArticleCard