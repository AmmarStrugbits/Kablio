"use client"

/*
| Developed by Reskue
| Filename: WordListInput.tsx
| Author: eric@reskue.art
*/

import React, { ChangeEvent, KeyboardEvent, useState } from 'react';
import { TextField, Chip, Stack, Box, Typography } from '@mui/material';
import { styled } from '@mui/material'
import ClearIcon from '@mui/icons-material/Clear';
/*
|--------------------------------------------------------------------------
| Contracts
|--------------------------------------------------------------------------
*/
export interface WordListInputProps {
    message: string;
}
/*
|--------------------------------------------------------------------------
| Styles
|--------------------------------------------------------------------------
*/
const WordListInputBoxStyled = styled(Box)(({ theme }) => ({
    padding: '1rem',
    width: '100%',
    [theme.breakpoints.down('md')]: {
        padding: '0.5rem',
    },
}))

/*
|--------------------------------------------------------------------------
| Component
|--------------------------------------------------------------------------
*/
const WordListInput = ({ message }: WordListInputProps) => {
    const [word, setWord] = useState<string>('');
    const [wordsList, setWordsList] = useState<string[]>([]);

    const handleAddWord = () => {
        if (word && !wordsList.includes(word)) {
            setWordsList(prevWords => [...prevWords, word]);
            setWord('');
        }
    };

    const handleDeleteWord = (wordToDelete: string): void => {
        setWordsList(wordsList.filter(w => w !== wordToDelete));
    };

    const handleKeyDown = (event: KeyboardEvent<HTMLDivElement>): void => {
        if (event.key === 'Enter') {
            event.preventDefault();
            handleAddWord();
        }
    };

    const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
        setWord(event.target.value);
    };

    // const handleAddButtonClick = () => {
    //     handleAddWord();
    // };

    // Render
    //--------------------------------------------------------------------------
    return (
        <WordListInputBoxStyled>
            <Typography sx={{ fontSize: '1rem', fontWeight: '400', color: '#8A909C', paddingLeft: '0.5rem' }}>{message}</Typography>
            <Box style={{ display: 'flex', alignItems: 'center', gap: '10px', width: '100%', marginTop: '0.5rem' }}>
                <TextField
                    variant="outlined"
                    label="..."
                    value={word}
                    onChange={handleChange}
                    onKeyDown={handleKeyDown}
                    style={{ width: '100%', borderColor: '#8A909C' }}
                />
                {/* <Button variant="contained" onClick={handleAddButtonClick}>Add</Button> */}
            </Box>
            <Stack direction="row" justifyContent='center' spacing={1} marginTop={2} flexWrap='wrap' gap='0.5rem'>
                {wordsList.map((word, index) => (
                    <Chip
                        key={index}
                        label={word}
                        onDelete={() => handleDeleteWord(word)}
                        variant="outlined"
                        sx={{ color: 'black', fontSize: '1rem', bgcolor: '#00FBDF', border: 'none', borderRadius: 0 }}
                        deleteIcon={<ClearIcon sx={{ color: 'black !important' }} />}
                    />
                ))}
            </Stack>
        </WordListInputBoxStyled>
    );
};

export default WordListInput;