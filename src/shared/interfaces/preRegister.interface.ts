/*
| Developed by Reskue
| Filename: preRegister.interface.ts
| Author: eric@reskue.art
*/

import { ISO31661Alpha2ToCountryName } from "@/shared/enum/CountryCode.enum";

/*
|--------------------------------------------------------------------------
| Contracts
|--------------------------------------------------------------------------
*/

export interface PreRegisterEmployerFormData {
    name: string;
    email: string;
    website: string;
    countryCode: ISO31661Alpha2ToCountryName;
    newsletter: boolean;
    companyName: string;
}

export interface PreRegisterCandidateFormData {
    name: string;
    email: string;
    linkedin: string;
    profession: string;
    newsletter: boolean;
}