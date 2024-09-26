import BlogPageHandler from '@/components/blog/BlogPageHandler'
import { createClient } from '@/prismicio'
import { topics } from '@/services/blog/blog.services'
import type { Metadata } from 'next'
import { redirect } from 'next/navigation'
import Script from 'next/script'
import { topicsSchema } from './blogSchema'
import { getAllArticlesByTagType, getArticles, getArticlesByUid } from './services'
import { AllDocumentTypes } from '../../../../prismicio-types'

type Props = {
  params: { item: string }
}
type TopicExists = boolean

interface ListItem {
  '@type': 'ListItem';
  position: number;
  name: string;
  item: string;
}

interface BreadcrumbList {
  '@context': 'https://schema.org/';
  '@type': 'BreadcrumbList';
  itemListElement: ListItem[];
}

export interface ArticleDataOverview {
  uid: string;
  title: string | undefined;
  imageUrl: string | null | undefined;
  tag: string[];
  authorName: string | undefined;
  authorAvatarUrl: string | null | undefined;
  publicationDate: string | undefined;
  rating: string | null;
}

const topicMetadata = [
  {
    tag: 'engineering-design-jobs',
    metadataBase: new URL('https://www.kablio.com'),
    title:
      'Job search advice for Construction, Energy and Engineering professionals',
    description:
      'Actually good job search advice. Tailored for Construction, Energy and Engineering jobseekers.',
    keywords:
      'Job search, Job search advice, Construction, Energy, Engineering',
    robots: 'index, follow',
    openGraph: {
      type: 'website',
      url: 'https://www.kablio.com/blog/engineering-design-jobs',
      siteName: 'Kablio',
      title:
        'Job search advice for Construction, Energy and Engineering professionals',
      description:
        'Actually good job search advice. Tailored for Construction, Energy and Engineering jobseekers.',
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
      title:
        'Job search advice for Construction, Energy and Engineering professionals',
      description:
        'Actually good job search advice. Tailored for Construction, Energy and Engineering jobseekers.',
      creator: '@kablio_official',
      images: [
        {
          url: 'https://www.kablio.com/assets/images/KablioLogoElectric.png',
          alt: 'Kablio.com',
        },
      ],
    },
  },
  {
    tag: 'technicians-tradespersons',
    metadataBase: new URL('https://www.kablio.com'),
    title:
      'Advice on getting apprenticeships in Construction, Energy and Engineering',
    description:
      'Explore actually good advice on getting into apprenticeships. Tailored for those who want to work in Construction, Energy and Engineering',
    keywords: 'Job search, Apprenticeships, Construction, Energy, Engineering',
    robots: 'index, follow',
    openGraph: {
      type: 'website',
      url: 'https://www.kablio.com/blog/technicians-tradespersons',
      siteName: 'Kablio',
      title:
        'Advice on getting apprenticeships in Construction, Energy and Engineering',
      description:
        'Explore actually good advice on getting into apprenticeships. Tailored for those who want to work in Construction, Energy and Engineering',
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
      title:
        'Advice on getting apprenticeships in Construction, Energy and Engineering',
      description:
        'Explore actually good advice on getting into apprenticeships. Tailored for those who want to work in Construction, Energy and Engineering.',
      creator: '@kablio_official',
      images: [
        {
          url: 'https://www.kablio.com/assets/images/KablioLogoElectric.png',
          alt: 'Kablio.com',
        },
      ],
    },
  },
  {
    tag: 'students-and-recent-grads',
    metadataBase: new URL('https://www.kablio.com'),
    title: '"Students & Recent Grads - Actually good advice on how to get in',
    description:
      'Explore non-generic, non-obvious advice on getting into graduate schemes. Tailored for those who want to work in Construction, Energy and Engineering',
    keywords: 'Job search, Apprenticeships, Construction, Energy, Engineering',
    robots: 'index, follow',
    openGraph: {
      type: 'website',
      url: 'https://www.kablio.com/blog/students-and-recent-grads',
      siteName: 'Kablio',
      title: '"Students & Recent Grads - Actually good advice on how to get in',
      description:
        'Explore non-generic, non-obvious advice on getting into graduate schemes. Tailored for those who want to work in Construction, Energy and Engineering',
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
      title: '"Students & Recent Grads - Actually good advice on how to get in',
      description:
        'Explore non-generic, non-obvious advice on getting into graduate schemes. Tailored for those who want to work in Construction, Energy and Engineering',
      creator: '@kablio_official',
      images: [
        {
          url: 'https://www.kablio.com/assets/images/KablioLogoElectric.png',
          alt: 'Kablio.com',
        },
      ],
    },
  },
  {
    tag: 'construction-management-jobs',
    metadataBase: new URL('https://www.kablio.com'),
    title:
      'Growth & Development advice for Construction, Energy and Engineering professionals',
    description:
      'Explore non-obvious, non-generic advice on how to get ahead in the construction, energy and engineering sectors',
    keywords: 'Growth, Development, Careers, Construction, Energy, Engineering',
    robots: 'index, follow',
    openGraph: {
      type: 'website',
      url: 'https://www.kablio.com/blog/construction-management-jobs',
      siteName: 'Kablio',
      title:
        'Growth & Development advice for Construction, Energy and Engineering professionals',
      description:
        'Explore non-obvious, non-generic advice on how to get ahead in the construction, energy and engineering sectors',
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
      title:
        'Growth & Development advice for Construction, Energy and Engineering professionals',
      description:
        'Explore non-obvious, non-generic advice on how to get ahead in the construction, energy and engineering sectors',
      creator: '@kablio_official',
      images: [
        {
          url: 'https://www.kablio.com/assets/images/KablioLogoElectric.png',
          alt: 'Kablio.com',
        },
      ],
    },
  },
  {
    tag: 'work-life',
    metadataBase: new URL('https://www.kablio.com'),
    title:
      'Insights, Stories, and Wisdom for Professionals engaged in shaping our Built Environment',
    description:
      'Dive into general advice, stories, and insights tailored for professionals working in Construction, Energy and Engineering',
    keywords: 'Job search, Careers, Advice, Construction, Energy, Engineering',
    robots: 'index, follow',
    openGraph: {
      type: 'website',
      url: 'https://www.kablio.com/blog/work-life',
      siteName: 'Kablio',
      title:
        'Insights, Stories, and Wisdom for Professionals engaged in shaping our Built Environment',
      description:
        'Dive into general advice, stories, and insights tailored for professionals working in Construction, Energy and Engineering',
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
      title:
        'Insights, Stories, and Wisdom for Professionals engaged in shaping our Built Environment',
      description:
        'Dive into general advice, stories, and insights tailored for professionals working in Construction, Energy and Engineering',
      creator: '@kablio_official',
      images: [
        {
          url: 'https://www.kablio.com/assets/images/KablioLogoElectric.png',
          alt: 'Kablio.com',
        },
      ],
    },
  },
  {
    tag: 'society',
    metadataBase: new URL('https://www.kablio.com'),
    title: 'Insights on Housing, Infrastructure and the Energy Transition',
    description:
      'We write about Housing, Infrastructure, the Energy Transition and other topics that matter or that we just find interesting. Sharing facts, perspectives, opinions and more.',
    keywords: 'Job search, Careers, Advice, Construction, Energy, Engineering',
    robots: 'index, follow',
    openGraph: {
      type: 'website',
      url: 'https://www.kablio.com/blog/society',
      siteName: 'Kablio',
      title: 'Insights on Housing, Infrastructure and the Energy Transition',
      description:
        'We write about Housing, Infrastructure, the Energy Transition and other topics that matter or that we just find interesting. Sharing facts, perspectives, opinions and more.',
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
      title: 'Insights on Housing, Infrastructure and the Energy Transition',
      description:
        'We write about Housing, Infrastructure, the Energy Transition and other topics that matter or that we just find interesting. Sharing facts, perspectives, opinions and more.',
      creator: '@kablio_official',
      images: [
        {
          url: 'https://www.kablio.com/assets/images/KablioLogoElectric.png',
          alt: 'Kablio.com',
        },
      ],
    },
  },
  {
    tag: 'for-employers',
    metadataBase: new URL('https://www.kablio.com'),
    title: 'Advice for employers in Construction, Energy and Engineering',
    description:
      'Non-generic advice for anybody involved in hiring and retaining employees who contribute to our built-environment',
    keywords: 'Job search, Careers, Advice, Construction, Energy, Engineering',
    robots: 'index, follow',
    openGraph: {
      type: 'website',
      url: 'https://www.kablio.com/blog/for-employers',
      siteName: 'Kablio',
      title: 'Advice for employers in Construction, Energy and Engineering',
      description:
        'Non-generic advice for anybody involved in hiring and retaining employees who contribute to our built-environment',
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
      title: 'Advice for employers in Construction, Energy and Engineering',
      description:
        'Non-generic advice for anybody involved in hiring and retaining employees who contribute to our built-environment',
      creator: '@kablio_official',
      images: [
        {
          url: 'https://www.kablio.com/assets/images/KablioLogoElectric.png',
          alt: 'Kablio.com',
        },
      ],
    },
  },
  {
    tag: 'for-recruitment-agencies',
    metadataBase: new URL('https://www.kablio.com'),
    title:
      'Advice for recruitment consultants focused on Construction, Energy and Engineering',
    description:
      'Non-generic advice on finding talent, job assignments and other topics for recruitment consultants specialised in Construction, Energy and Engineering.',
    keywords:
      'Job search, Referrals, Recruiters, Construction, Energy, Engineering',
    robots: 'index, follow',
    openGraph: {
      type: 'website',
      url: 'https://www.kablio.com/blog/for-recruitment-agencies',
      siteName: 'Kablio',
      title:
        'Advice for recruitment consultants focused on Construction, Energy and Engineering',
      description:
        'Non-generic advice on finding talent, job assignments and other topics for recruitment consultants specialised in Construction, Energy and Engineering.',
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
      title:
        'Advice for recruitment consultants focused on Construction, Energy and Engineering',
      description:
        'Non-generic advice on finding talent, job assignments and other topics for recruitment consultants specialised in Construction, Energy and Engineering.',
      creator: '@kablio_official',
      images: [
        {
          url: 'https://www.kablio.com/assets/images/KablioLogoElectric.png',
          alt: 'Kablio.com',
        },
      ],
    },
  },
  {
    tag: 'kablio-announcements',
    metadataBase: new URL('https://www.kablio.com'),
    title: 'Stay in the loop with the Kablio buzz',
    description:
      "We're changing recruitment in Construction, Energy, Engineering. Stay in the loop.",
    keywords:
      'Job search, Referrals, Recruiters, Construction, Energy, Engineering',
    robots: 'index, follow',
    openGraph: {
      type: 'website',
      url: 'https://www.kablio.com/blog/kablio-announcements',
      siteName: 'Kablio',
      title: 'Stay in the loop with the Kablio buzz',
      description:
        "We're changing recruitment in Construction, Energy, Engineering. Stay in the loop.",
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
      title: 'Stay in the loop with the Kablio buzz',
      description:
        "We're changing recruitment in Construction, Energy, Engineering. Stay in the loop.",
      creator: '@kablio_official',
      images: [
        {
          url: 'https://www.kablio.com/assets/images/KablioLogoElectric.png',
          alt: 'Kablio.com',
        },
      ],
    },
  },
]

