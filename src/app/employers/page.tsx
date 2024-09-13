/*
| Developed by Reskue
| Filename: Page.tsx
| Author: eric@reskue.tech
*/

import React from 'react'

import HeroSection from '@/components/homepage/employers/HeroSection'
import FeaturesSection from '@/components/homepage/FeaturesSection'
import FinderRewardsRecruitersSection from '@/components/homepage/employers/FindRewardsRecruitersSection'
import FinderRewardsReferralsSection from '@/components/homepage/employers/FindRewardsReferralsSection'
import BenefitsSection from '@/components/homepage/employers/BenefitsSection'
import FooterSectionEmployerRecruiter from '@/components/homepage/FooterSectionEmployerRecruiter'
import HomepageLayout from '@/components/homepage/layout/layout'

import { Metadata } from 'next';
import Script from 'next/script'

export const metadata: Metadata = {
  metadataBase: new URL('https://www.kablio.com'),
  alternates: {
    canonical: 'https://www.kablio.com/employers'
  },
  title: 'Kablio | For Employers in Construction, Energy and Engineering',
  description: 'Jobs marketplace for Construction, Energy, Engineering. Get candidates matched to your jobs and expand your search with a referral scheme and recruiters.',
  robots: 'index, follow',
  keywords: 'Employers, Referrals, Construction, Energy, Engineering',
  openGraph: {
    title: 'Jobs marketplace for employers in Construction, Energy, Engineering',
    description: 'Jobs marketplace for Construction, Energy, Engineering. Get candidates matched to your jobs and expand your search with a referral scheme and recruiters.',
    url: 'https://www.kablio.com/employers',
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
    title: 'Jobs marketplace for employers in Construction, Energy, Engineering',
    description: 'Jobs marketplace for Construction, Energy, Engineering. Get candidates matched to your jobs and expand your search with a referral scheme and recruiters.',
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
        id="employers-schema"
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
              "name": "Employers",
              "item": "https://www.kablio.com/employers"
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
        <FinderRewardsRecruitersSection />

        {/*Fourth View*/}
        <FinderRewardsReferralsSection />


        {/*Fifth View*/}
        <BenefitsSection />

        {/*Sixth View*/}
        <FooterSectionEmployerRecruiter />
      </HomepageLayout>
    </React.Fragment >
  )
}

export default Page
