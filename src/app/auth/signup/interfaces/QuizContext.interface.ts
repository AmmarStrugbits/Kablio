import { JobRoleData, LocationData, SectorData } from "@/shared/interfaces/SearchPreference.interfaces";

export interface JobLocationQuizzContextType {
  locationsData: LocationData[];
  availableCountries: string[];
  selectedCountries: string[];
  selectedRegions: { [key: string]: string[] };

  setLocationsData: (data: LocationData[]) => void;
  setAvailableCountries: (locations: string[]) => void;
  setSelectedCountries: (countries: string[]) => void;
  setSelectedRegions: (regions: { [key: string]: string[] }) => void;
}

export interface JobSectorSeekingQuizzContextType {
  sectorsData: SectorData[];
  availableSectors: string[];
  selectedSectors: string[];
  selectedSubSectors: { [key: string]: string[] };

  setSectorsData: (data: SectorData[]) => void;
  setAvailableSectors: (sectors: string[]) => void;
  setSelectedSectors: (sectors: string[]) => void;
  setSelectedSubSectors: (subsectors: { [key: string]: string[] }) => void;
}

export interface JobRoleSeekingQuizzContextType {
  jobRolesData: JobRoleData[];
  availableWorkFields: string[];
  selectedWorkFields: string[];
  selectedJobRoles: { [key: string]: string[] };

  setjobRolesData: (data: JobRoleData[]) => void;
  setAvailableWorkFields: (workFields: string[]) => void;
  setSelectedWorkFields: (workFields: string[]) => void;
  setSelectedJobRoles: (jobRoles: { [key: string]: string[] }) => void;
}
