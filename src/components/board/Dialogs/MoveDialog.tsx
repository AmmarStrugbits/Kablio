"use client"

/*
| Developed by Reskue
| Filename: MoveDialog.tsx
| Author: eric@reskue.art
*/

import Image from 'next/image'
import React, { useContext } from 'react'

import { Button, Dialog, DialogProps, Typography } from '@mui/material'
import { Box, styled } from '@mui/system'

import { JobPostStatus } from '@/shared/enum/JobPost.enum'
import { JobPostDto } from '@/shared/interfaces/JobPostClass'

import InformationNotAvailable from '@/assets/images/InformationNotAvailable.png'

import { moveJobPost, removeJobPost } from '@/services/board/board.services'

import { BoardContext } from '@/components/board/BoardContext'
import RemoveButton from './RemoveButton'


/*
|--------------------------------------------------------------------------
| Contracts
|--------------------------------------------------------------------------
*/
export interface MoveDialogProps extends DialogProps {
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
  width: "500px",
  padding: '20px',
  backgroundColor: "white",
  gap: 10,

  [theme.breakpoints.down('sm')]: {
    width: "100%",
  }
}))

const Header = styled(Box)(({ theme }) => ({
  display: 'flex',
  width: "100%",
  gap: '1rem',

  [theme.breakpoints.down('sm')]: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  }
}))

const JobInfosSection = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: '0.3rem',

  [theme.breakpoints.down('sm')]: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  }

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

const MoveButton = styled(Button)(() => ({
  border: '1px solid #D9D9D9',
  backgroundColor: '#F9F9F9',
  fontFamily: "roboto",
  fontSize: '18px',
  fontWeight: '400',
  color: '#505662',
  borderRadius: '10px',
  width: "100%",
  "&:hover": {
    backgroundColor: "black",
    color: "white",
  },
  "&:disabled": {
    opacity: 0.4,
  },
}))

/*
|--------------------------------------------------------------------------
| Component
|--------------------------------------------------------------------------
*/
const MoveDialog: React.FC<MoveDialogProps> = (props: MoveDialogProps) => {
  const { status, data, onClose } = props;
  const { setNeedUpdate } = useContext(BoardContext);
  // const matchesMobile = useMediaQuery(theme.breakpoints.down('sm'));


  const handleMove = async () => {
    switch (status) {
      case JobPostStatus.SAVED: {
        await moveJobPost(data.id, status, JobPostStatus.APPLIED);
        break;
      }
      case JobPostStatus.APPLIED: {
        await moveJobPost(data.id, status, JobPostStatus.SAVED);
        break;
      }
      case JobPostStatus.SEEN: {
        await moveJobPost(data.id, status, JobPostStatus.SAVED);
        break;
      }
    }
    setNeedUpdate(true);
    onClose();
  }

  const handleRemove = async () => {
    await removeJobPost(data.id, status);
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
        <MoveButton
          onClick={handleMove}
        >
          {status === JobPostStatus.SAVED
            ? 'Move to Applied' : 'Move to Saved'}
        </MoveButton>
        <RemoveButton
          onClick={handleRemove}
        >
          Delete
        </RemoveButton>
      </ActionButtonSection>
    </MainContainer>
  </Dialog >)
}

export default MoveDialog
