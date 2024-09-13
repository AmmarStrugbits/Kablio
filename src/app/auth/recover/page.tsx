/*
| Developed by Reskue
| Filename: page.tsx
| Author: eric@reskue.art
*/

"use client"

import SendRecoveryEmail from '@/components/recover/SendRecoveryEmail'
import { Box, styled } from '@mui/system'
import React from 'react'
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
  display: 'flex',
  justifyContent: 'center',
  width: "100%",
  height: 'calc(100vh - 4.375rem)',
  overflow: "hidden",
  backgroundColor: '#F9F9F9',
  [theme.breakpoints.up('md')]: {
  },
}))


/*
|--------------------------------------------------------------------------
| Component
|--------------------------------------------------------------------------
*/
const page: React.FC = () => {

  // Render
  //--------------------------------------------------------------------------
  return (
    <PageContainer>
      <SendRecoveryEmail />
    </PageContainer>
  )
}

export default page
