/*
| Developed by Reskue
| Filename: page.tsx
| Author: eric@reskue.art
*/

"use client"

import FailedVerification from '@/app/auth/verify/FailedVerification'
import SuccessVerification from '@/app/auth/verify/SuccessVerification'
import { api } from '@/services/axios/axios.interceptors'
import LoadingAnimation from '@/shared/components/LoadingAnimation'
import { setAuthTokenCookies } from '@/utils/cookies'
import { Box } from '@mui/system'
import { useSearchParams } from 'next/navigation'
import React, { useEffect, useState } from 'react'
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

/*
|--------------------------------------------------------------------------
| Component
|--------------------------------------------------------------------------
*/
const Page: React.FC = () => {
  const searchParams = useSearchParams();
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [userVerified, setUserVerified] = useState<boolean>(false);

  useEffect(() => {
    const getUserCredentials = async () => {
      const token = searchParams.get('token');
      const searchPreferences = window.localStorage.getItem('searchPreference');

      try {
        if (token && searchPreferences) {
          const AuthTokens = await api.get(`/auth/user/verify?token=${token}`);
          setAuthTokenCookies(AuthTokens);
          setUserVerified(true);
        };
      } catch (e) {
        setUserVerified(false);
      };
      setIsLoading(() => false);
    };

    if (isLoading && !userVerified) {
      getUserCredentials();
    }
  }, [userVerified]);




  // Render
  //--------------------------------------------------------------------------
  if (isLoading) {
    return (
      <LoadingAnimation />
    )
  }

  if (!isLoading) {
    return (
      <Box
        height='95.625vh'
      >
        {userVerified ? <SuccessVerification /> : <FailedVerification />}
      </Box>
    )
  }
}

export default Page;
