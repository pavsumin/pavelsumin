import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
	return [
		{
			url: 'https://pavelsumin.com',
			lastModified: new Date(),
			changeFrequency: 'weekly',
			priority: 1,
		},
		{
			url: 'https://pavelsumin.com/#about',
			lastModified: new Date(),
			changeFrequency: 'monthly',
			priority: 0.8,
		},
		{
			url: 'https://pavelsumin.com/#work',
			lastModified: new Date(),
			changeFrequency: 'monthly',
			priority: 0.9,
		},
		{
			url: 'https://pavelsumin.com/#contact',
			lastModified: new Date(),
			changeFrequency: 'monthly',
			priority: 0.7,
		},
	]
}
