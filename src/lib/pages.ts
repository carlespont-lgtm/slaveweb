import { localizedPath, type Locale } from '../i18n/utils';
import { items } from '../data/services';
import { posts } from '../data/news';

export const SITE = 'https://slave.net';

// Pàgines que redirigeixen a /fitoware → fora del sitemap (evitem contingut duplicat/orfe)
export const REDIRECTED_SERVICES = new Set(['fitoware-vivers']);
export const REDIRECTED_NEWS = new Set(['fitoware-passaport']);

// Prioritat i freqüència per pàgina estàtica (l'ordre marca l'ordre al sitemap)
const staticMeta: Record<string, { priority: number; changefreq: string }> = {
  '': { priority: 1.0, changefreq: 'weekly' },
  product: { priority: 0.9, changefreq: 'monthly' },
  services: { priority: 0.8, changefreq: 'weekly' },
  maintenance: { priority: 0.8, changefreq: 'weekly' },
  solutions: { priority: 0.8, changefreq: 'weekly' },
  cloud: { priority: 0.8, changefreq: 'weekly' },
  news: { priority: 0.8, changefreq: 'weekly' },
  contact: { priority: 0.7, changefreq: 'monthly' },
  support: { priority: 0.7, changefreq: 'monthly' },
  legal: { priority: 0.3, changefreq: 'yearly' },
  cookies: { priority: 0.3, changefreq: 'yearly' },
};

// Astro build "directory": totes les rutes acaben amb barra (excepte l'arrel)
const slash = (p: string): string => (p === '/' ? '/' : p.endsWith('/') ? p : p + '/');

interface Entry {
  urls: Record<Locale, string>;
  priority: number;
  changefreq: string;
  lastmod?: string;
}

/** Totes les pàgines indexables amb la seva metadata i URL per idioma. */
export function sitemapEntries(): Entry[] {
  const out: Entry[] = [];
  const push = (key: string, extra: string, priority: number, changefreq: string, lastmod?: string): void => {
    out.push({
      urls: {
        ca: slash(localizedPath(key, 'ca') + extra),
        es: slash(localizedPath(key, 'es') + extra),
        en: slash(localizedPath(key, 'en') + extra),
      },
      priority,
      changefreq,
      lastmod,
    });
  };

  for (const [key, meta] of Object.entries(staticMeta)) push(key, '', meta.priority, meta.changefreq);
  for (const it of items) {
    if (REDIRECTED_SERVICES.has(it.slug)) continue;
    push('service', '/' + it.slug, 0.6, 'monthly');
  }
  for (const p of posts) {
    if (REDIRECTED_NEWS.has(p.slug)) continue;
    push('news', '/' + p.slug, 0.7, 'monthly', p.date);
  }
  return out;
}

/** Cada pàgina amb la seva URL a cada idioma (per als hreflang). */
export function sitemapPages(): Record<Locale, string>[] {
  return sitemapEntries().map((e) => e.urls);
}

/** Sitemap XML per a un idioma concret, amb hreflang, lastmod i priority. */
export function sitemapXml(target: Locale): string {
  const urls = sitemapEntries()
    .map((e) => {
      const alts =
        (['ca', 'es', 'en'] as const)
          .map((l) => `<xhtml:link rel="alternate" hreflang="${l}" href="${SITE}${e.urls[l]}"/>`)
          .join('') + `<xhtml:link rel="alternate" hreflang="x-default" href="${SITE}${e.urls.ca}"/>`;
      const lastmod = e.lastmod ? `<lastmod>${e.lastmod}</lastmod>` : '';
      return `<url><loc>${SITE}${e.urls[target]}</loc>${alts}${lastmod}<changefreq>${e.changefreq}</changefreq><priority>${e.priority.toFixed(1)}</priority></url>`;
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
