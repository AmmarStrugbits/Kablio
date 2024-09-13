/*
| Developed by Reskue
| Filename: MinimumSalary.tsx
| Author: eric@reskue.art
*/

"use client"

import { SalaryWheel } from '@/components/salaryWheel/SalaryWheel'
import { Box, Typography } from '@mui/material'
import { styled } from '@mui/system'
import React from 'react'
import { useFormContext } from 'react-hook-form'

/*
|--------------------------------------------------------------------------
| Contracts
|--------------------------------------------------------------------------
*/
export interface MinimumSalaryProps //extends buttonProps
{
    children?: React.ReactNode
}
/*
|--------------------------------------------------------------------------
| Styles
|--------------------------------------------------------------------------
*/
const MinimumSalaryBoxStyled = styled(Box)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    [theme.breakpoints.up('md')]: {
    },
}))

const TextBoxStyled = styled(Box)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',

    marginTop: '1rem',
    [theme.breakpoints.up('md')]: {
    },
}))


const TypographyStyled = styled(Typography)(({ theme }) => ({
    fontFamily: 'Roboto',
    fontSize: '1rem',
    color: '#8A909C',
    [theme.breakpoints.up('md')]: {
    },
}))

/*
|--------------------------------------------------------------------------
| Component
|--------------------------------------------------------------------------
*/
const MinimumSalary: React.FC<MinimumSalaryProps> = () => {
    const { setValue, watch } = useFormContext();
    const minSalary = watch('minSalary');

    const handleSalaryChange = (salary: string) => {
        const num: number = Number(salary);
        setValue('minSalary', num);
    };

    // Render
    //--------------------------------------------------------------------------
    return (
        <MinimumSalaryBoxStyled>
            <SalaryWheel onSalaryChange={handleSalaryChange} initialSalary={minSalary} />
            <TextBoxStyled>
                <TypographyStyled sx={{ marginTop: '1rem' }}>🔒 We never share this info with anybody else</TypographyStyled>
                <TypographyStyled>⚔️ We just want to filter out jobs</TypographyStyled>
            </TextBoxStyled>
        </MinimumSalaryBoxStyled>
    )
}

export default MinimumSalary
