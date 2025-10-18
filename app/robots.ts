import { MetadataRoute } from 'next'
 
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/private/', '/admin/'],
      },
      {
        userAgent: ['Googlebot', 'Bingbot', 'Slurp', 'DuckDuckBot', 'Baiduspider', 'YandexBot'],
        allow: '/',
        crawlDelay: 1,
      },
      {
        userAgent: ['GPTBot', 'ChatGPT-User', 'CCBot'],
        disallow: '/',
      },
    ],
    sitemap: 'https://ishar-aerospace.vercel.app/sitemap.xml',
    host: 'https://ishar-aerospace.vercel.app',
  }
}