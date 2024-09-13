"use client"
/*
| Developed by Reskue
| Filename: AuthorSpace.tsx
| Author: eric@reskue.art
*/

import { Box, Typography, styled } from '@mui/material'
import Image from 'next/image';
import React from 'react'
import Unknown from '@/assets/images/blog/Unknown.jpg'

/*
|--------------------------------------------------------------------------
| Contracts
|--------------------------------------------------------------------------
*/
export interface AuthorSpaceProps //extends buttonProps
{
    children?: React.ReactNode;
    publicationDate: string;
    authorAvatar: string | null | undefined;
    authorName: string;
}
/*
|--------------------------------------------------------------------------
| Styles
|--------------------------------------------------------------------------
*/
const AuthorSpaceStyled = styled(Box)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    gap: '1rem',
    alignSelf: 'flex-start',
    [theme.breakpoints.down('md')]: {
    },
}))

const AuthorNameAndDateBoxStyled = styled(Box)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    [theme.breakpoints.down('md')]: {
    },
}))
const RoundedImage = styled('div')({
    width: 40,
    height: 40,
    borderRadius: '50%',
    overflow: 'hidden',
})
/*
|--------------------------------------------------------------------------
| Component
|--------------------------------------------------------------------------
*/
const AuthorSpace: React.FC<AuthorSpaceProps> = (props: AuthorSpaceProps) => {

    // Render
    //--------------------------------------------------------------------------
    return (
        <AuthorSpaceStyled>
            <RoundedImage>
                <Image src={props.authorAvatar || Unknown} alt={'Author Image'} width={40} height={40} />
            </RoundedImage>
            <AuthorNameAndDateBoxStyled>
                <Typography
                    sx={{
                        fontFamily: 'Inter',
                        fontSize: '0.875',
                        fontWeight: '600',
                        color: '#101828',
                    }}
                >{props.authorName}</Typography>
                <Typography
                    sx={{
                        fontFamily: 'Inter',
                        fontSize: '0.875',
                        color: '#667085',
                    }}
                >{props.publicationDate}</Typography>
            </AuthorNameAndDateBoxStyled>
        </AuthorSpaceStyled>
    )
}

export default AuthorSpace
