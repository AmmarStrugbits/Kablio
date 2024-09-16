"use client"

/*
| Developed by Reskue
| Filename: page.tsx
| Author: eric@reskue.art
*/

import FailedPasswordRecovery from '@/components/recover/FailedPasswordRecovery'
import RecoverPassword from '@/components/recover/RecoverPassword'
import LoadingAnimation from '@/shared/components/LoadingAnimation'
import { Box, styled } from '@mui/system'
import { useSearchParams } from 'next/navigation'
import React, { useEffect, useState } from 'react'
//import { styled } from '@mui/material'

/*
|--------------------------------------------------------------------------
| Contracts
|--------------------------------------------------------------------------
*/
//export interface PageProps //extends buttonProps
//{
//  children?: React.ReactNode
//}
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
const Page: React.FC = () => {
  const searchParams = useSearchParams();
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [recoveryToken, setRecoveryToken] = useState<string | null>(null);

  useEffect(() => {
    const getRecoveryToken = async () => {
      const token = searchParams.get('token');
        if (token) {
          setRecoveryToken(token);
        };
      setIsLoading(() => false);
    };
    getRecoveryToken();
  }, []);


  // Render
  //--------------------------------------------------------------------------
  if (isLoading) {
    return (
     <LoadingAnimation/>
    )
  }

  if (!isLoading) {
    return (
      <PageContainer>
      {recoveryToken ? <RecoverPassword token={recoveryToken}/> : <FailedPasswordRecovery/>}
      </PageContainer>
    )
  }
}

export default Page;
