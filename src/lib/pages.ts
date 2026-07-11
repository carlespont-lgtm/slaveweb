import { localizedPath, type Locale } from '../i18n/utils';
import { items } from '../data/services';
import { posts } from '../data/news';

export const SITE = 'https://slave.net';

// Claus de pàgines estàtiques (routeSegments + home)
const staticKeys = ['', 'services', 'maintenance', 'solutions', 'cloud', 'product', 'contact', 'support', 'legal', 'cookies', 'news'];

// Astro build "directory": totes les rutes acaben amb barra (excepte l'arrel)
const slash = (p: string): string => (p === '/' ? '/' : p.endsWith('/') ? p : p + '/');

/** Cada pàgina amb la seva URL a cada idioma (per als hreflang). */
export function sitemapPages(): Record<Locale, string>[] {
  const pages: Record<Locale, string>[] = [];
  const push = (key: string, extra = '') => {
    pages.push({
      ca: slash(localizedPath(key, 'ca') + extra),
      es: slash(localizedPath(key, 'es') + extra),
      en: slash(localizedPath(key, 'en') + extra),
    });
  };
  for (const k of staticKeys) push(k);
  for (const it of items) push('service', '/' + it.slug);
  for (const p of posts) push('news', '/' + p.slug);
  return pages;
}

/** Sitemap XML per a un idioma concret, amb enllaços alternatius hreflang. */
export function sitemapXml(target: Locale): string {
  const urls = sitemapPages()
    .map((pg) => {
      const alts =
        (['ca', 'es', 'en'] as const)
          .map((l) => `<xhtml:link rel="alternate" hreflang="${l}" href="${SITE}${pg[l]}"/>`)
          .join('') + `<xhtml:link rel="alternate" hreflang="x-default" href="${SITE}${pg.ca}"/>`;
      return `<url><loc>${SITE}${pg[target]}</loc>${alts}<changefreq>weekly</changefreq><priority>0.7</priority></url>`;
    })
    .join('');
  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">${urls}</urlset>`;
}

/** Índex de sitemaps: un per idioma. */
export function sitemapIndexXml(): string {
  const maps = ['sitemap-ca.xml', 'sitemap-es.xml', 'sitemap-en.xml']
    .map((m) => `<sitemap><loc>${SITE}/${m}</loc></sitemap>`)
    .join('');
  return `<?xml version="1.0" encoding="UTF-8"?>\n<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${maps}</sitemapindex>`;
}
