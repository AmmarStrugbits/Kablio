"use client"

/*
| Developed by Reskue
| Filename: SubmissionSuccess.tsx
| Author: eric@reskue.art
*/

import { Box, Typography, useMediaQuery } from '@mui/material'
import Image from 'next/image'
import React from 'react'
import iconInstagram from '@/assets/images/iconInstagram.png'
import iconLinkedin from '@/assets/images/iconLinkedin.png'
import { styled } from '@mui/system'
import { theme } from '@/MUI/Theme'
import Link from 'next/link'

/*
|--------------------------------------------------------------------------
| Contracts
|--------------------------------------------------------------------------
*/
export interface SubmissionSuccessProps //extends buttonProps
{
}
/*
|--------------------------------------------------------------------------
| Styles
|--------------------------------------------------------------------------
*/

const BoxStyled = styled(Box)(({ theme }) => ({

  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  gap: "1.5rem",
  height: "30rem",
  width: "60rem",
  borderRadius: "1.25rem",
  backgroundColor: "#9cfef3",

  [theme.breakpoints.down('md')]: {
    margin: '2rem',
    height: "23rem",
  },
}))
const TitlesBoxStyled = styled(Box)(({ theme }) => ({

  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  gap: "1rem",
  height: "",
  width: "100%",
  padding: "2rem 0rem 2rem 0rem",
  [theme.breakpoints.down('md')]: {

  },

}))

const TitleTypographystyled = styled(Typography)(() => ({

  fontFamily: "Anton",
  lineHeight: "2.5rem",
  fontSize: "2.5rem",
  textTransform: "uppercase",
}))

const SubtitleTypographystyled = styled(Typography)(() => ({

  fontFamily: "Roboto",
  fontSize: "1.25rem",
  textAlign: "center",
  color: "#505662",
  fontStyle: "normal",
  fontWeight: 400,
  lineHeight: "20px",
}))
const ImageBoxStyled = styled(Box)(() => ({

  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
  gap: "1rem",
}))

/*
|--------------------------------------------------------------------------
| Component
|--------------------------------------------------------------------------
*/
const SubmissionSuccess: React.FC<SubmissionSuccessProps> = () => {
  const matchesMobile = useMediaQuery(theme.breakpoints.down('md'));

  // Render
  //--------------------------------------------------------------------------
  return (
    <BoxStyled>
      <TitlesBoxStyled>
        <TitleTypographystyled>
          You&apos;re Awesome.
        </TitleTypographystyled>
        <SubtitleTypographystyled>
          Now follow us for 🔥🔥 content.
          <br />
          <span>(it really helps)</span>
        </SubtitleTypographystyled>
      </TitlesBoxStyled>
      <ImageBoxStyled>
        <Link href="https://www.linkedin.com/company/kablio/" target="_blank">
          <Image
            src={iconLinkedin}
            alt="linkedin"
            width={matchesMobile ? 80 : 160}
            height={matchesMobile ? 80 : 160}
          />
        </Link>
        <Link href="https://www.instagram.com/kablio_official?igsh=MXV6OWxyczAwbWlnaQ==" target="_blank">
          <Image
            src={iconInstagram}
            alt="instagram"
            width={matchesMobile ? 80 : 160}
            height={matchesMobile ? 80 : 160}
          />
        </Link>
      </ImageBoxStyled>
    </BoxStyled>
  )
}

export default SubmissionSuccess
