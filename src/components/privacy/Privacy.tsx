"use client"

/*
| Developed by Reskue
| Filename: Privacy.tsx
| Author: eric@reskue.art
*/

import { Box, Typography, useMediaQuery } from '@mui/material'
import React from 'react'
import { styled } from '@mui/material'
import { theme } from '@/MUI/Theme';
import HomepageLayout from '@/components/homepage/layout/layout';
import FooterSection from '@/components/blog/FooterSection';

/*
|--------------------------------------------------------------------------
| Contracts
|--------------------------------------------------------------------------
*/
export interface PrivacyProps //extends buttonProps
{
    children?: React.ReactNode
}
/*
|--------------------------------------------------------------------------
| Styles
|--------------------------------------------------------------------------
*/
const StyledList = styled('ul')({
    fontFamily: "Roboto",
    fontSize: "1.125rem",
    paddingLeft: '1.5rem',
    marginBottom: '2em',
    listStyleType: 'disc',
});

const StyledText = styled(Typography)({
    display: "block",
    fontFamily: "Roboto",
    fontSize: "1.125rem",
    marginBottom: '1rem',
})


/*
|--------------------------------------------------------------------------
| Component
|--------------------------------------------------------------------------
*/
const Privacy: React.FC<PrivacyProps> = ({ children }) => {
    const matchesMobile = useMediaQuery(theme.breakpoints.down('md'));


    // Render
    //--------------------------------------------------------------------------
    return (

        <HomepageLayout>
            <Box
                display="flex"
                width={"100vw"}
                justifyContent="center"
                sx={{ background: `linear-gradient(to bottom, rgba(0, 251, 223, 1), rgba(0, 251, 223, 0.74), rgba(1, 186, 248, 0.74))` }}
            >
                <Box
                    display="flex"
                    flexDirection="column"
                    alignItems="flex-start"
                    justifyContent="center"
                    gap="2.1875rem"
                    m={matchesMobile ? 2 : 10}
                    bgcolor="white"
                    maxWidth={"1102px"}
                    padding={matchesMobile ? 2 : 10}
                >
                    <Typography
                        fontFamily={"Anton"}
                        fontSize={"2.8125rem"}
                        color="black"
                    >
                        Privacy
                    </Typography>
                    <Box>
                        <StyledText>
                            Effective Date: Monday, 10 December 2023
                        </StyledText>
                        <StyledText>
                            At Kablio, we are committed to protecting the privacy and security of your personal information. This Privacy Notice
                            explains how we collect, use, disclose, and protect the personal data we gather through our website
                            <a href="https://www.kablio.com" target="_blank">www.kablio.com</a>.
                        </StyledText>
                        <StyledText>
                            By using our website, you consent to the practices described in this notice.
                        </StyledText>
                        <StyledText variant='h2'>Collection of Personal Information</StyledText>
                        <StyledText>
                            We collect personal information that you provide to us voluntarily when you use our website, interact with our
                            services, or communicate with us. This may include, but is not limited to, your name, email address, contact
                            details, and any other information you provide to us.
                        </StyledText>
                        <StyledText variant='h2'>Use of Personal Information</StyledText>
                        <StyledList>
                            <li>Provide and improve our products and services;</li>
                            <li>Communicate with you, including responding to your inquiries, requests, or feedback;</li>
                            <li>Send you important updates, notifications, and promotional materials related to our services;</li>
                            <li>Analyze website usage and trends to enhance user experience and optimize our website&apos;s performance.</li>
                        </StyledList>
                        <StyledText variant='h2'>Disclosure of Personal Information</StyledText>
                        <StyledText>
                            We may disclose your personal information to third parties under the following circumstances:
                        </StyledText>
                        <StyledList>
                            <li>With your consent or as otherwise permitted by applicable laws;</li>
                            <li>To our trusted service providers who assist us in operating our website and providing our services. These
                                service providers are contractually bound to maintain the confidentiality and security of your personal
                                information;</li>
                            <li>In response to a legal request, court order, or governmental authority requiring disclosure;</li>
                            <li>To protect our rights, property, or safety, as well as the rights, property, or safety of our users or
                                others.</li>
                        </StyledList>
                        <StyledText variant='h2'>Data Retention</StyledText>
                        <StyledText>
                            We will retain your personal information for as long as necessary to fulfill the purposes outlined in this Privacy
                            Notice or as required by law. We will securely delete or anonymize your personal data when it is no longer
                            needed.
                        </StyledText>

                        <StyledText variant='h2'>Security Measures</StyledText>
                        <StyledText>
                            We implement appropriate technical and organizational measures to protect your personal information from
                            unauthorized access, disclosure, alteration, or destruction. However, no data transmission over the internet or
                            storage system can be guaranteed to be 100% secure. Therefore, while we strive to protect your personal
                            information, we cannot guarantee its absolute security.
                        </StyledText>

                        <StyledText variant='h2'>Your Rights</StyledText>
                        <StyledText>
                            You have the right to:
                        </StyledText>
                        <StyledList>
                            <li>Access and obtain a copy of your personal information that we hold;</li>
                            <li>Rectify any inaccurate or incomplete personal data;</li>
                            <li>Erase your personal data under certain circumstances;</li>
                            <li>Restrict or object to the processing of your personal information in certain situations;</li>
                            <li>Withdraw your consent at any time, where we rely on consent for processing your personal data;</li>
                            <li>Lodge a complaint with the Information Commissioner&apos;s Office (ICO) if you believe we have not handled your
                                personal data in accordance with applicable data protection laws.</li>
                        </StyledList>

                        <StyledText variant='h2'>Cookies</StyledText>
                        <StyledText>
                            We may use cookies or similar tracking technologies on our website. By using our website, you consent to the use of
                            cookies as described in our Cookie Policy.
                        </StyledText>

                        <StyledText variant='h2'>Changes to this Privacy Notice</StyledText>
                        <StyledText>
                            We may update this Privacy Notice from time to time to reflect changes in our practices or legal obligations. We
                            will notify you of any material changes by posting the updated Privacy Notice on our website or through other
                            appropriate means. We encourage you to review this Privacy Notice periodically.
                        </StyledText>


                        <StyledText variant='h2'>Contact Us</StyledText>
                        <StyledText>
                            If you have any questions, concerns, or requests regarding this Privacy Notice or the way we handle your personal
                            information, please contact us at: <a href="mailto:hello@kablio.com">hello@kablio.com</a>.
                        </StyledText>
                    </Box>
                </Box>
            </Box>

            <FooterSection backgroundColor='rgba(1, 186, 248, 0.74)' />
        </HomepageLayout>
    )
}

export default Privacy
