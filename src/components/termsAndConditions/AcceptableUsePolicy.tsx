"use client"

/*
| Developed by Reskue
| Filename: AcceptableUsePolicy.tsx
| Author: eric@reskue.art
*/

import { theme } from '@/MUI/Theme'
import { Box, styled, Typography, useMediaQuery } from '@mui/material'
import React from 'react'

/*
|--------------------------------------------------------------------------
| Contracts
|--------------------------------------------------------------------------
*/
export interface AcceptableUsePolicyProps //extends buttonProps
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
    paddingLeft: '1.5rem', // Adjust the left padding as needed
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
const AcceptableUsePolicy: React.FC<AcceptableUsePolicyProps> = ({  }) => {
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
                    Acceptable use policy
                </Typography>
                <Box>

                    <StyledText>Effective Date: January 1st, 2024</StyledText>
                    <StyledText fontWeight={"bold"}>Introduction:</StyledText>

                    <StyledText>
                        www.kablio.com is a site operated by Kablio LTD
                        (&ldquo;We,&ldquo; &ldquo;Us,&ldquo; &ldquo;Our&ldquo; or &ldquo;Kablio&ldquo;). We are registered
                        in England and Wales under company number 14976647.
                    </StyledText>
                    <StyledText>
                        This Acceptable Use Policy (the &ldquo;Policy&ldquo;) governs the use of our
                        website (&ldquo;Website&ldquo;). The purpose of this Policy is to establish
                        guidelines and rules to ensure the responsible and lawful use of
                        the Website by its users, including candidates, employers, and
                        recruiters. By accessing or using the Website, you agree to
                        comply with this Policy.
                    </StyledText>

                    <StyledText fontWeight={"bold"}>1. General Guidelines:</StyledText>
                    <StyledText>
                        1.1 Lawful Use: Users shall use the Website in a manner that
                        complies with all applicable laws, regulations, and industry
                        standards. Users shall not engage in any activity that violates
                        any local, national, or international laws.<br />
                        1.2 Prohibited Content: Users shall not post, upload,
                        transmit, or distribute any content on the Website that is
                        unlawful, harmful, defamatory, obscene, infringing, or
                        otherwise objectionable. This includes, but is not limited
                        to, content that promotes discrimination, harassment, violence,
                        or illegal activities.<br />
                        1.3 Intellectual Property: Users shall respect intellectual
                        property rights and shall not infringe upon copyrights, trademarks,
                        patents, or any other proprietary rights of others through their
                        use of the Website. Users shall not post or share content that
                        violates the intellectual property rights of others.<br />
                        1.4 User Accounts: Users shall create and use only one account
                        on the Website and shall not share their account credentials
                        with others. Users are responsible for maintaining the security
                        of their account and shall promptly notify the Company of any
                        unauthorised access or use.
                    </StyledText>
                    <StyledText fontWeight={"bold"}>
                        2. Candidates:
                    </StyledText>
                    <StyledText>
                        2.1 Accurate Information: Candidates shall provide accurate,
                        complete, and up-to-date information in their profiles and job
                        applications. Misrepresentation of qualifications, experience,
                        or any other information is strictly prohibited.<br />
                        2.2 Job Applications: Candidates shall use the Website&apos;s application
                        feature responsibly and only apply for positions for which
                        they genuinely qualify and have a legitimate interest. Multiple
                        or excessive applications without legitimate reasons may result
                        in account suspension or termination.<br />
                        2.3 Privacy and Data Protection: Candidates shall respect the
                        privacy and data protection rights of others. Candidates shall
                        not access or attempt to access personal information of other
                        users without proper authorisation.
                    </StyledText>

                    <StyledText fontWeight={"bold"}>
                        3. Employers:
                    </StyledText>
                    <StyledText>
                        3.1 Ethical Practices: Employers shall adhere to ethical practices
                        when engaging with candidates and recruiters through the Website.
                        Employers shall not engage in any fraudulent or deceptive
                        activities and shall represent themselves truthfully.<br />
                        3.2 Legitimate Job Postings: Employers shall post accurate and
                        legitimate job listings on the Website, including clear and
                        specific job descriptions, requirements, and qualifications.<br />
                        3.3 Non-Discrimination: Employers shall not discriminate against
                        any candidates based on race, colour, religion, gender, sexual
                        orientation, disability, or any other protected characteristic.
                        All job listings shall comply with relevant equal opportunity
                        laws and regulations.<br />
                        3.4 Respectful Communication: Employers shall communicate with
                        candidates in a professional, respectful, and non-discriminatory
                        manner. Harassment, offensive language, or discriminatory
                        behaviour is strictly prohibited.
                    </StyledText>
                    <StyledText fontWeight={"bold"}>
                        4. Recruiters:
                    </StyledText>
                    <StyledText>
                        4.1 Ethical Practices: Recruiters shall adhere to ethical
                        practices when engaging with candidates and employers through
                        the Website. Recruiters shall not engage in any fraudulent
                        or deceptive activities and shall represent themselves truthfully.<br />
                        4.2 Legitimate Job Postings: Recruiters shall post accurate
                        and legitimate job listings on the Website, including clear
                        and specific job descriptions, requirements, and qualifications.<br />
                        4.3 Non-Discrimination: Recruiters shall not discriminate
                        against any candidates based on race, colour, religion, gender,
                        sexual orientation, disability, or any other protected
                        characteristic. All recruitment activities shall comply with
                        relevant equal opportunity laws and regulations.<br />
                        4.4 Respectful Communication: Recruiters shall communicate with
                        candidates and employers in a professional, respectful, and
                        non-discriminatory manner. Harassment, offensive language,
                        or discriminatory behaviour is strictly prohibited.
                    </StyledText>
                    <StyledText fontWeight={"bold"}>
                        5. Prohibited Use of Content:
                    </StyledText>
                    <StyledText>
                        5.1 Reproduction and Duplication: Users shall not reproduce,
                        duplicate, copy, or distribute any part of the Website&apos;s content,
                        including job listings, profiles, or any other proprietary
                        information, without the explicit written consent of the Company.
                        This includes but is not limited to text, graphics, logos,
                        images, videos, and any other material displayed on the Website.<br />
                        5.2 Scraping and Data Extraction: Users shall not engage in
                        scraping, data mining, data harvesting, or any other automated
                        methods to extract or collect information from the Website,
                        including job listings, candidate profiles, or any other
                        user-generated content, without the explicit written consent
                        of the Company.<br />
                        5.3 Reselling or Commercial Use: Users shall not resell,
                        commercially exploit, or make unauthorised commercial use of
                        any part of the Website, including job listings, candidate
                        profiles, or any other proprietary information, without the
                        explicit written consent of the Company.
                    </StyledText>

                    <StyledText fontWeight={"bold"}>
                        6. Website Usage:
                    </StyledText>
                    <StyledText>
                        6.1 Security and Unauthorised Access: Users shall not attempt
                        to gain unauthorised access to the Website&apos;s systems, networks,
                        or any other user accounts. Users shall not engage in any
                        activity that may disrupt or interfere with the proper
                        functioning of the Website.<br />
                        6.2 Malicious Software: Users shall not upload or distribute
                        any files or software that may contain viruses, malware, or
                        any other harmful code that could adversely affect the
                        Website or its users.<br />
                        6.3 Third-Party Links: Users shall exercise caution when
                        accessing external links or websites provided on the Website.
                        The Company is not responsible for the content or actions
                        of third-party websites and does not endorse or guarantee
                        their accuracy, security, or reliability.
                    </StyledText>
                    <StyledText fontWeight={"bold"}>
                        7. Consequences of Violations:
                    </StyledText>
                    <StyledText>
                        Failure to comply with this Policy may result in various actions,
                        including but not limited to:
                    </StyledText>
                    <StyledList>
                        <li>Temporary or permanent suspension of user account</li>
                        <li>Removal of content</li>
                        <li>Legal action in case of severe violations</li>
                    </StyledList>
                    <StyledText>
                        The Company reserves the right to take appropriate
                        actions at its sole discretion to enforce this Policy.
                    </StyledText>
                    <StyledText fontWeight={"bold"}>
                        8. Amendments to the Policy:
                    </StyledText>
                    <StyledText>
                        The Company may revise this Policy at any time without prior notice.
                        Users are responsible for regularly reviewing the Policy to ensure
                        compliance with the most recent version.
                    </StyledText>
                    <StyledText fontWeight={"bold"}>
                        9. Conclusion:
                    </StyledText>
                    <StyledText>
                        This Acceptable Use Policy aims to maintain a safe, respectful,
                        and lawful environment for all users of the Company&apos;s Website.
                        By accessing or using the Website, users agree to abide by this
                        Policy and any applicable laws and regulations. Failure to comply
                        may result in disciplinary actions and termination of access to the Website.
                    </StyledText>
                </Box >
            </Box>
        </Box>
    )
}

export default AcceptableUsePolicy
