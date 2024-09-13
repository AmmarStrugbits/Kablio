/*
| Developed by Reskue
| Filename: ApplyDialog.tsx
| Author: eric@reskue.art
*/

"use client"


import Image from 'next/image'
import React, { useContext } from 'react'

import { theme } from '@/MUI/Theme'
import { Box, styled, useMediaQuery } from '@mui/system'
import { Button, Dialog, DialogProps, Typography } from '@mui/material'

import { JobPostDto } from '@/shared/interfaces/JobPostClass'
import { JobPostStatus } from '@/shared/enum/JobPost.enum'

import InformationNotAvailable from '@/assets/images/InformationNotAvailable.png'
import { BoardContext } from '@/components/board/BoardContext'
import { moveJobPost } from '@/services/board/board.services'


/*
|--------------------------------------------------------------------------
| Contracts
|--------------------------------------------------------------------------
*/
export interface ApplyDialogProps extends DialogProps {
  status: JobPostStatus
  data: JobPostDto
  onClose: () => void
}
/*
|--------------------------------------------------------------------------
| Styles
|--------------------------------------------------------------------------
*/

const MainContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-evenly',
  alignItems: 'center',
  padding: '20px',
  backgroundColor: "white",
  gap: '1rem',

  [theme.breakpoints.down('sm')]: {
    width: '100%',
    padding: "10px",
  },

}))


const Header = styled(Box)(({ theme }) => ({
  display: 'flex',
  width: "100%",
  gap: '1rem',
  [theme.breakpoints.down('sm')]: {
    flexDirection: 'column-reverse',
    justifyContent: 'center',
    alignItems: 'center'
  },
}))

const JobInfosSection = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  alignItems: 'space-between',
  gap: '1rem',

  [theme.breakpoints.down('sm')]: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
}))

const ImageBoxStyled = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: "50%",
  height: "100px",
  position: 'relative',

  [theme.breakpoints.down('md')]: {
    width: "50%",
    height: "75px",
  },
}))

const ActionButtonSection = styled(Box)(({ theme }) => ({
  display: 'flex',
  width: '100%',
  justifyContent: 'space-between',
  gap: 5,

  [theme.breakpoints.down('sm')]: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  }
}))

const CancelButton = styled(Button)(() => ({
  border: '1px solid #D9D9D9',
  backgroundColor: '#F9F9F9',
  fontFamily: "roboto",
  fontSize: '1.125rem',
  fontWeight: '400',
  color: '#505662',
  borderRadius: '0.625rem',
  width: "100%",
  "&:hover": {
    backgroundColor: "black",
    color: "white",
  },
  "&:disabled": {
    opacity: 0.4,
  },
}))

const ApplyButton = styled(Button)(() => ({
  color: 'black',
  background: "linear-gradient(180deg, #00FBDF 28.18%, rgba(0, 251, 223, 0.74) 62.22%, rgba(1, 186, 248, 0.74) 100%)",
  border: "none",
  fontWeight: "400",
  width: "100%",
  padding: "1rem",
  fontFamily: "Anton",
  fontSize: "1.125rem",
  borderRadius: '0.625rem',
  "&:hover": {
    backgroundColor: "black",
    color: "white",
  },
  "&:disabled": {
    opacity: 0.4,
  },
}))

const Subtext = styled(Typography)(({ theme }) => ({
  color: "#FF6331",
  fontFamily: "Roboto",
  fontWeight: "bold",
  fontSize: '1rem',

  [theme.breakpoints.down('sm')]: {
    fontSize: '0.625rem',
  }
}))

/*
|--------------------------------------------------------------------------
| Component
|--------------------------------------------------------------------------
*/
const ApplyDialog: React.FC<ApplyDialogProps> = (props: ApplyDialogProps) => {
  const { status, data, onClose } = props;
  const { setNeedUpdate } = useContext(BoardContext)
  const matchesMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const handleApply = async () => {
    await moveJobPost(data.id, status, JobPostStatus.APPLIED);
    setNeedUpdate(true);
    onClose();
  }

  // Render
  //--------------------------------------------------------------------------
  return (<Dialog
    {...props}
    slotProps={{
      backdrop: {
        sx: {
          backgroundColor: 'rgba(0, 0, 0, 0.75)',
        }
      }
    }}
    PaperProps={{
      style: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      },
    }}
  >
    <MainContainer>
      <Header>
        <JobInfosSection>
          <Typography fontFamily="Roboto" fontSize="18px" fontWeight="bold">
            {data.companyName ? data.companyName : data.recruiterFirmName}
          </Typography>
          <Typography fontFamily="Roboto" fontSize="18px" fontWeight="normal">
            {data.title}
          </Typography>
          <Typography fontFamily="Roboto" fontSize="12px" fontWeight="normal" color='#505662'>
            {`${data.location}, ${data.location}`}
          </Typography>
        </JobInfosSection>
        <ImageBoxStyled>
          < Image
            src={data.logo?.url || InformationNotAvailable}
            alt={data.logo?.originalname || 'orange kablio logo'}
            layout="fill"
            objectFit="contain"
            style={{ overflow: 'hidden' }}
          />
        </ImageBoxStyled>
      </Header>
      <ActionButtonSection>
        <Box onClick={() => window.open(data.url, '_blank')} width={"100%"}>
          <ApplyButton
            onClick={handleApply}
          >
            Apply
          </ApplyButton>
        </Box>
        <CancelButton
          onClick={onClose}
        >
          Cancel
        </CancelButton>
      </ActionButtonSection>
      <Box>
        <Subtext>⚠️ TELL THEM YOU APPLIED THROUGH KABLIO ⚠️</Subtext>
      </Box>
    </MainContainer>
  </Dialog >)
}

export default ApplyDialog
