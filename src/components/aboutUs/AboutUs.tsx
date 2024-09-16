'use client'

/*
| Developed by Reskue
| Filename: page.tsx
| Author: eric@reskue.art
*/

import { Box, Typography, useMediaQuery } from '@mui/material'
import React from 'react'
import { styled } from '@mui/material'
import { theme } from '@/MUI/Theme';

import Image from 'next/image';

import MattPicture from '@/assets/images/MattPicture.jpg'

import IconBox from '@/components/blog/Article/IconBox';

const DownBoxStyled = styled(Box)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: '1rem',
    backgroundColor: 'rgba(249, 249, 249, 1)',
    width: 'fit-content',
    padding: '1rem',
    [theme.breakpoints.down('md')]: {
    },
}))
const RoundedImage = styled('div')({
    width: 70,
    height: 70,
    borderRadius: '50%',
    overflow: 'hidden',
})
const RightBoxStyled = styled(Box)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '1rem',
    [theme.breakpoints.down('md')]: {
        flexDirection: 'column-reverse',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
    },
}))

const CeoTypographyStyled = styled(Typography)(({ theme }) => ({

    fontFamily: 'Inter',
    fontSize: '1rem',
    [theme.breakpoints.down('md')]: {
        fontSize: '0.875rem',

    },
}))


/*
|--------------------------------------------------------------------------
| Contracts
|--------------------------------------------------------------------------
*/

/*
|--------------------------------------------------------------------------
| Styles
|--------------------------------------------------------------------------
*/

const TitleTypography = styled('h1')({
    fontFamily: "Anton",
    fontSize: "2.8125rem",
    color: "black",
});

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

const VideoContainer = styled(Box)({
  position: 'relative',
  width: '100%',
  paddingTop: '56.25%', // 16:9 Aspect Ratio
  marginBottom: '2rem',
});

const StyledIframe = styled('iframe')({
  position: 'absolute',
  top: 0,
  left: 0,
  bottom: 0,
  right: 0,
  width: '100%',
  height: '100%',
  border: 'none',
});

