"use client"

// /*
// | Developed by Reskue
// | Filename: FooterSection.tsx
// | Author: eric@reskue.art
// */


// import React from 'react'
// import Image from 'next/image'

// import { Box, Button, Typography, styled } from '@mui/material'

// import GiantKablioLogo from '@/assets/images/GiantKablioLogo.png'
// import { KablioMiniLogo } from '@/assets/svgs/miniLogo'

// import Footer from '../Footer'
// import { theme } from '@/MUI/Theme'

// /*
// |--------------------------------------------------------------------------
// | Contracts
// |--------------------------------------------------------------------------
// */


// /*
// |--------------------------------------------------------------------------
// | Styles
// |--------------------------------------------------------------------------
// */

// const FooterSectionBoxStyled = styled(Box)(() => ({
//     display: 'flex',
//     flexDirection: 'column',
// }));

// /////////////////////////////////////////////////////////////////////////

// const BoxViewStyled = styled(Box)(() => ({
//     minHeight: '60vh',

//     display: "flex",
//     flexDirection: "column",
//     justifyContent: "space-between",

//     zIndex: "1",
//     bgcolor: "grey",
//     background: `linear-gradient(to bottom, rgba(0, 251, 223, 1), rgba(0, 251, 223, 0.74), rgba(1, 186, 248, 0.74))`,

//     '@media (max-height: 800px)': {
//         minHeight: '60vh',
//         gap: '1rem',
//         paddingTop: '2rem',
//     },
// }));

// const ContentBoxStyled = styled(Box)(() => ({
//     display: "flex",
//     flexDirection: "column",
//     alignItems: "center",
//     justifyContent: "center",
//     padding: "6rem 2rem",
//     gap: '1rem',
//     [theme.breakpoints.down('md')]: {
//         gap: '1.5rem',
//         margin: '5rem 0rem',
//         padding: "3rem 1rem",
//     },
// }))



// const ButtonStyled = styled(Button)(({ theme }) => ({
//     textTransform: "uppercase",
//     fontFamily: "Anton",
//     fontWeight: "500",
//     fontSize: "1.30rem",
//     padding: '2rem 4rem',
//     [theme.breakpoints.down('md')]: {
//         fontSize: "1.15rem"
//     },
//     [theme.breakpoints.down('sm')]: {
//         width: '100%',
//         fontSize: "1.15rem"
//     },
// }));

// const ImageBoxStyled = styled(Box)({
//     display: 'flex',
//     flexDirection: 'row',
//     justifyContent: 'center',

//     width: "99vw",
// });

// /*
// |--------------------------------------------------------------------------
// | Component
// |--------------------------------------------------------------------------
// */
// const FooterSection: React.FC = () => {
//     // Render
//     //--------------------------------------------------------------------------
//     return (
//         <FooterSectionBoxStyled>
//             <BoxViewStyled>
//                 <ContentBoxStyled>
//                     <TypographySubtitleStyled>
//                         Employers and recruiters pay us but...
//                     </TypographySubtitleStyled>
//                     <TypographyTitleStyled>WE ARE ON YOUR SIDE</TypographyTitleStyled>
//                     <ButtonStyled
//                         href='/account/matches'
//                         variant="contained"
//                         startIcon={<KablioMiniLogo />}
//                     >
//                         See my matches
//                     </ButtonStyled>
//                 </ContentBoxStyled>
//                 <ImageBoxStyled>
//                     <Image
//                         src={GiantKablioLogo}
//                         alt="Big Kablio Logo"
//                         layout="intrinsic"
//                     />
//                 </ImageBoxStyled>
//             </BoxViewStyled>
//             <Footer />

//         </FooterSectionBoxStyled >
//     )
// }

// export default FooterSection


/*
| Developed by Reskue
| Filename: FooterSection.tsx
| Author: eric@reskue.art
*/

import React from 'react'
import Image from 'next/image'

import { Box, Button, Typography, styled } from '@mui/material'

import GiantKablioLogo from '@/assets/images/GiantKablioLogo.png'
import { KablioMiniLogo } from '@/assets/svgs/miniLogo'
import Footer from '../Footer'


