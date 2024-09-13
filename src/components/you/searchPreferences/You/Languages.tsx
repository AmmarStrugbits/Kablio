import React, { useState } from 'react';
import { useFormContext } from 'react-hook-form';
import { Autocomplete, Chip, Stack, TextField } from '@mui/material';
import { Iso6391LanguageCodeToLanguageName, MostSpokenLanguages } from '@/shared/enum/Language.enum';
import SelectionButtonContainer from '@/components/quiz/SelectionButtonContainer';
import ClearIcon from '@mui/icons-material/Clear';

type LanguageCode = keyof typeof MostSpokenLanguages;

const LanguageSelection: React.FC = () => {
    const { watch, setValue } = useFormContext();
    const formSelectedLanguages = watch("languagesCode") as LanguageCode[];

    const languageOptions = Object.entries(Iso6391LanguageCodeToLanguageName).map(([code, name]) => ({
        code,
        name,
    }));

    const [inputValue, setInputValue] = useState('');

    const handleChange = (event: React.SyntheticEvent, newValue: { code: string; name: string } | null): void => {
        if (newValue) {
            const newValues = [...formSelectedLanguages, newValue.code];
            setValue("languagesCode", Array.from(new Set(newValues)), { shouldValidate: true });
            setInputValue('');
        }
    };

    const handleDelete = (chipToDelete: string) => {
        setValue("languagesCode", formSelectedLanguages.filter((code) => code !== chipToDelete), {
            shouldValidate: true,
        });
    };

    return (
        <div>
            <SelectionButtonContainer
                choices={Object.values(MostSpokenLanguages).map(name => name)}
                selectedChoices={formSelectedLanguages.map(code => MostSpokenLanguages[code])}
                handleSelectedChoice={(selectedChoice) => {
                    const choiceKey = Object.keys(MostSpokenLanguages).find(key => MostSpokenLanguages[key as LanguageCode] === selectedChoice) as LanguageCode | undefined;
                    if (!choiceKey) return;
                    const newValues = formSelectedLanguages.includes(choiceKey) ? formSelectedLanguages.filter(code => code !== choiceKey) : [...formSelectedLanguages, choiceKey];
                    setValue("languagesCode", newValues, { shouldValidate: true });
                }}
            />
            <Autocomplete
                disablePortal
                id="language-auto-complete"
                options={languageOptions.filter(option => !formSelectedLanguages.includes(option.code as LanguageCode))}
                getOptionLabel={(option) => option.name}
                renderInput={(params) => <TextField {...params} label="Search for a language" value={inputValue} onChange={(e) => setInputValue(e.target.value)} />}
                onChange={handleChange}
                inputValue={inputValue}
                onInputChange={(event, newInputValue) => {
                    setInputValue(newInputValue);
                }}
                isOptionEqualToValue={(option, value) => option.code === value.code}
                sx={{ marginTop: '2rem' }}
            />
            <Stack direction="row" spacing={1} marginTop={2}>
                {formSelectedLanguages.map((code, index) => (
                    <Chip
                        key={index}
                        label={Iso6391LanguageCodeToLanguageName[code]}
                        onDelete={() => handleDelete(code)}
                        variant="outlined"
                        sx={{ color: 'black', fontSize: '1rem', bgcolor: '#00FBDF', border: 'none', borderRadius: 0 }}
                        deleteIcon={<ClearIcon sx={{ color: 'black !important' }} />}
                    />
                ))}
            </Stack>
        </div>
    );
};

export default LanguageSelection;
