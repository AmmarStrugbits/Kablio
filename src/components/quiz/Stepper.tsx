/*
| Developed by Reskue
| Filename: Stepper.tsx
| Author: eric@reskue.art
*/

import { theme } from '@/MUI/Theme'
import { Box } from '@mui/material'
import { styled } from '@mui/system'
import React from 'react'
//import { styled } from '@mui/material'

/*
|--------------------------------------------------------------------------
| Contracts
|--------------------------------------------------------------------------
*/
export interface StepperProps //extends buttonProps
{
    step: number
    totalSteps: number
    children?: React.ReactNode
}
/*
|--------------------------------------------------------------------------
| Styles
|--------------------------------------------------------------------------
*/
const StepperStyled = styled(Box)(({ theme }) => ({
    display: "flex",
    flexDirection: "row",
    justifyContent: 'center',
    width: '100vw',
    // alignContent: 'center',
    [theme.breakpoints.up('md')]: {
    },
}))

const ItemStepperStyled = styled('div')(({ backgroundColor }: { backgroundColor: string }) => ({
    backgroundColor,
    height: "0.5rem",

    [theme.breakpoints.down('md')]: {
        flexGrow: 1,
    },

    [theme.breakpoints.up('md')]: {
        width: "1rem",
        margin: "5px",
    },
}));


/*
|--------------------------------------------------------------------------
| Component
|--------------------------------------------------------------------------
*/
const Stepper: React.FC<StepperProps> = ({ step, totalSteps }) => {

    const genStepper = () => {
        const stepper = [];
        for (let i = 0; i < totalSteps; i++) {
            const backgroundColor = i <= step ? theme.palette.primary.main : "grey";
            stepper.push(
                <ItemStepperStyled key={i} backgroundColor={backgroundColor} />
            );
        }
        return stepper;
    };

    return (
        <StepperStyled>
            {genStepper()}
        </StepperStyled>
    );
};

export default Stepper