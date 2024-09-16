"use client"

/*
| Developed by Reskue
| Filename: searchPreferenceContext.tsx
| Author: eric@reskue.art
*/

import { apiGetIndustries, apiGetJobs, apiGetRegions, apiGetSearchPreference } from '@/services/axios/axios.services';
import { JobRoleData, LocationData } from '@/shared/interfaces/SearchPreference.interfaces';
import React, { createContext, useContext, useEffect, useState } from 'react'

/*
|--------------------------------------------------------------------------
| Contracts
|--------------------------------------------------------------------------
*/

/*
|--------------------------------------------------------------------------
| Component
|--------------------------------------------------------------------------
*/

interface SearchPreferenceDataContextState {
    locationsContext: any;
    sectorsContext: any;
    jobsContext: {
        items: JobRoleData[];
        meta: any;
    };
    userPreferences: any;
    isLoading: boolean;
}

const initialState: SearchPreferenceDataContextState = {
    locationsContext: [],
    sectorsContext: [],
    jobsContext: {
        items: [],
        meta: {},
    },
    userPreferences: null,
    isLoading: true,
};

const DataContext = createContext<SearchPreferenceDataContextState>(initialState);

export const useSearchPreferenceContext = (): SearchPreferenceDataContextState => {
    const context = useContext(DataContext);
    if (!context) {
        throw new Error('useSearchPreferenceContext must be used within a SearchPreferenceDataProvider');
    }
    return context;
};

export const SearchPreferenceDataProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [dataState, setDataState] = useState<SearchPreferenceDataContextState>(initialState);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const [sectorsRes, userPreferencesRes] = await Promise.all([
                    apiGetIndustries(100, 0),
                    apiGetSearchPreference(),
                ]);
                let jobsItemsAccumulated: JobRoleData[] = [];
                let locationItemsAccumulated: LocationData[] = [];
                let lastMetaJobs = {};
                let lastMetaLocations = {};

                const numberOfCalls = 2;

                for (let i = 0; i < numberOfCalls; i++) {
                    const response = await apiGetRegions(100, i);
                    const { items, meta } = response.data;
                    locationItemsAccumulated = [...locationItemsAccumulated, ...items];
                    lastMetaLocations = meta;
                }

                for (let i = 0; i < numberOfCalls; i++) {
                    const response = await apiGetJobs(100, i);
                    const { items, meta } = response.data;
                    jobsItemsAccumulated = [...jobsItemsAccumulated, ...items];
                    lastMetaJobs = meta;
                }
                setDataState({
                    locationsContext: { items: locationItemsAccumulated, meta: lastMetaLocations },
                    sectorsContext: sectorsRes.data,
                    jobsContext: { items: jobsItemsAccumulated, meta: lastMetaJobs },
                    userPreferences: userPreferencesRes.data,
                    isLoading: false,
                });
            } catch (error) {
                console.error('Error fetching data:', error);
                setDataState(prevState => ({ ...prevState, isLoading: false }));
            }
        };

        fetchData();
    }, []);

    return (
        <DataContext.Provider value={dataState}>
            {children}
        </DataContext.Provider>
    );
};