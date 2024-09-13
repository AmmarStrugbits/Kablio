"use client"
/*
| Developed by Reskue
| Filename: FooterArticle.tsx
| Author: eric@reskue.art
*/

import { Box, Typography, styled } from '@mui/material'
import React from 'react'
import TagArticle from '../ArticleCard/TagArticle';
import CopyUrlButton from './CopyLink';
import IconBox from './IconBox';
import Image from 'next/image';

import MattPicture from '@/assets/images/MattPicture.jpg'
import ShareIcon from './ShareIcon';
import KablioSignUp from './KablioSignUp';
//import { styled } from '@mui/material'

/*
|--------------------------------------------------------------------------
| Contracts
|--------------------------------------------------------------------------
*/
export interface FooterArticleProps //extends buttonProps
{
    articlesTags: string[];
}
/*
|--------------------------------------------------------------------------
| Styles
|--------------------------------------------------------------------------
*/
const FooterArticleBoxStyled = styled(Box)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
    maxWidth: '642px',
    padding: '1rem',
    [theme.breakpoints.down('md')]: {
    },
}))


const UpBoxStyled = styled(Box)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    [theme.breakpoints.down('md')]: {
        flexDirection: 'column-reverse',
        justifyContent: 'space-between',

        alignItems: 'flex-start',
        gap: '1rem'
    },
}))


const TagsBoxStyled = styled(Box)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: '0.5rem',
    [theme.breakpoints.down('md')]: {
    },
}))

const Divider = styled(Box)(({ theme }) => ({
    height: '2px',
    background: '#EAECF0',
    width: '100%',
    [theme.breakpoints.down('md')]: {
    },
}))

const DownBoxStyled = styled(Box)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: '1rem',
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
    flexDirection: 'row',
    alignItems: 'center',
    gap: '1rem',
    [theme.breakpoints.down('md')]: {
        flexDirection: 'column-reverse',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
    },
}))

const CeoTypographyStyled = styled(Typography)(({ theme }) => ({

    fontFamily: 'Roboto',
    fontSize: '1rem',
    color: '#505662',
    [theme.breakpoints.down('md')]: {
        fontSize: '0.875rem',

    },
}))

