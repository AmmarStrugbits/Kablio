"use client"

/*
| Developed by Reskue
| Filename: ContactUs.tsx
| Author: eric@reskue.art
*/

import React from 'react'
import TalkToUs, { TalkToUsData } from '../TalkToUs/TalkToUs';
import { FormProvider, useForm } from 'react-hook-form';
//import { styled } from '@mui/material'

/*
|--------------------------------------------------------------------------
| Contracts
|--------------------------------------------------------------------------
*/
export interface ContactUsProps //extends buttonProps
{
    children?: React.ReactNode
}
/*
|--------------------------------------------------------------------------
| Styles
|--------------------------------------------------------------------------
*/
//const ContactUsStyled = styled(Button)(({ theme }) => ({
//borderColor: theme.palette.primary.main,
//[theme.breakpoints.up('md')]: {
//borderColor: theme.palette.secondary.main,
//},
//}))

/*
|--------------------------------------------------------------------------
| Component
|--------------------------------------------------------------------------
*/
const ContactUs: React.FC<ContactUsProps> = ({  }) => {
    const methods = useForm<TalkToUsData>();

    // Render
    //--------------------------------------------------------------------------
    return (

        <FormProvider {...methods}>
            <TalkToUs />
        </FormProvider>
    )
}

export default ContactUs
