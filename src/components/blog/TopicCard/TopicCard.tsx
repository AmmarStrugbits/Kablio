'use client'

/*
| Developed by Reskue
| Filename: TopicCard.tsx
| Author: eric@reskue.art
*/

import { theme } from '@/MUI/Theme'
import { ArrowUpRight } from '@/assets/svgs/ArrowUpRight'
import { Topic } from '@/services/blog/blog.services'
import { Box, Typography, styled, useMediaQuery } from '@mui/material'
import Image from 'next/image'
import React from 'react'
/*
|--------------------------------------------------------------------------
| Contracts
|--------------------------------------------------------------------------
*/
export interface TopicCardProps {
  //extends buttonProps
  children?: React.ReactNode
  topic: Topic
  href: string
  onClick?: () => void
}
/*
|--------------------------------------------------------------------------
| Styles
|--------------------------------------------------------------------------
*/
const TopicCardBoxStyled = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '1rem',
  boxShadow: '0px 12px 16px -4px rgba(16, 24, 40, 0.08)',
  // width: '100%',
  minWidth: '470px',
  backgroundColor: 'white',
  [theme.breakpoints.down('lg')]: {
    minWidth: '360px',
  },
  [theme.breakpoints.down('md')]: {
    minWidth: '95vw',
  },
}))

const TopBoxStyled = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  width: '100%',
  [theme.breakpoints.down('md')]: {},
}))

const TitleStyled = styled(Typography)(({ theme }) => ({
  fontFamily: 'Anton',
  fontSize: '1.5rem',
  color: 'black',
  [theme.breakpoints.down('md')]: {},
}))

const BoxIcon = styled(Box)(({ theme }) => ({
  width: '1.5rem',
  [theme.breakpoints.down('md')]: {
    width: '1rem',
  },
}))

/*
|--------------------------------------------------------------------------
| Component
|--------------------------------------------------------------------------
*/
const TopicCard: React.FC<TopicCardProps> = (props: TopicCardProps) => {
  const matchesMobile = useMediaQuery(theme.breakpoints.down('md'))

  // Render
  //--------------------------------------------------------------------------
  return (
    <TopicCardBoxStyled onClick={props.onClick}>
      <TopBoxStyled>
        <Typography component="h3">
          <Typography
            sx={{ fontFamily: 'Anton', fontSize: '1.5rem', color: 'black' }}
            component="a"
            href={props.href}
            key={props.href}
          >
            {props.topic.title}
          </Typography>
        </Typography>
        <BoxIcon>
          <ArrowUpRight isMobile={matchesMobile} />
        </BoxIcon>
      </TopBoxStyled>
      <Image
        src={props.topic.image}
        alt={'Image topic'}
        layout="responsive"
        width={700}
        height={394}
      />
    </TopicCardBoxStyled>
  )
}

export default TopicCard
