/*
| Developed by Reskue
| Filename: JobLocation.tsx
| Author: eric@reskue.art
*/

import OptionsList from '@/components/quiz/OptionsList';
import SelectionButtonContainer from '@/components/quiz/SelectionButtonContainer';
import { apiGetRegions } from '@/services/axios/axios.services';
import { LocationData } from '@/shared/interfaces/SearchPreference.interfaces';
import { Box, styled } from '@mui/material';
import React, { useCallback, useEffect } from 'react';
import { useQuizContext } from './QuizContext';

/*
|--------------------------------------------------------------------------
| Contracts
|--------------------------------------------------------------------------
*/

interface JobLocationProps {
    setIsValid: React.Dispatch<React.SetStateAction<boolean>>;
}

/*
|--------------------------------------------------------------------------
| Styles
|--------------------------------------------------------------------------
*/

const JobLocationBoxStyled = styled(Box)(() => ({
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

const JobLocation = ({ setIsValid }: JobLocationProps) => {
    const { availableCountries, setAvailableCountries, locationsData, setLocationsData, selectedRegions, setSelectedRegions, selectedCountries, setSelectedCountries } = useQuizContext();

    useEffect(() => {
        const fetchData = async () => {
            try {
                let allData: LocationData[] = [];
                let currentPage = 0;
                let totalPages = 1;

                while (currentPage < totalPages) {
                    const response = await apiGetRegions(100, currentPage);
                    const data = response.data;
                    totalPages = data.meta.totalPages;
                    allData = [...allData, ...data.items];
                    currentPage += 1;
                }

                const countries: string[] = Array.from(new Set(allData.map((item: LocationData) => item.group.name)));
                setAvailableCountries(countries);
                setLocationsData(allData);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData();
    }, [setAvailableCountries, setLocationsData]);


    // useEffect(() => {
    //     const fetchData = async () => {
    //         try {
    //             const [response1, response2] = await Promise.all([
    //                 apiGetRegions(100, 0),
    //                 apiGetRegions(100, 1)
    //             ]);

    //             const data1 = response1.data.items;
    //             const data2 = response2.data.items;
    //             const allData = [...data1, ...data2];

    //             const countries: string[] = Array.from(new Set(allData.map((item: LocationData) => item.group.name)));

    //             setAvailableCountries(countries);
    //             setLocationsData(allData);
    //         } catch (error) {
    //             console.error('Error fetching data:', error);
    //         }
    //     };
    //     fetchData();
    // }, []);



    useEffect(() => {
        const isEmpty = !Object.keys(selectedRegions).some(key => {
            const values = selectedRegions[key];
            return Array.isArray(values) && values.some(value => value.trim().length > 0);
        });
        setIsValid(!isEmpty);
    }, [selectedRegions, setIsValid]);

    /**
       * Updates the selected regions list.
       * @param country - The selected country.
       */
    // const updateSelectedRegions = useCallback((country: string) => {
    //     const newSelectedRegions = locationsData
    //         .filter(region => region.group.name === country)
    //         .map(region => region.id);

    //     const { [country]: removed, ...rest } = selectedRegions;

    //     const updatedSelectedRegions = newSelectedRegions.length > 0
    //         ? { ...rest, [country]: newSelectedRegions }
    //         : rest;

    //     return updatedSelectedRegions;
    // }, [locationsData, selectedRegions]);

    /**
     * Handles the selection of a country and add all regions to the selected list.
     * @param country - The selected country.
     */
    const handleCountrySelection = useCallback((country: string) => {
        const updateSelectedCountries = (prevSelectedCountries: string[]): string[] => {
            if (prevSelectedCountries.includes(country)) {
                return prevSelectedCountries.filter((selectedCountry: string) => selectedCountry !== country);
            } else {
                return [...prevSelectedCountries, country];
            }
        };

        const newSelectedCountries = updateSelectedCountries(selectedCountries);
        setSelectedCountries(newSelectedCountries);

        if (selectedCountries.includes(country)) {
            const { ...rest } = selectedRegions;
            setSelectedRegions(rest);
        } else {
            // const updatedSelectedRegions = updateSelectedRegions(country);
            // setSelectedRegions(updatedSelectedRegions);
        }
    }, [selectedCountries, setSelectedCountries, selectedRegions, setSelectedRegions]);


    /**
     * Handles the selection of regions.
     * @param id - The ID of the region.
     * @param country - The country name.
     */
    const HandleRegionsSelection = useCallback((id: string, country: string) => {
        const isCountrySelected = selectedRegions[country];
        let newSelectedRegions;
        if (isCountrySelected) {
            newSelectedRegions = { ...selectedRegions, [country]: selectedRegions[country].includes(id) ? selectedRegions[country].filter((regionId: string) => regionId !== id) : [...selectedRegions[country], id] };
        } else {
            newSelectedRegions = { ...selectedRegions, [country]: [id] };
        }
        setSelectedRegions(newSelectedRegions);
    }, [selectedRegions, setSelectedRegions]);

    /**
     * Deselect all options for a selected country.
     */
    const handleDeselectAll = useCallback((country: string) => {
        const updatedSelectedRegions = {
            ...selectedRegions,
            [country]: []
        };
        setSelectedRegions(updatedSelectedRegions);
    }, [selectedRegions, setSelectedRegions]);

    /**
     * Renders the options list for each selected country.
     * @returns {JSX.Element[]} The rendered options list.
     */
    const renderOptionsList = () => {
        return selectedCountries.map(country => {
            const filteredRegions = locationsData
                .filter(item => item.group.name === country)
                .map(item => ({
                    id: item.id,
                    name: item.name
                }));

            return (
                <OptionsList
                    key={country}
                    label={<span>Uncheck <strong>{country}</strong> regions</span>}
                    options={filteredRegions}
                    selectedOptionsIds={selectedRegions[country]}
                    handleSelectedOption={id => HandleRegionsSelection(id, country)}
                    handleDeselectAll={() => handleDeselectAll(country)}
                />
            );
        });
    };

    // Render
    //--------------------------------------------------------------------------
    return (
        <JobLocationBoxStyled>
            <SelectionButtonContainer
                choices={availableCountries}
                selectedChoices={selectedCountries}
                handleSelectedChoice={handleCountrySelection}
            />
            {renderOptionsList()}
        </JobLocationBoxStyled>
    );
};

export default JobLocation;
