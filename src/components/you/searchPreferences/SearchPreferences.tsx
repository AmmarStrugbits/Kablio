"use client"

/*
| Developed by Reskue
| Filename: SearchPreferences.tsx
| Author: eric@reskue.art
*/

import { Box, Drawer, keyframes, useMediaQuery } from '@mui/material'
import { styled } from '@mui/system'
import React, { useEffect, useState } from 'react'
import SideBar from './navbar/sidebar/SideBar'
import NavLinksSidebarSearchPreferences, { SearchPreferencesSectionTitles } from '@/shared/const/NavLinksSidebarSearchPreferences'
import { useFormContext } from "react-hook-form"
import { SearchPreferencesDataForm } from '@/shared/interfaces/SearchPreference.interfaces'
import { useSearchPreferenceContext } from '@/contexts/searchPreferenceContext'
import ActiveComponentTitle from './ActiveComponentTitle'
import BottomBar from './navbar/BottomBar'
import { onSubmit, transformUserPreferencesToFormValues } from '@/services/searchpreferences/searchPreferences.services'
import { theme } from '@/MUI/Theme'
import ActiveComponentTopBar from './navbar/ActiveComponentTopBar'

/*
|--------------------------------------------------------------------------
| Contracts
|--------------------------------------------------------------------------
*/
export interface SearchPreferencesProps //extends buttonProps
{
    children?: React.ReactNode
}

/*
|--------------------------------------------------------------------------
| Styles
|--------------------------------------------------------------------------
*/
const SearchPreferencesBoxStyled = styled(Box)(() => ({
    height: 'calc(100% - 4.375rem)',
    width: '100%',

    display: 'flex',
}))

const ActiveComponentBoxStyled = styled(Box)(({ theme }) => ({
    maxHeight: 'calc(100% - 4.375rem - 4.25rem)',
    overflowY: 'auto',
    width: '100%',

    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginLeft: '25rem',
    paddingTop: '2rem',
    paddingBottom: '5rem',
    [theme.breakpoints.down('lg')]: {
        maxHeight: 'calc(100% - 4.25rem)',
        marginLeft: '0rem',
        paddingTop: '0rem',
    },
}))

/* Drawer Style */

const slideInFromRight = keyframes`
  from {
    transform: translateX(100%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
`;

const slideInFromLeft = keyframes`
  from {
    transform: translateX(-100%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
`;

const slideInFromBottom = keyframes`
  from {
    transform: translateY(100%);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
`;

const DrawerAnimated = styled(Drawer, {
    shouldForwardProp: (prop) => prop !== 'isDrawerFirstOpen' && prop !== 'slideDirection',
})<{ slideDirection?: 'right' | 'left'; isDrawerFirstOpen: boolean }>(({ slideDirection, isDrawerFirstOpen }) => ({
    '& .MuiDrawer-paperAnchorBottom': {
        height: '96%',
        borderTopLeftRadius: '20px',
        borderTopRightRadius: '20px',
    },
    '& .MuiDrawer-paper': {
        animation: isDrawerFirstOpen ? slideInFromBottom : `${slideDirection === 'right' ? slideInFromRight : slideInFromLeft} 0.5s forwards`,
    },
}));

/*
|--------------------------------------------------------------------------
| Component
|--------------------------------------------------------------------------
*/

