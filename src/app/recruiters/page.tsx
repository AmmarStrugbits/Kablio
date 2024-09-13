/*
| Developed by Reskue
| Filename: Page.tsx
| Author: eric@reskue.tech
*/

import React from 'react'

import HeroSection from '@/components/homepage/recruiters/HeroSection'
import FindRewardsSection from '@/components/homepage/recruiters/FindRewardsSection'
import BenefitsSection from '@/components/homepage/recruiters/BenefitsSection'
import FooterSectionEmployerRecruiter from '@/components/homepage/FooterSectionEmployerRecruiter'
import FeaturesSection from '@/components/homepage/FeaturesSection'
import HomepageLayout from '@/components/homepage/layout/layout'
import KonnectorSteps from '@/components/homepage/recruiters/KonnectorSteps'


import { Metadata } from 'next';
import Script from 'next/script'

export const metadata: Metadata = {
  metadataBase: new URL('https://www.kablio.com'),
  alternates: {
    canonical: 'https://www.kablio.com/recruiters'
  },
  title: 'Kablio | For Recruiters in Construction, Energy and Engineering',
  description: 'Jobs marketplace for Construction, Energy, Engineering. Get candidates matched to your jobs and expand your search with a referral scheme. Find new job assignments.',
  robots: 'index, follow',
  keywords: 'Recruiters, Referrals, Construction, Energy, Engineering',
  openGraph: {
    title: 'Jobs marketplace for recruiters in Construction, Energy, Engineering',
    description: 'Jobs marketplace for Construction, Energy, Engineering. Get candidates matched to your jobs and expand your search with a referral scheme. Find new job assignments.',
    url: 'https://www.kablio.com/recruiters',
    type: 'website',
    siteName: 'Kablio',
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
    card: 'summary_large_image',
    title: 'Jobs marketplace for recruiters in Construction, Energy, Engineering',
    description: 'Jobs marketplace for Construction, Energy, Engineering. Get candidates matched to your jobs and expand your search with a referral scheme. Find new job assignments.',
    site: '@kablio_official',
    creator: '@kablio_official',
    images: [{
      url: 'https://www.kablio.com/assets/images/KablioLogoElectric.png',
      alt: 'Kablio.com',
    }],
  },

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
        id="recuiters-schema"
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
              "name": "Recruiters",
              "item": "https://www.kablio.com/recruiters"
            }]
          }),
        }}
      />

      <HomepageLayout>
        {/* First View */}
        <HeroSection />

        {/* Second View */}
        <FeaturesSection />

        {/*Third View*/}
        <KonnectorSteps />

        {/*Fourth View*/}
        <FindRewardsSection />

        {/*Fifth View*/}
        <BenefitsSection />

        {/*sixt View*/}
        <FooterSectionEmployerRecruiter />
      </HomepageLayout>
    </React.Fragment >
  )
}

export default Page
