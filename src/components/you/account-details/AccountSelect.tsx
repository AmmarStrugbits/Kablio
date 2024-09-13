/*
| Developed by Reskue
| Filename: AccountField.tsx
| Author: eric@reskue.art
*/

"use client"

import { useAccount } from '@/hooks/useAccount';
import { Button, FormControl, MenuItem, Select, Typography } from '@mui/material';
import { Box, styled } from '@mui/system';
import React, { ReactNode, useEffect, useState } from 'react';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import EditIcon from '@/assets/svgs/account-details/EditIcon';
import validationRules from '@/components/quiz/ValidationRules.register';
import { User } from '@/shared/interfaces/User.interfaces';
import { ISO31661Alpha2, ISO31661Alpha2ToCountryName } from '@/shared/enum/CountryCode.enum';
import { apiAuth } from '@/services/axios/axios.interceptors';
import { useAuth } from '@/hooks/useAuth';
/*
|--------------------------------------------------------------------------
| Contracts
|--------------------------------------------------------------------------
*/
export interface AccountSelectProps {
  label: string
  fieldName: keyof User;
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
  gap: '10px'
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
    position: 'relative',
    background: 'white',
    border: '1px solid #D9D9D9',
    fontSize: 16,
    padding: '10px 12px',
    '&:focus': {
      background: `white`,
    },
    '&:hover': {
      background: `white`,
    }
  },
}));


const ErrorTypography = styled(Typography)(() => ({
  marginTop: "0.5rem",
  marginLeft: "0.5rem",
}));

const MenuItemStyled = styled(MenuItem)(() => ({
}));


/*
|--------------------------------------------------------------------------
| Component
|--------------------------------------------------------------------------
*/
const AccountSelect: React.FC<AccountSelectProps> = (props: AccountSelectProps) => {
  const { label, fieldName } = props;

  const { user } = useAccount();
  const { setUser } = useAuth();
  const { register, formState: { errors }, handleSubmit } = useForm();

  const [edit, setEdit] = useState<boolean>(false);
  const [missingInfo, setMissingInfo] = useState<boolean>(false);


  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    await apiAuth.put('/user', data);
    const res = await apiAuth.get('/user');
    setUser(res.data);
    window.localStorage.setItem('user', JSON.stringify(res.data));
    setEdit(false);
  }

  useEffect(() => {
    if (!user?.[fieldName]) {
      setMissingInfo(true)
    }
  }, [user])

  const displayFieldContent = (): React.JSX.Element => {
    if (!user?.[fieldName]) {
      return <MissingInfoText>Missing</MissingInfoText>
    }
    return <ContentStyled>{ISO31661Alpha2ToCountryName[user[fieldName] as ISO31661Alpha2]}</ContentStyled>
  }


  // Render
  //--------------------------------------------------------------------------

  if (!edit) {
    return (<MainContainer border={missingInfo ? '2px solid #FF6331' : ''}>
      <HeadBox>
        <Box>
          <LabelStyled>{label}</LabelStyled>
        </Box>
        <EditButton
          endIcon={<EditIcon />}
          onClick={() => setEdit(true)}
          sx={{ backgroundColor: missingInfo ? '#FF6331' : "#D9D9D9" }}
        >
          Edit
        </EditButton>
      </HeadBox>
      <Box>
        {displayFieldContent()}
      </Box>
    </MainContainer>)
  }

  return (<MainContainer>
    <HeadBox>
      <Box>
        <Typography>{label}</Typography>
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
      <SelectStyled
        id="countryCode-input"
        {...register("countryCode", validationRules.countryCode)}
        defaultValue=''
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
      {errors.countryCode && <ErrorTypography color="error">{errors.countryCode.message as ReactNode}</ErrorTypography>}
    </FormControl>
    <SaveButton type='submit'>Save</SaveButton>
    </Box>
    </form>
  </MainContainer>)
}

export default AccountSelect
