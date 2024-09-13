/*
| Developed by Reskue
| Filename: page.tsx
| Author: eric@reskue.art
*/

import React from 'react'

import { Metadata } from 'next';
import Privacy from '@/components/privacy/Privacy';
import Script from 'next/script';

export const metadata: Metadata = {
  metadataBase: new URL('https://www.kablio.com'),
  alternates: {
    canonical: 'https://www.kablio.com/privacy'
  },
  title: 'Privacy Policy - Kablio',
  description: 'Read our privacy policy to understand how Kablio protects your privacy and handles your personal information.',
  keywords: 'Privacy Policy, Personal Information, Data Protection',
  robots: 'index, follow',
  openGraph: {
    type: 'website',
    url: 'https://www.kablio.com/privacy',
    siteName: 'Kablio',
    title: 'Privacy Policy - Kablio',
    description: 'Read our privacy policy to understand how Kablio protects your privacy and handles your personal information.',
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
    title: 'Privacy Policy - Kablio',
    description: 'Read our privacy policy to understand how Kablio protects your privacy and handles your personal information.',
    creator: '@kablio_official',
    images: [{
      url: 'https://www.kablio.com/assets/images/KablioLogoElectric.png',
      alt: 'Kablio.com',
    }],
  }
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
const Page = () => {
  return (
    <>
      <Script
        id="privacy-schema"
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
              "name": "Privacy",
              "item": "https://www.kablio.com/privacy"
            }]
          }),
        }}
      />
      <Privacy />
    </>
  )
}

export default Page
