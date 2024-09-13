import { ISO31661Alpha2ToCountryName } from "@/shared/enum/CountryCode.enum";


interface SocialMediaEmbeddable {
    [key: string]: string;
}

interface UserData {
    email: string;
    password: string;
    firstName: string;
    lastName: string;
    countryCode: ISO31661Alpha2ToCountryName;
    socialMedia?: SocialMediaEmbeddable;
}

interface SearchPreferenceData {
    locations: string[];
    jobs: string[];
    industries: string[];
    experienceLevel: string;
}

export interface SignupRequest {
    userData: UserData;
    searchPreferenceData: SearchPreferenceData;
}
