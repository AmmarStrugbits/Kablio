import TargetSectors from "@/components/you/searchPreferences/Industries/TargetSectors";
import HomeLocation from "@/components/you/searchPreferences/Location/HomeLocation";
import Visa from "@/components/you/searchPreferences/Location/Visa";
import Travel from "@/components/you/searchPreferences/Location/Travel";
import ContractType from "@/components/you/searchPreferences/Role/ContractType";
import ExperienceLevelComponent from "@/components/you/searchPreferences/Role/ExperienceLevel";
import MinimumSalary from "@/components/you/searchPreferences/Role/MinimumSalary";
import RoleType from "@/components/you/searchPreferences/Role/RoleType";
import JobseekerStatus from "@/components/you/searchPreferences/You/JobseekerStatus";
import Languages from "@/components/you/searchPreferences/You/Languages";
import Values from "@/components/you/searchPreferences/You/Values";
import CompanySizes from "@/components/you/searchPreferences/Role/CompanySize";

export const keysToCheck: string[] = ['contractType', 'visa', 'travel', 'languagesCode', 'jobseekerStatus', 'values', 'companySize'];

export const SearchPreferencesSectionTitlesForMatches = {
    "contractType": 'Target contract type?',
    "visa": 'Do you need a visa',
    "travel": 'Max % of time travelling?',
    "languagesCode": 'Your languages',
    "jobseekerStatus": 'How actively are you looking for a job?',
    "values": 'What do you value at work?',
    "companySize": "What size company do you want to work for?"
};

export const QuestionsSearchPrefForMatches = {
    "contractType": ContractType,
    "visa": Visa,
    "travel": Travel,
    "languagesCode": Languages,
    "jobseekerStatus": JobseekerStatus,
    "values": Values,
    "companySize": CompanySizes
}

const NavLinksSidebarSearchPreferences = {
    "TargetSectors": TargetSectors,
    "RoleType": RoleType,
    "ContractType": ContractType,
    "ExperienceLevel": ExperienceLevelComponent,
    "MinimumSalary": MinimumSalary,
    "CompanySize": CompanySizes,
    "HomeLocation": HomeLocation,
    "Visa": Visa,
    "Travel": Travel,
    "Languages": Languages,
    "JobseekerStatus": JobseekerStatus,
    "Values": Values,
};

export const SearchPreferencesSectionTitles = {
    "TargetSectors": 'Target sectors?',
    "RoleType": 'Your target roles?',
    "ContractType": 'Target contract type?',
    "ExperienceLevel": 'Target level of roles?',
    "MinimumSalary": 'Target minimum salary',
    "CompanySize": "What size company do you want to work for?",
    "HomeLocation": 'Where would you like to work',
    "Visa": 'Do you need a visa',
    "Travel": 'Max % of time travelling?',
    "Languages": 'Your languages',
    "JobseekerStatus": 'How actively are you looking for a job?',
    "Values": 'What do you value at work?',
};

export default NavLinksSidebarSearchPreferences;
