'use client'

/*
| Developed by Reskue
| Filename: JobCard.tsx
| Author: eric@reskue.art
*/


import React, { useState } from 'react'
import Image from 'next/image'
import { Box, Button, Typography, styled } from '@mui/material'

import InformationNotAvailable from '@/assets/images/InformationNotAvailable.png'
import DoneIcon from '@mui/icons-material/Done';

import { JobPostStatus } from '@/shared/enum/JobPost.enum'
import { JobPostClass, JobPostDto } from '@/shared/interfaces/JobPostClass'

import MoveDialog from '@/components/board/Dialogs/MoveDialog'
import ApplyDialog from '@/components/board/Dialogs/ApplyDialog'
import ViewDialog from '@/components/board/Dialogs/ViewDialog'

/*
|--------------------------------------------------------------------------
| Contracts
|--------------------------------------------------------------------------
*/

export interface JobCardProps //extends buttonProps
{
    status: JobPostStatus,
    data: JobPostDto;
    children?: React.ReactNode
}
/*
|--------------------------------------------------------------------------
| Styles
|--------------------------------------------------------------------------
*/


const MainContainer = styled(Box)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    flexShrink: 0,
    width: '400px',
    height: '180px',
    padding: 2,
    backgroundColor: 'white',
    borderRadius: '8px',
    boxShadow: '0px 1px 5px grey',

    [theme.breakpoints.down('sm')]: {
        width: '100%',
    },
}))

const ImageBoxStyled = styled(Box)(({ theme }) => ({
    width: '75px',
    height: '75px',
    position: 'relative',

    [theme.breakpoints.down('md')]: {
        width: '75px',
        height: '75px',
    },
}))

const JobInfosSection = styled(Box)(() => ({
    width: '75%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    padding: '1rem',
    gap: '0.3rem'
}))


const ActionButtonSection = styled(Box)(() => ({
    display: 'flex',
    padding: '1rem',
    gap: '0.5rem'
}))

const MoveButton = styled(Button)(() => ({
    border: '1px solid #D9D9D9',
    backgroundColor: '#F9F9F9',
    fontFamily: 'roboto',
    fontSize: '18px',
    fontWeight: '400',
    color: '#505662',
    borderRadius: '10px',
    width: '118px',
    height: '31px',
    '&:hover': {
        backgroundColor: 'black',
        color: 'white',
    },
    '&:disabled': {
        opacity: 0.4,
    },
}))

const ApplyButton = styled(Button)(() => ({
    border: '1px solid #D9D9D9',
    backgroundColor: '#D9D9D9',
    fontFamily: 'roboto',
    fontSize: '18px',
    fontWeight: '400',
    color: 'black',
    borderRadius: '10px',
    width: '118px',
    height: '31px', '&:hover': {
        backgroundColor: 'black',
        color: 'white',
    },
    '&:disabled': {
        opacity: 0.4,
    },
}))

const ViewButton = styled(Button)(() => ({
    color: 'black',
    background: 'linear-gradient(180deg, #00FBDF 28.18%, rgba(0, 251, 223, 0.74) 62.22%, rgba(1, 186, 248, 0.74) 100%)',
    border: 'none',
    fontWeight: '400',
    width: '118px',
    height: '31px',
    padding: '1rem',
    fontFamily: 'Roboto',
    fontSize: '16px',
    borderRadius: '0.625rem',
    '&:hover': {
        backgroundColor: 'black',
        color: 'white',
    },
    '&:disabled': {
        opacity: 0.4,
    },
}))

/*
|--------------------------------------------------------------------------
| Component
|--------------------------------------------------------------------------
*/
const JobCard: React.FC<JobCardProps> = (props: JobCardProps) => {
    const { status, data } = props;

    const [moveOpen, setMoveOpen] = useState<boolean>(false);
    const [applyOpen, setApplyOpen] = useState<boolean>(false);
    const [viewOpen, setViewOpen] = useState<boolean>(false);

    // Render
    //--------------------------------------------------------------------------
    return (
        <MainContainer>
            <Box
                display={'flex'}
                justifyContent={'space-evenly'}
                alignItems={'center'}
            >
                <ImageBoxStyled>
                    < Image
                        src={data.logo?.url || InformationNotAvailable}
                        alt={data.logo?.originalname || 'orange kablio logo'}
                        layout='fill'
                        objectFit='contain'
                        style={{ overflow: 'hidden' }}
                    />
                </ImageBoxStyled>

                <JobInfosSection>
                    <Typography fontFamily='Roboto' fontSize='1.125rem' fontWeight='bold' >
                        {data.companyName ? data.companyName : data.recruiterFirmName}
                    </Typography>
                    <Typography fontFamily='Roboto' fontSize='1.125rem' fontWeight='normal'>
                        {data.title}
                    </Typography>
                    <Typography fontFamily='Roboto' fontSize='0.875rem' fontWeight='normal' color='#505662'>
                        {`${data.location}`}
                    </Typography>
                </JobInfosSection>
            </Box>
            <ActionButtonSection>
                <MoveButton
                    onClick={() => setMoveOpen(true)}
                >
                    Move
                </MoveButton>
                {props.status === JobPostStatus.APPLIED ? null :
                    <ApplyButton
                        onClick={() => setApplyOpen(true)}
                        startIcon={<DoneIcon />}>
                        Apply
                    </ApplyButton>
                }
                <ViewButton
                    onClick={() => setViewOpen(true)}
                >
                    View
                </ViewButton>
                <MoveDialog
                    status={status}
                    data={data}
                    open={moveOpen}
                    onClose={() => setMoveOpen(false)}
                />
                <ApplyDialog
                    status={status}
                    data={data}
                    open={applyOpen}
                    onClose={() => setApplyOpen(false)}
                />
                <ViewDialog
                    status={status}
                    data={new JobPostClass(data)}
                    open={viewOpen}
                    onClose={() => setViewOpen(false)}
                />

            </ActionButtonSection>
        </MainContainer>
    )
}

export default JobCard