/*
| Developed by Reskue
| Filename: page.tsx
| Author: eric@reskue.art
*/

// 'use client'

import React, { useState } from 'react'
import { Box, Button, Checkbox, FormControl, FormControlLabel, InputBase, InputLabel, MenuItem, Select, Typography, styled, useMediaQuery } from '@mui/material'
import { theme } from '@/MUI/Theme'
import { useFormContext } from 'react-hook-form';
import { sendEmail } from '@/services/talkToUs/talkToUs';
import { KablioMiniLogo } from '@/assets/svgs/miniLogo';

import { MuiTelInput } from 'mui-tel-input'
import Link from 'next/link';
import { enqueueSnackbar } from 'notistack';


/*
|--------------------------------------------------------------------------
| Contracts
|--------------------------------------------------------------------------
*/

export interface TalkToUsData {
    firstName: string;
    lastName: string;
    email: string;
    phoneNumber: number;
    message: string;
    privacyPolicyAgreement: boolean;
}

const validationRules = {
    firstName: {
        required: "First Name is required",
        minLength: { value: 1, message: "Name must be at least 1 characters" },
        maxLength: { value: 50, message: "Name must be less than 50 characters" },
    },
    lastName: {
        required: "Last Name is required",
        minLength: { value: 1, message: "Name must be at least 1 characters" },
        maxLength: { value: 50, message: "Name must be less than 50 characters" },
    },
    email: {
        required: "Email is required",
        pattern: {
            value: /^[^@\s]+@[^@\s]+\.[^@\s]+$/,
            message: "Invalid email format",
        },
    },
    phoneNumber: {
    },
    privacyPolicyAgreement: {
        required: 'Agreement is required',
        message: "You must agree to our friendly privacy policy.",
    },
    message: {
        required: "Message is required",
        minLength: { value: 10, message: "Message must be at least 10 characters" },
        maxLength: { value: 10000, message: "Message must be at least 10000 characters" },
    },
};

/*
|--------------------------------------------------------------------------
| Styles
|--------------------------------------------------------------------------
*/


const TalkToUsBoxStyled = styled(Box)(({ theme }) => ({
    display: "flex",
    width: "100vw",
    // height: '100vh',
    justifyContent: "center",
    background: `linear-gradient(to bottom, rgba(0, 251, 223, 1), rgba(0, 251, 223, 0.74), rgba(1, 186, 248, 0.74))`,

    [theme.breakpoints.down('md')]: {

    },

}))

const TypographyTitleStyled = styled(Typography)(() => ({
    textAlign: "center",
    fontFamily: "Anton",
    fontSize: "1.875rem",
    color: "black"
}))

const TypographySubtitleStyled = styled(Typography)(() => ({
    textAlign: "left",
    fontFamily: "Roboto",
    fontSize: "1rem",
    color: "black",
    marginBottom: "1.5rem"
}))

const FormStyled = styled('form')(() => ({
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    borderRadius: "10px",
    gap: "0.5rem",
}));

const LabelStyled = styled(InputLabel)(() => ({
    textAlign: "left",
    fontFamily: "Roboto",
    fontSize: "1.3rem",
    color: "black",
    marginLeft: "0.8rem"

}));

const InputFieldStyled = styled(InputBase)(({ theme }) => ({
    'label + &': {
        marginTop: theme.spacing(3),
    },
    '& .MuiInputBase-input': {
        borderRadius: 4,
        position: 'relative',
        background: `#e4faf7`,
        fontSize: 16,
        padding: '10px 12px',
        '&:focus': {
            background: `white`,
            borderColor: '#00FBDF'
        },
        '&:hover': {
            background: `white`,
            boxShadow: '0 0 8px 0 #00FBDF',
        }
    },
}));

const MuiTelInputStyled = styled(MuiTelInput)(({ theme }) => ({
    'label + &': {
        marginTop: theme.spacing(3),
    },
    '& .MuiInputBase-input': {
        borderRadius: 4,
        position: 'relative',
        background: `#e4faf7`,
        fontSize: 16,
        padding: '10px 12px',
        '&:focus': {
            background: `white`,
            borderColor: '#00FBDF'
        },
        '&:hover': {
            background: `white`,
            boxShadow: '0 0 8px 0 #00FBDF',
        }
    },
}));

const ErrorTypography = styled(Typography)(() => ({
    marginTop: "0.5rem",
    marginLeft: "0.5rem",
}));

