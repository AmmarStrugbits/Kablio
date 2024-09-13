/*
| Developed by Reskue
| Filename: RegisterForm.tsx
| Author: eric@reskue.art
*/

import React, { useState } from 'react'
import { useFormContext } from 'react-hook-form'
import { Box, Button, FormControl, IconButton, InputAdornment, InputBase, InputLabel, MenuItem, OutlinedInput, Select, Typography, styled } from '@mui/material'
import validationRules from './ValidationRules.register'
import { ISO31661Alpha2ToCountryName } from '@/shared/enum/CountryCode.enum'
import { Visibility, VisibilityOff } from '@mui/icons-material'
import { UserData } from '@/shared/interfaces/User.interfaces'
import { useQuizContext } from '@/app/auth/signup/QuizContext'
import Disclaimer from '@/app/auth/signup/Disclaimer'
import { enqueueSnackbar } from 'notistack'

/*
|--------------------------------------------------------------------------
| Contracts
|--------------------------------------------------------------------------
*/

export interface FormProps {
    setEmailSend: (emailSend: boolean) => void;
    children?: React.ReactNode
}

/*
|--------------------------------------------------------------------------
| Styles
|--------------------------------------------------------------------------
*/

const FormBoxStyled = styled(Box)(({ theme }) => ({
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    backgroundColor: "#F9F9F9",
    borderRadius: "10px",
    width: "100%",
    height: "auto",
    gap: "0.6rem",
    // padding: "1.88rem 2.5rem 1.88rem 2.5rem",
    margin: "2",
    marginTop: "10",

    [theme.breakpoints.down('md')]: {
        // padding: "1.88rem 0.5rem 1.88rem 0.5rem",
    },
}));

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


const SelectStyled = styled(Select)(({ theme }) => ({
    'label + &': {
        marginTop: theme.spacing(3),
    },
    '& .MuiSelect-root': {
        '&:before': {
            borderBottom: 'none !important',
        }
    },
    '& .MuiInputBase-input': {
        borderRadius: 4,
        position: 'relative',
        background: `#e4faf7`,
        fontSize: 16,
        padding: '10px 12px',
        borderBottom: 'none !important',
        '&:focus': {
            background: `white`,
            borderColor: '#00FBDF'
        },
        '&:hover': {
            background: `white`,
            boxShadow: '0 0 8px 0 #00FBDF',
        }
    },
    marginBottom: '1rem'
}));

const MenuItemStyled = styled(MenuItem)(() => ({
}));


const ButtonStyled = styled(Button)(({ theme }) => ({
    background: 'linear-gradient(180deg, #00FBDF 28.18%, rgba(0, 251, 223, 0.74) 62.22%, rgba(1, 186, 248, 0.74) 100%)',
    color: 'black',
    width: "100%",
    height: '50px',
    marginTop: "1.1rem",
    fontFamily: "Roboto",
    fontWeight: 'bolder',
    '&:hover': {
        background: 'linear-gradient(180deg, #00FBDF 28.18%, rgba(0, 251, 223, 0.74) 62.22%, rgba(1, 186, 248, 0.74) 100%)',
    },

    [theme.breakpoints.down('md')]: {
        height: '40px',
    },
}));
/*
|--------------------------------------------------------------------------
| Component
|--------------------------------------------------------------------------
*/
const RegisterForm: React.FC<FormProps> = (props: FormProps) => {
    const { setEmailSend } = props;
    const [showPassword, setShowPassword] = useState(false);
    const { register, handleSubmit, formState: { errors } } = useFormContext<UserData>();
    const { onSubmit } = useQuizContext();

    const handleFormSubmit = async (data: UserData) => {
        try {
            await onSubmit(data);
            setEmailSend(true);
        } catch (error) {
            enqueueSnackbar('User already registered', { variant: 'error' });
        }
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
                    <LabelStyled shrink htmlFor="firstName-input">First Name</LabelStyled>
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
                    <LabelStyled shrink htmlFor="linkedin-input">Linkedin URL</LabelStyled>
                    <InputFieldStyled
                        id="linkedin-input"
                        {...register("socialMedia.linkedin", validationRules.linkedin)}
                        error={!!errors.socialMedia?.linkedin}
                    />
                    {errors.socialMedia?.linkedin && <ErrorTypography color="error">{errors.socialMedia?.linkedin.message}</ErrorTypography>}
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
                    ></OutlinedInputStyled>
                    {errors.password && <ErrorTypography color="error">{errors.password.message}</ErrorTypography>}
                </FormControl>

                <FormControl variant="standard" fullWidth>
                    <LabelStyled shrink htmlFor="countryCode-input">Country</LabelStyled>
                    <SelectStyled
                        id="countryCode-input"
                        {...register("countryCode", validationRules.countryCode)}
                        defaultValue=""
                        displayEmpty MenuProps={{
                            PaperProps: {
                                sx: {
                                    maxHeight: '9rem',
                                },
                            },
                        }}
                    >
                        <MenuItem value="" disabled>Select a Country</MenuItem>
                        {Object.entries(ISO31661Alpha2ToCountryName).map(([code, name]) => (
                            <MenuItemStyled key={code} value={code}>{name}</MenuItemStyled>
                        ))}
                    </SelectStyled>
                    {errors.countryCode && <ErrorTypography color="error">{errors.countryCode.message}</ErrorTypography>}
                </FormControl>
                <Disclaimer />


                <ButtonStyled
                    onSubmit={handleSubmit(handleFormSubmit)}
                    // variant='contained'
                    type="submit"
                >
                    Let&apos;s Go
                </ButtonStyled>


            </FormStyled >
        </FormBoxStyled >)
}

export default RegisterForm