/*
| Developed by Reskue
| Filename: page.tsx
| Author: eric@reskue.art
*/

import React from 'react'
import HomepageLayout from '@/components/homepage/layout/layout';
import ContactUs from '@/components/contactUs/ContactUs';
import FooterSection from '@/components/blog/FooterSection';
import { Metadata } from 'next';
import Script from 'next/script';

export const metadata: Metadata = {
  metadataBase: new URL('https://www.kablio.com'),
  alternates: {
    canonical: 'https://www.kablio.com/talk-to-us'
  },
  title: 'Contact Us - Kablio',
  description: 'Get in touch with Kablio for inquiries, feedback, or assistance. Contact us today to connect with our team.',
  keywords: 'Contact Us, Get in touch, Inquiry, Feedback, Assistance, Kablio',
  robots: 'index, follow',
  openGraph: {
    type: 'website',
    url: 'https://www.kablio.com/talk-to-us',
    siteName: 'Kablio',
    title: 'Contact Us - Kablio',
    description: 'Get in touch with Kablio for inquiries, feedback, or assistance. Contact us today to connect with our team.',
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
    title: 'Contact Us - Kablio',
    description: 'Get in touch with Kablio for inquiries, feedback, or assistance. Contact us today to connect with our team.',
    creator: '@kablio_official',
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
        id="talkToUs-schema"
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
              "name": "Talk to us",
              "item": "https://www.kablio.com/talk-to-us"
            }]
          }),
        }}
      />

      <ContactUs />
      <FooterSection backgroundColor='rgba(1, 186, 248, 0.74)' />
    </HomepageLayout>
  )
}

export default Page
