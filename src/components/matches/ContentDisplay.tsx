/*
| Developed by Reskue
| Filename: ContentDisplay.tsx
| Author: eric@reskue.art
*/

"use client"

import { ContentElement } from '@/shared/interfaces/JobPostClass';
import { styled } from '@mui/system';
import React from 'react'

/*
|--------------------------------------------------------------------------
| Contracts
|--------------------------------------------------------------------------
*/
interface ContentDisplayProps {
    content: ContentElement[];
}
/*
|--------------------------------------------------------------------------
| Styles
|--------------------------------------------------------------------------
*/

const StyledList = styled('ul')(({ theme }) => ({
    fontFamily: "Roboto",
    fontSize: "1.125rem",
    listStyleType: 'disc',
    marginBottom: "1rem",

    [theme.breakpoints.down('md')]: {
        fontSize: '1rem',
    },

}))

const StyledItemList = styled('li')(({ theme }) => ({

    fontFamily: "Roboto",
    fontSize: "1.125rem",
    marginLeft: '1.125rem',
    marginTop: '0.5rem',
    [theme.breakpoints.down('md')]: {
        fontSize: '1rem',
    },

}))

const StyledParagraphe = styled('p')(({ theme }) => ({
    fontFamily: "Roboto",
    fontSize: "1.125rem",
    marginBottom: "1rem",

    [theme.breakpoints.down('md')]: {
        fontSize: '1rem',
    },

}))
/*
|--------------------------------------------------------------------------
| Component
|--------------------------------------------------------------------------
*/

const ContentDisplay: React.FC<ContentDisplayProps> = ({ content }) => {
    // Render
    //--------------------------------------------------------------------------
    return (
        <>
            {content?.map((element, index) => {
                if (element.type === 'paragraph') {

                    return <StyledParagraphe key={index}>{element.data as string}</StyledParagraphe>;
                } else if (element.type === 'list') {

                    return (
                        <StyledList key={index}>
                            {(element.data as string[]).map((item, itemIndex) => (
                                <StyledItemList key={itemIndex}>{item}</StyledItemList>
                            ))}
                        </StyledList>
                    );
                } else {
                    return null;
                }
            })}
        </>
    );
}

export default ContentDisplay