/*
|--------------------------------------------------------------------------
| Component
|--------------------------------------------------------------------------
*/
const TalkToUs: React.FC = () => {
    const matchesMobile = useMediaQuery(theme.breakpoints.down('md'));
    const { register, handleSubmit, formState: { errors } } = useFormContext<TalkToUsData>();

    const handleFormSubmit = async (data: TalkToUsData) => {
        try {
            await sendEmail(data);
            enqueueSnackbar('Email sent successfully', { variant: 'success' });
        } catch (error) {
            enqueueSnackbar('Failed to send email', { variant: 'error' });
        }
    }

    const [value, setValue] = useState<string>('')

    const handleChange = (newValue: string) => {
        setValue(newValue)
    }
    // Render
    //--------------------------------------------------------------------------
    return (
        <TalkToUsBoxStyled>
            <Box
                display={"flex"}
                flexDirection={"column"}
                alignItems={"center"}
                width={"44.4375rem"}
                bgcolor={"white"}
                borderRadius={"0.625rem"}
                margin={matchesMobile ? 2 : 10}
                p={4}
                gap={"1rem"}
            >
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center ',
                        gap: '1rem',
                    }}
                >
                    <TypographyTitleStyled>Get in touch</TypographyTitleStyled>
                    <TypographySubtitleStyled>
                        Please fill out this form or email us at
                        <span style={{ color: 'rgba(0, 251, 223, 1)', fontWeight: '600' }}> hi@kablio.com</span>
                    </TypographySubtitleStyled>

                </Box>
                <FormStyled onSubmit={handleSubmit(handleFormSubmit)}>

                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'row',
                            gap: '1rem'
                        }}
                    >
                        <FormControl variant="standard" fullWidth>
                            <LabelStyled shrink htmlFor="firstName-input">First name</LabelStyled>
                            <InputFieldStyled
                                id="firstName-input"
                                {...register("firstName", validationRules.firstName)}
                                error={!!errors.firstName}
                            />
                            {errors.firstName && <ErrorTypography color="error">{errors.firstName.message}</ErrorTypography>}
                        </FormControl>

                        <FormControl variant="standard" fullWidth>
                            <LabelStyled shrink htmlFor="lastName-input">Last Name</LabelStyled>
                            <InputFieldStyled
                                id="lastName-input"
                                {...register("lastName", validationRules.lastName)}
                                error={!!errors.lastName}
                            />
                            {errors.lastName && <ErrorTypography color="error">{errors.lastName.message}</ErrorTypography>}
                        </FormControl>

                    </Box>
                    <FormControl variant="standard" fullWidth>
                        <LabelStyled shrink htmlFor="email-input">Email</LabelStyled>
                        <InputFieldStyled
                            id="email-input"
                            {...register("email", validationRules.email)}
                            error={!!errors.email}
                        />
                        {errors.email && <ErrorTypography color="error">{errors.email.message}</ErrorTypography>}
                    </FormControl>

                    <LabelStyled shrink htmlFor="message-input">Phone Number</LabelStyled>
                    <FormControl variant="standard" fullWidth>
                        <MuiTelInputStyled value={value} onChange={handleChange} />
                    </FormControl>

                    <FormControl variant="standard" fullWidth>
                        <LabelStyled shrink htmlFor="message-input">Message</LabelStyled>
                        <InputFieldStyled
                            multiline
                            rows={3}
                            id="message-input"
                            {...register("message", validationRules.message)}
                            error={!!errors.message}
                        />
                        {errors.message && <ErrorTypography color="error">{errors.message.message}</ErrorTypography>}
                    </FormControl>


                    <FormControlLabel
                        control={
                            <Checkbox
                                {...register("privacyPolicyAgreement", { required: true })}
                                defaultChecked={false}
                                color="primary"
                            />
                        }
                        label={
                            <>
                                You agree to our friendly{' '}
                                <Link href="/privacy" target="_blank" rel="noopener noreferrer" >
                                    <Typography sx={{ textDecoration: 'underline' }}>privacy policy</Typography>
                                </Link>
                                .
                            </>
                        }
                    />
                    {errors.privacyPolicyAgreement && (
                        <ErrorTypography color="error">{validationRules.privacyPolicyAgreement.message}</ErrorTypography>
                    )}
                    <Button
                        onSubmit={handleSubmit(handleFormSubmit)}
                        sx={{ width: "100%", marginTop: "1rem", fontFamily: "Anton", fontWeight: 'normal', letterSpacing: '0.05rem', }}
                        variant='contained'
                        type="submit"
                        startIcon={<KablioMiniLogo />}
                    >
                        Send message
                    </Button>


                </FormStyled >
            </Box>
        </TalkToUsBoxStyled >)
}

export default TalkToUs
