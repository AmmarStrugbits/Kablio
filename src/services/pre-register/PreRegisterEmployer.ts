/*
| Developed by Reskue
| Filename: PreRegisterEmployer.ts
| Author: eric@reskue.art
*/

'use server'

import { PreRegisterEmployerFormData } from '@/shared/interfaces/preRegister.interface';
import Airtable from 'airtable';

/*
|--------------------------------------------------------------------------
| Component
|--------------------------------------------------------------------------
*/

const apiKey = process.env.NEXT_PUBLIC_AIRTABLE_API_KEY;
const baseId = process.env.NEXT_PUBLIC_AIRTABLE_BASE_ID;
const tableName = process.env.NEXT_PUBLIC_AIRTABLE_EMPLOYER_TABLE_NAME;

if (!apiKey || !baseId || !tableName) {
    throw new Error('NEXT_PUBLIC_AIRTABLE_API_KEY, AIRTABLE_BASE_ID or NEXT_PUBLIC_AIRTABLE_EMPLOYER_TABLE_NAME is not defined in environment variables');
}

const base = new Airtable({ apiKey }).base(baseId);
const table = base(tableName);

export const registerEmployer = async (employerData: PreRegisterEmployerFormData): Promise<boolean> => {
    try {
        const formattedData = {
            name: employerData.name,
            email: employerData.email,
            website: employerData.website,
            countryCode: employerData.countryCode,
            newsletter: employerData.newsletter,
            companyName: employerData.companyName
        };
        await table.create(formattedData);
        return true;
    } catch (error) {
        console.error('Registration failed:', error);
        return false;
    }
};