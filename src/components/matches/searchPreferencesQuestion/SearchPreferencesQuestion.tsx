/*
| Developed by Reskue
| Filename: SearchPreferencesQuestion.tsx
| Author: eric@reskue.art
*/

"use client"

import { theme } from '@/MUI/Theme';
import { useMediaQuery } from '@mui/system';
import React, { useEffect, useState } from 'react';
import { useFormContext } from 'react-hook-form';
import { Box, Typography, styled } from '@mui/material';

import BackButton from '@/components/quiz/BackButton';
import NextButton from '@/components/quiz/NextButton';
import ActiveComponentTitle from '@/components/you/searchPreferences/ActiveComponentTitle';

import { findEmptyArrayKeys } from '@/services/matches/match.services';

import { QuestionsSearchPrefForMatches, SearchPreferencesSectionTitlesForMatches, keysToCheck } from '@/shared/const/NavLinksSidebarSearchPreferences';


/*
|--------------------------------------------------------------------------
| Contracts
|--------------------------------------------------------------------------
*/
export interface SearchPreferencesQuestionProps {
    onBack: () => void;
    onSave: () => void;
}

/*
|--------------------------------------------------------------------------
| Styles
|--------------------------------------------------------------------------
*/

const ComponentBoxStyled = styled(Box)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
    [theme.breakpoints.down('md')]: {
    },
}))

const HeaderBoxStyled = styled(Box)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
    padding: '1rem',
    [theme.breakpoints.down('md')]: {
        marginBottom: '1rem',
        backgroundColor: 'white',
        boxShadow: '0px 2px 10px #D9D9D9',
        padding: '0rem',
        paddingTop: '1rem',
    },
}))


const DisclaimerTypographyStyled = styled(Typography)(({ theme }) => ({
    textAlign: 'center',
    fontSize: '1.125rem',
    [theme.breakpoints.down('md')]: {
        fontSize: '1rem',
    },
}))

const AllButttonsBoxStyled = styled(Box)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    gap: '1rem',
    margin: '1rem 0rem',
    [theme.breakpoints.down('md')]: {
        position: 'fixed',
        bottom: '4rem',
        width: '100%',
        padding: '0rem 2rem'
    },
}))

const ButtonBoxStyled = styled(Box)(({ theme }) => ({
    width: '16rem',
    [theme.breakpoints.up('md')]: {
        display: 'flex',
        justifyContent: 'center',
        alignItem: 'center',
    },

    [theme.breakpoints.down('md')]: {
        width: '50%'
    },
}))

/*
|--------------------------------------------------------------------------
| Component
|--------------------------------------------------------------------------
*/
const SearchPreferencesQuestion: React.FC<SearchPreferencesQuestionProps> = ({ onBack, onSave }) => {
    const matchesMobile = useMediaQuery(theme.breakpoints.down('md'));
    const { getValues } = useFormContext();
    const [ActiveComponent, setActiveComponent] = useState<React.ElementType | null>(null);
    const [sectionTitle, setSectionTitle] = useState<string>('');

    useEffect(() => {
        const values = getValues();
        const emptyKeys = findEmptyArrayKeys(values, keysToCheck);

        if (emptyKeys.length > 0) {
            const randomKey = emptyKeys[Math.floor(Math.random() * emptyKeys.length)];
            const SelectedComponent = QuestionsSearchPrefForMatches[randomKey as keyof typeof QuestionsSearchPrefForMatches];
            setSectionTitle(SearchPreferencesSectionTitlesForMatches[randomKey as keyof typeof SearchPreferencesSectionTitlesForMatches]);
            setActiveComponent(() => SelectedComponent);
        }
    }, []);

    return (
        <ComponentBoxStyled>
            <HeaderBoxStyled>
                <DisclaimerTypographyStyled sx={{ textAlign: 'center', fontSize: '1.125rem' }}>🛑 Pause for a sec!⏳ <br /> Share more information to get better recommendations.</DisclaimerTypographyStyled>
                {ActiveComponent ? <ActiveComponentTitle title={sectionTitle} /> : null}
            </HeaderBoxStyled>
            {ActiveComponent ? <ActiveComponent /> : <div>No preferences to set.</div>}
            <AllButttonsBoxStyled>
                <ButtonBoxStyled>
                    <BackButton onClick={onBack}> {matchesMobile ? 'Back' : 'Go back to matches'}</BackButton>
                </ButtonBoxStyled>
                <ButtonBoxStyled>
                    <NextButton onClick={onSave}>Save</NextButton>
                </ButtonBoxStyled>
            </AllButttonsBoxStyled>
        </ComponentBoxStyled>
    );
};

export default SearchPreferencesQuestion;