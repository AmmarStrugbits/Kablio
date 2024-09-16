"use client"

/*
| Developed by Reskue
| Filename: YouMenuItemWithIcon.tsx
| Author: eric@reskue.art
*/

import { ListItem, Typography, styled } from '@mui/material'
import React from 'react'

/*
|--------------------------------------------------------------------------
| Contracts
|--------------------------------------------------------------------------
*/
export interface YouMenuItemWithIconProps //extends buttonProps
{
    title: string;
    text?: string;
    Icon: React.ElementType;
    onClick: () => void;
}
/*
|--------------------------------------------------------------------------
| Styles
|--------------------------------------------------------------------------
*/
const ListItemStyled = styled(ListItem)(() => ({
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: 'white',
}))

/*
|--------------------------------------------------------------------------
| Component
|--------------------------------------------------------------------------
*/

const YouMenuItemWithIcon: React.FC<YouMenuItemWithIconProps> = ({ title, text, Icon, onClick }) => {

    // Render
    //--------------------------------------------------------------------------
    return (
        <ListItemStyled onClick={onClick} sx={{ display: 'flex', flexDirection: 'row' }}>
            <Typography
                sx={{
                    color: 'black',
                    fontSize: '1rem',
                    paddingLeft: '0.5rem'
                }}
            >{title}</Typography>
            {text && <Typography>{text}</Typography>}
            <Icon />
        </ListItemStyled>
    );
}

export default YouMenuItemWithIcon
