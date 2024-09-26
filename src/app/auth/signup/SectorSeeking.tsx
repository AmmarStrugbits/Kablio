/*
| Developed by Reskue
| Filename: SectorSeeking.tsx
| Author: eric@reskue.art
*/

import React, { useCallback, useEffect } from 'react';
import { Box, styled } from '@mui/material';
import { useQuizContext } from './QuizContext';
import { SectorData } from '@/shared/interfaces/SearchPreference.interfaces';
import { apiGetIndustries } from '@/services/axios/axios.services';
import OptionsList from '@/components/quiz/OptionsList';
import SelectionButtonContainer from '@/components/quiz/SelectionButtonContainer';

/*
|--------------------------------------------------------------------------
| Contracts
|--------------------------------------------------------------------------
*/

interface JobSectorProps {
    setIsValid: React.Dispatch<React.SetStateAction<boolean>>;
}

/*
|--------------------------------------------------------------------------
| Styles
|--------------------------------------------------------------------------
*/

const JobSectorBoxStyled = styled(Box)(() => ({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "2rem",
    margin: "2rem",
}));

/*
|--------------------------------------------------------------------------
| Component
|--------------------------------------------------------------------------
*/
const JobSector = ({ setIsValid }: JobSectorProps) => {
    const { sectorsData, setSectorsData, availableSectors, setAvailableSectors, selectedSubSectors, setSelectedSubSectors, selectedSectors, setSelectedSectors } = useQuizContext();


    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await apiGetIndustries(100, 0);
                const data = response.data;
                const sectors: string[] = Array.from(new Set(data.items.map((item: SectorData) => item.group.name)));
                setAvailableSectors(sectors);
                setSectorsData(data.items);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData();
    }, [setAvailableSectors, setSectorsData]);

    useEffect(() => {
        const isEmpty = !Object.keys(selectedSubSectors).some(key => {
            const values = selectedSubSectors[key];
            return Array.isArray(values) && values.some(value => value.trim().length > 0);
        });
        setIsValid(!isEmpty);
    }, [selectedSubSectors, setIsValid]);

    /**
     * Updates the selected subsectors list.
     * @param sector - The selected sector.
     */
    const updateSelectedSubSectors = useCallback((sector: string) => {
        const newSelectedSubSectors = sectorsData
            .filter(subsector => subsector.group.name === sector)
            .map(subsector => subsector.id);

        const { ...rest } = selectedSubSectors;

        const updatedSelectedSubSectors = newSelectedSubSectors.length > 0
            ? { ...rest, [sector]: newSelectedSubSectors }
            : rest;

        return updatedSelectedSubSectors;
    }, [sectorsData, selectedSubSectors]);

    /**
     * Handles the selection of a sector and add all subssectors to the selected list.
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

        if (selectedSectors.includes(sector)) {
            const { ...rest } = selectedSubSectors;
            setSelectedSubSectors(rest);
        } else {
            const updatedSelectedSubSectors = updateSelectedSubSectors(sector);
            setSelectedSubSectors(updatedSelectedSubSectors);
        }
    }, [selectedSectors, setSelectedSectors, updateSelectedSubSectors, selectedSubSectors, setSelectedSubSectors]);


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
    return (
        <JobSectorBoxStyled>
            <SelectionButtonContainer
                choices={availableSectors}
                selectedChoices={selectedSectors}
                handleSelectedChoice={handleSectorSelection}
            />
            {renderOptionsList()}
        </JobSectorBoxStyled>
    );
};

export default JobSector;
