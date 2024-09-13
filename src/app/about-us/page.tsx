/*
| Developed by Reskue
| Filename: page.tsx
| Author: eric@reskue.art
*/

import React from 'react'
import { Metadata } from 'next';
import AboutUS from '@/components/aboutUs/AboutUs';
import HomepageLayout from '@/components/homepage/layout/layout';
import FooterSection from '@/components/blog/FooterSection';
import Script from 'next/script';

export const metadata: Metadata = {
  metadataBase: new URL('https://www.kablio.com'),
  alternates: {
    canonical: 'https://www.kablio.com/about-us'
  },
  title: 'Jobs marketplace matching talent in Energy and Construction',
  description: 'Kablio makes energy and construction job searching and hiring easy. We connect employers, recruiters and jobseekers',
  openGraph: {
    type: 'website',
    url: 'https://www.kablio.com/about_us',
    title: 'Kablio - Jobs marketplace matching talent in Energy and Construction',
    description: 'Kablio makes energy and construction job searching and hiring easy. We connect employers, recruiters and jobseekers',
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
    title: 'Kablio - Jobs marketplace matching talent in Energy and Construction',
    description: 'Kablio makes energy and construction job searching and hiring easy. We connect employers, recruiters and jobseekers',
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
const Page: React.FC = () => {
  // Render
  //--------------------------------------------------------------------------
  return (
    <HomepageLayout>
        <Script
                id="aboutUs-schema"
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
                      },{
                        "@type": "ListItem", 
                        "position": 2, 
                        "name": "About",
                        "item": "https://www.kablio.com/about-us"  
                      }]
                    }),
                }}
            />
      <AboutUS />
      <FooterSection backgroundColor='rgba(1, 186, 248, 0.74)' />
    </HomepageLayout>
  )
}

export default Page
