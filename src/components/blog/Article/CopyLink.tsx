"use client";
// Filename: app/components/ui/CopyUrlButton.tsx

import { styled } from '@mui/material';
import React, { ReactNode } from 'react';

interface CopyUrlButtonProps {
    children?: React.ReactNode;
    icon?: ReactNode;
}

const ButtonStyled = styled('button')(({ theme }) => ({
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    [theme.breakpoints.down('md')]: {
    },
}))


const CopyUrlButton: React.FC<CopyUrlButtonProps> = ({ children, icon }) => {
    const copyUrlToClipboard = async () => {
        try {
            const url = window.location.href;
            await navigator.clipboard.writeText(url);
        } catch (error) {
            return;
        }
    };

    return (
        <ButtonStyled onClick={copyUrlToClipboard}
            style={{
                border: '1px solid #D0D5DD',
                color: '#344054',
                backgroundColor: 'transparent',
                fontFamily: 'Inter, sans-serif',
                fontSize: '0.875rem',
                fontWeight: '600',
                padding: '8px 16px',
                cursor: 'pointer',
                outline: 'none',
                borderRadius: '0.5rem',
                gap: '0.5rem',
            }}>
            {icon}
            {children}
        </ButtonStyled>
    );
};

export default CopyUrlButton;
