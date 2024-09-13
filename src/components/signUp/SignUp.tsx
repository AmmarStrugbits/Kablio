/*
| Developed by Reskue
| Filename: SignUp.tsx
| Author: eric@reskue.art
*/

"use client"

import { Box, Typography, useMediaQuery } from "@mui/material";
import React, { useEffect, useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import Stepper from "@/components/quiz/Stepper";
import NextButton from "@/components/quiz/NextButton";
import BackButton from "@/components/quiz/BackButton";
import { styled } from "@mui/system";
import { theme } from "@/MUI/Theme";
import { useSearchParams } from "next/navigation";
import { withPublic } from "@/hoc/WithPublic";
import { SignupRequest } from "@/app/auth/signup/Registration.interfaces";
import JobLocation from "@/app/auth/signup/JobLocation";
import JobSector from "@/app/auth/signup/SectorSeeking";
import JobRoleSeeking from "@/app/auth/signup/JobRoleSeeking";
import JobLevelSeeking from "@/app/auth/signup/JobLevelSeeking";
import CreateAccount from "@/app/auth/signup/CreateAccount";
import { QuizProvider } from "@/app/auth/signup/QuizContext";
/*
|--------------------------------------------------------------------------
| Contracts
|--------------------------------------------------------------------------
*/
export interface SignUpProps //extends buttonProps
{
    children?: React.ReactNode
}

const questions = [
    "Where would you like to work?",
    "Which sectors do you want to work in?",
    "What type of roles would like to see?",
    "What level of roles are you looking for?",
];
/*
|--------------------------------------------------------------------------
| Styles
|--------------------------------------------------------------------------
*/
const QuizzBoxStyled = styled(Box)(({ theme }) => ({
    display: "flex",
    minHeight: `calc(100vh - 4.375rem - 88px)`,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
    marginBottom: "4rem",
    padding: "2rem",
    backgroundColor: "#F9F9F9",
    gap: "1rem",
    [theme.breakpoints.down("md")]: {
        minHeight: `calc(100vh - 2.8rem - 68px)`,
        padding: "0rem 2rem",
    },
}));

const ButtonBoxStyled = styled(Box)(() => ({
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    width: "350px",
    gap: "2rem",
}));

const FooterBoxStyled = styled(Box)(() => ({
    border: "1px solid #00FBDF",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    backgroundColor: "white",
    height: "88px",
    position: "fixed",
    bottom: "0rem",
    [theme.breakpoints.down("md")]: {
        backgroundColor: "white",
        height: "69px",
        border: 'none'
    },
}));

const QuestionTypographyStyled = styled(Typography)(({ theme }) => ({
    display: "block",
    fontFamily: "Anton",
    fontSize: "1.5rem",
    textAlign: "center",

    [theme.breakpoints.down("md")]: {
        padding: "1.2rem 0.5rem 1.2rem 0.5rem",
        maxWidth: "80%",
    },
}));
/*
|--------------------------------------------------------------------------
| Component
|--------------------------------------------------------------------------
*/
const SignUp: React.FC<SignUpProps> = ({ children }) => {
    const matchesMobile = useMediaQuery(theme.breakpoints.down("md"));

    const methods = useForm<SignupRequest>();

    const [isValid, setIsValid] = useState<boolean>(false);
    const [step, setStep] = useState<number>(0);

    const searchParams = useSearchParams();

    useEffect(() => {
        const errorMessage = searchParams.get("error");
        if (errorMessage) console.error(errorMessage);
    }, []);

    /************** Handlers ***************/
    const handleNext = () => {
        setStep((prev) => prev + 1);
    };

    const handleBack = () => {
        setStep((prev) => prev - 1);
    };

    const renderStepper = (step: number) => {
        return (
            <>
                {step <= 3 ?
                    <Box
                        display="flex"
                        flexDirection={{ xs: "column-reverse", md: "column" }}
                        alignItems="center"
                        gap={matchesMobile ? 0 : 2}
                    >
                        {step !== 4 ? <Stepper step={step} totalSteps={4} /> : <></>}
                        <QuestionTypographyStyled>{questions[step]}</QuestionTypographyStyled>
                    </Box> : null}
                {step === 0 ? (
                    <JobLocation setIsValid={setIsValid} />
                ) : step === 1 ? (
                    <JobSector setIsValid={setIsValid} />
                ) : step === 2 ? (
                    <JobRoleSeeking setIsValid={setIsValid} />
                ) : step === 3 ? (
                    <JobLevelSeeking setIsValid={setIsValid} />
                ) : (
                    <CreateAccount />
                )}
            </>
        );
    };

    // Render
    //--------------------------------------------------------------------------
    return (
        <QuizProvider>
            <QuizzBoxStyled>
                {!matchesMobile && step < 1 ? (
                    <Typography color={"grey"}>
                        Jump into our quiz! Your matches await.
                    </Typography>
                ) : null}
                <FormProvider {...methods}>
                    <Box
                        display="flex"
                        flexDirection="column"
                        justifyContent="center"
                        alignItems="center"
                    >
                        {renderStepper(step)}
                    </Box>
                </FormProvider>
                <FooterBoxStyled>
                    <ButtonBoxStyled>
                        {step !== 0 ? (
                            <BackButton onClick={handleBack}>Back</BackButton>
                        ) : null}
                        {step !== 4 ? (
                            <NextButton onClick={handleNext} disabled={!isValid}>
                                Next
                            </NextButton>
                        ) : null}
                    </ButtonBoxStyled>
                </FooterBoxStyled>
            </QuizzBoxStyled>
        </QuizProvider>
    );
}

export default withPublic(SignUp)
