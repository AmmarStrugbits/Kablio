'use client'

import { ReactNode } from 'react';
import { theme } from "@/MUI/Theme";
import NavbarAccount from "@/components/navbar/account/NavbarAccount";
import { DrawerProvider } from "@/contexts/YouMenuDrawerContext";
import { Box } from "@mui/material";

type Props = {
    children: ReactNode;
};

export default function AccountLayout(props: Props) {
    const { children } = props;
    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                [theme.breakpoints.down('md')]: {
                    flexDirection: 'column-reverse',
                }
            }}
        >
            <DrawerProvider>
                <NavbarAccount />
                {children}
            </DrawerProvider>
        </ Box>
    );
}