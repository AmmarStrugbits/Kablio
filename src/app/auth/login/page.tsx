/*
| Developed by Reskue
| Filename: page.tsx
| Author: eric@reskue.art
*/


import React from 'react'

import Login from '@/components/login/Login'
import { Metadata } from 'next';
import Script from 'next/script';

export const metadata: Metadata = {
    metadataBase: new URL('https://www.kablio.com'),
    alternates: {
        canonical: 'https://www.kablio.com/auth/login'
    },
    title: 'Login | Kablio',
    description: 'Get matched with thousands of jobs in Construction, Energy and Engineering.',
    keywords: 'Login, Account, Construction, Energy, Engineering',
    robots: 'nofollow',
    openGraph: {
        type: 'website',
        url: 'https://www.kablio.com/auth/login',
        title: 'Login',
        description: 'Get matched with thousands of jobs in Construction, Energy and Engineering.',
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
        card: 'summary',
        site: '@kablio_official',
        title: 'Login',
        creator: '@kablio_official',
        description: 'Get matched with thousands of jobs in Construction, Energy and Engineering.',
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
                id="login-schema"
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
                            "name": "Login",
                            "item": "https://www.kablio.com/auth/login"
                        }]
                    }),
                }}
            />

            <Login />
        </>
    )
}

export default Page
