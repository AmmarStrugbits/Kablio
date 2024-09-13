'use client'

import { theme } from "@/MUI/Theme";
import NavbarAccount from "@/components/navbar/account/NavbarAccount";
import { DrawerProvider } from "@/contexts/YouMenuDrawerContext";
import { Box } from "@mui/material";

export default function AccountLayout(props: any) {
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