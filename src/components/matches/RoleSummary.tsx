/*
| Developed by Reskue
| Filename: RoleSummary.tsx
| Author: eric@reskue.art
*/
"use client"

import { Calendar } from '@/assets/svgs/Calendar'
import { Location } from '@/assets/svgs/Location'
import { MoneyBill } from '@/assets/svgs/MoneyBill'
import { MountainFlag } from '@/assets/svgs/MountainFlag'
import { PaperContract } from '@/assets/svgs/PaperContract'
import { Target } from '@/assets/svgs/Target'
import { Box, Typography } from '@mui/material'
import React from 'react'
import { styled } from '@mui/material'
import InfoNotAvailable from './InfoNotAvailable'
import { JobPostClass } from '@/shared/interfaces/JobPostClass'
import { WorkEnvironment } from '@/assets/svgs/WorkEnvironment'
import { Currency } from '@/shared/enum/Currency.enum'

/*
|--------------------------------------------------------------------------
| Contracts
|--------------------------------------------------------------------------
*/
export interface RoleSummaryProps {
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

const LeftSideHeaderBoxStyled = styled(Box)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    gap: '1rem',
    flex: 1,

    [theme.breakpoints.down('md')]: {
        margin: '0.9375rem 0rem'
    },
    [theme.breakpoints.up('md')]: {
        transform: 'translateY(-15%)',
    },
}))

/*
|--------------------------------------------------------------------------
| Component
|--------------------------------------------------------------------------
*/
const RoleSummary: React.FC<RoleSummaryProps> = (props: RoleSummaryProps) => {
    const currencySymbols: Record<Currency, string> = {
        [Currency.AUD]: 'A$',
        [Currency.CAD]: 'C$',
        [Currency.GBP]: '£',
        [Currency.EUR]: '€',
        [Currency.SAR]: '﷼',
        [Currency.KWD]: 'KD',
        [Currency.BHD]: 'BD',
        [Currency.QAR]: 'QR',
        [Currency.AED]: 'AED',
        [Currency.NZD]: 'NZ$',
        [Currency.SGD]: 'S$',
        [Currency.USD]: '$',
    };

    const formatter = new Intl.NumberFormat('en-UK');

    const displaySalary = () => {
        const currencySymbol = currencySymbols[props.jobPost?.currency as Currency] || '';

        if (props.jobPost?.minSalary === null && props.jobPost?.maxSalary === null) {
            return <InfoNotAvailable />
        } else {
            return (
                <>
                    {props.jobPost?.minSalary != null ?
                        `${currencySymbol}${formatter.format(props.jobPost?.minSalary)}` : ''}
                    {props.jobPost?.maxSalary != null ?
                        `${props.jobPost?.minSalary != null ? ' - ' : ''}${currencySymbol}${formatter.format(props.jobPost?.maxSalary)}` : ''}
                </>
            );
        }
    };

    const formatDate = (dateString: string) => {
        const timestamp = parseInt(dateString, 10);

        if (!isNaN(timestamp)) {
            return new Date(timestamp * 1000).toLocaleDateString('en-GB');
        }
        return dateString;
    };
    // Render
    return (
        <LeftSideHeaderBoxStyled>
            <SummaryLineBox>
                <IconBox>
                    <Target />
                </IconBox>
                <TextTypographyStyled>{props.jobPost?.roleFocus}</TextTypographyStyled>
            </SummaryLineBox>
            <SummaryLineBox>
                <IconBox>
                    <MoneyBill />
                </IconBox>
                <TextTypographyStyled>
                    {displaySalary()}
                </TextTypographyStyled>
            </SummaryLineBox>
            <SummaryLineBox>
                <IconBox>
                    <MountainFlag />
                </IconBox>
                <TextTypographyStyled>{props.jobPost?.experienceLevel}</TextTypographyStyled>
            </SummaryLineBox>
            <SummaryLineBox>
                <IconBox>
                    <PaperContract />
                </IconBox>
                <TextTypographyStyled>{props.jobPost?.contractType}</TextTypographyStyled>
            </SummaryLineBox>
            <SummaryLineBox>
                <IconBox>
                    <Location />
                </IconBox>
                <TextTypographyStyled>
                    {props.jobPost?.location}
                </TextTypographyStyled>
            </SummaryLineBox>

            <SummaryLineBox>
                <IconBox>
                    <WorkEnvironment />
                </IconBox>
                {props.jobPost?.workEnvironment ?
                    <TextTypographyStyled>{props.jobPost?.workEnvironment}</TextTypographyStyled>
                    : (
                        <InfoNotAvailable />
                    )}
            </SummaryLineBox>
            <SummaryLineBox>
                <IconBox>
                    <Calendar />
                </IconBox>
                {props.jobPost?.dateRange ? (
                    <TextTypographyStyled>
                        {formatDate(props.jobPost.dateRange)}
                    </TextTypographyStyled>
                ) : (
                    <InfoNotAvailable />
                )}
            </SummaryLineBox>
        </LeftSideHeaderBoxStyled>
    )
}

export default RoleSummary
