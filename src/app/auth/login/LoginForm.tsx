/*
| Developed by Reskue
| Filename: LoginForm.tsx
| Author: eric@reskue.art
*/

'use client'

import React, { useState } from 'react'
import { useFormContext } from 'react-hook-form'
import { Box, Button, FormControl, IconButton, InputAdornment, InputBase, InputLabel, OutlinedInput, Typography, styled } from '@mui/material'

import { Visibility, VisibilityOff } from '@mui/icons-material'
import validationRules from '@/components/quiz/ValidationRules.register'
import { useAuth } from '@/hooks/useAuth'
import { UserLoginData } from '@/shared/interfaces/User.interfaces'

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

const FormBoxStyled = styled(Box)(({ theme }) => ({
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: 'center',
    maxWidth: '40rem',
    width: '100%',
    gap: '1.5rem',
    [theme.breakpoints.down('md')]: {
    },
}));

const FormStyled = styled('form')(() => ({
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    borderRadius: "10px",
    width: '100%',
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

const OutlinedInputStyled = styled(OutlinedInput)(({ theme }) => ({
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
    '& .MuiOutlinedInput-notchedOutline': {
        border: 'none',
    },
}));

const ErrorTypography = styled(Typography)(() => ({
    marginTop: "0.5rem",
    marginLeft: "0.5rem",
}));

const LinkStyled = styled('a')(() => ({
    fontFamily: 'Roboto',
    fontSize: '0.875rem',
    textDecoration: 'underline',
}));

/*
|--------------------------------------------------------------------------
| Component
|--------------------------------------------------------------------------
*/

const LoginForm: React.FC = () => {

    const [showPassword, setShowPassword] = useState(false);
    const { register, handleSubmit, formState: { errors } } = useFormContext<UserLoginData>();
    const { login } = useAuth();
    const [authError, setAuthError] = useState<string | null>(null);

    const onSubmit = async (userLoginData: UserLoginData) => {
        try {
            await login(userLoginData.email, userLoginData.password);
            setAuthError(null);
        } catch (error) {
            setAuthError('Authentication failed. Please check your credentials.');
        }
    };

    const handleFormSubmit = (data: UserLoginData) => {
        onSubmit(data);
    };

    const handleClickShowPassword = () => {
        setShowPassword(!showPassword);
    };

    const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
    };

    // Render
    //--------------------------------------------------------------------------
    return (
        <FormBoxStyled>
            <FormStyled onSubmit={handleSubmit(handleFormSubmit)}>

                <FormControl variant="standard" fullWidth>
                    <LabelStyled shrink htmlFor="email-input">Email</LabelStyled>
                    <InputFieldStyled
                        id="email-input"
                        {...register("email", validationRules.email)}
                        error={!!errors.email}
                    />
                    {errors.email && <ErrorTypography color="error">{errors.email.message}</ErrorTypography>}
                </FormControl>

                <FormControl variant="standard" fullWidth>
                    <LabelStyled shrink htmlFor="password-input">Password</LabelStyled>
                    <OutlinedInputStyled
                        id='password'
                        type={showPassword ? 'text' : 'password'}
                        sx={{ border: "none !important" }}
                        endAdornment={
                            <InputAdornment position="end">
                                <IconButton
                                    aria-label="toggle password visibility"
                                    onClick={handleClickShowPassword}
                                    onMouseDown={handleMouseDownPassword}
                                    edge="end"
                                >
                                    {showPassword ? <VisibilityOff /> : <Visibility />}
                                </IconButton>
                            </InputAdornment>
                        }
                        {...register('password', validationRules.password)}
                    />
                    {errors.password && <ErrorTypography color="error">{errors.password.message}</ErrorTypography>}
                    {authError && <ErrorTypography color="error">{authError}</ErrorTypography>}
                </FormControl>
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        marginTop: '1rem',
                    }}
                >
                    <LinkStyled href={'/auth/recover'}>Forgot your password?</LinkStyled>
                </Box>
                <Button
                    type="submit"
                    sx={{
                        background: 'linear-gradient(180deg, #00FBDF 28.18%, rgba(0, 251, 223, 0.74) 62.22%, rgba(1, 186, 248, 0.74) 100%)',
                        color: 'black',
                        width: "100%",
                        marginTop: "1.1rem",
                        fontFamily: "Roboto",
                        fontWeight: 'bolder',
                        '&:hover': {
                            background: 'linear-gradient(180deg, #00FBDF 28.18%, rgba(0, 251, 223, 0.74) 62.22%, rgba(1, 186, 248, 0.74) 100%)',
                        }
                    }}
                >
                    Let&apos;s Go
                </Button>

            </FormStyled >
        </FormBoxStyled >)
}

export default LoginForm