/*
| Developed by Reskue
| Filename: TheCompany.tsx
| Author: eric@reskue.art
*/

import React from 'react'
import { Box, Typography, styled, useMediaQuery } from '@mui/material'

import ContentDisplay from '../ContentDisplay'
import { JobPostClass } from '@/shared/interfaces/JobPostClass'
import TitleSection from '../TitleSection'
import InfoNotAvailable from '../InfoNotAvailable'
import Link from 'next/link'
import { theme } from '@/MUI/Theme'
import CompanySummary from '../CompanySummary'

/*
|--------------------------------------------------------------------------
| Contracts
|--------------------------------------------------------------------------
*/
export interface TheCompanyProps //extends buttonProps
{
    jobPost: JobPostClass,
    children?: React.ReactNode
}
/*
|--------------------------------------------------------------------------
| Styles
|--------------------------------------------------------------------------
*/

const TheCompanyBoxStyled = styled(Box)(() => ({
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
    fontFamily: "Roboto",
    fontSize: "1.125rem",
    fontWeight: "normal",
    marginBottom: "1rem",
}))


const LinkStyled = styled(Link)(() => ({
    textDecoration: 'underline !important',

}))

const ArticleLinksBoxStyled = styled(Box)(() => ({
    display: 'flex',
    flexDirection: 'column',
    gap: '0.625rem',
}))


/*
|--------------------------------------------------------------------------
| Component
|--------------------------------------------------------------------------
*/
const TheCompany: React.FC<TheCompanyProps> = (props: TheCompanyProps) => {
    const matchesMobile = useMediaQuery(theme.breakpoints.down('md'));

    // Render
    //--------------------------------------------------------------------------
    return (
        <TheCompanyBoxStyled>
            <TitleBoxStyled>
                <Title>The company</Title>
            </TitleBoxStyled>

            {/* Summary mobile*/}

            {matchesMobile ?
                <BoxSection>
                    <CompanySummary jobPost={props.jobPost} />
                </BoxSection>
                : null
            }

            {/* OTHER */}
            <BoxSection>
                <TitleSection>Overview</TitleSection>
                {props.jobPost?.Overview && props.jobPost?.Overview.length !== 0 ?
                    <ContentDisplay content={props.jobPost?.Overview} /> : <InfoNotAvailable />
                }
                <TitleSection>Culture + Values</TitleSection>

                {props.jobPost?.cultureValues ?
                    <ContentDisplay content={props.jobPost.cultureValues} /> : <InfoNotAvailable />
                }
                <TitleSection>Environment + Sustainability</TitleSection>
                <ContentText>
                    {props.jobPost?.environmentSustainability ?
                        <ContentDisplay content={props.jobPost?.environmentSustainability} /> : <InfoNotAvailable />
                    }
                </ContentText>
                <TitleSection>Inclusion & Diversity</TitleSection>
                <ContentText>
                    {props.jobPost?.inclusionDiversity ?
                        <ContentDisplay content={props.jobPost?.inclusionDiversity} /> : <InfoNotAvailable />
                    }
                </ContentText>
            </BoxSection>

            {/* ARTICLES */}
            {props.jobPost?.companyName ?
                <BoxSection>
                    <TitleSection>Articles</TitleSection>
                    <ContentText>
                        <ArticleLinksBoxStyled >
                            {props.jobPost?.externalLinks ?
                                props.jobPost.externalLinks.map((link, index) => (
                                    <div key={index}>
                                        <LinkStyled href={link.url} target="_blank" rel="noopener noreferrer" sx={{ textDecoration: 'underline !important' }}>
                                            {link.title}
                                        </LinkStyled>
                                    </div>
                                ))
                                : <InfoNotAvailable />
                            }
                        </ArticleLinksBoxStyled>
                    </ContentText>
                </BoxSection> : null
            }

        </TheCompanyBoxStyled >
    )
}

export default TheCompany