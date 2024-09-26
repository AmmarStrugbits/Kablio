/*
| Developed by Reskue
| Filename: HomeLocation.tsx
| Author: eric@reskue.art
*/

import React, { useCallback, useEffect, useState } from 'react';
import { Box, styled } from '@mui/material';
import { LocationData } from '@/shared/interfaces/SearchPreference.interfaces';
import { useSearchPreferenceContext } from '@/contexts/searchPreferenceContext';
import { useFormContext } from 'react-hook-form';
import OptionsList from '@/components/quiz/OptionsList';
import SelectionButtonContainer from '@/components/quiz/SelectionButtonContainer';

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

const JobLocationBoxStyled = styled(Box)(() => ({
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

const HomeLocation = () => {
    const { watch, setValue } = useFormContext();
    const { locationsContext, isLoading } = useSearchPreferenceContext();
    const [locationsData, setLocationsData] = useState<LocationData[]>([]);

    const [availableCountries, setAvailableCountries] = useState<string[]>([]);
    const [selectedCountries, setSelectedCountries] = useState<string[]>([]);
    const [selectedRegions, setSelectedRegions] = useState<{ [key: string]: string[] }>({});

    const formselectedCountries = watch("countries");
    const formselectedRegions = watch("regions");

    useEffect(() => {
        if (formselectedCountries) {
            setSelectedCountries(formselectedCountries);
        }
        if (formselectedRegions) {
            setSelectedRegions(formselectedRegions);
        }
    }, [formselectedCountries, formselectedRegions]);

    useEffect(() => {
        if (locationsContext && locationsContext.items && locationsContext.items.length > 0) {
            const country = locationsContext.items.map((item: LocationData) => item.group.name);
            const uniqueCountry: string[] = Array.from(new Set(country));
            setAvailableCountries(uniqueCountry);
            setLocationsData(locationsContext.items);
        }
    }, [locationsContext]);


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

        const newselectedCountrys = updateSelectedCountries(selectedCountries);
        setSelectedCountries(newselectedCountrys);
        setValue("countries", newselectedCountrys, { shouldValidate: true });
        if (selectedCountries.includes(country)) {
            const { ...rest } = selectedRegions;
            setSelectedRegions(rest);
            setValue("regions", rest, { shouldValidate: true });
        } else {
            // const updatedSelectedRegions = updateSelectedRegions(country);
            // setSelectedRegions(updatedSelectedRegions);
            // setValue("regions", updatedSelectedRegions, { shouldValidate: true });
        }
    }, [selectedCountries, setSelectedCountries, selectedRegions, setValue]);

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
        setValue("regions", newSelectedRegions, { shouldValidate: true });
    }, [selectedRegions, setSelectedRegions, setValue]);

    /**
     * Deselect all options for a selected country.
     */
    const handleDeselectAll = useCallback((country: string) => {
        const updatedSelectedRegions = {
            ...selectedRegions,
            [country]: []
        };
        setSelectedRegions(updatedSelectedRegions);
        setValue("regions", updatedSelectedRegions, { shouldValidate: true });
    }, [selectedRegions, setSelectedRegions, setValue]);

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

    if (isLoading || locationsData.length === 0) {
        return <div>Loading...</div>;
    }
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

export default HomeLocation;
