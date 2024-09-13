/*
| Developed by Reskue
| Filename: TheRole.tsx
| Author: eric@reskue.art
*/

"use client"

import { Box, Typography, useMediaQuery } from '@mui/material'
import React from 'react'
import { styled } from '@mui/material'
import ContentDisplay from '../ContentDisplay'
import { JobPostClass } from '@/shared/interfaces/JobPostClass'
import TitleSection from '../TitleSection'
import InfoNotAvailable from '../InfoNotAvailable'
import RoleSummary from '../RoleSummary'
import { theme } from '@/MUI/Theme'

/*
|--------------------------------------------------------------------------
| Contracts
|--------------------------------------------------------------------------
*/
export interface TheRoleProps //extends buttonProps
{
    jobPost: JobPostClass,
    children?: React.ReactNode
}
/*
|--------------------------------------------------------------------------
| Styles
|--------------------------------------------------------------------------
*/

const RoleBoxStyled = styled(Box)(() => ({
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    // border: '2px solid green',
}))


const TitleBoxStyled = styled(Box)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'row',
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: theme.palette.primary.main,
    borderRadius: '0.25rem',
    padding: '0.3125rem 1.875rem',
}))


const Title = styled(Typography)(() => ({
    color: "black",
    fontFamily: "Anton",
    fontSize: "1.5rem",
    fontWeight: "normal",
}))

const BigTitleSection = styled(Typography)(() => ({
    color: "black",
    fontFamily: "Roboto",
    fontSize: "1.5rem",
    fontWeight: "bold",
    marginBottom: "1rem",
}))

// const TitleSection = styled(Typography)(({ theme }) => ({
//     color: "black",
//     fontFamily: "Roboto",
//     fontSize: "1.25rem",
//     fontWeight: "bold",
//     marginBottom: "1rem",
// }))

const BoxSection = styled(Box)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    padding: '1.88rem',
    marginTop: '0.25rem',
    borderTop: `2px solid ${theme.palette.primary.main}`,
    backgroundColor: "white",

    [theme.breakpoints.down('md')]: {
        padding: '0.5rem',
    }
}))

const ContentText = styled(Typography)(() => ({
    color: "black",
    fontFamily: "Roboto",
    fontSize: "1.125rem",
    fontWeight: "normal",
    marginBottom: "1rem",
}))

/*
|--------------------------------------------------------------------------
| Component
|--------------------------------------------------------------------------
*/
const TheRole: React.FC<TheRoleProps> = (props: TheRoleProps) => {
    const matchesMobile = useMediaQuery(theme.breakpoints.down('md'));
    // Render
    //--------------------------------------------------------------------------
    return (
        <RoleBoxStyled>
            <TitleBoxStyled>
                <Title>The role</Title>
            </TitleBoxStyled>


            {/* Summary mobile*/}
            {matchesMobile ?
                <BoxSection>
                    <RoleSummary jobPost={props.jobPost} />
                </BoxSection>
                : null}

            {/* What you would be doing */}
            <BoxSection>
                <TitleSection>What you would be doing</TitleSection>
                <ContentDisplay content={props.jobPost?.tasks} />
            </BoxSection>

            {/* What you bring */}
            <BoxSection>
                <TitleSection>What you bring</TitleSection>
                <ContentDisplay content={props.jobPost?.whatYouBring} />
            </BoxSection>


            {/* Benefits */}
            <BoxSection>
                <TitleSection>Benefits</TitleSection>
                {props.jobPost?.benefits ?
                    <ContentDisplay content={props.jobPost.benefits} /> : <InfoNotAvailable />}

                <TitleSection>Training + Development</TitleSection>
                {props.jobPost?.trainingDevelopment ?
                    <ContentDisplay content={props.jobPost.trainingDevelopment} /> : <InfoNotAvailable />}
            </BoxSection>

            {/* OTHER */}
            <BoxSection>
                <BigTitleSection>Other</BigTitleSection>

                <TitleSection>Interview process</TitleSection>
                <ContentText>
                    {props.jobPost?.interviewProcess ?
                        <ContentDisplay content={props.jobPost?.interviewProcess} /> : <InfoNotAvailable />}
                </ContentText>

                <TitleSection>Visa Sponsorship</TitleSection>
                <ContentText>
                    {props.jobPost?.visaSponsorchip ?
                        <ContentDisplay content={props.jobPost?.visaSponsorchip} /> : <InfoNotAvailable />}
                </ContentText>

                <TitleSection>Security clearance</TitleSection>
                <ContentText>
                    {props.jobPost?.securityClearance ?
                        <ContentDisplay content={props.jobPost?.securityClearance} /> : <InfoNotAvailable />}
                </ContentText>

            </BoxSection>

        </RoleBoxStyled >
    )
}

export default TheRole
