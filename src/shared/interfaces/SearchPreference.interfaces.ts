import { ExperienceLevel } from "@/shared/enum/ExperienceLevel.enum";
import { ContractType } from "../enum/ContractType.enum";
import { JobseekerStatusEnum } from "../enum/JobseekerStatus.enum";
import { Iso6391LanguageCode } from "../enum/Language.enum";
import { TravelEnum } from "../enum/Travel.enum";
import { VisaOptions } from "../enum/Visa.enum";
import { Currency } from "../enum/Currency.enum";
import { CompanySize } from "../enum/CompanySize.enum";

export interface LocationData {
  id: string;
  name: string;
  group: { id: string, name: string };
}

export interface RegionData {
  id: string;
  name: string;
  group: string;
}

export interface SectorData {
  id: string;
  name: string;
  group: { id: string, name: string };
}

export interface SubSectorData {
  id: string;
  name: string;
  group: string;
}

export interface JobRoleData {
  id: string;
  name: string;
  group: { id: string, name: string };
}

export interface SubJobData {
  id: string;
  name: string;
  group: string;
}

export interface Joblevel {
  experienceLevel: ExperienceLevel;
}

export interface SocialMediaEmbeddable {
  [key: string]: string;
}

export interface SearchPreferenceData {
  locations: string[];
  jobs: string[];
  industries: string[];
  experienceLevel: string[];
}

// What I receive
export interface SearchPreferenceDTO {
  user: string; // User ID
  contractType?: ContractType[];
  experienceLevel: ExperienceLevel[];
  minSalary?: number;
  companySize?: CompanySize[];
  currency: Currency;
  industries: SubSectorData[];
  locations: RegionData[];
  jobs: SubJobData[];
  visa?: VisaOptions[];
  travel?: TravelEnum[];
  languagesCode?: Iso6391LanguageCode[];
  jobseekerStatus?: JobseekerStatusEnum[];
  values?: string[];
  languages?: string[];
}

//What I send
export interface UpdateSearchPreferencesData {
  // Industries
  industries?: string[]; // Target Sectors(subsectors)

  // Role
  jobs?: string[]; //jobRole
  contractType?: ContractType[] | null;
  experienceLevel?: ExperienceLevel[] | null;
  minSalary?: number | null;
  companySize?: CompanySize[] | null;

  // Location
  locations?: string[]; //regions
  visa?: VisaOptions[] | null;
  travel?: TravelEnum[] | null;

  // You
  languagesCode?: Iso6391LanguageCode[] | null;
  jobseekerStatus?: JobseekerStatusEnum[] | null;
  values?: string[] | null;
}


// What I need to display 
export interface SearchPreferencesDataForm extends UpdateSearchPreferencesData {
  //key = sector's name
  sectors: string[],
  subSectors: { [key: string]: string[] },

  //key = workdField's name
  workFields: string[],
  jobRoles: { [key: string]: string[] },

  //key = country's name
  countries: string[],
  regions: { [key: string]: string[] },
}


export interface GroupItem {
  id: string;
  group: string;
}

export interface GroupData {
  id: string;
  group: {
    id: string;
    name: string;
  };
}