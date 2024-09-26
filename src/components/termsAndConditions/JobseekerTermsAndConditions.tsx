"use client"

/*
| Developed by Reskue
| Filename: JobseekerTermsAndConditions.tsx
| Author: eric@reskue.art
*/

import { Box, Typography, useMediaQuery } from '@mui/material'
import React from 'react'
import { styled } from '@mui/material'
import { theme } from '@/MUI/Theme'

/*
|--------------------------------------------------------------------------
| Contracts
|--------------------------------------------------------------------------
*/
export interface JobseekerTermsAndConditionsProps //extends buttonProps
{
    children?: React.ReactNode
}
/*
|--------------------------------------------------------------------------
| Styles
|--------------------------------------------------------------------------
*/
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
const JobseekerTermsAndConditions: React.FC<JobseekerTermsAndConditionsProps> = ({  }) => {
    const matchesMobile = useMediaQuery(theme.breakpoints.down('md'));


    // Render
    //--------------------------------------------------------------------------
    return (
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
                    Candidates - Terms & Conditions
                </Typography>
                <Box>

                    <StyledText>Effective Date: 1st of January, 2024</StyledText>

                    <StyledText>

                        These Terms and Conditions (&ldquo;Agreement&ldquo;) govern the use of this
                        website (&ldquo;Platform&ldquo;) provided by KABLIO LTD, registered in England
                        and Wales under Company number 14976647 (hereinafter, &ldquo;Kablio&ldquo;,
                        &ldquo;we&ldquo;, &ldquo;us&ldquo; or &ldquo;our&ldquo;) by Candidates
                        (also known as jobseekers). Our company connects candidates
                        (also known as jobseekers), employers, and recruiters. By
                        accessing or using the Platform, you (&ldquo;Candidate&ldquo;) agree to
                        comply with these Terms. If you do not agree with these Terms,
                        you should not use the Platform.
                    </StyledText>

                    <StyledText fontWeight={"bold"}>1. Registration and Account:</StyledText>
                    <StyledText>
                        1.1 Eligibility: By using the Platform, you represent and warrant
                        that you are at least 18 years old and have the legal capacity to
                        enter into a binding agreement. You may not use this Website if you
                        previously had an Account terminated or suspended. We reserve the
                        right, in our sole discretion, to accept or reject your registration
                        for an Account. If your registration is accepted by us, you will
                        be allocated an Account.<br />
                        1.2 Account Creation: You may be required to create a user account
                        (&ldquo;Account&ldquo;) on the Platform. You shall provide accurate, complete,
                        and up-to-date information during the registration process. You
                        are responsible for maintaining the security and confidentiality
                        of your Account credentials.<br />
                        1.3 Account Usage: Your Account is for personal use only and shall
                        not be shared with others. You shall not allow any unauthorised
                        person to access your Account. You are responsible for all
                        activities that occur under your Account. <br />
                        1.4 Account Suspension or Termination: The Company reserves the
                        right to suspend or terminate your Account, without prior notice,
                        if you violate these Terms or engage in any fraudulent, unlawful,
                        or inappropriate conduct on the Platform.
                    </StyledText>
                    <StyledText fontWeight={"bold"}>
                        2. Job Applications and Profiles:
                    </StyledText>
                    <StyledText>
                        2.1 Accuracy of Information: You shall provide accurate, truthful,
                        and complete information in your job applications and profiles
                        on the Platform. Misrepresentation of qualifications, experience,
                        or any other information is strictly prohibited.<br />
                        2.2 Privacy and Data Protection: You acknowledge and agree that
                        the Company will collect, use, and process your personal information
                        in accordance with its Privacy Policy. By using the Platform,
                        you consent to such collection, use, and processing of your
                        personal information.<br />
                        2.3 Job Applications: You may apply for job listings posted
                        on the Platform that match your qualifications and interests.
                        You shall use the job application feature responsibly and
                        only apply for positions for which you genuinely qualify
                        and have a legitimate interest.<br />
                        2.4 Communication with Employers and Recruiters: You shall
                        engage in professional, respectful, and non-discriminatory
                        communication with employers and recruiters on the Platform.
                        Harassment, offensive language, or discriminatory behaviour
                        is strictly prohibited.<br />
                        2.5 Outreach from Employers and Recruiters: By using the Platform,
                        you acknowledge and agree that employers and recruiters may reach
                        out to you based on your profile and job application information.
                        You are solely responsible for evaluating and responding to such
                        outreach at your own discretion.
                    </StyledText>

                    <StyledText fontWeight={"bold"}>
                        3. Platform Usage:
                    </StyledText>
                    <StyledText>
                        3.1 Lawful Use: You shall use the Platform in a manner that complies
                        with all applicable laws, regulations, and industry standards.
                        You shall not engage in any activity that violates any local,
                        national, or international laws.<br />
                        3.2 Prohibited Activities: You shall not use the Platform to post,
                        upload, transmit, or distribute any content that is unlawful,
                        harmful, defamatory, obscene, infringing, or otherwise objectionable.
                        This includes, but is not limited to, content that promotes
                        discrimination, harassment, violence, or illegal activities.<br />
                        3.3 Intellectual Property: You shall respect the intellectual
                        property rights of the Company and third parties. You shall
                        not infringe upon copyrights, trademarks, patents, or any other
                        proprietary rights related to the Platform&apos;s content. You shall
                        not modify, adapt, or create derivative works based on the
                        Platform&apos;s content without the explicit written consent of the Company.

                    </StyledText>
                    <StyledText fontWeight={"bold"}>
                        4. Disclaimer and Limitation of Liability:
                    </StyledText>
                    <StyledText>
                        4.1 Platform Content: The Company strives to provide accurate
                        and reliable information on the Platform. However, the Company
                        does not guarantee the accuracy, completeness, or reliability
                        of the content posted on the Platform, including job listings,
                        employer information, and recruiter profiles.<br />
                        4.2 Third-Party Links: Our Website may contain links to
                        third-party websites. We do not endorse or control these
                        websites and are not responsible for their content or actions.
                        We disclaim liability for any and all forms of loss or damage
                        arising out of the use of them. You access third-party websites
                        at your own risk. The inclusion of a link to another site on
                        our Website does not imply any endorsement of the sites
                        themselves or of those in control of them.<br />
                        4.3 Use of the Platform: Your use of the Platform is at
                        your own risk. The Company shall not be liable for any direct,
                        indirect, incidental, consequential, or exemplary damages
                        arising from your use of the Platform, including but not
                        limited to loss of data, loss of profits, or any other
                        intangible losses.<br />
                        4.4 Our Website: We provide an online platform that provides
                        individual users who are seeking employment opportunities
                        (&ldquo;Candidate(s)&ldquo; or &ldquo;Jobseeker(s)&ldquo;) with a job search product.
                        When the product is used as intended, interactions on the
                        Website or App occur between Candidates, Employers and
                        Recruiters. You acknowledge that Kablio is not directly
                        involved in or otherwise an agent or party to any transaction
                        that may take place between a Candidate and an Employer or Recruiter.
                    </StyledText>
                    <StyledText fontWeight={"bold"}>
                        5. Indemnification:
                    </StyledText>
                    <StyledText>
                        You agree to indemnify, defend, and hold harmless the Company,
                        its affiliates, directors, officers, employees, and agents from
                        and against any claims, liabilities, damages, losses, costs,
                        or expenses, including reasonable attorneys&apos; fees, arising out of
                        or related to your use of the Platform, violation of these Terms,
                        or infringement of any third-party rights.
                    </StyledText>
                    <StyledText fontWeight={"bold"}>
                        6. Amendments to the Terms:
                    </StyledText>
                    <StyledText>
                        The Company may revise these Terms at any time without
                        prior notice. You are responsible for regularly reviewing
                        the Terms to ensure compliance with the most recent version.
                    </StyledText>
                    <StyledText fontWeight={"bold"}>
                        7. Governing Law and Jurisdiction:
                    </StyledText>
                    <StyledText>
                        These Terms shall be governed by and construed in accordance
                        with the laws of England and Wales. Any dispute arising out
                        of or in connection with these Terms shall be subject to
                        the exclusive jurisdiction of the courts of England and
                        Wales.The Company may revise these Terms at any time without prior notice.
                        You are responsible for regularly reviewing the Terms to ensure
                        compliance with the most recent version.
                    </StyledText>
                    <StyledText fontWeight={"bold"}>
                        8. Severability:
                    </StyledText>
                    <StyledText>
                        If any provision of these Terms is deemed invalid
                        or unenforceable, such provision shall be interpreted to
                        fulfill its intended purpose to the maximum extent permitted
                        by law, and the remaining provisions shall continue in full
                        force and effect.
                    </StyledText>
                    <StyledText fontWeight={"bold"}>
                        9. General:
                    </StyledText>
                    <StyledText>
                        Unless otherwise agreed, no delay, act or omission by a party in
                        exercising any right or remedy will be deemed a waiver of that,
                        or any other, right or remedy. Our Website and App are directed
                        to people residing in the United Kingdom and European Union.
                        We do not represent that Content available on or through our
                        Website or App is appropriate for use or available in other locations.
                        Please note that these Terms, their subject matter and their
                        formation, are governed by the law of England and Wales. You and
                        we both agree that the courts of England and Wales will have
                        exclusive jurisdiction except that if you are a resident of
                        Northern Ireland you may also bring proceedings in Northern
                        Ireland, and if you are resident of Scotland, you may also
                        bring proceedings in Scotland.
                    </StyledText>
                    <StyledText fontWeight={"bold"}>
                        10. Conclusion:
                    </StyledText>
                    <StyledText>
                        These Terms & Conditions outline the rights
                        and responsibilities of candidates using the
                        Company&apos;s job website platform. By accessing or
                        using the Platform, you agree to abide by these
                        Terms. Failure to comply may result in account suspension or termination.
                    </StyledText>
                </Box >
            </Box>
        </Box>
    )
}

export default JobseekerTermsAndConditions
