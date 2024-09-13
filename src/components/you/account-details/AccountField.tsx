/*
| Developed by Reskue
| Filename: AccountField.tsx
| Author: eric@reskue.art
*/

"use client"

import { useAccount } from '@/hooks/useAccount';
import { Button, FormControl, InputBase, Typography } from '@mui/material';
import { Box, styled } from '@mui/system';
import React, { ReactNode, useEffect, useState } from 'react'
import { FieldValues, SubmitHandler, ValidationRule, useForm } from 'react-hook-form';
//import { styled } from '@mui/material'
import EditIcon from '@/assets/svgs/account-details/EditIcon';
import validationRules from '@/components/quiz/ValidationRules.register';
import { User } from '@/shared/interfaces/User.interfaces';
import { apiAuth } from '@/services/axios/axios.interceptors';
import { useAuth } from '@/hooks/useAuth';
/*
|--------------------------------------------------------------------------
| Contracts
|--------------------------------------------------------------------------
*/
export interface AccountFieldProps {
  label: string
  fieldName: keyof User | 'linkedin';
  children?: React.ReactNode
}
/*
|--------------------------------------------------------------------------
| Styles
|--------------------------------------------------------------------------
*/

const MainContainer = styled(Box)(() => ({
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  maxWidth: '694px',
  borderRadius: '5px',
  padding: '15px 20px 15px 20px',
  backgroundColor: 'white',
  gap: '10px',
}))

const HeadBox = styled(Box)(() => ({
  display: 'flex',
  justifyContent: "space-between",
  alignItems: 'center',
}))


const LabelStyled = styled(Typography)(() => ({
  fontFamily: "Roboto",
  fontWeight: "bold",
  fontSize: '18px',
  color: '#8A909C',
}))

const ContentStyled = styled(Typography)(() => ({
  fontFamily: "Roboto",
  fontWeight: "regular",
  fontSize: '18px',
  color: 'black',
}))



const EditButton = styled(Button)(() => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  color: 'black',
  fontFamily: 'Roboto',
  fontSize: '15px',
  fontWeight: 'bold',
  height: '26px',
  width: "80px",
  borderRadius: '10px',
  '&:hover': {
    backgroundColor: '#D9D9D9',
    color: "black",
  }

}))


const CancelButton = styled(Button)(() => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  color: 'black',
  backgroundColor: '#D9D9D9',
  fontFamily: 'Roboto',
  fontSize: '15px',
  fontWeight: 'bold',
  height: '26px',
  width: "80px",
  borderRadius: '10px',
  '&:hover': {
    backgroundColor: '#D9D9D9',
    color: "black",
  }

}))


const SaveButton = styled(Button)(() => ({
  color: 'black',
  background: "linear-gradient(180deg, #00FBDF 28.18%, rgba(0, 251, 223, 0.74) 62.22%, rgba(1, 186, 248, 0.74) 100%)",
  border: "none",
  fontWeight: "400",
  width: "118px",
  height: "31px",
  padding: "1rem",
  fontFamily: "Roboto",
  fontSize: "16px",
  borderRadius: '0.625rem',
  "&:hover": {
    backgroundColor: "black",
    color: "white",
  },
  "&:disabled": {
    opacity: 0.4,
  },

}))

const MissingInfoText = styled(Typography)(() => ({
  color: '#FF6331',
}))


const InputFieldStyled = styled(InputBase)(({ theme }) => ({
  'label + &': {
    marginTop: theme.spacing(3),
  },
  '& .MuiInputBase-input': {
    borderRadius: 4,
    position: 'relative',
    background: 'white',
    border: '1px solid #D9D9D9',
    fontSize: 16,
    padding: '10px 12px',
    '&:focus': {
      background: 'white',
      border: '1px solid #D9D9D9',
      borderColor: 'white'
    },
    '&:hover': {
      background: `white`,
      border: '1px solid #D9D9D9',
      boxShadow: '0 0 8px 0 white',
    }
  },
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
const AccountField: React.FC<AccountFieldProps> = (props: AccountFieldProps) => {
  const { label, fieldName } = props;

  const { user } = useAccount();
  const { setUser } = useAuth();
  const { register, formState: { errors }, handleSubmit } = useForm();

  const [edit, setEdit] = useState<boolean>(false);
  const [missingInfo, setMissingInfo] = useState<boolean>(false);

  useEffect(() => {
    if (fieldName !== 'linkedin' && !user?.[fieldName]) {
      setMissingInfo(true);
    } else if (fieldName === 'linkedin' && !user?.socialMedia?.linkedin) {
      setMissingInfo(true)
    } else {
      setMissingInfo(false);
    }
  }, [user, fieldName]);



  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    await apiAuth.put('/user', data);
    const res = await apiAuth.get('/user');
    setUser(res.data);
    window.localStorage.setItem('user', JSON.stringify(res.data));
    setEdit(false);
  }

  const displayFieldContent = (): ReactNode => { // Ensure the return type is ReactNode
    if (!user) return null;

    switch (fieldName) {
      case 'linkedin': {
        if (!user?.socialMedia?.linkedin) {
          return <MissingInfoText>Missing</MissingInfoText>;
        }
        return <ContentStyled>{user.socialMedia.linkedin}</ContentStyled>; // Access the property directly
      }
      default: {
        if (!user[fieldName]) {
          return <MissingInfoText>Missing</MissingInfoText>;
        }
        return <ContentStyled>{user[fieldName] as ReactNode}</ContentStyled>; // Access the property directly
      }
    }
  };

  // Render
  //--------------------------------------------------------------------------

  if (!edit) {
    return (<MainContainer border={missingInfo ? '2px solid #FF6331' : ''}>
      <HeadBox>
        <Box>
          <LabelStyled>{label}</LabelStyled>
        </Box>
        {fieldName === 'email' ?
          <></>
          :
          <EditButton
            endIcon={<EditIcon />}
            onClick={() => setEdit(true)}
            sx={{ backgroundColor: missingInfo ? '#FF6331' : "#D9D9D9" }}
          >
            Edit
          </EditButton>
        }
      </HeadBox>
      <Box>
        {displayFieldContent()}
      </Box>
    </MainContainer>)
  }

  return (<MainContainer>
    <HeadBox>
      <Box>
        <LabelStyled>{label}</LabelStyled>
      </Box>
      <CancelButton onClick={() => setEdit(false)}>Cancel</CancelButton>
    </HeadBox>
    <form onSubmit={handleSubmit(onSubmit)}>
      <Box
        display="flex"
        flexDirection="column"
        gap="10px"
      >
        <FormControl variant="standard" fullWidth>
          <InputFieldStyled
            id={`${fieldName}-input`}
            defaultValue={fieldName === 'linkedin' ? user?.socialMedia?.linkedin : user?.[fieldName]}
            {...register((fieldName === 'linkedin' ? `socialMedia.${fieldName}` : fieldName), validationRules[fieldName as keyof ValidationRule])}
            error={!!errors[fieldName]}
          />
          {errors[fieldName] && <ErrorTypography color="error">{errors?.[fieldName]?.message as ReactNode}</ErrorTypography>}
        </FormControl>
        <SaveButton type='submit'>Save</SaveButton>
      </Box>
    </form>
  </MainContainer >)
}

export default AccountField