/*
|--------------------------------------------------------------------------
| Component
|--------------------------------------------------------------------------
*/
const AboutUS: React.FC = () => {
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
                <TitleTypography
                >
                    About us
                </TitleTypography>

                {/* Add the YouTube video here */}
                <VideoContainer>
                    <StyledIframe
                        src="https://www.youtube.com/embed/2czROWHp3l8"
                        title="YouTube video player"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    />
                </VideoContainer>

                <Box>
                    <StyledText>
                        By 2060, the world&apos;s building stock and electricity consumption needs to double 😵. Achieving this growth sustainably is challenged by big labour shortages and inefficient talent allocation processes.<br />
                        Traditional job boards, word-of-mouth, and conventional recruiter models are not up to the task.<br />
                        That&apos;s why we&apos;re launching Kablio, a job marketplace dedicated to the evolving needs of the construction and clean energy sectors.<br />
                    </StyledText>

                    <StyledText variant='h2'>Our mission:</StyledText>
                    <StyledText>
                        Build a unified marketplace to make job and talent search easy.
                    </StyledText>
                    <StyledText variant='h2'>Our Strategy:</StyledText>
                    <StyledList>
                        <li>FOCUS: Construction, Clean Energy, Infrastructure and Engineering only.</li>
                        <li>MATCHES: Delivering precise matches using AI, eliminating the need for keyword searches and endless scrolling.</li>
                        <li>REFERRALS: Empower everyone to refer their network to open jobs and get paid for it. (Coming soonish)</li>
                        <li>RECRUITERS: A fair and transparent marketplace where employers can find the right recruitment consultant for each role. (Coming soonish)</li>
                        <li>TRANSPARENCY: Fighting for job postings to include key information such as salaries, training opportunities, environmental records and more.</li>
                    </StyledList>

                    <StyledText variant='h2'>Our Vision</StyledText>
                    <StyledText>We&apos;re not just in the business of filling job slots. Our ambition is to ignite a passion in the next-gen workforce, steering them towards the fight for better housing, infrastructure and climate justice.</StyledText>

                    <StyledText variant='h2'>Our promises</StyledText>
                    <StyledList>
                        <li>🚀 PRODUCT: Our current product is just the start, built entirely without external funding. We have big ambitions, so stick with us on our journey as we build something amazing.</li>
                        <li>🥬 SUSTAINABILITY: The construction sector accounts for over 10% of global GHG emissions, and no energy source is entirely clean. We don&apos;t position ourselves as a green jobs platform to avoid greenwashing. However, we pledge never to post oil and gas jobs and are committed to providing comprehensive information on the sustainability and environmental records of employers, putting pressure on them to improve their standards.</li>
                    </StyledList>


                    <StyledText variant='h2'>Our team</StyledText>
                    <StyledText>We&apos;re a team of ambitious technologists spread across London and Paris. If Kablio sounds cool and you want to know more about us or have any feedback, please reach out to&nbsp;
                        <a href="mailto:hi@kablio.com">hi@kablio.com</a>.
                    </StyledText>

                    <StyledText>
                        Matt - CEO/Founder
                    </StyledText>

                    <StyledText
                        sx={{
                            fontSize: '0.875rem',
                            color: 'rgba(80, 86, 98, 1)'
                        }}

                    >Notes:</StyledText>
                    <StyledList
                        sx={{
                            fontSize: '0.875rem',
                            color: 'rgba(80, 86, 98, 1)'
                        }}>
                        <li>We are committed to not posting and certainly not making money from oil and gas jobs. While we strive to keep such listings off our platform, our automated systems may occasionally miss them. We apologise for any inconvenience and assure you that we are continuously working to enhance our detection capabilities.</li>
                        <li>We&apos;re just getting started and it may take time to achieve our target match quality as we train our AI system, so 🐻 with us.</li>
                    </StyledList>



                    <DownBoxStyled>
                        <Box width={70} height={70}>
                            <RoundedImage>
                                <Image src={MattPicture} alt={'CEO picture'} width={70} height={70} />
                            </RoundedImage>
                        </Box>
                        <RightBoxStyled>

                            <CeoTypographyStyled>
                                <span style={{
                                    fontSize: '1.125rem',
                                    fontWeight: '600',
                                    color: 'rgba(16, 24, 40, 1)'
                                }}>
                                    Matt Florescu
                                </span>
                                <br />
                                <span style={{
                                    fontSize: '1rem',
                                    fontWeight: '400',
                                    color: 'rgba(80, 86, 98, 1)'
                                }}>
                                    Founder & CEO
                                </span>
                            </CeoTypographyStyled>

                            <IconBox>
                                <a href="https://twitter.com/matt_kablio" target="_blank" rel="noopener noreferrer">
                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g clip-path="url(#clip0_10403_103999)">
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M13.2889 19.1668L8.66435 12.5752L2.87503 19.1668H0.425781L7.57772 11.0261L0.425781 0.833496H6.71407L11.0726 7.04601L16.5337 0.833496H18.9829L12.1629 8.59723L19.5772 19.1668H13.2889ZM16.0164 17.3085H14.3674L3.93274 2.69183H5.5819L9.76107 8.54446L10.4838 9.56005L16.0164 17.3085Z" fill="#8A909C" />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_10403_103999">
                                                <rect width="20" height="20" fill="white" transform="translate(0.00195312)" />
                                            </clipPath>
                                        </defs>
                                    </svg>
                                </a>
                                <a href="https://www.linkedin.com/in/matt-florescu/" target="_blank" rel="noopener noreferrer">
                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M18.5195 0H1.47656C0.660156 0 0 0.644531 0 1.44141V18.5547C0 19.3516 0.660156 20 1.47656 20H18.5195C19.3359 20 20 19.3516 20 18.5586V1.44141C20 0.644531 19.3359 0 18.5195 0ZM5.93359 17.043H2.96484V7.49609H5.93359V17.043ZM4.44922 6.19531C3.49609 6.19531 2.72656 5.42578 2.72656 4.47656C2.72656 3.52734 3.49609 2.75781 4.44922 2.75781C5.39844 2.75781 6.16797 3.52734 6.16797 4.47656C6.16797 5.42188 5.39844 6.19531 4.44922 6.19531ZM17.043 17.043H14.0781V12.4023C14.0781 11.2969 14.0586 9.87109 12.5352 9.87109C10.9922 9.87109 10.7578 11.0781 10.7578 12.3242V17.043H7.79688V7.49609H10.6406V8.80078H10.6797C11.0742 8.05078 12.043 7.25781 13.4844 7.25781C16.4883 7.25781 17.043 9.23438 17.043 11.8047V17.043Z" fill="#8A909C" />
                                    </svg>
                                </a>
                                {/* <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M10.5 0C4.97939 0 0.5 4.47939 0.5 10C0.5 15.5206 4.97939 20 10.5 20C16.0098 20 20.5 15.5206 20.5 10C20.5 4.47939 16.0098 0 10.5 0ZM17.1052 4.60954C18.2983 6.06291 19.0141 7.91756 19.0358 9.92406C18.7538 9.86987 15.9338 9.295 13.0922 9.65294C13.0271 9.51194 12.9729 9.36006 12.9078 9.20825C12.7343 8.79613 12.5391 8.37313 12.3438 7.97181C15.4891 6.692 16.9208 4.84816 17.1052 4.60954ZM10.5 1.47506C12.6692 1.47506 14.654 2.28851 16.1616 3.62256C16.0097 3.83948 14.7191 5.56399 11.6822 6.70281C10.2831 4.13232 8.73213 2.0282 8.4935 1.70282C9.13338 1.55097 9.80587 1.47506 10.5 1.47506ZM6.86662 2.27766C7.09437 2.58134 8.61281 4.69631 10.0336 7.21256C6.0423 8.2755 2.51736 8.25381 2.13774 8.25381C2.69089 5.60738 4.48047 3.40564 6.86662 2.27766ZM1.95336 10.0109C1.95336 9.92406 1.95336 9.83731 1.95336 9.75056C2.32213 9.76137 6.46529 9.81563 10.7278 8.53581C10.9773 9.013 11.205 9.50106 11.4219 9.98913C11.3134 10.0217 11.1941 10.0542 11.0857 10.0868C6.68221 11.5076 4.33948 15.3904 4.14425 15.7158C2.7885 14.2083 1.95336 12.2018 1.95336 10.0109ZM10.5 18.5466C8.526 18.5466 6.70391 17.8742 5.26139 16.7462C5.41323 16.4317 7.14856 13.0911 11.9642 11.41C11.9859 11.3991 11.9968 11.3991 12.0184 11.3883C13.2223 14.5011 13.7104 17.1149 13.8406 17.8633C12.8102 18.308 11.6822 18.5466 10.5 18.5466ZM15.2614 17.0824C15.1746 16.5618 14.7191 14.0673 13.6019 10.9978C16.2809 10.5748 18.6236 11.269 18.9165 11.3666C18.5478 13.7419 17.1811 15.7917 15.2614 17.0824Z" fill="#8A909C" />
                        </svg> */}

                            </IconBox>
                        </RightBoxStyled>
                    </DownBoxStyled>

                </Box>
            </Box>
        </Box>
    )
}

export default AboutUS


