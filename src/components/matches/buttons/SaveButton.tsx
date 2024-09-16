"use client"

/*
| Developed by Reskue
| Filename: SaveButton.tsx
| Author: eric@reskue.art
*/

import { Button, ButtonProps } from '@mui/material'
import React, { useEffect } from 'react'
import { styled } from '@mui/material'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';

/*
|--------------------------------------------------------------------------
| Contracts
|--------------------------------------------------------------------------
*/
export interface SaveButtonProps extends ButtonProps {
    isSaved?: boolean;
    onClick?: () => void;
    children?: React.ReactNode
}
/*
|--------------------------------------------------------------------------
| Styles
|--------------------------------------------------------------------------
*/

const ButtonStyle = styled(Button)(({ theme }) => ({
    color: "black",
    gap: "0.625rem",
    borderRadius: "0.625rem",
    boxShadow: "0px 13px 19px -7px rgba(0, 0, 0, 0.10)",
    background: "linear-gradient(180deg, #00FBDF 28.18%, rgba(0, 251, 223, 0.74) 62.22%, rgba(1, 186, 248, 0.74) 100%)",
    '&:hover': {
        backgroundColor: theme.palette.secondary.main,
        color: "black",
    }
}))

/*
|--------------------------------------------------------------------------
| Component
|--------------------------------------------------------------------------
*/

const SaveButton: React.FC<SaveButtonProps> = ({ isSaved, onClick }) => {
    useEffect(() => {
    }, [isSaved]);

    // Render
    //--------------------------------------------------------------------------
    return (
        <ButtonStyle onClick={onClick} fullWidth startIcon={isSaved ? <FavoriteIcon /> : <FavoriteBorderIcon />}>
            Save
        </ButtonStyle>
    );
};
export default SaveButton