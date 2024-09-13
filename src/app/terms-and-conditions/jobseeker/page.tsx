/*
| Developed by Reskue
| Filename: page.tsx
| Author: eric@reskue.art
*/

import React from 'react'
import JobseekerTermsAndConditions from '@/components/termsAndConditions/JobseekerTermsAndConditions'


import { Metadata } from 'next';
import Script from 'next/script';

export const metadata: Metadata = {
  metadataBase: new URL('https://www.kablio.com'),
  alternates: {
    canonical: 'https://www.kablio.com/terms-and-conditions/jobseeker'
  },
  title: 'Terms & Conditions for Jobseekers - Kablio',
  description: "Read our terms & conditions to understand the rules and regulations governing the use of Kablio's services.",
  keywords: 'Terms & Conditions, Rules, Regulations, Kablio',
  robots: 'index, follow',
};

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

/*
|--------------------------------------------------------------------------
| Component
|--------------------------------------------------------------------------
*/
const Page: React.FC = () => {
  // Render
  //--------------------------------------------------------------------------
  return (
    <>
      <Script
        id="t&c-jobSeeker-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org/",
            "@type": "BreadcrumbList",
            "itemListElement": [{
              "@type": "ListItem",
              "position": 1,
              "name": "Home",
              "item": "https://www.kablio.com/"
            }, {
              "@type": "ListItem",
              "position": 2,
              "name": "Terms & Conditions",
              "item": "https://www.kablio.com/terms-and-conditions"
            }, {
              "@type": "ListItem",
              "position": 3,
              "name": "Job Seeker",
              "item": "https://www.kablio.com/terms-and-conditions/jobseeker"
            }]
          }),
        }}
      />
      <JobseekerTermsAndConditions />
    </>
  )
}

export default Page
