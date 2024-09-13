/*
| Developed by Reskue
| Filename: QuizContext.tsx
| Author: eric@reskue.art
*/

"use client"

import React, { createContext, useContext, ReactNode, useState } from 'react';
import { ExperienceLevel } from '@/shared/enum/ExperienceLevel.enum';
import { JobRoleData, LocationData, SearchPreferenceData, SectorData } from '@/shared/interfaces/SearchPreference.interfaces';
import { apiRegisterUser } from '@/services/axios/axios.services';
import { UserData } from '@/shared/interfaces/User.interfaces';
import { JobLocationQuizzContextType, JobRoleSeekingQuizzContextType, JobSectorSeekingQuizzContextType } from '@/app/auth/signup/interfaces/QuizContext.interface';

/*
|--------------------------------------------------------------------------
| Contracts
|--------------------------------------------------------------------------
*/

export interface ExperienceMapping {
    id: string;
    name: string;
    experienceLevel: ExperienceLevel;
}

export function createExperienceMappings(): ExperienceMapping[] {
    return [
        { id: '1', name: 'Internships', experienceLevel: ExperienceLevel.INTERNSHIP },
        { id: '2', name: 'Apprenticeships / Entry Level', experienceLevel: ExperienceLevel.APPRENTICESHIP },
        { id: '3', name: 'Graduates / Entry-level', experienceLevel: ExperienceLevel.ENTRYLEVEL },
        { id: '4', name: 'Junior (1-3 years)', experienceLevel: ExperienceLevel.JUNIOR },
        { id: '5', name: 'Intermediate (4-7 years)', experienceLevel: ExperienceLevel.MIDLEVEL },
        { id: '6', name: 'Experienced (8-12 years)', experienceLevel: ExperienceLevel.SENIOR },
        { id: '7', name: 'Expert & Leadership (13+ years)', experienceLevel: ExperienceLevel.EXPERT }
    ];
}

interface JobRoleLevelQuizzContextType {
    selectedJobLevels: string[];
    setSelectedJobLevels: (jobLevels: string[]) => void;
}

interface CreateAccountQuizzContextType {
    onSubmit: (formData: UserData) => Promise<void>;
    onSubmitGoogle: () => Promise<void>;
    onSubmitLinkedin: () => Promise<void>;
}


interface QuizContextType extends
    JobLocationQuizzContextType,
    JobSectorSeekingQuizzContextType,
    JobRoleSeekingQuizzContextType,
    JobRoleLevelQuizzContextType,
    CreateAccountQuizzContextType { }

/*
|--------------------------------------------------------------------------
| Component
|--------------------------------------------------------------------------
*/

const QuizContext = createContext<QuizContextType | undefined>(undefined);

export const QuizProvider = ({ children }: { children: ReactNode }) => {
    //Locations 
    const [locationsData, setLocationsData] = useState<LocationData[]>([]);
    const [availableCountries, setAvailableCountries] = useState<string[]>([]);
    const [selectedCountries, setSelectedCountries] = useState<string[]>([]);
    const [selectedRegions, setSelectedRegions] = useState<{ [key: string]: string[] }>({});

    //Sectors
    const [sectorsData, setSectorsData] = useState<SectorData[]>([]);
    const [availableSectors, setAvailableSectors] = useState<string[]>([]);
    const [selectedSectors, setSelectedSectors] = useState<string[]>([]);
    const [selectedSubSectors, setSelectedSubSectors] = useState<{ [key: string]: string[] }>({});

    //Job role
    const [jobRolesData, setjobRolesData] = useState<JobRoleData[]>([]);
    const [availableWorkFields, setAvailableWorkFields] = useState<string[]>([]);
    const [selectedWorkFields, setSelectedWorkFields] = useState<string[]>([]);
    const [selectedJobRoles, setSelectedJobRoles] = useState<{ [key: string]: string[] }>({});

    //Experience Level
    const [selectedJobLevels, setSelectedJobLevels] = useState<string[]>([]);

    const finalizeSubmission = async (userData: UserData) => {
        const searchPreference: SearchPreferenceData = setSearchePreferenceData();
        localStorage.setItem('searchPreference', JSON.stringify(searchPreference));
        localStorage.setItem('userData', JSON.stringify(userData));
        await apiRegisterUser(userData);
    };

    const onSubmit = async (formData: UserData) => {
        await finalizeSubmission(formData);
    }

    const onSubmitLinkedin = async () => {
        const searchPreference: SearchPreferenceData = setSearchePreferenceData()
        try {
            localStorage.setItem('searchPreference', JSON.stringify(searchPreference));
            window.location.href = `${process.env.NEXT_PUBLIC_API_URL}/auth/user/linkedin/register`;
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }

    const onSubmitGoogle = async () => {
        const searchPreference: SearchPreferenceData = setSearchePreferenceData();
        try {
            localStorage.setItem('searchPreference', JSON.stringify(searchPreference));
            window.location.href = `${process.env.NEXT_PUBLIC_API_URL}/auth/user/google/register`;
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }

    const setSearchePreferenceData = (): SearchPreferenceData => {
        return {
            locations: Object.values(selectedRegions).flat(),
            industries: Object.values(selectedSubSectors).flat(),
            jobs: Object.values(selectedJobRoles).flat(),
            experienceLevel: selectedJobLevels.map(selectedId =>
                createExperienceMappings().find(exp => exp.id === selectedId)?.experienceLevel
            ).filter((exp): exp is ExperienceLevel => exp !== undefined)
        };
    }

    const value = {
        onSubmit,
        onSubmitGoogle,
        onSubmitLinkedin,

        availableCountries,
        setAvailableCountries,
        locationsData,
        selectedCountries,
        setSelectedCountries,
        setLocationsData,
        selectedRegions,
        setSelectedRegions,

        sectorsData,
        setSectorsData,
        availableSectors,
        setAvailableSectors,
        selectedSectors,
        setSelectedSectors,
        selectedSubSectors,
        setSelectedSubSectors,

        jobRolesData,
        setjobRolesData,
        availableWorkFields,
        setAvailableWorkFields,
        selectedWorkFields,
        setSelectedWorkFields,
        selectedJobRoles,
        setSelectedJobRoles,

        selectedJobLevels,
        setSelectedJobLevels
    };

    return (
        <QuizContext.Provider value={value}>
            {children}
        </QuizContext.Provider>
    );
};

export const useQuizContext = () => {
    const context = useContext(QuizContext);
    if (context === undefined) {
        throw new Error('useQuizContext must be used within a QuizProvider');
    }
    return context;
};
