/*
| Developed by Reskue
| Filename: Page.tsx
| Author: eric@reskue.tech
*/

import React from 'react'

import { Metadata } from 'next';
import HomepageLayout from '@/components/homepage/layout/layout'
import HeroSection from '@/components/homepage/konnectors/HeroSection';
import FindRewardsSection from '@/components/homepage/konnectors/FindRewardskonnectorsSection';
import FindContractSection from '@/components/homepage/konnectors/FindContractSection';
import ReputationSection from '@/components/homepage/konnectors/ReputationSection';
import ReferralLink from '@/components/homepage/konnectors/ReferralLink';
import FooterSection from '@/components/homepage/konnectors/FooterSection';
import Script from 'next/script';

export const metadata: Metadata = {
  metadataBase: new URL('https://www.kablio.com'),
  alternates: {
    canonical: 'https://www.kablio.com/konnectors'
  },
  title: 'Kablio | Refer your friends to jobs in Construction, Energy and Engineering',
  description: 'Jobs marketplace for Construction, Energy, Engineering. Get paid for every new hire you refer through our recruitment platform as a Kablio Konnector.',
  keywords: 'Referrals, Construction, Energy, Engineering',
  openGraph: {
    type: 'website',
    url: 'https://www.kablio.com/konnectors',
    title: 'Earn by referring jobseekers in Construction, Energy and Engineering',
    description: 'Jobs marketplace for Construction, Energy, Engineering. Get paid for every new hire you refer through our recruitment platform as a Kablio Konnector.',
    images: [
      {
        url: 'https://www.kablio.com/assets/images/KablioLogoElectric.png',
        width: 1200,
        height: 630,
        alt: 'Kablio.com',
      },
    ],
  },
  twitter: {
    card: 'summary',
    site: '@kablio_official',
    title: 'Earn by referring jobseekers in Construction, Energy and Engineering',
    description: 'Jobs marketplace for Construction, Energy, Engineering. Get paid for every new hire you refer through our recruitment platform as a Kablio Konnector.',
    images: [{
      url: 'https://www.kablio.com/assets/images/KablioLogoElectric.png',
      alt: 'Kablio.com',
    }],
  }
};
/*
|--------------------------------------------------------------------------
| Component
|--------------------------------------------------------------------------
*/

const Page = () => {

  // Render
  //--------------------------------------------------------------------------
  return (
    <React.Fragment>
      <Script
        id="konnectors-schema"
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
              "name": "konnectors",
              "item": "https://www.kablio.com/konnectors"
            }]
          }),
        }}
      />

      <HomepageLayout>
        {/* First View */}
        <HeroSection />
        {/* Second View */}
        <FindRewardsSection />
        {/*Third View*/}
        <FindContractSection />
        {/*Fourth View*/}
        <ReferralLink />
        {/*Fifth View*/}
        <ReputationSection />
        {/*Fifth View*/}
        <FooterSection />
      </HomepageLayout>
    </React.Fragment >
  )
}

export default Page
