import { MetadataRoute } from 'next'
 
export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://ishar-aerospace.vercel.app'
  
  return [
    {
      url: baseUrl,
      lastModified: new Date('2025-10-18'),
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${baseUrl}/#about`,
      lastModified: new Date('2025-10-18'),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/#skills`,
      lastModified: new Date('2025-10-18'),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/#projects`,
      lastModified: new Date('2025-10-18'),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/#experience`,
      lastModified: new Date('2025-10-18'),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/#research`,
      lastModified: new Date('2025-10-18'),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/#contact`,
      lastModified: new Date('2025-10-18'),
      changeFrequency: 'yearly',
      priority: 0.6,
    },
  ]
}