const SearchPreferences: React.FC<SearchPreferencesProps> = () => {
    const matchesMobile = useMediaQuery(theme.breakpoints.down('lg'));

    // Get data 
    const { sectorsContext, locationsContext, jobsContext, userPreferences, isLoading } = useSearchPreferenceContext();
    const { getValues, reset } = useFormContext();

    // Form's section to display
    const [activeSection, setActiveSection] = useState<string>('TargetSectors');
    const [isActiveComponentOpen, setIsActiveComponentOpen] = useState<boolean>(false);

    const ActiveComponent = NavLinksSidebarSearchPreferences[activeSection as keyof typeof NavLinksSidebarSearchPreferences];
    const SectionTitle = SearchPreferencesSectionTitles[activeSection as keyof typeof SearchPreferencesSectionTitles];

    // bottom bar
    const orderedSections = Object.keys(NavLinksSidebarSearchPreferences);
    const isAtStart = orderedSections.indexOf(activeSection) === 0;
    const isAtEnd = orderedSections.indexOf(activeSection) === orderedSections.length - 1;

    // animation
    const [animationTrigger, setAnimationTrigger] = useState(0);
    const [slideDirection, setSlideDirection] = useState<'right' | 'left'>('right');

    const [drawerOpen, setDrawerOpen] = useState<boolean>(false);
    const [isDrawerFirstOpen, setIsDrawerFirstOpen] = useState<boolean>(true);

    useEffect(() => {
        if (!isLoading && userPreferences && sectorsContext && jobsContext && locationsContext) {
            const formValues: SearchPreferencesDataForm = transformUserPreferencesToFormValues(userPreferences, locationsContext.items, sectorsContext.items, jobsContext.items);
            reset(formValues);
        }
    }, [sectorsContext, jobsContext, userPreferences, locationsContext, isLoading, reset]);

    useEffect(() => {
        if (matchesMobile) {
            setDrawerOpen(isActiveComponentOpen);
            setIsDrawerFirstOpen(true)
        }
    }, [matchesMobile, isActiveComponentOpen]);

    const handleCloseDrawer = () => {
        setDrawerOpen(false);
        setIsDrawerFirstOpen(false);
        setIsActiveComponentOpen(false);
    }

    const handleSectionChange = (sectionKey: string) => {
        setActiveSection(sectionKey);
        setIsActiveComponentOpen(true);
    };

    const navigateToNextSection = () => {
        setIsDrawerFirstOpen(false);
        setSlideDirection('right');
        setAnimationTrigger(prev => prev + 1);
        const currentIndex = orderedSections.indexOf(activeSection);
        const nextIndex = Math.min(currentIndex + 1, orderedSections.length - 1);
        setActiveSection(orderedSections[nextIndex]);
    };

    const navigateToPreviousSection = () => {
        setIsDrawerFirstOpen(false);
        setSlideDirection('left');
        setAnimationTrigger(prev => prev - 1);
        const currentIndex = orderedSections.indexOf(activeSection);
        const prevIndex = Math.max(currentIndex - 1, 0);
        setActiveSection(orderedSections[prevIndex]);
    };

    const handleOnSubmit = () => {
        const formData: SearchPreferencesDataForm = getValues() as SearchPreferencesDataForm;
        onSubmit(formData);
        handleCloseDrawer();
    };

    // Render
    //--------------------------------------------------------------------------
    return (
        <SearchPreferencesBoxStyled>

            <SideBar onSectionChange={handleSectionChange} />

            {matchesMobile ?
                // Wrap active section in a drawer for mobile version
                <DrawerAnimated
                    key={animationTrigger}
                    slideDirection={slideDirection}
                    isDrawerFirstOpen={isDrawerFirstOpen}
                    variant="persistent"
                    open={drawerOpen}
                    onClose={handleCloseDrawer}
                    anchor="bottom"

                >
                    <ActiveComponentBoxStyled>
                        <ActiveComponentTopBar sectionTitle={SectionTitle} onClose={handleCloseDrawer} onSubmit={handleOnSubmit} />
                        <form>
                            <Box sx={{ paddingTop: '1rem' }}>
                                <ActiveComponent />
                            </Box>
                        </form>
                    </ActiveComponentBoxStyled>
                    <BottomBar
                        isAtStart={isAtStart}
                        isAtEnd={isAtEnd}
                        onPrevious={navigateToPreviousSection}
                        onNext={navigateToNextSection}
                        onSubmit={handleOnSubmit}
                    />
                </DrawerAnimated>
                :
                // Display active section in desktop version
                <>
                    <ActiveComponentBoxStyled>
                        <ActiveComponentTitle title={SectionTitle} />
                        <form>
                            <Box sx={{ paddingTop: '1rem' }}>
                                <ActiveComponent />
                            </Box>
                        </form>
                    </ActiveComponentBoxStyled>
                    <BottomBar
                        isAtStart={isAtStart}
                        isAtEnd={isAtEnd}
                        onPrevious={navigateToPreviousSection}
                        onNext={navigateToNextSection}
                        onSubmit={handleOnSubmit}
                    />
                </>
            }
        </SearchPreferencesBoxStyled>
    );
}

export default SearchPreferences