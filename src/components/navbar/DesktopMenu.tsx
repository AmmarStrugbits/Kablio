/*
| Developed by Reskue
| Filename: DesktopMenu.tsx
| Author: eric@reskue.art
*/

"use client"

import { Button, Typography } from '@mui/material'
import { Box, styled } from '@mui/system'
import React, { useState } from 'react'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation'

/*
|--------------------------------------------------------------------------
| Contracts
|--------------------------------------------------------------------------
*/
export interface DesktopMenuProps //extends buttonProps
{
    isUserLogged: boolean;
    children?: React.ReactNode
}

export enum Occupation {
    JOBSEEKER = "Jobseeker",
    EMPLOYER = "Employer",
    RECRUITER = "Recruiter",
    KONNECTOR = "Konnector"
}
/*
|--------------------------------------------------------------------------
| Styles
|--------------------------------------------------------------------------
*/

const NavBarBoxStyled = styled(Box)(() => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
}))
const DropdownContainer = styled(Box)({
    position: 'relative',
    fontFamily: 'Roboto',
    fontWeight: 'bold',
    display: 'flex',
});

const DropdownButton = styled(Box)(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '0.7rem',
    borderRadius: '0.60rem',
    border: '1px solid black',
    fontSize: '1.125rem',
    cursor: 'pointer',
    '&:hover': {
        backgroundColor: theme.palette.secondary.main,
    },
}));

const DropdownMenu = styled(Box)({
    position: 'absolute',
    top: '100%',
    left: 0,
    right: 0,
    border: '1px solid black',
    borderRadius: '0.60rem',
    backgroundColor: 'white',
    zIndex: 1000,

    display: 'flex',
    flexDirection: 'column',

    fontFamily: 'Roboto',
    fontWeight: 'bold',
    fontSize: '1.125rem',
});

const DropdownMenuItem = styled(Typography)({
    padding: '0.7rem',
    cursor: 'pointer',
    fontFamily: 'Roboto',
    fontWeight: 'bold',
    fontSize: '1.125rem',
    borderRadius: '0.60rem',
    '&:hover': {
        backgroundColor: '#e4faf7',
    },
});

const ButtonStyled = styled(Button)(({ theme }) => ({
    borderRadius: '4.375rem',
    backgroundColor: "black",
    color: "white",
    fontSize: '1.125rem',
    fontFamily: 'Roboto',
    fontWeight: 'bold',
    padding: '1.875rem 3rem',
    '&:hover': {
        backgroundColor: theme.palette.secondary.main,
        color: "black",
    },
}))

const DesktopMenu: React.FC<DesktopMenuProps> = ({ isUserLogged }) => {
    const [isOpen, setIsOpen] = useState(false);
    const router = useRouter();
    const pathname = usePathname();

    const getOccupationFromPath = () => {
        if (pathname === '/' || pathname.startsWith('/jobseeker')) {
            return Occupation.JOBSEEKER;
        }
        if (pathname.startsWith('/employers')) {
            return Occupation.EMPLOYER;
        }
        if (pathname.startsWith('/recruiters')) {
            return Occupation.RECRUITER;
        }
        if (pathname.startsWith('/konnectors')) {
            return Occupation.KONNECTOR;
        }
        return undefined;
    };

    const occupation = getOccupationFromPath();
    const displayOccupation = (occupation: Occupation | undefined) => {
        if (!occupation) return 'Who are you?';
        const article = ["A", "E", "I", "O", "U"].includes(occupation[0]) ? 'an' : 'a';
        const occupationText = occupation === Occupation.KONNECTOR ? 'Konnector' : occupation;
        return `I'm ${article} ${occupationText}`;
    };

    const handleSelect = (value: Occupation) => {
        setIsOpen(false);
        if (value === Occupation.JOBSEEKER) {
            router.push(`/`);
        } else if (value === Occupation.KONNECTOR) {
            router.push(`/konnectors`);
        } else {
            router.push(`/${value.toLowerCase()}`);
        }
    };

    return (
        <NavBarBoxStyled>
            <DropdownContainer>
                <DropdownButton onClick={() => setIsOpen(!isOpen)}>
                    {displayOccupation(occupation)}
                    <ExpandMoreIcon />
                </DropdownButton>
                {isOpen && (
                    <DropdownMenu>
                        {Object.values(Occupation).map((value) => (
                            <DropdownMenuItem
                                key={value}
                                onClick={() => handleSelect(value)}
                            >
                                {value}
                            </DropdownMenuItem>
                        ))}
                    </DropdownMenu>
                )}
            </DropdownContainer>
            <Box
                display={"flex"}
                alignItems={"center"}
                gap={"1.56rem"}
            >
                <Link href="/blog">
                    <Typography
                        fontSize='1.125rem'
                        fontFamily='Roboto'
                        fontWeight='bold'
                    >
                        Blog
                    </Typography>
                </Link>
                <Link href="/about-us">
                    <Typography
                        fontSize='1.125rem'
                        fontFamily='Roboto'
                        fontWeight='bold'
                    >
                        About us
                    </Typography>
                </Link>

                <ButtonStyled href={isUserLogged ? '/account/matches' : '/auth/login'}>
                    {isUserLogged ? "Go to matches" : "Login"}
                </ButtonStyled>

            </Box>
        </NavBarBoxStyled>
    )
}

export default DesktopMenu
