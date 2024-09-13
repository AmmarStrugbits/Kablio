/*
| Developed by Reskue
| Filename: SectorSeeking.tsx
| Author: eric@reskue.art
*/

import React, { useCallback, useEffect, useState } from 'react';
import { Box, styled } from '@mui/material';
import { SectorData, } from '@/shared/interfaces/SearchPreference.interfaces';

import SelectionButtonContainer from '@/components/quiz/SelectionButtonContainer';
import OptionsList from '@/components/quiz/OptionsList';
import { useFormContext } from 'react-hook-form';
import { useSearchPreferenceContext } from '@/contexts/searchPreferenceContext';


/*
|--------------------------------------------------------------------------
| Contracts
|--------------------------------------------------------------------------
*/

/*
|--------------------------------------------------------------------------
| Styles
|--------------------------------------------------------------------------
*/

const TargetSectorsBoxStyled = styled(Box)((

) => ({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "2rem",
    margin: "2rem 0rem",
}));

/*
|--------------------------------------------------------------------------
| Component
|--------------------------------------------------------------------------
*/


const TargetSectors = () => {
    const { watch, setValue } = useFormContext()
    const { sectorsContext, isLoading } = useSearchPreferenceContext();
    const [sectorsData, setSectorsData] = useState<SectorData[]>([]);

    const [availableSectors, setAvailableSectors] = useState<string[]>([]);
    const [selectedSectors, setSelectedSectors] = useState<string[]>([]);
    const [selectedSubSectors, setSelectedSubSectors] = useState<{ [key: string]: string[] }>({});

    const formSelectedSectors = watch("sectors");
    const formSelectedSubSectors = watch("subSectors");

    useEffect(() => {
        if (formSelectedSectors) {
            setSelectedSectors(formSelectedSectors);
        }
        if (formSelectedSubSectors) {
            setSelectedSubSectors(formSelectedSubSectors);
        }
    }, [formSelectedSectors, formSelectedSubSectors]);

    useEffect(() => {
        if (sectorsContext && sectorsContext.items && sectorsContext.items.length > 0) {
            const industries = sectorsContext.items.map((item: SectorData) => item.group.name);
            const uniqueIndustries: string[] = Array.from(new Set(industries));
            setAvailableSectors(uniqueIndustries);
            setSectorsData(sectorsContext.items);
        }
    }, [sectorsContext]);

    /**
     * Updates the selected subsectors list.
     * @param sector - The selected sector.
     */
    const updateSelectedSubSectors = useCallback((sector: string) => {
        const newSelectedSubSectors = sectorsData
            .filter(subsector => subsector.group.name === sector)
            .map(subsector => subsector.id);

        const { [sector]: removed, ...rest } = selectedSubSectors;

        const updatedSelectedSubSectors = newSelectedSubSectors.length > 0
            ? { ...rest, [sector]: newSelectedSubSectors }
            : rest;

        return updatedSelectedSubSectors;
    }, [sectorsData, selectedSubSectors]);

    /**
     * Handles the selection of a sector and add all subSectors to the selected list.
     * @param sector - The selected sector.
     */
    const handleSectorSelection = useCallback((sector: string) => {
        const updateSelectedSectors = (prevSelectedSectors: string[]): string[] => {
            if (prevSelectedSectors.includes(sector)) {
                return prevSelectedSectors.filter((selectedSector: string) => selectedSector !== sector);
            } else {
                return [...prevSelectedSectors, sector];
            }
        };

        const newSelectedSectors = updateSelectedSectors(selectedSectors);
        setSelectedSectors(newSelectedSectors);
        setValue("sectors", newSelectedSectors, { shouldValidate: true });
        if (selectedSectors.includes(sector)) {
            const { [sector]: removed, ...rest } = selectedSubSectors;
            setSelectedSubSectors(rest);
            setValue("subSectors", rest, { shouldValidate: true });
        } else {
            const updatedSelectedSubSectors = updateSelectedSubSectors(sector);
            setSelectedSubSectors(updatedSelectedSubSectors);
            setValue("subSectors", updatedSelectedSubSectors, { shouldValidate: true });
        }
    }, [selectedSectors, setSelectedSectors, updateSelectedSubSectors]);


    /**
     * Handles the selection of subsectors.
     * @param id - The ID of the subsector.
     * @param sector - The sector name.
     */
    const HandleSubSectorsSelection = useCallback((id: string, sector: string) => {
        const isSectorSelected = selectedSubSectors[sector];
        let newSelectedSubSectors;
        if (isSectorSelected) {
            newSelectedSubSectors = { ...selectedSubSectors, [sector]: selectedSubSectors[sector].includes(id) ? selectedSubSectors[sector].filter((subSectorId: string) => subSectorId !== id) : [...selectedSubSectors[sector], id] };
        } else {
            newSelectedSubSectors = { ...selectedSubSectors, [sector]: [id] };
        }
        setSelectedSubSectors(newSelectedSubSectors);
        setValue("subSectors", newSelectedSubSectors, { shouldValidate: true });
    }, [selectedSubSectors, setSelectedSubSectors]);

    /**
     * Deselect all options for a selected sector.
     */
    const handleDeselectAll = useCallback((sector: string) => {
        const updatedSelectedSubSectors = {
            ...selectedSubSectors,
            [sector]: []
        };
        setSelectedSubSectors(updatedSelectedSubSectors);
        setValue("subSectors", updatedSelectedSubSectors, { shouldValidate: true });
    }, [selectedSubSectors, setSelectedSubSectors]);

    /**
     * Renders the options list for each selected sector.
     * @returns {JSX.Element[]} The rendered options list.
     */
    const renderOptionsList = () => {
        return selectedSectors.map(sector => {
            const filteredSubSectors = sectorsData
                .filter(item => item.group.name === sector)
                .map(item => ({
                    id: item.id,
                    name: item.name
                }));

            return (
                <OptionsList
                    key={sector}
                    label={<span>Uncheck <strong>{sector}</strong> sub-sectors</span>}
                    options={filteredSubSectors}
                    selectedOptionsIds={selectedSubSectors[sector]}
                    handleSelectedOption={id => HandleSubSectorsSelection(id, sector)}
                    handleDeselectAll={() => handleDeselectAll(sector)}
                />
            );
        });
    };

    // Render
    //--------------------------------------------------------------------------

    if (isLoading || sectorsData.length === 0) {
        return <div>Loading...</div>;
    }
    return (
        <TargetSectorsBoxStyled>
            <SelectionButtonContainer
                choices={availableSectors}
                selectedChoices={selectedSectors}
                handleSelectedChoice={handleSectorSelection}
            />
            {renderOptionsList()}
        </TargetSectorsBoxStyled>
    );
};

export default TargetSectors;
