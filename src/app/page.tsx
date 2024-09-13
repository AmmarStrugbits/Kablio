/*
| Developed by Reskue
| Filename: Page.tsx
| Author: eric@reskue.tech
*/
// "use client"
import React from 'react'
import BenefitsSection from '@/components/homepage/jobseeker/BenefitsSection'
import ScreenShotsSection from '@/components/homepage/jobseeker/ScreenShotsSection'
import FooterSection from '@/components/homepage/jobseeker/FooterSection'
import HeroSection from '@/components/homepage/jobseeker/HeroSection'
import FeaturesSection from '@/components/homepage/jobseeker/FeaturesSection'
import FindRewardsSection from '@/components/homepage/jobseeker/FindRewardsSection'
import HomepageLayout from '@/components/homepage/layout/layout'
import { Metadata } from 'next'
import Script from 'next/script'
export const metadata: Metadata = {
  metadataBase: new URL('https://www.kablio.com'),
  alternates: {
    canonical: 'https://www.kablio.com',
  },
  title: 'Kablio | Jobs in Construction, Energy, and Engineering',
  description:
    'Get matched with thousands of jobs in construction, energy and engineering. Stop endless scrolling. Get the information you need.',
  robots: 'index, follow',
  keywords: 'Job search, Referrals, Construction, Energy, Engineering',
  openGraph: {
    type: 'website',
    url: 'https://www.kablio.com',
    title: 'Jobs in Construction, Energy, and Engineering',
    description:
      'Get matched with thousands of jobs in construction, energy and engineering. Stop endless scrolling. Get the information you need.',
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
    site: '@kablio_official',
    creator: '@kablio_official',
    title: 'Find jobs in Construction, Energy, and Engineering',
    description:
      'Get matched with thousands of jobs in construction, energy and engineering. Stop endless scrolling. Get the information you need.',
    images: [
      {
        url: 'https://www.kablio.com/assets/images/KablioLogoElectric.png',
        alt: 'Kablio.com',
      },
    ],
  },
}
/*
|--------------------------------------------------------------------------
| Component
|--------------------------------------------------------------------------
*/
const Page = () => {
  const addWebsiteSchemaJsonLd = () => {
    return {
      __html: JSON.stringify({
        '@context': 'https://schema.org/',
        '@type': 'WebSite',
        name: 'Kabilo',
        url: 'https://www.kablio.com/',
        potentialAction: {
          '@type': 'SearchAction',
          target: '{search_term_string}',
          'query-input': 'required name=search_term_string',
        },
      }),
    }
  }
  const addCorporationSchemaJsonLd = () => {
    return {
      __html: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Corporation',
        name: 'Kablio',
        alternateName: 'Kablio',
        url: 'https://www.kablio.com/',
        logo: 'https://www.kablio.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FGiantKablioLogo.58c69a65.png&w=1920&q=75',
        contactPoint: {
          '@type': 'ContactPoint',
          telephone: 'xxx',
          contactType: 'customer service',
          areaServed: 'GB',
          availableLanguage: 'en',
        },
        sameAs: [
          'https://www.instagram.com/kablio_official/',
          'https://www.linkedin.com/company/kablio/',
        ],
      }),
    }
  }
  // Render
  //--------------------------------------------------------------------------
  return (
    <React.Fragment>
      <HomepageLayout>
        <Script
          id="website-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={addWebsiteSchemaJsonLd()}
          key="website-jsonld"
        />
        <Script
          id="corporation-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={addCorporationSchemaJsonLd()}
          key="corporation-jsonld"
        />
        {/* First View */}
        <HeroSection />
        {/* Second View */}
        <FeaturesSection />
        {/*Third View*/}
        <BenefitsSection />
        {/*Fourth View*/}
        <FindRewardsSection />
        {/*Fifth View*/}
        <ScreenShotsSection />
        {/*Sixth View*/}
        <FooterSection />
        {/* </main> */}
      </HomepageLayout>
    </React.Fragment>
  )
}
export default Page