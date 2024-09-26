"use client"

/*
| Developed by Reskue
| Filename: page.tsx
| Author: eric@reskue.art
*/

import { theme } from '@/MUI/Theme'
import TopBarMobile from '@/components/you/TopBarMobile'
import AccountField from '@/components/you/account-details/AccountField'
import AccountSelect from '@/components/you/account-details/AccountSelect'
import DeletionDialog from '@/components/you/account-details/DeletionDialog'
import { withAuth } from '@/hoc/WithAuth'
import { useAuth } from '@/hooks/useAuth'
import { Button, Typography } from '@mui/material'
import { Box, styled, useMediaQuery } from '@mui/system'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'
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
  minHeight: '100vh',
  width: "100%",
  backgroundColor: '#F9F9F9',
  [theme.breakpoints.down('md')]: {
  },
}))

const MainContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: "column",
  alignItems: 'center',
  padding: '2rem',
  gap: "40px",

  [theme.breakpoints.down('md')]: {
    marginTop: "15px",
    padding: '10px',
    gap: "30px",
  },
}))

const FieldsContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: "column",
  alignItems: 'center',
  width: "100%",
  gap: "15px",

  [theme.breakpoints.down('md')]: {

  },

}))


const TitleStyled = styled(Typography)(({ theme }) => ({
  fontFamily: "Anton",
  fontSize: '1.875rem',

  [theme.breakpoints.down('md')]: {
    color: '#8A909C',
    fontSize: '1rem',
  }
}))


const LogoutButton = styled(Button)(() => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  border: "2px solid #D9D9D9",
  borderRadius: '0px',
  color: "#8A909C",
  padding: "15px 20px",
  fontSize: '18px',
  "&:hover": {
    backgroundColor: "black",
    border: "2px solid black",
    color: 'white'
  }
}))

const DeleteButton = styled(Button)(() => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  border: "none",
  borderRadius: '0px',
  color: "#8A909C",
  padding: "15px 20px",
  fontSize: '18px',
  "&:hover": {
    backgroundColor: "transparent",
    border: "none",
    color: "#8A909C",
  }
}))

/*
|--------------------------------------------------------------------------
| Component
|--------------------------------------------------------------------------
*/
const Page: React.FC = () => {
  const matchesMobile = useMediaQuery(theme.breakpoints.down('md'));
  const { logout } = useAuth();
  const router = useRouter();

  const [deletionOpen, setDeletionOpen] = useState(false)

  const handleLogout = () => {
    logout();
    router.push('/');
  }

  // Render
  //--------------------------------------------------------------------------

  return (<PageContainer>
    {matchesMobile ? <TopBarMobile title={'Account Details'} /> : null}
    <MainContainer>
      {matchesMobile ? null : <TitleStyled>Account Details</TitleStyled>}
      <FieldsContainer>
        <AccountField label="First Name" fieldName='firstName'></AccountField>
        <AccountField label="Last Name" fieldName='lastName'></AccountField>
        <AccountField label="Email" fieldName='email'></AccountField>
        <AccountSelect label="Country" fieldName='countryCode'></AccountSelect>
        <AccountField label="Linkedin URL" fieldName='linkedin'></AccountField>
        <LogoutButton onClick={handleLogout}>Log out</LogoutButton>
        <DeleteButton onClick={() => setDeletionOpen(true)}>delete your account</DeleteButton>
        <DeletionDialog
          open={deletionOpen}
          onClose={() => setDeletionOpen(false)} />
      </FieldsContainer>
    </MainContainer>
  </PageContainer>)
}

export default withAuth(Page)
