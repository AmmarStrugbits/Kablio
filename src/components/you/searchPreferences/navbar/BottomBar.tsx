"use client"

/*
| Developed by Reskue
| Filename: BottomBar.tsx
| Author: eric@reskue.art
*/

import { theme } from '@/MUI/Theme'
import BackButton from '@/components/quiz/BackButton'
import NextButton from '@/components/quiz/NextButton'
import { Box, styled, useMediaQuery } from '@mui/material'
import React from 'react'
import { useFormContext } from 'react-hook-form'



/*
|--------------------------------------------------------------------------
| Contracts
|--------------------------------------------------------------------------
*/
export interface BottomBarProps //extends buttonProps
{
    isAtStart?: boolean;
    isAtEnd?: boolean;
    onPrevious?: () => void;
    onNext?: () => void;
    onSubmit: () => void;
}

/*
|--------------------------------------------------------------------------
| Styles
|--------------------------------------------------------------------------
*/
const BottomBarBoxStyled = styled(Box)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: '4.375rem',

    position: 'fixed',
    bottom: 0,
    left: '25rem',
    right: 0,
    zIndex: '1',

    backgroundColor: 'white',
    border: '1px solid #00FBDF',
    [theme.breakpoints.down('lg')]: {
        left: '0rem',
        padding: '0rem 1rem',
        gap: '1rem',
        zIndex: 901,
    },
}))
const ButtonBoxStyled = styled(Box)(({ theme }) => ({
    width: '16rem',
    [theme.breakpoints.up('md')]: {
        display: 'flex',
        justifyContent: 'center',
        alignItem: 'center',
    },
}))


/*
|--------------------------------------------------------------------------
| Component
|--------------------------------------------------------------------------
*/
const BottomBar: React.FC<BottomBarProps> = ({ isAtStart, isAtEnd, onPrevious, onNext, onSubmit }) => {
    const matchesMobile = useMediaQuery(theme.breakpoints.down('lg'));
    const { handleSubmit } = useFormContext();

    return (
        <BottomBarBoxStyled>
            {matchesMobile ?
                <>
                    {!isAtStart && (
                        <ButtonBoxStyled>
                            <BackButton onClick={onPrevious}> Back </BackButton>
                        </ButtonBoxStyled>
                    )}
                    {!isAtEnd ? (
                        <ButtonBoxStyled>
                            <NextButton onClick={onNext}> Next </NextButton>
                        </ButtonBoxStyled>
                    ) : (
                        <ButtonBoxStyled>
                            <NextButton onClick={onSubmit}> Finish </NextButton>
                        </ButtonBoxStyled>
                    )}
                </>
                :
                <ButtonBoxStyled>
                    <NextButton onClick={handleSubmit(onSubmit)}> Save </NextButton>
                </ButtonBoxStyled>
            }
        </BottomBarBoxStyled>
    )
}
export default BottomBar
