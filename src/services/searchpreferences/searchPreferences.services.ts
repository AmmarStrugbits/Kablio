/*searchPreferences.services.ts*/

import { GroupData, GroupItem, JobRoleData, LocationData, RegionData, SearchPreferenceDTO, SearchPreferencesDataForm, SectorData, SubJobData, SubSectorData, UpdateSearchPreferencesData } from "@/shared/interfaces/SearchPreference.interfaces";
import { enqueueSnackbar } from 'notistack';
import { apiUpdateSearchPreference } from '@/services/axios/axios.services';

/**
 * Maps items to their corresponding group names and aggregates item IDs by these group names.
 * This function is useful for transforming a list of items belonging to groups into a structured
 * form where group names are keys and arrays of item IDs are values.
 * 
 * @param {GroupItem[]} items - An array of items, each with an ID and a group ID they belong to.
 * @param {GroupData[]} groupData - An array of group data, each with a group ID and a group name.
 * @returns {object} An object containing two properties: 
 * - `names`: An array of unique group names derived from the groupData.
 * - `mappedItems`: An object where each key is a group name and the value is an array of item IDs belonging to that group.
 */
function mapItemsToGroupValues(items: GroupItem[], groupData: GroupData[]) {
    const namesSet = new Set<string>();
    const mappedItems: { [key: string]: string[] } = {};

    items.forEach((item) => {
        const dataItem = groupData.find(data => data.group.id === item.group);

        if (dataItem) {
            const name = dataItem.group.name;
            namesSet.add(name);
            if (!mappedItems[name]) {
                mappedItems[name] = [];
            }
            mappedItems[name].push(item.id);
        }
    });

    const names = Array.from(namesSet);

    return { names, mappedItems };
}


export function transformUserPreferencesToFormValues(userPreferences: SearchPreferenceDTO, locationsContext: LocationData[], sectorsContext: SectorData[], jobsContext: JobRoleData[]): SearchPreferencesDataForm {
    const { names: sectorsNames, mappedItems: subSectors } = mapItemsToGroupValues(
        userPreferences.industries,
        sectorsContext
    );

    const { names: workFields, mappedItems: jobRoles } = mapItemsToGroupValues(
        userPreferences.jobs,
        jobsContext
    );

    const { names: countries, mappedItems: regions } = mapItemsToGroupValues(
        userPreferences.locations,
        locationsContext
    );

    const formValues: SearchPreferencesDataForm = {
        industries: userPreferences.industries.map((sector: SubSectorData) => sector.id) || [],
        jobs: userPreferences.jobs.map((job: SubJobData) => job.id) || [],
        contractType: userPreferences.contractType || [],
        experienceLevel: userPreferences.experienceLevel || [],
        minSalary: userPreferences.minSalary || 0,
        companySize: userPreferences.companySize || [],
        locations: userPreferences.locations.map((location: RegionData) => location.id) || [],
        visa: userPreferences.visa || [],
        travel: userPreferences.travel || [],
        languagesCode: userPreferences.languagesCode || [],
        jobseekerStatus: userPreferences.jobseekerStatus || [],
        values: userPreferences.values || [],

        sectors: sectorsNames,
        subSectors: subSectors,

        workFields: workFields,
        jobRoles: jobRoles,

        countries: countries,
        regions: regions,
    };
    return formValues;
}

export const transformDataForBackend = (formData: SearchPreferencesDataForm): UpdateSearchPreferencesData => {
    const transformedData: UpdateSearchPreferencesData = {};

    transformedData.industries = Object.values(formData.subSectors).flat();
    transformedData.locations = Object.values(formData.regions).flat();
    transformedData.jobs = Object.values(formData.jobRoles).flat();

    transformedData.contractType = formData.contractType?.length ? formData.contractType : null;
    transformedData.experienceLevel = formData.experienceLevel?.length ? formData.experienceLevel : null;
    transformedData.companySize = formData.companySize?.length ? formData.companySize : null;

    transformedData.visa = formData.visa?.length ? formData.visa : null;
    transformedData.travel = formData.travel?.length ? formData.travel : null;
    transformedData.languagesCode = formData.languagesCode?.length ? formData.languagesCode : null;
    transformedData.jobseekerStatus = formData.jobseekerStatus?.length ? formData.jobseekerStatus : null;
    transformedData.values = formData.values?.length ? formData.values : null;

    if (formData.minSalary !== undefined) {
        transformedData.minSalary = Number(formData.minSalary);
    }

    return transformedData;
}

export const onSubmit = (formData: SearchPreferencesDataForm) => {
    const updateData = transformDataForBackend(formData);
    if (updateData.industries?.length === 0) {
        enqueueSnackbar('Please select at least one sector before submitting.', { variant: 'warning' });
        return;
    }

    if (updateData.locations?.length === 0) {
        enqueueSnackbar('Please select at least one region before submitting.', { variant: 'warning' });
        return;
    }

    if (updateData.jobs?.length === 0) {
        enqueueSnackbar('Please select at least one role type before submitting.', { variant: 'warning' });
        return;
    }
    if (updateData.experienceLevel === null || updateData.experienceLevel?.length === 0) {
        enqueueSnackbar('Please select at least one experience level before submitting.', { variant: 'warning' });
        return;
    }
    apiUpdateSearchPreference(updateData)
        .then(() => {
            enqueueSnackbar('Update successful', { variant: 'success' });
        })
        .catch(() => {
            enqueueSnackbar('Update failed', { variant: 'error' });
        });
};

export const onSubmitPreferencesMatches = (formData: SearchPreferencesDataForm) => {
    const updateData = transformDataForBackend(formData);
    apiUpdateSearchPreference(updateData)
        .then(() => {
            enqueueSnackbar('Update successful', { variant: 'success' });
        })
        .catch(() => {
            enqueueSnackbar('Update failed', { variant: 'error' });
        });
};

