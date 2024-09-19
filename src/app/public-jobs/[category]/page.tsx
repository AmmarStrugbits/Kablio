// 'use client'

import React, { useEffect, useState } from 'react'
import { SearchPreferenceData, SearchPreferencesDataForm } from "@/shared/interfaces/SearchPreference.interfaces";
import { defaultFormValues } from "@/utils/defaultFormValues";
import { FormProvider, useForm } from 'react-hook-form';
// import MatchingJ
import { SearchPreferenceDataProvider } from '@/contexts/searchPreferenceContext';
import { postSearchPreference } from '@/services/matches/match.services';
import MatchingJob from '../MatchingJob';
import { Metadata } from 'next';
import { createClient } from '@/prismicio';
import { getMetadata } from '../tempMetadata';


// export async function generateMetadata({
//     context,
// }: any): Promise<Metadata | null> {
//     const client = createClient()
//     const metadata = await getMetadata()
//     //fetch array containing 3 objects of jobs 
//     const { query } = context.params;
//     const { id } = context.query; // Extract additional query parameters
//     let jobid = id || 0
//     const jobs: any = await fetch(`https://your-backend-api.com/jobs?query=${query}&id=${jobid}`);


//     let currentJob: any = jobs[jobid]
//     let metadata: Metadata | null = null


//     if (!currentJob) {
//         return {}
//     }
//     metadata = {
//         title: currentJob.metaTitle,
//         description: currentJob.metaDesciprtion,
//         alternates: {
//             canonical: `https://www.kablio.com/jobs?query=${query}&id=${jobid}`,
//         },
//         keywords: currentJob.keywords,
//         category: currentJob.categoryName,
//         robots: 'index, follow',
//     }

//     return metadata
// }

// export const generateStaticParams = async (context: any) => {
//     const { query } = context.params;
//     // const { id } = context.query; // Extract additional query parameters

//     // const res = await fetch(`https://your-backend-api.com/jobs?query=${query}&id=${id || 0}`);
//     const res = await fetch(`https://api.kablio.com/user/matches?limit=100&page=0`);
//     const jobs = await res.json();
//     console.log({ jobs });


//     if (!jobs || jobs.length === 0) {
//         return {
//             notFound: true,
//         };
//     }

//     return {
//         props: {
//             jobs,
//             // id, // Pass the additional query parameter to the component
//         },
//     };
// };


const Page = async (props: any) => {
    const res = await fetch(`https://api.kablio.com/user/matches?limit=100&page=0`);
    const jobs = await res.json();
    console.log({ jobs });
    console.log({ props });

    // const methods = useForm<SearchPreferencesDataForm>({
    //     defaultValues: defaultFormValues,
    // });

    /**
   * Check whether the localStorage contains SearchPreference data from registration
   * If so, create searchPreference entity and remove it from localStorage
   * If not, nothing is done
   */
    // useEffect(() => {
    //     const postSearchPreferences = async () => {
    //         const item = window.localStorage.getItem('searchPreference');
    //         if (item) {
    //             const searchPreferenceData: SearchPreferenceData = JSON.parse(item);
    //             await postSearchPreference(searchPreferenceData);
    //             window.localStorage.removeItem('searchPreference');
    //         }
    //     };
    //     postSearchPreferences();
    // }, []);

    return (
        <>JOBS</>
        // <FormProvider {...methods}>
        //     {/* <SearchPreferenceDataProvider> */}
        //     <MatchingJob />
        //     {/* </SearchPreferenceDataProvider> */}
        // </FormProvider>
    );
}

export default Page






// My website is based on Nextjs frontend and Nestjs backend

// I want to create static pages through api contains relevant metadata and job details

// The purpose of these pages is to improve the SEO of the site.

// When user search jobs on google for example , Civil engineering jobs and if my website contains the relevant job page and it shows on google listing and user click on that page I want to fetch that job and metadata through api and and insert in that static page and show to user.
// Jobs will be fetched on the bases of (Region or role or industry) which will be included in the schema

// These pages will be public and user can see three jobs total and 1 at a time, he can skip the jobs 1 by 1, when it reaches 3rd job and try to skip he will be redirected to the signup page


// I am using app router in my frontend 

// How I will get the information on which I fetch the job for the user is searching which job?