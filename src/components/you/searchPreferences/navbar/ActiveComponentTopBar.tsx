/*
| Developed by Reskue
| Filename: ActiveComponentTopBar.tsx
| Author: eric@reskue.art
*/

"use client"

import { CloseTopBarActiveComponent } from '@/assets/svgs/CloseTopBarActiveComponent'
import { LineTopBarActiveComponent } from '@/assets/svgs/LineTopBarActiveComponent'
import { Box, Button, styled } from '@mui/material'
import React from 'react'
import { useFormContext } from 'react-hook-form'
import ActiveComponentTitle from '../ActiveComponentTitle'

/*
|--------------------------------------------------------------------------
| Contracts
|--------------------------------------------------------------------------
*/
export interface ActiveComponentTopBarProps //extends buttonProps
{
    children?: React.ReactNode;
    onClose: () => void;
    sectionTitle: string;
    onSubmit: () => void;
}
/*
|--------------------------------------------------------------------------
| Styles
|--------------------------------------------------------------------------
*/
const ActiveComponentTopBarStyled = styled(Box)(() => ({
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',

    boxShadow: '0px 2px 10px #D9D9D9',
}))

const IconBoxStyled = styled(Box)(() => ({
    height: '1.563rem',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    padding: '0rem 1rem'
}))

const TitleBoxStyled = styled(Box)(() => ({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
}))

/*
|--------------------------------------------------------------------------
| Component
|--------------------------------------------------------------------------
*/
const ActiveComponentTopBar: React.FC<ActiveComponentTopBarProps> = (props: ActiveComponentTopBarProps) => {
    const { handleSubmit } = useFormContext();

    // Render
    //--------------------------------------------------------------------------
    return (
        <ActiveComponentTopBarStyled>
            <IconBoxStyled>
                <Box sx={{ display: 'flex', justifyContent: 'flex-start', minWidth: '33%', marginTop: '1rem', paddingLeft: '0.5rem' }}>
                    <CloseTopBarActiveComponent onClick={props.onClose} />
                </Box>
                <Box sx={{ display: 'flex', justifyContent: 'center', minWidth: '33%', marginTop: '-1rem' }}>
                    <LineTopBarActiveComponent />
                </Box>
                <Box sx={{ display: 'flex', justifyContent: 'flex-end', minWidth: '33%', marginTop: '1rem' }}>
                    <Button sx={{
                        color: '#8A909C', fontFamily: 'Anton', fontSize: '1rem', fontWeight: '400', height: '1.5rem', "&:focus": {
                            backgroundColor: "#8A909C",
                            outline: "none",
                        },
                        "&:active": {
                            backgroundColor: "#8A909C",
                        },
                    }} onClick={handleSubmit(props.onSubmit)}>Done</Button>
                </Box>
            </IconBoxStyled>
            <TitleBoxStyled>
                <ActiveComponentTitle title={props.sectionTitle} />
            </TitleBoxStyled>
        </ActiveComponentTopBarStyled>
    )
}

export default ActiveComponentTopBar
