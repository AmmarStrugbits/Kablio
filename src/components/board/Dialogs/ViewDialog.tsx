"use client"

/*
| Developed by Reskue
| Filename: ViewDialog.tsx
| Author: eric@reskue.art
*/

import { theme } from '@/MUI/Theme';
import DoneIcon from '@mui/icons-material/Done';
import { Button, Dialog, DialogProps, IconButton } from '@mui/material';
import { Box, styled, useMediaQuery } from '@mui/system';
import React, { useContext } from 'react';

import { BoardContext } from '../BoardContext';

import JobPost from '@/components/matches/match/JobPost';
import ApplyButton from './ApplyButton';
import RemoveButton from './RemoveButton';

import { CloseViewDialogIcon } from '@/assets/svgs/board/CloseViewDialogIcon';
import { CloseViewDialogIconMobile } from '@/assets/svgs/board/CloseViewDialogIconMobile';
import { DeleteViewDialogIcon } from '@/assets/svgs/board/DeleteViewDialogIcon';
import { JobPostStatus } from '@/shared/enum/JobPost.enum';
import { JobPostClass } from '@/shared/interfaces/JobPostClass';

import { moveJobPost, removeJobPost } from '@/services/board/board.services';

/*
|--------------------------------------------------------------------------
| Contracts
|--------------------------------------------------------------------------
*/
export interface ViewDialogProps extends DialogProps {
  status: JobPostStatus
  data: JobPostClass;
  onClose: () => void;
}
/*
|--------------------------------------------------------------------------
| Styles
|--------------------------------------------------------------------------
*/


const MainContainer = styled(Box)(() => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  position: 'relative',
  paddingTop: '2rem',
  [theme.breakpoints.down('lg')]: {
    padding: '2rem 2rem 4rem 2rem',
  },
  [theme.breakpoints.down('md')]: {
    flexDirection: 'column',
    padding: '0rem 0rem 4rem 0rem',
  },
}))

const CloseBarButton = styled(Button)(() => ({

  display: "flex",
  justifyContent: 'center',
  alignItems: "center",
  position: "sticky",
  top: 0,
  border: '1px solid #D9D9D9',
  fontFamily: "roboto",
  fontSize: '18px',
  fontWeight: '400',
  backgroundColor: 'white',
  color: 'black',
  borderRadius: '3px',
  marginBottom: '10px',
  padding: '0rem',
  "&:hover": {
    backgroundColor: "black",
    color: "white",
  },
  "&:disabled": {
    opacity: 0.4,
  },
}))

const ApplyAndDeleteBoxStyled = styled(Box)(() => ({
  display: "flex",
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: "center",
  gap: '0.5rem',
  position: "fixed",
  bottom: '10px',
  width: '50%',
  zIndex: 999,

  [theme.breakpoints.up('lg')]: {
    bottom: 'auto',
    top: '28rem',
    right: 'calc(17.5% - 10.5rem)',
    width: '10rem',
  },
  [theme.breakpoints.down('md')]: {
    width: '70%',
  },
}))

const IconRoundButton = styled(IconButton)(() => ({
  position: 'absolute',
  color: 'black',
  top: '1rem',
  left: 'calc(17.5% - 20px)',
  height: '40px',
  width: '40px',
  padding: '0',
  [theme.breakpoints.down('lg')]: {
    left: '1rem',
  },


}))

/*
|--------------------------------------------------------------------------
| Component
|--------------------------------------------------------------------------
*/
const ViewDialog: React.FC<ViewDialogProps> = (props: ViewDialogProps) => {
  const matchesMobile = useMediaQuery(theme.breakpoints.down('md'));
  const { setNeedUpdate } = useContext(BoardContext);
  const { data, onClose, status } = props;

  const handleApply = async () => {
    await moveJobPost(data.id, status, JobPostStatus.APPLIED);
    setNeedUpdate(true);
    window.open(data.url, '_blank');
    onClose();
  }

  const handleRemove = async () => {
    await removeJobPost(data.id, status);
    setNeedUpdate(true);
    onClose();
  }

  // Render
  //--------------------------------------------------------------------------
  return (
    <Dialog
      open={props.open}
      PaperProps={{
        style: {
          display: matchesMobile ? "flex" : "",
          alignItems: matchesMobile ? 'center' : '',
          backgroundColor: matchesMobile ? '' : 'transparent',
          boxShadow: 'none',
          minWidth: "100vw",
          minHeight: "80vh",
          padding: matchesMobile ? "10px" : ''
        },
      }}
      fullScreen={matchesMobile ? true : false}
    >

      <MainContainer>
        {matchesMobile ? <CloseBarButton onClick={onClose} fullWidth startIcon={<CloseViewDialogIconMobile />}>Close</CloseBarButton> :
          <IconRoundButton
            aria-label="close"
            onClick={onClose}
          >
            <CloseViewDialogIcon />
          </IconRoundButton>
        }

        <ApplyAndDeleteBoxStyled>
          <ApplyButton
            onClick={handleApply}
            icon={<DoneIcon />}
          >
            Apply
          </ApplyButton>
          {matchesMobile ? null :
            <RemoveButton
              onClick={handleRemove}
              icon={<DeleteViewDialogIcon />}
            >
              Delete
            </RemoveButton>
          }
        </ApplyAndDeleteBoxStyled>


        <JobPost jobPost={data} />
      </MainContainer>
    </Dialog >
  )
}

export default ViewDialog
