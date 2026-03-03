import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://gauravupadhyay.vercel.app'

    return [
        {
            url: baseUrl,
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 1.0,
        },
        {
            url: `${baseUrl}/who-is-gaurav-upadhyay`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.9,
        }
    ]
}
