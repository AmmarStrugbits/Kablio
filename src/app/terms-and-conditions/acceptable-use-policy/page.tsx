/*
| Developed by Reskue
| Filename: page.tsx
| Author: eric@reskue.art
*/


import React from 'react'
import AcceptableUsePolicy from '@/components/termsAndConditions/AcceptableUsePolicy'
import { Metadata } from 'next';
import Script from 'next/script';

export const metadata: Metadata = {
  metadataBase: new URL('https://www.kablio.com'),
  alternates: {
    canonical: 'https://www.kablio.com/terms-and-conditions/acceptable-use-policy'
  },
  title: 'Acceptable Use Policy - Kablio',
  description: "Read our acceptable use policy to understand the rules and guidelines for using Kablio's services responsibly.",
  keywords: 'Acceptable Use Policy, Rules, Guidelines, Kablio',
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
        id="t&c-aup-schema"
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
              "name": "Acceptable use policy",
              "item": "https://www.kablio.com/terms-and-conditions/acceptable-use-policy"
            }]
          }),
        }}
      />
      <AcceptableUsePolicy />
    </>
  )
}

export default Page