/*
|--------------------------------------------------------------------------
| Component
|--------------------------------------------------------------------------
*/
const FooterArticle: React.FC<FooterArticleProps> = (props: FooterArticleProps) => {

    // Render
    //--------------------------------------------------------------------------
    return (
        <FooterArticleBoxStyled>
            <UpBoxStyled>
                <TagsBoxStyled>
                    {props.articlesTags?.map((tag, index) => (
                        <TagArticle key={index} tag={tag} backgroundColor='#F5F4ED' textColor={'#8A909C'} />
                    ))}
                </TagsBoxStyled>
                <IconBox>
                    <CopyUrlButton
                        icon={
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                                <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h11a2 2 0 0 1 2 2v1"></path>
                            </svg>
                        }>
                        Copy link
                    </CopyUrlButton>
                    <ShareIcon
                        platform='twitter'
                        icon={
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
                        } />
                    <ShareIcon
                        platform='whatsapp'
                        icon={
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M17.079 2.928C15.193 1.041 12.685 0.001 10.013 0C4.50695 0 0.0259532 4.479 0.0239532 9.985C0.0229532 11.745 0.482953 13.463 1.35695 14.977L0.00195312 20L5.23495 18.763C6.69395 19.559 8.33595 19.978 10.008 19.979H10.012C15.517 19.979 19.998 15.499 20.001 9.994C20.003 7.325 18.965 4.816 17.079 2.928ZM14.9 13.554C14.692 14.137 13.673 14.699 13.215 14.74C12.757 14.782 12.328 14.947 10.22 14.116C7.68295 13.116 6.08095 10.515 5.95695 10.349C5.83195 10.182 4.93795 8.996 4.93795 7.768C4.93795 6.54 5.58295 5.936 5.81195 5.687C6.04095 5.437 6.31095 5.375 6.47795 5.375C6.64395 5.375 6.81095 5.375 6.95595 5.381C7.13395 5.388 7.33095 5.397 7.51795 5.812C7.73995 6.306 8.22495 7.54 8.28695 7.665C8.34895 7.79 8.39095 7.936 8.30795 8.102C8.22495 8.268 8.18295 8.372 8.05895 8.518C7.93395 8.664 7.79695 8.843 7.68495 8.955C7.55995 9.079 7.42995 9.215 7.57495 9.464C7.72095 9.714 8.22095 10.531 8.96295 11.192C9.91695 12.042 10.72 12.305 10.97 12.431C11.22 12.556 11.365 12.535 11.511 12.368C11.657 12.202 12.135 11.64 12.301 11.39C12.467 11.14 12.634 11.182 12.863 11.265C13.092 11.348 14.319 11.952 14.568 12.077C14.818 12.202 14.984 12.264 15.046 12.368C15.108 12.471 15.108 12.971 14.9 13.554Z" fill="#8A909C" />
                            </svg>
                        } />
                    <ShareIcon
                        platform='linkedin'
                        icon={
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M18.5195 0H1.47656C0.660156 0 0 0.644531 0 1.44141V18.5547C0 19.3516 0.660156 20 1.47656 20H18.5195C19.3359 20 20 19.3516 20 18.5586V1.44141C20 0.644531 19.3359 0 18.5195 0ZM5.93359 17.043H2.96484V7.49609H5.93359V17.043ZM4.44922 6.19531C3.49609 6.19531 2.72656 5.42578 2.72656 4.47656C2.72656 3.52734 3.49609 2.75781 4.44922 2.75781C5.39844 2.75781 6.16797 3.52734 6.16797 4.47656C6.16797 5.42188 5.39844 6.19531 4.44922 6.19531ZM17.043 17.043H14.0781V12.4023C14.0781 11.2969 14.0586 9.87109 12.5352 9.87109C10.9922 9.87109 10.7578 11.0781 10.7578 12.3242V17.043H7.79688V7.49609H10.6406V8.80078H10.6797C11.0742 8.05078 12.043 7.25781 13.4844 7.25781C16.4883 7.25781 17.043 9.23438 17.043 11.8047V17.043Z" fill="#8A909C" />
                            </svg>
                        } />
                </IconBox>
            </UpBoxStyled>
            <Divider></Divider>
            <DownBoxStyled>
                <Box width={70} height={70}>
                    <RoundedImage>
                        <Image src={MattPicture} alt={'CEO picture'} width={70} height={70} />
                    </RoundedImage>
                </Box>
                <RightBoxStyled>
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
                        {/* <a href="https://www.linkedin.com/in/matt-florescu/" target="_blank" rel="noopener noreferrer">
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M18.5195 0H1.47656C0.660156 0 0 0.644531 0 1.44141V18.5547C0 19.3516 0.660156 20 1.47656 20H18.5195C19.3359 20 20 19.3516 20 18.5586V1.44141C20 0.644531 19.3359 0 18.5195 0ZM5.93359 17.043H2.96484V7.49609H5.93359V17.043ZM4.44922 6.19531C3.49609 6.19531 2.72656 5.42578 2.72656 4.47656C2.72656 3.52734 3.49609 2.75781 4.44922 2.75781C5.39844 2.75781 6.16797 3.52734 6.16797 4.47656C6.16797 5.42188 5.39844 6.19531 4.44922 6.19531ZM17.043 17.043H14.0781V12.4023C14.0781 11.2969 14.0586 9.87109 12.5352 9.87109C10.9922 9.87109 10.7578 11.0781 10.7578 12.3242V17.043H7.79688V7.49609H10.6406V8.80078H10.6797C11.0742 8.05078 12.043 7.25781 13.4844 7.25781C16.4883 7.25781 17.043 9.23438 17.043 11.8047V17.043Z" fill="#8A909C" />
                            </svg>
                        </a>  */}
                        <a href="https://mattflo.beehiiv.com/" target="_blank" rel="noopener noreferrer">
                            <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M10.5 0C4.97939 0 0.5 4.47939 0.5 10C0.5 15.5206 4.97939 20 10.5 20C16.0098 20 20.5 15.5206 20.5 10C20.5 4.47939 16.0098 0 10.5 0ZM17.1052 4.60954C18.2983 6.06291 19.0141 7.91756 19.0358 9.92406C18.7538 9.86987 15.9338 9.295 13.0922 9.65294C13.0271 9.51194 12.9729 9.36006 12.9078 9.20825C12.7343 8.79613 12.5391 8.37313 12.3438 7.97181C15.4891 6.692 16.9208 4.84816 17.1052 4.60954ZM10.5 1.47506C12.6692 1.47506 14.654 2.28851 16.1616 3.62256C16.0097 3.83948 14.7191 5.56399 11.6822 6.70281C10.2831 4.13232 8.73213 2.0282 8.4935 1.70282C9.13338 1.55097 9.80587 1.47506 10.5 1.47506ZM6.86662 2.27766C7.09437 2.58134 8.61281 4.69631 10.0336 7.21256C6.0423 8.2755 2.51736 8.25381 2.13774 8.25381C2.69089 5.60738 4.48047 3.40564 6.86662 2.27766ZM1.95336 10.0109C1.95336 9.92406 1.95336 9.83731 1.95336 9.75056C2.32213 9.76137 6.46529 9.81563 10.7278 8.53581C10.9773 9.013 11.205 9.50106 11.4219 9.98913C11.3134 10.0217 11.1941 10.0542 11.0857 10.0868C6.68221 11.5076 4.33948 15.3904 4.14425 15.7158C2.7885 14.2083 1.95336 12.2018 1.95336 10.0109ZM10.5 18.5466C8.526 18.5466 6.70391 17.8742 5.26139 16.7462C5.41323 16.4317 7.14856 13.0911 11.9642 11.41C11.9859 11.3991 11.9968 11.3991 12.0184 11.3883C13.2223 14.5011 13.7104 17.1149 13.8406 17.8633C12.8102 18.308 11.6822 18.5466 10.5 18.5466ZM15.2614 17.0824C15.1746 16.5618 14.7191 14.0673 13.6019 10.9978C16.2809 10.5748 18.6236 11.269 18.9165 11.3666C18.5478 13.7419 17.1811 15.7917 15.2614 17.0824Z" fill="#8A909C" />
                            </svg>
                        </a>

                    </IconBox>
                    <CeoTypographyStyled>
                        <span style={{ fontWeight: '700' }}>Matt </span>
                        is the CEO/Founder of Kablio
                    </CeoTypographyStyled>
                </RightBoxStyled>
            </DownBoxStyled>
            <KablioSignUp />
        </FooterArticleBoxStyled >
    )
}

export default FooterArticle