/*
|--------------------------------------------------------------------------
| Contracts
|--------------------------------------------------------------------------
*/
export interface FooterSectionEmployerRecruiterProps //extends buttonProps
{
    children?: React.ReactNode
}
/*
|--------------------------------------------------------------------------
| Styles
|--------------------------------------------------------------------------
*/

const FooterSectionBoxStyled = styled(Box)(() => ({
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
}));

/////////////////////////////////////////////////////////////////////////

const BoxViewStyled = styled(Box)(() => ({
    zIndex: "1",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100vw",
    background: `linear-gradient(to bottom, rgba(0, 251, 223, 1), rgba(0, 251, 223, 0.74), rgba(1, 186, 248, 0.74))`,
    minHeight: '80vh',
    '@media (max-height: 800px)': {
        minHeight: '70vh',
        gap: '1rem',
        paddingTop: '2rem',
    },
}));

const ContentBoxStyled = styled(Box)(({ theme }) => ({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: "1.5rem",
    lineHeight: '0.7',
    marginTop: "4rem",
    paddingLeft: '1rem',
    paddingRight: '1rem',
    // width: '50rem',
    [theme.breakpoints.down('md')]: {
        marginTop: "2rem",
        gap: "1rem",

        width: '100%',
    },
}))

const TypographyTitleStyled = styled(Typography)(({ theme }) => ({
    textAlign: "center",
    fontFamily: "Anton",
    fontSize: "6.25rem",
    color: "black",
    [theme.breakpoints.down('lg')]: {
        fontSize: "3.5rem",
    },
    [theme.breakpoints.down('md')]: {
        fontSize: "2.5rem",
    },
    [theme.breakpoints.down('xs')]: {
        fontSize: "1.5rem",
    },
}))

const TypographySubtitleStyled = styled(Typography)(({ theme }) => ({
    display: "block",
    textAlign: "center",
    fontFamily: "Roboto",
    fontSize: "1.25rem",
    color: "#505662",
    padding: "0rem 1rem 0rem 1rem",
    [theme.breakpoints.down('md')]: {
        padding: "0rem 1.5rem 0rem 1.5rem",
    },
}))

const ButtonBoxStyled = styled(Box)(({ theme }) => ({
    display: "flex",
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    gap: "2.5rem",
    [theme.breakpoints.down('md')]: {
        flexDirection: 'column',
        gap: "1.5rem",
    },
}));

const ButtonStyled = styled(Button)(({ theme }) => ({
    maxWidth: '450px',
    fontWeight: 'normal',
    [theme.breakpoints.down('md')]: {
        paddingLeft: "1rem",
        paddingRight: "1rem",
        width: "100%"
    },
}));

const ImageBoxStyled = styled(Box)({
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',

    width: "100vw",
});

/*
|--------------------------------------------------------------------------
| Component
|--------------------------------------------------------------------------
*/
const FooterSectionEmployerRecruiter: React.FC<FooterSectionEmployerRecruiterProps> = () => {
    // Render
    //--------------------------------------------------------------------------
    return (
        <FooterSectionBoxStyled>

            <BoxViewStyled>
                <ContentBoxStyled>

                    <TypographySubtitleStyled>
                        Employers and recruiters pay us but...
                    </TypographySubtitleStyled>
                    <TypographyTitleStyled>WE ARE ON YOUR SIDE</TypographyTitleStyled>

                    <ButtonBoxStyled>
                        <ButtonStyled
                            href='/account/matches'
                            variant="contained"
                            startIcon={<KablioMiniLogo />}
                        >
                            See my matches
                        </ButtonStyled>
                    </ButtonBoxStyled>
                </ContentBoxStyled>
                <ImageBoxStyled>
                    <Image
                        src={GiantKablioLogo}
                        alt="Big Kablio Logo"
                        layout="intrinsic"
                    />
                </ImageBoxStyled>
            </BoxViewStyled>

            <Footer />

        </FooterSectionBoxStyled >
    )
}

export default FooterSectionEmployerRecruiter
