/*
| Developed by Reskue
| Filename: PreReleaseForm.tsx
| Author: eric@reskue.art
*/

import React from 'react'
import { useFormContext } from 'react-hook-form'
import { Box, Button, Checkbox, FormControl, FormControlLabel, InputBase, InputLabel, MenuItem, Select, Typography, styled } from '@mui/material'
import { KablioMiniLogo } from '@/assets/svgs/miniLogo'
import { ISO31661Alpha2ToCountryName } from '@/shared/enum/CountryCode.enum'
import validationRules from '@/utils/ValidationRulesPreregister'
/*
|--------------------------------------------------------------------------
| Contracts
|--------------------------------------------------------------------------
*/
export interface PreReleaseFormProps {
    title: string
    subtitle: string
    onSubmit: (data: PreRegisterCandidateFormData) => void
    children?: React.ReactNode
}

interface PreRegisterCandidateFormData {
    name: string;
    email: string;
    companyName: string;
    website: string;
    newsletter: boolean;
    countryCode: ISO31661Alpha2ToCountryName;
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
    width: "36rem",
    height: "auto",
    gap: "0.6rem",
    padding: "1.88rem 2.5rem 1.88rem 2.5rem",
    margin: "2",
    marginTop: "10",

    [theme.breakpoints.down('md')]: {
        padding: "1.88rem 0.5rem 1.88rem 0.5rem",
    },
}));

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
    marginLeft: "1rem",
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

const SelectStyled = styled(Select)(({ theme }) => ({
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

const MenuItemStyled = styled(MenuItem)(() => ({
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
const PreReleaseEmployerForm: React.FC<PreReleaseFormProps> = (props: PreReleaseFormProps) => {
    const { title, subtitle, onSubmit } = props;
    const { register, handleSubmit, formState: { errors } } = useFormContext<PreRegisterCandidateFormData>();

    const handleFormSubmit = (data: PreRegisterCandidateFormData) => {
        onSubmit(data);
    };

    // Render
    //--------------------------------------------------------------------------
    return (
        <FormBoxStyled>

            <TypographyTitleStyled>{title}</TypographyTitleStyled>
            <TypographySubtitleStyled>{subtitle}</TypographySubtitleStyled>

            <FormStyled onSubmit={handleSubmit(handleFormSubmit)}>

                <FormControl variant="standard" fullWidth>
                    <LabelStyled shrink htmlFor="name-input">Name</LabelStyled>
                    <InputFieldStyled
                        id="name-input"
                        {...register("name", validationRules.name)}
                        error={!!errors.name}
                    />
                    {errors.name && <ErrorTypography color="error">{errors.name.message}</ErrorTypography>}
                </FormControl>

                <FormControl variant="standard" fullWidth>
                    <LabelStyled shrink htmlFor="email-input">Work Email</LabelStyled>
                    <InputFieldStyled
                        id="email-input"
                        {...register("email", validationRules.email)}
                        error={!!errors.email}
                    />
                    {errors.email && <ErrorTypography color="error">{errors.email.message}</ErrorTypography>}
                </FormControl>

                <FormControl variant="standard" fullWidth>
                    <LabelStyled shrink htmlFor="companyName-input">Company Name</LabelStyled>
                    <InputFieldStyled
                        id="companyName-input"
                        {...register("companyName", validationRules.companyName)}
                        error={!!errors.companyName}
                    />
                    {errors.companyName && <ErrorTypography color="error">{errors.companyName.message}</ErrorTypography>}
                </FormControl>

                <FormControl variant="standard" fullWidth>
                    <LabelStyled shrink htmlFor="website-input">Company Website</LabelStyled>
                    <InputFieldStyled
                        id="website-input"
                        {...register("website", validationRules.website)}
                        error={!!errors.website}
                    />
                    {errors.website && <ErrorTypography color="error">{errors.website.message}</ErrorTypography>}
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


                <Button
                    sx={{ width: "100%", marginTop: "1rem", fontFamily: "Anton", fontWeight: 'normal', letterSpacing: '0.05rem', }}
                    variant='contained'
                    type="submit"
                    startIcon={<KablioMiniLogo />}
                >
                    {title}
                </Button>
                <FormControlLabel
                    control={
                        <Checkbox
                            {...register("newsletter")}
                            defaultChecked={false}
                            color="primary"
                        />
                    }
                    label="Get emails from Kablio. Unsubscribe any time."
                />

            </FormStyled >
        </FormBoxStyled >)
}

export default PreReleaseEmployerForm
