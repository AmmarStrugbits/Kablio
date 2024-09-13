/*
| Developed by Reskue
| Filename: page.tsx
| Author: eric@reskue.art
*/
'use client'
import { Box } from '@mui/material'
import React, { useState } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import SubmissionSuccess from '@/components/preRegisterForm/SubmissionSuccess'
import PreReleaseEmployerForm from '@/components/preRegisterForm/PreReleaseEmployerForm'
import { styled } from '@mui/system'
import { PreRegisterEmployerFormData } from '@/shared/interfaces/preRegister.interface'
import { registerEmployer } from '@/services/pre-register/PreRegisterEmployer'
import Script from 'next/script'
/*
|--------------------------------------------------------------------------
| Contracts
|--------------------------------------------------------------------------
*/
export interface pageProps {
  //extends buttonProps
  children?: React.ReactNode
}
/*
|--------------------------------------------------------------------------
| Styles
|--------------------------------------------------------------------------
*/
const StyledBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  height: 'auto',
  width: '100vw',
  marginTop: '2rem',
  marginBottom: '2rem',
  [theme.breakpoints.down('md')]: {
    paddingLeft: '0.8rem',
    paddingRight: '0.8rem',
  },
}))
/*
|--------------------------------------------------------------------------
| Component
|--------------------------------------------------------------------------
*/
const Page = () => {
  const methods = useForm()
  const [isSubmitted, setIsSubmitted] = useState(false)
  const addSchemaJsonLd = () => {
    return {
      __html: JSON.stringify({
        '@context': 'https://schema.org/',
        '@type': 'BreadcrumbList',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Home',
            item: 'https://www.kablio.com/',
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: 'Pre-register',
            item: 'https://www.kablio.com/pre-register/employer-recruiter',
          },
        ],
      }),
    }
  }
  const onSubmit = async (data: PreRegisterEmployerFormData) => {
    try {
      const success = await registerEmployer(data)
      if (success) {
        setIsSubmitted(true)
      } else {
        throw new Error('Registration failed')
      }
    } catch (error) {
      console.error('Registration failed:', error)
    }
  }
  // Render
  //--------------------------------------------------------------------------
  return (
    <>
      <link
        rel="canonical"
        href="https://www.kablio.com/pre-register/employer-recruiter"
      />
      <Script
        id="pre-register-employer-recruiter-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={addSchemaJsonLd()}
        key="item-jsonld"
      />
      <StyledBox>
        {isSubmitted ? (
          <SubmissionSuccess />
        ) : (
          <FormProvider {...methods}>
            <PreReleaseEmployerForm
              title="Pre-register"
              subtitle="No spam. We'll reach out when we're ready."
              onSubmit={onSubmit}
            />
          </FormProvider>
        )}
      </StyledBox>
    </>
  )
}
export default Page