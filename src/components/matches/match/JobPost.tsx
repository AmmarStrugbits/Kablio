/*
| Developed by Reskue
| Filename: jobPost.tsx
| Author: eric@reskue.art
*/
"use client"

import { Box } from '@mui/material'
import React from 'react'

import HeaderJobDescription from '@/components/matches/match/HeaderJobDescription'
import TheRole from '@/components/matches/match/TheRole'
import TheCompany from '@/components/matches/match/TheCompany'
import YourRecruiter from '@/components/matches/match/YourRecruiter'
import { styled } from '@mui/system'
import { JobPostClass } from '@/shared/interfaces/JobPostClass'

/*
|--------------------------------------------------------------------------
| Contracts
|--------------------------------------------------------------------------
*/

export interface JobPostProps {
  jobPost: JobPostClass,
  children?: React.ReactNode
}

/*
|--------------------------------------------------------------------------
| Styles
|--------------------------------------------------------------------------
*/

const MatchBoxStyled = styled(Box)(({ theme }) => ({
  width: '65%',
  [theme.breakpoints.down('lg')]: {
    width: '100%',
  },
}))

const BodyJobDescriptionBoxStyled = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'row',
  width: '100%',
  justifyContent: 'space-between',
  gap: '0.5rem',

  [theme.breakpoints.down('md')]: {

    flexDirection: 'column',
    width: '100%',
  },
}))

const EmployerInfoBoxStyled = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  flex: 1,
  gap: '1rem',

  [theme.breakpoints.down('md')]: {
  }

}))

/*
|--------------------------------------------------------------------------
| Component
|--------------------------------------------------------------------------
*/
const JobPost: React.FC<JobPostProps> = (props: JobPostProps) => {
  // Render
  //--------------------------------------------------------------------------
  return (
    <MatchBoxStyled>
      <HeaderJobDescription jobPost={props.jobPost} />
      <BodyJobDescriptionBoxStyled>
        <Box flex={1}>
          <TheRole jobPost={props.jobPost} />
        </Box>
        <EmployerInfoBoxStyled>
          <TheCompany jobPost={props.jobPost} />
          {props.jobPost?.recruiterFirmName ? <YourRecruiter jobPost={props.jobPost} /> : null}
        </EmployerInfoBoxStyled>
      </BodyJobDescriptionBoxStyled>
    </MatchBoxStyled>
  )
}

export default JobPost