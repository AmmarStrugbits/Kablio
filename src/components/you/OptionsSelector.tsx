import React, { useCallback, useEffect, useState } from 'react';
import { Box, styled } from '@mui/material';
import { useFormContext } from 'react-hook-form';
import OptionsList from './OptionsList';

/*
|--------------------------------------------------------------------------
| Contracts
|--------------------------------------------------------------------------
*/

interface Option {
    id: string;
    name: string;
    enum: string;
}

interface OptionsSelectorProps {
    createOptionsMappings: () => { id: string; name: string; enum: string; }[];
    label: JSX.Element;
    maxSelections?: number;

    setSelectedData: (id: string, selectedIds: string[]) => void;
    dataTypeId: string;
}
/*
|--------------------------------------------------------------------------
| Styles
|--------------------------------------------------------------------------
*/
const OptionsSelectorSectionBoxStyled = styled(Box)(() => ({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "2rem",
}));
/*
|--------------------------------------------------------------------------
| Component
|--------------------------------------------------------------------------
*/
const OptionsSelector = ({ createOptionsMappings, label, maxSelections, setSelectedData, dataTypeId }: OptionsSelectorProps) => {
    const { watch } = useFormContext();
    const [selectedOptions, setSelectedOptions] = useState<string[]>([]);
    const availableOptions = createOptionsMappings();

    const formselectedOptions = watch(dataTypeId);

    useEffect(() => {
        if (formselectedOptions) {
            const optionsMappings = createOptionsMappings();
            const mappedSelectedIds = formselectedOptions.map((selectedEnum: string) => {
                const foundOption = optionsMappings.find(option => option.enum === selectedEnum);
                return foundOption ? foundOption.id : null;
            }).filter((id: string | null) => id !== null);
            setSelectedOptions(mappedSelectedIds);
        }
    }, [formselectedOptions, createOptionsMappings]);

    const handleOptionSelection = useCallback((id: string) => {
        const isSelected = selectedOptions.includes(id);
        let newSelectedOptions;

        if (isSelected) {
            newSelectedOptions = selectedOptions.filter(optionId => optionId !== id);
        } else {
            if (maxSelections !== undefined && selectedOptions.length >= maxSelections) {
                return;
            }
            newSelectedOptions = [...selectedOptions, id];
        }
        setSelectedOptions(newSelectedOptions);
        setSelectedData(dataTypeId, newSelectedOptions);
    }, [selectedOptions, setSelectedOptions, maxSelections, dataTypeId, setSelectedData]);

    const handleDeselectAll = useCallback(() => {
        setSelectedOptions([]);
    }, [setSelectedOptions]);

    const renderOptionsList = () => {
        const options: Option[] = availableOptions.map(option => ({
            id: option.id,
            name: option.name,
            enum: option.enum
        }));

        return (
            <OptionsList
                label={label}
                options={options}
                selectedOptionsIds={selectedOptions}
                handleSelectedOption={id => handleOptionSelection(id)}
                handleDeselectAll={() => handleDeselectAll()}
            />
        );
    };

    // Render
    //--------------------------------------------------------------------------
    return (
        <OptionsSelectorSectionBoxStyled>
            {renderOptionsList()}
        </OptionsSelectorSectionBoxStyled>
    );
};

export default OptionsSelector;
