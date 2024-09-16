"use client"

/*
| Developed by Reskue
| Filename: page.tsx
| Author: eric@reskue.art
*/

import SearchPreferences from '@/components/you/searchPreferences/SearchPreferences'
import { SearchPreferenceDataProvider } from '@/contexts/searchPreferenceContext'
import { withAuth } from '@/hoc/WithAuth'
import { useAccount } from '@/hooks/useAccount'
import { SearchPreferencesDataForm } from '@/shared/interfaces/SearchPreference.interfaces'
import { defaultFormValues } from '@/utils/defaultFormValues'
import { Box } from '@mui/material'
import { styled } from '@mui/system'
import React, { useEffect, useState } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
/*
|--------------------------------------------------------------------------
| Contracts
|--------------------------------------------------------------------------
*/


/*
|--------------------------------------------------------------------------
| Styles
|--------------------------------------------------------------------------
*/


const YouPageBoxStyled = styled(Box)(({ theme }) => ({
    minHeight: 'calc(100vh - 4.375rem)',
    height: 'calc(100% - 4.375rem)',

    backgroundColor: '#F9F9F9',
    [theme.breakpoints.up('md')]: {
    },
}))

/*
|--------------------------------------------------------------------------
| Component
|--------------------------------------------------------------------------
*/



const Page: React.FC = () => {
    const methods = useForm<SearchPreferencesDataForm>({
        defaultValues: defaultFormValues,
    });

    return (
        <YouPageBoxStyled>
            <FormProvider {...methods}>
                <SearchPreferenceDataProvider>
                    <SearchPreferences />
                </SearchPreferenceDataProvider>
            </FormProvider>
        </YouPageBoxStyled>
    )
}

export default withAuth(Page)
