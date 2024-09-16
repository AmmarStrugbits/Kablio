"use client"

/*
| Developed by Reskue
| Filename: EmployerTermsAndConditions.tsx
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
export interface EmployerTermsAndConditionsProps //extends buttonProps
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
const EmployerTermsAndConditions: React.FC<EmployerTermsAndConditionsProps> = ({ children }) => {
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
                    Employers - Terms & Conditions
                </Typography>
                <Box>

                    <StyledText>Effective Date: January 1st, 2024</StyledText>

                    <StyledText>
                        These Terms and Conditions (&ldquo;Agreement&ldquo;) govern the use of
                        our website (&ldquo;Platform&ldquo;) provided by KABLIO LTD,
                        registered in England and Wales under Company number 14976647
                        (hereinafter, &ldquo;Kablio&ldquo;, &ldquo;we&ldquo;, &ldquo;us&ldquo; or &ldquo;our&ldquo;) by employers,
                        and any other entities or individuals representing an individual,
                        company, or organisation that engages or hires workers
                        under a contract of employment (&ldquo;Employer(s),&ldquo; &ldquo;you,&ldquo; or &ldquo;your&ldquo;).
                        Our company connects candidates (also known as jobseekers),
                        employers, and recruiters. By accessing or using the Platform, you agree
                        to comply with these Terms. If you do not agree with these Terms, you
                        should not use the Platform.
                    </StyledText>

                    <StyledText fontWeight={"bold"}>1. Registration and Account:</StyledText>
                    <StyledText>
                        1.1 Eligibility: To be eligible for an Account you must be at least 18 years old.
                        You may not use this Website if you previously had an Account terminated
                        or suspended. We reserve the right, in our sole discretion, to accept
                        or reject your registration for an Account. If your registration is
                        accepted by us, you will be allocated an Account.<br />
                        1.2 Account Creation: You may be required to create a user
                        account (&ldquo;Account&ldquo;) on the Platform. You shall provide
                        accurate, complete, and up-to-date information during the registration
                        process. You are responsible for maintaining the security and confidentiality
                        of your Account credentials.<br />
                        1.3 Account Usage: Your Account is for professional use only and
                        shall not be shared with others. You shall not allow any unauthorised
                        person to access your Account. You are responsible for all activities
                        that occur under your Account.
                        1.4 Account Suspension or Termination: The Company reserves the right
                        to suspend or terminate your Account, without prior notice, if you
                        violate these Terms or engage in any fraudulent, unlawful, or
                        inappropriate conduct on the Platform.
                    </StyledText>
                    <StyledText fontWeight={"bold"}>
                        2. Job Postings and Communication:
                    </StyledText>
                    <StyledText>
                        2.1 Job Postings: You may post job listings on the Platform to attract
                        candidates and Recruiters. You shall provide accurate and complete
                        information in your job postings, including job descriptions,
                        requirements, qualifications, and any other relevant details.<br />
                        2.2 Non-Discrimination: You shall not discriminate against any
                        candidates or Recruiters based on race, colour, religion, gender,
                        sexual orientation, disability, or any other protected characteristic.
                        All job postings shall comply with relevant equal opportunity laws and regulations.<br />
                        2.3 Communication with Candidates and Recruiters: You shall
                        engage in professional, respectful, and non-discriminatory communication
                        with candidates on the Platform. Harassment, offensive language,
                        or discriminatory behaviour is strictly prohibited.<br />
                        2.4 Outreach to Candidates: By using the Platform, you acknowledge
                        and agree that you may reach out to candidates based on their
                        profiles and job application information. You are solely responsible
                        for evaluating and engaging with candidates at your own discretion.<br />
                        2.5 Outreach to Recruiters: By using the Platform, you acknowledge
                        and agree that you may reach out to Recruiters based on their
                        profiles and bid information. You are solely responsible for
                        evaluating and engaging with recruiters at your own discretion.
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
                        Platform&apos;s content without the explicit written consent of the Company.<br />
                        3.4 Prohibited Users: You represent that neither you nor any of
                        your subsidiaries nor any director, officer, manager, or employee
                        of yours or any of your subsidiaries is a person who (a) is the
                        target of any laws administered by the United States Department
                        of the Treasury&apos;s Office of Foreign Assets Control (&ldquo;OFAC&ldquo;)
                        or any other governmental entity imposing economic sanctions or
                        trade embargoes (&ldquo;Economic Sanctions Laws&ldquo;), or (b)
                        is located, organised, or resident in a country or territory
                        that is, or whose government is, the target of sanctions
                        imposed by OFAC or any other governmental entity. You shall
                        promptly notify us if you or any of your subsidiaries, or
                        any of your or your subsidiaries&apos; directors, officers, managers,
                        employees, or agents becomes the target of any Economic Sanctions
                        Laws, or the country or territory where any of them is located,
                        organised, or resident becomes the target of sanctions imposed
                        by OFAC or any other governmental entity.
                    </StyledText>
                    <StyledText fontWeight={"bold"}>
                        4. Disclaimer and Limitation of Liability:
                    </StyledText>
                    <StyledText>
                        4.1 Platform Content: The Company strives to provide accurate
                        and reliable information on the Platform. However, the Company
                        does not guarantee the accuracy, completeness, or reliability
                        of the content posted on the Platform, including job listings,
                        candidate information, and recruiter profiles.<br />
                        4.2 Third-Party Links: Our Website may contain links to third-party
                        websites. We do not endorse or control these websites and are not
                        responsible for their content or actions. We disclaim liability
                        for any and all forms of loss or damage arising out of the use of
                        them. You access third-party websites at your own risk. The inclusion
                        of a link to another site on our Website does not imply any endorsement
                        of the sites themselves or of those in control of them.<br />
                        4.3 Use of the Platform: Your use of the Platform is at your own
                        risk. The Company shall not be liable for any direct, indirect,
                        incidental, consequential, or exemplary damages arising from your
                        use of the Platform, including but not limited to loss of data,
                        loss of profits, or any other intangible losses.<br />
                        4.4 Our Website: We provide an online platform that provides
                        individual users who are seeking employment opportunities
                        (&ldquo;Candidate(s)&ldquo; or “Jobseeker(s)”) with a job search
                        product. When the product is used as intended, interactions on the
                        Website or App occur between Candidates, Employers and Recruiters.
                        You acknowledge that Kablio is not directly involved in or otherwise
                        an agent or party to any transaction that may take place between
                        a Candidate and an Employer or Recruiter.
                    </StyledText>
                    <StyledText fontWeight={"bold"}>
                        5. Indemnification:
                    </StyledText>
                    <StyledText>
                        You agree to indemnify, defend, and hold harmless the Company,
                        its affiliates, directors, officers, employees, and agents from
                        and against any claims, liabilities, damages, losses, costs, or
                        expenses, including reasonable attorneys&apos; fees, arising out of
                        or related to your use of the Platform, violation of these Terms,
                        or infringement of any third-party rights.
                    </StyledText>

                    <StyledText fontWeight={"bold"}>
                        6. User Content
                    </StyledText>
                    <StyledText>
                        6.1 Grant of License: By submitting any content, including job
                        listings, messages, comments, reviews, or any other materials
                        (&ldquo;User Content&ldquo;), to Platform, you grant Kablio a
                        non-exclusive, worldwide, royalty-free, perpetual, irrevocable,
                        and fully sublicensable license to use, reproduce, modify, adapt,
                        publish, translate, create derivative works from, distribute,
                        perform, and display such User Content in connection with the
                        operation of the Platform and the Company&apos;s business, including
                        but not limited to promoting and marketing the Platform.<br />
                        6.2 Ownership of User Content: You retain ownership of all
                        intellectual property rights in your User Content. However,
                        by submitting User Content to the Platform, you represent and
                        warrant that you have the necessary rights, permissions, and
                        consents to grant the license specified in Section 1.1 above,
                        and that your User Content does not infringe upon or violate the
                        intellectual property rights or any other rights of any third party.
                        We have the right to remove any posting you make on the Website if,
                        in our opinion, your post does not comply with the content standards
                        set out in our Acceptable Use Policy.
                    </StyledText>
                    <StyledText fontWeight={"bold"}>
                        7. Amendments to the Terms:
                    </StyledText>
                    <StyledText>
                        The Company may revise these Terms at any time without prior notice.
                        You are responsible for regularly reviewing the Terms to ensure
                        compliance with the most recent version.
                    </StyledText>
                    <StyledText fontWeight={"bold"}>
                        8. Governing Law and Jurisdiction:
                    </StyledText>
                    <StyledText>
                        These Terms shall be governed by and construed in accordance with
                        the laws of England and Wales. Any dispute arising out of or in
                        connection with these Terms shall be subject to the exclusive
                        jurisdiction of the courts of England and Wales.
                    </StyledText>
                    <StyledText fontWeight={"bold"}>
                        9. Severability:
                    </StyledText>
                    <StyledText>
                        If any provision of these Terms is deemed invalid or unenforceable,
                        such provision shall be interpreted to fulfil its intended purpose
                        to the maximum extent permitted by law, and the remaining provisions
                        shall continue in full force and effect.
                    </StyledText>
                    <StyledText fontWeight={"bold"}>
                        10. General
                    </StyledText>
                    <StyledText>
                        Unless otherwise agreed, no delay, act or omission by a party
                        in exercising any right or remedy will be deemed a waiver of that,
                        or any other, right or remedy. Our Website and App are directed to
                        people residing in the United Kingdom and the European Union.
                        We do not represent that Content available on or through our
                        Website or App is appropriate for use or available in other locations.
                        Please note that these Terms, their subject matter and their
                        formation, are governed by the law of England and Wales.
                        You and we both agree that the courts of England and Wales will
                        have exclusive jurisdiction except that if you are a resident of
                        Northern Ireland you may also bring proceedings in Northern Ireland,
                        and if you are resident of Scotland, you may also bring proceedings in Scotland.
                    </StyledText>
                    <StyledText fontWeight={"bold"}>
                        11. Conclusion
                    </StyledText>
                    <StyledText>
                        These Terms & Conditions outline the rights and responsibilities of
                        employers using the Company&apos;s job website platform. By accessing
                        or using the Platform, you agree to abide by these Terms. Failure
                        to comply may result in account suspension or termination.
                    </StyledText>
                </Box >
            </Box>
        </Box>
    )
}

export default EmployerTermsAndConditions
