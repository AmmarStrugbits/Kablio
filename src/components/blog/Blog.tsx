'use client'

/*
| Developed by Reskue
| Filename: Blog.tsx
| Author: eric@reskue.art
*/


import TopicCard from '@/components/blog/TopicCard/TopicCard'
import React from 'react'

import { Box, Typography, styled, useMediaQuery } from '@mui/material'
import { theme } from '@/MUI/Theme'
import Link from 'next/link'
import HomepageLayout from '@/components/homepage/layout/layout'
import { Topic, topics } from '@/services/blog/blog.services'

/*
|--------------------------------------------------------------------------
| Contracts
|--------------------------------------------------------------------------
*/
interface BlogProps {
  //extends buttonProps
}

const chunk = (arr: Topic[], size: number) =>
  Array.from({ length: Math.ceil(arr.length / size) }, (v, i) =>
    arr.slice(i * size, i * size + size)
  )
/*
|--------------------------------------------------------------------------
| Styles
|--------------------------------------------------------------------------
*/
const PageStyled = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: 'white',
  gap: '2rem',
  padding: '1rem',
  [theme.breakpoints.down('md')]: {
    gap: '1rem',
  },
}))

const RowTopicCardBoxStyled = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap',
  gap: '2rem',
  [theme.breakpoints.down('md')]: {
    flexDirection: 'column',
    gap: '1rem',
  },
}))

const TitleBoxStyled = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '1rem',
}))

/*
|--------------------------------------------------------------------------
| Component
|--------------------------------------------------------------------------
*/
const Blog: React.FC<BlogProps> = () => {
  const matchesMobile = useMediaQuery(theme.breakpoints.down('md'))
  const topicChunks = chunk(topics, 3)

  // Render
  //--------------------------------------------------------------------------
  return (
    <PageStyled>
      <TitleBoxStyled>
        <Typography
          sx={{
            fontFamily: 'Anton',
            fontSize: '3rem',
            color: 'black',
            [theme.breakpoints.down('md')]: {
              fontSize: '2.25rem',
            },
          }}
          component={'h1'}
        >
          Topics
        </Typography>
        <Typography
          sx={{
            fontSize: '1.25rem',
            color: '#505662',
            textAlign: 'center',
            [theme.breakpoints.down('md')]: {
              fontSize: '1.125rem',
            },
          }}
          // {matchesMobile ? <br /> : null}
          component={'h2'}
        >
          Discover actually good career guidance, job-search tips, and whatever
          we find interesting.
          <br /> Written by humans for people working in construction, energy
          and engineering.
        </Typography>
      </TitleBoxStyled>

      {topicChunks.map((chunk, index) => (
        <RowTopicCardBoxStyled key={index}>
          {chunk.map((topic) => (
            <Link key={topic.tag} href={`/blog/${topic.tag}`} passHref>
              <TopicCard topic={topic} href={`/blog/${topic.tag}`} />
            </Link>
          ))}
        </RowTopicCardBoxStyled>
      ))}
    </PageStyled>
  )
}
export default Blog
