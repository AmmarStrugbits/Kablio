/*
| Developed by Reskue
| Filename: YourRecruiter.tsx
| Author: eric@reskue.art
*/

import { Box, Typography } from '@mui/material'
import React from 'react'
import { styled } from '@mui/material'
import Image from 'next/image'
import { JobPostClass } from '@/shared/interfaces/JobPostClass'
import TitleSection from '../TitleSection'
import ContentDisplay from '../ContentDisplay'
import InfoNotAvailable from '../InfoNotAvailable'

import LinkedInBug from '@/assets/images/LinkedInBug.png'

/*
|--------------------------------------------------------------------------
| Contracts
|--------------------------------------------------------------------------
*/
export interface YourRecruiterProps //extends buttonProps
{
    jobPost: JobPostClass,
    children?: React.ReactNode
}
/*
|--------------------------------------------------------------------------
| Styles
|--------------------------------------------------------------------------
*/

const YourRecruiterBoxStyled = styled(Box)(() => ({
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
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

const IconBoxStyled = styled(Box)(() => ({
    width: "1.4375rem",
    height: "1.4375rem",
    position: "relative",
}))
const LinkedImageLink = styled('a')(() => ({
    cursor: "pointer",
}))


/*
|--------------------------------------------------------------------------
| Component
|--------------------------------------------------------------------------
*/
const YourRecruiter: React.FC<YourRecruiterProps> = (props: YourRecruiterProps) => {
    // Render
    //--------------------------------------------------------------------------
    return (
        <YourRecruiterBoxStyled>
            <TitleBoxStyled>
                <Title>Your recruiter</Title>
            </TitleBoxStyled>

            <BoxSection>
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: "center",
                        alignItems: "center",
                        gap: '1rem'

                    }}
                >
                    <TitleSection>Your recruiting firm</TitleSection>

                    {props.jobPost?.recruiterFirmSocialMedia?.linkedin ?
                        <LinkedImageLink href={props.jobPost?.recruiterFirmSocialMedia?.linkedin} target="_blank">
                            <IconBoxStyled>
                                <Image src={LinkedInBug} alt="LinkedIn icon link" fill objectFit='contained' />
                            </IconBoxStyled>
                        </LinkedImageLink>
                        : null}
                </Box>
                <ContentText>
                    {props.jobPost?.recruiterFirmOverview ?
                        <ContentDisplay content={props.jobPost?.recruiterFirmOverview} /> : <InfoNotAvailable />}
                </ContentText>

                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: "center",
                        alignItems: "center",
                        gap: '1rem'

                    }}
                >
                    <TitleSection>Your recruiter </TitleSection>
                    {props.jobPost?.recruiterSocialMedia?.linkedin ?
                        <LinkedImageLink href={props.jobPost?.recruiterSocialMedia?.linkedin} target="_blank">
                            <IconBoxStyled>
                                <Image src={LinkedInBug} alt="LinkedIn icon link" fill objectFit='contained' />
                            </IconBoxStyled>
                        </LinkedImageLink>
                        : null}
                </Box>
                <ContentText>
                    {props.jobPost?.recruiterOverview ?
                        <ContentDisplay content={props.jobPost?.recruiterOverview} /> : <InfoNotAvailable />}
                </ContentText>
            </BoxSection>
        </YourRecruiterBoxStyled >
    )
}

export default YourRecruiter