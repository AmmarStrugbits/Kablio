"use client"

/*
| Developed by Reskue
| Filename: page.tsx
| Author: eric@reskue.art
*/

import { Box, styled } from '@mui/system'
import React from 'react'
import SkeletonLeftBorder from '@/assets/images/SkeletonLeftBorder.png'
import SkeletonRightBorder from '@/assets/images/SkeletonRightBorder.png'
import Image from 'next/image'
import DisclaimerInbox from '@/components/inbox/DisclaimerInbox'
import { withAuth } from '@/hoc/WithAuth'
//import { styled } from '@mui/material'

/*
|--------------------------------------------------------------------------
| Contracts
|--------------------------------------------------------------------------
*/

/*
|--------------------------------------------------------------------------
| Styles
|--------------------------------------------------------------------------
*/

const PageContainer = styled(Box)(({ theme }) => ({
  width: "100%",
  height: 'calc(100vh - 4.375rem)',
  overflow: "hidden",
  backgroundColor: '#F9F9F9',
  [theme.breakpoints.up('md')]: {
  },
}))

const MatchPageLayoutBoxstyled = styled(Box)(() => ({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  gap: '1rem',
  width: '100%'
}))


const ImageBorderBoxStyled = styled(Box)(({ theme }) => ({
  width: "15%",
  display: 'flex',
  overflow: 'hidden',

  [theme.breakpoints.down('lg')]: {
    display: 'none',
  }
}))


/*
|--------------------------------------------------------------------------
| Component
|--------------------------------------------------------------------------
*/
const Page: React.FC = () => {

  // Render
  //--------------------------------------------------------------------------
  return (
    <PageContainer>
      <MatchPageLayoutBoxstyled>
        <ImageBorderBoxStyled>
          <Image alt={'left border'} src={SkeletonLeftBorder} />
        </ImageBorderBoxStyled>
        <DisclaimerInbox />
        <ImageBorderBoxStyled sx={{ justifyContent: 'flex-end' }}>
          <Image alt={'Right border'} src={SkeletonRightBorder} />
        </ImageBorderBoxStyled>
      </MatchPageLayoutBoxstyled>
    </PageContainer>)
}

export default withAuth(Page)
