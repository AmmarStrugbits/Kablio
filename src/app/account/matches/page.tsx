"use client"

/*
| Developed by Reskue
| Filename: pages.tsx
| Author: eric@reskue.art
*/

import MatchPage from '@/components/matches/Match';
import { SearchPreferenceDataProvider } from '@/contexts/searchPreferenceContext';
import { withAuth } from '@/hoc/WithAuth';
import { useAccount } from '@/hooks/useAccount';
import { postSearchPreference } from '@/services/matches/match.services';
import LoadingAnimation from '@/shared/components/LoadingAnimation';
import { SearchPreferenceData, SearchPreferencesDataForm } from '@/shared/interfaces/SearchPreference.interfaces';
import { defaultFormValues } from '@/utils/defaultFormValues';
import React, { useEffect, useState } from 'react'
import { FormProvider, useForm } from 'react-hook-form';

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

/*
|--------------------------------------------------------------------------
| Component
|--------------------------------------------------------------------------
*/

const Page: React.FC = () => {
  const methods = useForm<SearchPreferencesDataForm>({
    defaultValues: defaultFormValues,
  });

  /**
 * Check whether the localStorage contains SearchPreference data from registration
 * If so, create searchPreference entity and remove it from localStorage
 * If not, nothing is done
 */
  useEffect(() => {
    const postSearchPreferences = async () => {
      const item = window.localStorage.getItem('searchPreference');
      if (item) {
        const searchPreferenceData: SearchPreferenceData = JSON.parse(item);
        await postSearchPreference(searchPreferenceData);
        window.localStorage.removeItem('searchPreference');
      }
    };
    postSearchPreferences();
  }, []);

  return (
    <FormProvider {...methods}>
      <SearchPreferenceDataProvider>
        <MatchPage />
      </SearchPreferenceDataProvider>
    </FormProvider>
  );
}

export default withAuth(Page)
