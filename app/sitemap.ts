export default function sitemap() {
  const baseUrl = 'https://vesara-spices.com';

  const routes = [
    '',
    '/about',
    '/products',
    '/contact',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1 : 0.8,
  }));

  return routes;
}
