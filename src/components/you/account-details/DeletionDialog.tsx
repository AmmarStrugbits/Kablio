/*
| Developed by Reskue
| Filename: DeletionDialog.tsx
| Author: eric@reskue.art
*/

"use client"

import { Button, Dialog, DialogProps, Typography } from '@mui/material'
import { Box, styled, useMediaQuery } from '@mui/system'
import React from 'react'
import { theme } from '@/MUI/Theme'
import { useRouter } from 'next/navigation'
import { useAuth } from '@/hooks/useAuth'
import { apiAuth } from '@/services/axios/axios.interceptors'

//import { styled } from '@mui/material'

/*
|--------------------------------------------------------------------------
| Contracts
|--------------------------------------------------------------------------
*/
export interface DeletionDialogProps extends DialogProps {
  onClose: () => void
}
/*
|--------------------------------------------------------------------------
| Styles
|--------------------------------------------------------------------------
*/

const MainContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-evenly',
  alignItems: 'center',
  width: '500px',
  height: "250px",
  padding: '20px',
  backgroundColor: "white",
  gap: 10,

  [theme.breakpoints.down('sm')]: {
    width: '100%',
    padding: "10px"
  }
}))


const Header = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  width: "100%",

  [theme.breakpoints.down('sm')]: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  }
}))


const ActionButtonSection = styled(Box)(({ theme }) => ({
  display: 'flex',
  width: '100%',
  justifyContent: 'space-between',
  gap: 5,

  [theme.breakpoints.down('sm')]: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  }
}))

const ConfirmButton = styled(Button)(() => ({
  border: '1px solid #D9D9D9',
  backgroundColor: '#F9F9F9',
  fontFamily: "roboto",
  fontSize: '18px',
  fontWeight: '400',
  color: '#505662',
  borderRadius: '10px',
  width: "100%",
  "&:hover": {
    backgroundColor: "black",
    color: "white",
  },
  "&:disabled": {
    opacity: 0.4,
  },
}))

const CancelButton = styled(Button)(() => ({
  color: 'black',
  background: "linear-gradient(180deg, #00FBDF 28.18%, rgba(0, 251, 223, 0.74) 62.22%, rgba(1, 186, 248, 0.74) 100%)",
  border: "none",
  fontWeight: "400",
  width: "100%",
  padding: "1rem",
  fontFamily: "Anton",
  fontSize: "18px",
  borderRadius: '0.625rem',
  "&:hover": {
    backgroundColor: "black",
    color: "white",
  },
  "&:disabled": {
    opacity: 0.4,
  },
}))

/*
|--------------------------------------------------------------------------
| Component
|--------------------------------------------------------------------------
*/
const DeletionDialog: React.FC<DeletionDialogProps> = (props: DeletionDialogProps) => {
  const matchesMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const router = useRouter();
  const { logout } = useAuth();


  const { onClose } = props;

  const handleDelete = async () => {
    await apiAuth.delete('/user');
    logout()
    router.push('/');

  }

  // Render
  //--------------------------------------------------------------------------
  return (<Dialog
    {...props}
    PaperProps={{
      style: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '600px',
        height: matchesMobile ? '350px' : "220px",
      },
    }}
  >
    <MainContainer>
      <Header>
        <Typography fontFamily="Roboto" fontSize="18px" fontWeight="bold" color='red'>
          ⚠️Are you sure you want to delete your account ?⚠️
        </Typography>
      </Header>
      <ActionButtonSection>

        <ConfirmButton
          onClick={handleDelete}
        >
          Yes, I want to delete
        </ConfirmButton>
        <CancelButton
          onClick={onClose}
        >
          Cancel
        </CancelButton>
      </ActionButtonSection>
    </MainContainer>
  </Dialog >)
}

export default DeletionDialog
