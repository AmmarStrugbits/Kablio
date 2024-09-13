/*
| Developed by Reskue
| Filename: page.tsx
| Author: eric@reskue.art
*/

import React from 'react'
import Blog from '@/components/blog/Blog'

import { Metadata } from 'next'
import Script from 'next/script'

export const metadata: Metadata = {
  metadataBase: new URL('https://www.kablio.com'),
  alternates: {
    canonical: 'https://www.kablio.com/blog',
  },
  title:
    'Our blog on job hunting tips, career advice and other Construction, Energy and Engineering topics',
  description:
    'Explore actually good advice and whatever we find interesting, through our blog content, all written by humans. Tailored for enthusiasts and contributors to the built environment.',
  keywords:
    'Job search, Referrals, Recruiters, Construction, Energy, Engineering',
  robots: 'index, follow',
  openGraph: {
    type: 'website',
    url: 'https://www.kablio.com/blog',
    siteName: 'Kablio',
    title:
      'Our blog on job hunting tips, career advice and other Construction, Energy and Engineering topics',
    description:
      'Explore actually good advice and whatever we find interesting, through our blog content, all written by humans. Tailored for enthusiasts and contributors to the built environment.',
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
    title:
      'Our blog on job hunting tips, career advice and other Construction, Energy and Engineering topics',
    description:
      'Explore actually good advice and whatever we find interesting, through our blog content, all written by humans. Tailored for enthusiasts and contributors to the built environment.',
    creator: '@kablio_official',
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
| Contracts 
|-------------------------------------------------------------------------- 
*/
interface pageProps {
  //extends buttonProps
}

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
const Page: React.FC<pageProps> = () => {
  const addBlogJsonLd = () => {
    return {
      __html: JSON.stringify({
        '@context': 'https://schema.org/',
        '@type': 'BreadcrumbList',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Home',
            item: 'https://www.kablio.com/',
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: 'Blog',
            item: 'https://www.kablio.com/blog',
          },
        ],
      }),
    }
  }

  return (
    <>
      <Script
        id="blog-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={addBlogJsonLd()}
      />
      <Blog />
    </>
  )
}

export default Page