let topicSchema: BreadcrumbList
let subTopicSchema: (BreadcrumbList[] | undefined) = [];

export async function generateMetadata({
  params,
}: Props): Promise<Metadata | null> {
  const client = createClient()

  let articleByUID
  const topicExists = topics.some((topic) => topic.tag === params.item)
  let pageTitle = params.item
  let metadata: Metadata | null = null

  if (topicExists) {
    const matchingTopic = topics.find((topic) => topic.tag === params.item)
    const topicMeta = topicMetadata.find((meta) => meta.tag === params.item)

    // @ts-expect-error: Type mismatch between interface and function
    topicSchema = await topicsSchema.find(
      (schema) => schema.tag === params.item
    )?.schema

    if (matchingTopic && topicMeta) {
      pageTitle = matchingTopic.title
      metadata = {
        title: topicMeta.title,
        description: topicMeta.description,
        alternates: {
          canonical: `https://www.kablio.com/blog/${params?.item}`,
        },
        keywords: topicMeta.keywords,
        openGraph: {
          ...topicMeta.openGraph,
          type: 'website',
          siteName: 'Kablio',
        },
        twitter: {
          ...topicMeta.twitter,
          card: 'summary',
          site: '@kablio_official',
          creator: '@kablio_official',
        },
        robots: 'index, follow',
      }
    }
  } else {
    try {
      articleByUID = await client.getByUID('article', params.item)
    } catch (error) {
      console.error(`Error fetching article: ${error}`)
      return null
    }
    // @ts-expect-error: Type mismatch between interface and function
    subTopicSchema = await topicsSchema.find(
      (schema) => schema.tag === params.item
    )?.schema

    metadata = {
      title: articleByUID?.data.meta_title || pageTitle,
      description: articleByUID?.data.meta_description,
      alternates: {
        canonical: `https://www.kablio.com/blog/${params?.item}`,
      },
      openGraph: {
        type: 'website',
        url: 'https://www.kablio.com/blog/' + params.item,
        title: articleByUID?.data.meta_title || pageTitle,
        description: articleByUID?.data.meta_description || '',
        images: [
          {
            url:
              articleByUID?.data.og_image.url ||
              'https://www.kablio.com/assets/images/KablioLogoElectric.png',
            width: 1200,
            height: 630,
            alt: 'Kablio.com',
          },
        ],
      },
      twitter: {
        card: 'summary',
        site: '@kablio_official',
        title: articleByUID?.data.meta_title || pageTitle,
        description: articleByUID?.data.meta_description || '',
        images: [
          {
            url:
              articleByUID?.data.og_image.url ||
              'https://www.kablio.com/assets/images/KablioLogoElectric.png',
            alt: 'Kablio.com',
          },
        ],
      },
      robots: 'index, follow',
    }
  }

  return metadata
}

