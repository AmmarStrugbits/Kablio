/*
| Developed by Reskue
| Filename: Page.tsx
| Author: eric@reskue.art
*/

import SignUp from "@/components/signUp/SignUp";
import { Metadata } from 'next';
import Script from "next/script";

export const metadata: Metadata = {
  metadataBase: new URL('https://www.kablio.com'),
  alternates: {
    canonical: 'https://www.kablio.com/auth/signup'
  },
  title: 'Sign Up | Kablio',
  description: 'Get matched with thousands of jobs in Construction, Energy and Engineering.',
  keywords: 'Sign up, Account, Construction, Energy, Engineering',
  robots: 'nofollow',
  openGraph: {
    type: 'website',
    url: 'https://www.kablio.com/auth/signup',
    siteName: 'Kablio',
    title: 'Sign Up',
    description: 'Get matched with thousands of jobs in Construction, Energy and Engineering.',
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
    title: 'Sign Up',
    description: 'Get matched with thousands of jobs in Construction, Energy and Engineering.',
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
const Page: React.FC = () => {

  // Render
  //--------------------------------------------------------------------------
  return (
    <>
      <Script
        id="signup-schema"
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
              "name": "Signup",
              "item": "https://www.kablio.com/auth/signup"
            }]
          }),
        }}
      />
      <SignUp />
    </>
  )
};

export default Page
