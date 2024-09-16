"use client"

/*
| Developed by Reskue
| Filename: SideBar.tsx
| Author: eric@reskue.art
*/

import React from 'react'
import { Box, Typography, styled, useMediaQuery } from '@mui/material'
import SidebarNavLink from './SidebarNavLink'
import { sidebarSections } from '@/shared/const/SidebarSections'
import { useFormContext } from 'react-hook-form'
import { theme } from '@/MUI/Theme'
import TopBarMobile from '../../../TopBarMobile'

/*
|--------------------------------------------------------------------------
| Contracts
|--------------------------------------------------------------------------
*/

export interface SideBarProps {
    children?: React.ReactNode
    onSectionChange: (sectionId: string) => void;
}

const sectionToFormValuePath = {
    TargetSectors: 'industries',
    RoleType: 'jobs',
    ContractType: 'contractType',
    ExperienceLevel: 'experienceLevel',
    MinimumSalary: 'minSalary',
    CompanySize: 'companySize',
    HomeLocation: 'locations',
    Visa: 'visa',
    Travel: 'travel',
    Languages: 'languagesCode',
    JobseekerStatus: 'jobseekerStatus',
    Values: 'values',
};

/*
|--------------------------------------------------------------------------
| Styles
|--------------------------------------------------------------------------
*/

const SideBarBoxStyled = styled(Box)(({ theme }) => ({
    height: '100%',
    position: 'fixed',
    overflowY: 'auto',

    width: '25rem',

    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '0rem 0rem 4rem 0rem',
    boxShadow: '0px 2px 10px #D9D9D9',
    [theme.breakpoints.down('lg')]: {

        padding: '0',
        paddingBottom: '4rem',
        width: '100%',
    },

}))

const MenuBoxStyled = styled(Box)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    padding: '0.2rem',
    gap: '0.2rem',
    [theme.breakpoints.down('lg')]: {
    },
}))


const TitlePreferencesTypography = styled(Typography)(({ theme }) => ({
    fontFamily: 'Anton',
    fontSize: '1rem',
    color: '#8A909C',
    paddingLeft: '1rem',
    padding: '0.5rem 1rem',
    [theme.breakpoints.down('md')]: {
    },

}))

/*
|--------------------------------------------------------------------------
| Component
|--------------------------------------------------------------------------
*/
const SideBar: React.FC<SideBarProps> = ({ onSectionChange }) => {
    const matchesMobile = useMediaQuery(theme.breakpoints.down('lg'));
    const { getValues } = useFormContext();
    const formValues = getValues();
    const [activeSectionId, setActiveSectionId] = React.useState<string>('');

    const handleNavLinkClick = (sectionId: string) => {
        setActiveSectionId(sectionId);
        onSectionChange(sectionId);
    };

    function getFormValuePath(sectionId: string): string | undefined {
        if (sectionId in sectionToFormValuePath) {
            return sectionToFormValuePath[sectionId as keyof typeof sectionToFormValuePath];
        }
        console.warn(`No form value path for sectionId: ${sectionId}`);
        return undefined;
    }

    const checkHasData = (sectionId: string): boolean => {
        const path = getFormValuePath(sectionId);
        const pathKeyMap: Record<string, string> = {
            'industries': 'subSectors',
            'locations': 'regions',
            'jobs': 'jobRoles',
        };

        if (path) {
            const key = pathKeyMap[path];
            if (key) {
                const relatedObj = formValues[key];
                if (typeof relatedObj === 'object' && relatedObj !== null) {
                    return Object.values(relatedObj).some(array => Array.isArray(array) && array.length > 0);
                }
            }
            return Array.isArray(formValues[path]) ? formValues[path].length > 0 : formValues[path] != null;
        }
        return false;
    };

    return (
        <SideBarBoxStyled>
            {matchesMobile ? <TopBarMobile title={'Search preferences'} /> : null}
            {matchesMobile ? null : <Typography sx={{ fontFamily: 'Anton', fontSize: '1rem', padding: '1rem', [theme.breakpoints.down('md')]: { color: '#8A909C', fontWeight: '400' } }}>Search Preferences</Typography>}
            <MenuBoxStyled>
                {sidebarSections.map((section) => (
                    <React.Fragment key={section.title}>
                        <TitlePreferencesTypography>{section.title}</TitlePreferencesTypography>
                        {section.items.map((item) => {
                            return (
                                <SidebarNavLink
                                    key={item.sectionId}
                                    title={item.title}
                                    onClick={() => handleNavLinkClick(item.sectionId)}
                                    isActive={activeSectionId === item.sectionId}
                                    isAnswered={checkHasData(item.sectionId)}
                                />
                            );
                        })}
                    </React.Fragment>
                ))}
            </MenuBoxStyled>
            <Typography sx={{ fontFamily: 'Roboto', fontSize: '1rem', color: '#8A909C', padding: '2rem' }}>The more you tell us, the better the recommendations.</Typography>
        </SideBarBoxStyled>
    );
};


export default SideBar