export async function generateStaticParams() {
  const client = createClient();

  const allArticles = await client.getAllByType('article');
  if (Array.isArray(allArticles) && allArticles.length > 0) {
    const paths = allArticles.map((article) => ({
      params: { item: article.uid },
    }));

    return paths;
  } else {
    console.error("Error: No articles found or unexpected response format from Prismic.");
    return [];
  }

}

export default async function Page({ params }: Props) {

  const topicExists: TopicExists = topics.some((topic) => topic.tag === params.item);
 // @ts-expect-error: Type mismatch between interface and function
  let articles: AllDocumentTypes  = undefined

  let topicArticles: ArticleDataOverview[] = [];
  let articlesByTag: ArticleDataOverview[] = [];
  let loading = true;


  if (topicExists) {
    topicArticles = await getArticles(params);
  } else {
     // @ts-expect-error: Type mismatch between interface and function
    articles = await getArticlesByUid(params);
    articlesByTag = await getAllArticlesByTagType(params)
  }

  loading = false;

  const props = {
    topicExists,
    articles,
    topicArticles,
    articlesByTag,
    loading,
    tag: params.item
  }

  if (!topicArticles && !articles) {
    redirect('/blog/')
  }

  return (
    <>
      {!subTopicSchema?.length ? (
        <Script
          id="schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(topicSchema),
          }}
        />
      ) : (
        <>
          <Script
            id="schema"
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify(subTopicSchema[0]),
            }}
          />
          <Script
            id="sub-schema"
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify(subTopicSchema[1]),
            }}
          />
        </>
      )}

      <BlogPageHandler {...props} />
    </>
  )
}

