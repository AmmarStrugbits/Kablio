"use client"

/*
| Developed by Reskue
| Filename: CompanySummary.tsx
| Author: eric@reskue.art
*/

import { BookMark } from '@/assets/svgs/Bookmark'
import { SquareZoomIn } from '@/assets/svgs/SquareZoomIn'
import { Workers } from '@/assets/svgs/Workers'
import { ZoomIn } from '@/assets/svgs/ZoomIn'
import { JobPostClass } from '@/shared/interfaces/JobPostClass'
import { Box, styled, Typography } from '@mui/material'
import React from 'react'
import InfoNotAvailable from './InfoNotAvailable'
import JobSpecialisms from './JobSpecialisms'

/*
|--------------------------------------------------------------------------
| Contracts
|--------------------------------------------------------------------------
*/
export interface CompanySummaryProps //extends buttonProps
{
    jobPost: JobPostClass,
    children?: React.ReactNode
}
/*
|--------------------------------------------------------------------------
| Styles
|--------------------------------------------------------------------------
*/


const TextTypographyStyled = styled(Typography)(({ theme }) => ({
    fontSize: '1.125rem',
    fontFamily: "Roboto",

    [theme.breakpoints.down('md')]: {
        fontSize: '1rem',
    },

}))

const SummaryLineBox = styled(Box)(() => ({
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: '0.5rem',
}))

const IconBox = styled(Box)(() => ({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '25px',
    height: '24px',
}))

const RightSideHeaderBoxStyled = styled(Box)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    gap: '1rem',
    flex: 1,

    [theme.breakpoints.down('md')]: {
        // borderTop: `2px solid ${theme.palette.primary.main}`,
        // paddingTop: '1rem',
        width: '100%'
    },
}))

/*
|--------------------------------------------------------------------------
| Component
|--------------------------------------------------------------------------
*/
const CompanySummary: React.FC<CompanySummaryProps> = (props: CompanySummaryProps) => {

    // Render
    //--------------------------------------------------------------------------
    return (
        <RightSideHeaderBoxStyled>

            <SummaryLineBox>
                <IconBox>
                    <BookMark />
                </IconBox>

                {props.jobPost?.OneLineOverview ?
                    <TextTypographyStyled>{props.jobPost?.OneLineOverview}</TextTypographyStyled>
                    :
                    <InfoNotAvailable />
                }

            </SummaryLineBox>

            <SummaryLineBox>

                <IconBox>
                    <Workers />
                </IconBox>

                {props.jobPost?.nbOfEmployees ?
                    <TextTypographyStyled>{props.jobPost?.nbOfEmployees}</TextTypographyStyled>
                    :
                    <InfoNotAvailable />
                }

            </SummaryLineBox>

            <SummaryLineBox>
                <IconBox>
                    <ZoomIn />
                </IconBox>
                {props.jobPost?.serviceSpecialisms ?
                    <JobSpecialisms specialisms={props.jobPost?.serviceSpecialisms} />

                    :
                    <InfoNotAvailable />
                }
            </SummaryLineBox>

            <SummaryLineBox>
                <IconBox>
                    <SquareZoomIn />
                </IconBox>
                {props.jobPost?.sectorSpecialisms ?
                    <JobSpecialisms specialisms={props.jobPost?.sectorSpecialisms} />

                    :
                    <InfoNotAvailable />
                }
            </SummaryLineBox>
        </RightSideHeaderBoxStyled>
    )
}

export default CompanySummary
