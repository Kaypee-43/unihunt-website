import type { MetadataRoute } from 'next';
import { site } from '@/lib/site';

const routes = ['', '/study-abroad', '/careers-abroad', '/destinations', '/process', '/about', '/contact', '/brand'];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return routes.map((r) => ({
    url: `${site.url}${r}`,
    lastModified: now,
    changeFrequency: r === '' ? 'weekly' : 'monthly',
    priority: r === '' ? 1 : 0.7,
  }));
}
