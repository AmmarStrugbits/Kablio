// app/sitemap.ts

'use server'
import { MetadataRoute } from 'next'
import { createClient } from '@/prismicio'
import { topics } from '@/services/blog/blog.services'
export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const client = createClient()

    // Fetch all blog items from Prismic
    let blogPosts = null;
    try {
        blogPosts = await client.getAllByType('article')
    } catch (error) {
        console.error(`Error fetching articles: ${error}`); // Log added
    }
    // Generate URLs for topics
    const topicsBlogUrls: MetadataRoute.Sitemap = topics.map(topic => ({
        url: `https://www.kablio.com/blog/${topic.tag}`,
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 0.8,
    }))


    // Generate URLs for blog posts
    let blogUrls: MetadataRoute.Sitemap = [];
    if (blogPosts) {
        blogUrls = blogPosts.map(post => ({
            url: `https://www.kablio.com/blog/${post.uid}`,
            lastModified: new Date(post.first_publication_date),
            changeFrequency: 'weekly',
            priority: 0.8,
        }))
    }
    // Add other static pages
    const otherUrls: MetadataRoute.Sitemap = [
        {
            url: 'https://www.kablio.com',
            lastModified: new Date(),
            changeFrequency: 'yearly',
            priority: 1.0,
        },
        {
            url: 'https://www.kablio.com/employers',
            lastModified: new Date(),
            changeFrequency: 'yearly',
            priority: 0.9,
        },
        {
            url: 'https://www.kablio.com/recruiters',
            lastModified: new Date(),
            changeFrequency: 'yearly',
            priority: 0.9,
        },
        {
            url: 'https://www.kablio.com/konnectors',
            lastModified: new Date(),
            changeFrequency: 'yearly',
            priority: 0.9,
        },
        {
            url: 'https://www.kablio.com/about-us',
            lastModified: new Date(),
            changeFrequency: 'yearly',
            priority: 0.7,
        },
        {
            url: 'https://www.kablio.com/talk-to-us',
            lastModified: new Date(),
            changeFrequency: 'yearly',
            priority: 0.7,
        },
        {
            url: 'https://www.kablio.com/privacy',
            lastModified: new Date(),
            changeFrequency: 'yearly',
            priority: 0.4,
        },
        {
            url: 'https://www.kablio.com/terms-and-conditions',
            lastModified: new Date(),
            changeFrequency: 'yearly',
            priority: 0.4,
        },
        {
            url: 'https://www.kablio.com/terms-and-conditions/jobseeker',
            lastModified: new Date(),
            changeFrequency: 'yearly',
            priority: 0.4,
        },
        {
            url: 'https://www.kablio.com/terms-and-conditions/employers',
            lastModified: new Date(),
            changeFrequency: 'yearly',
            priority: 0.4,
        },
        {
            url: 'https://www.kablio.com/terms-and-conditions/recruiters',
            lastModified: new Date(),
            changeFrequency: 'yearly',
            priority: 0.4,
        },
        {
            url: 'https://www.kablio.com/terms-and-conditions/acceptable-use-policy',
            lastModified: new Date(),
            changeFrequency: 'yearly',
            priority: 0.4,
        },
        {
            url: 'https://www.kablio.com/account/matches',
            lastModified: new Date(),
            changeFrequency: 'yearly',
            priority: 0.7,
        },
        {
            url: 'https://www.kablio.com/account/inbound',
            lastModified: new Date(),
            changeFrequency: 'yearly',
            priority: 0.7,
        },
        {
            url: 'https://www.kablio.com/account/board',
            lastModified: new Date(),
            changeFrequency: 'yearly',
            priority: 0.7,
        },
        {
            url: 'https://www.kablio.com/account/inbox',
            lastModified: new Date(),
            changeFrequency: 'yearly',
            priority: 0.7,
        },
        {
            url: 'https://www.kablio.com/account/you/preferences',
            lastModified: new Date(),
            changeFrequency: 'yearly',
            priority: 0.7,
        },
        {
            url: 'https://www.kablio.com/account/you/account-details',
            lastModified: new Date(),
            changeFrequency: 'yearly',
            priority: 0.7,
        },
        {
            url: 'https://www.kablio.com/auth/login',
            lastModified: new Date(),
            changeFrequency: 'yearly',
            priority: 0.7,
        },
        {
            url: 'https://www.kablio.com/auth/signup',
            lastModified: new Date(),
            changeFrequency: 'yearly',
            priority: 0.7,
        },
    ]

    // Combine static topics, blog post URLs, and other URLs
    return [...topicsBlogUrls, ...blogUrls, ...otherUrls]
}
