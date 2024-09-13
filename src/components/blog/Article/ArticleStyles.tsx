'use client'

import { Box, styled } from "@mui/material"


export const ArticleBoxStyled = styled(Box)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    // maxWidth: '1024px',
    padding: '1rem',
    paddingBottom: '1rem',
    gap: '1rem',
    [theme.breakpoints.down('md')]: {
        padding: '0.5rem',
    },
}))

export const MainArticleBoxStyled = styled(Box)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    maxWidth: '1024px',
    gap: '1rem',
    [theme.breakpoints.down('md')]: {
    },
}))


export const SubHeaderBoxStyled = styled(Box)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    gap: '1rem',
    [theme.breakpoints.down('md')]: {
    },
}))
export const Divider = styled(Box)(({ theme }) => ({
    height: '2px',
    background: 'black',
    width: '100%',
    [theme.breakpoints.down('md')]: {
    },
}))

export const AuthorBox = styled(Box)(({ theme }) => ({
    paddingLeft: '18%',
    alignSelf: 'flex-start',
    [theme.breakpoints.down('md')]: {
        paddingLeft: '1rem',
    },
}))