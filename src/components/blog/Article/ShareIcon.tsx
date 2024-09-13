"use client"
import { styled } from '@mui/material';
import React from 'react';

interface ShareIconProps {
    platform: string;
    icon: React.ReactNode;
}

const ButtonStyled = styled('button')(({ theme }) => ({
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    border: '1px solid #D0D5DD',
    color: '#344054',
    backgroundColor: 'transparent',
    fontFamily: 'Inter, sans-serif',
    fontSize: '0.875rem',
    fontWeight: '600',
    padding: '8px 8px',
    cursor: 'pointer',
    outline: 'none',
    borderRadius: '0.5rem',
    gap: '0.5rem',
    [theme.breakpoints.down('md')]: {
    },
}));

const ShareIcon: React.FC<ShareIconProps> = ({ platform, icon }) => {
    const shareUrl = () => {
        const pageTitle = document.title;
        const pageUrl = window.location.href;

        let shareUrl = '';
        switch (platform) {
            case 'twitter':
                shareUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(pageTitle)}&url=${encodeURIComponent(pageUrl)}`;
                break;
            case 'linkedin':
                shareUrl = `https://www.linkedin.com/shareArticle?url=${encodeURIComponent(pageUrl)}`;
                break;
            case 'facebook':
                shareUrl = `https://www.facebook.com/sharer/sharer.php?url=www.kablio.com`;
                break;
            case 'whatsapp':
                shareUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(pageTitle)}%20${encodeURIComponent(pageUrl)}`;
                break;
            default:
                break;
        }
        window.open(shareUrl, '_blank');
    };

    return (
        <ButtonStyled onClick={shareUrl}>
            {icon}
        </ButtonStyled>
    );
};

export default ShareIcon;
