import ca from './ca.json';
import es from './es.json';
import en from './en.json';

export const locales = ['ca', 'es', 'en'] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = 'ca';

const dictionaries: Record<Locale, Record<string, string>> = { ca, es, en };

export function getLocaleFromUrl(url: URL): Locale {
  const [, seg] = url.pathname.split('/');
  if (seg === 'es') return 'es';
  if (seg === 'en') return 'en';
  return 'ca';
}

export function useTranslations(locale: Locale) {
  const dict = dictionaries[locale] ?? dictionaries[defaultLocale];
  return function t(key: string): string {
    return dict[key] ?? dictionaries[defaultLocale][key] ?? key;
  };
}

export const routeSegments: Record<string, Record<Locale, string>> = {
  services: { ca: 'serveis', es: 'servicios', en: 'services' },
  product: { ca: 'fitoware', es: 'fitoware', en: 'fitoware' },
  contact: { ca: 'contacte', es: 'contacto', en: 'contact' },
  legal: { ca: 'avis-legal', es: 'aviso-legal', en: 'legal' },
  cookies: { ca: 'politica-de-cookies', es: 'politica-de-cookies', en: 'cookie-policy' },
  support: { ca: 'suport', es: 'soporte', en: 'support' },
  maintenance: { ca: 'manteniment', es: 'mantenimiento', en: 'maintenance' },
  solutions: { ca: 'solucions', es: 'soluciones', en: 'solutions' },
  cloud: { ca: 'nuvol', es: 'nube', en: 'cloud' },
  service: { ca: 'servei', es: 'servicio', en: 'service' },
  news: { ca: 'noticies', es: 'noticias', en: 'news' },
};

export function localePrefix(locale: Locale): string {
  return locale === defaultLocale ? '' : `/${locale}`;
}

export function localizedPath(key: string, locale: Locale): string {
  const prefix = localePrefix(locale);
  if (!key) return prefix || '/';
  const seg = routeSegments[key]?.[locale] ?? key;
  return `${prefix}/${seg}`;
}

const segmentToKey: Record<string, string> = Object.entries(routeSegments).reduce(
  (acc, [key, byLocale]) => {
    for (const loc of locales) acc[byLocale[loc]] = key;
    return acc;
  },
  {} as Record<string, string>,
);

export function getAlternatePath(url: URL, target: Locale): string {
  const current = getLocaleFromUrl(url);
  if (current === target) return url.pathname;

  let parts = url.pathname.split('/').filter(Boolean);
  if (parts[0] === 'es' || parts[0] === 'en') parts = parts.slice(1);

  if (parts.length === 0) return localePrefix(target) || '/';

  const key = segmentToKey[parts[0]];
  if (key) parts[0] = routeSegments[key][target];

  const prefix = localePrefix(target);
  return `${prefix}/${parts.join('/')}`;
}
