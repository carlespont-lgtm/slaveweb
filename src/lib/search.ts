import { localizedPath, localePrefix, useTranslations, type Locale } from '../i18n/utils';
import { items, categories, t3, type CatKey } from '../data/services';
import { posts, t3n } from '../data/news';

// Un document de l'índex de cerca. Claus curtes per reduir mida del JSON.
export interface SearchDoc {
  t: string; // títol
  d: string; // descripció curta
  u: string; // url
  k: string; // etiqueta (secció/categoria)
  b?: string; // cos extra (només per fer matching, ja en minúscules)
}

const two = (ca: string, es: string, en: string): Record<Locale, string> => ({ ca, es, en });

// Barra final: coincidir amb el canonical i el sitemap (Astro build "directory").
const slash = (p: string): string => (p === '/' ? '/' : p.endsWith('/') ? p : p + '/');

export function searchIndex(locale: Locale): SearchDoc[] {
  const tr = useTranslations(locale);
  const home = localePrefix(locale) || '/';
  const docs: SearchDoc[] = [];

  // --- Pàgines principals ---
  docs.push({ t: tr('nav.home'), d: tr('site.desc'), u: slash(home), k: tr('nav.home') });

  (['serv', 'mant', 'sol', 'nuvol'] as CatKey[]).forEach((c) => {
    const cat = categories[c];
    docs.push({
      t: t3(cat.hero.title, locale),
      d: t3(cat.hero.subtitle, locale),
      u: slash(localizedPath(cat.segment, locale)),
      k: t3(cat.hero.eyebrow, locale),
    });
  });

  const productDesc = two(
    'Fitoware: producte propi per a vivers amb passaport fitosanitari europeu, en dues edicions (GestioERP i Microsoft Dynamics 365).',
    'Fitoware: producto propio para viveros con pasaporte fitosanitario europeo, en dos ediciones (GestioERP y Microsoft Dynamics 365).',
    'Fitoware: our own product for nurseries with the European plant passport, in two editions (GestioERP and Microsoft Dynamics 365).',
  );
  docs.push({ t: tr('nav.product'), d: t3(productDesc, locale), u: slash(localizedPath('product', locale)), k: 'Fitoware' });

  const contactDesc = two(
    'Contacta amb Slave Computers: telèfon, correu i formulari. Botarell, Tarragona.',
    'Contacta con Slave Computers: teléfono, correo y formulario. Botarell, Tarragona.',
    'Contact Slave Computers: phone, email and form. Botarell, Tarragona.',
  );
  docs.push({ t: tr('nav.contact'), d: t3(contactDesc, locale), u: slash(localizedPath('contact', locale)), k: tr('nav.contact') });

  const supportDesc = two(
    'Suport tècnic i assistència remota amb Supremo i AnyDesk.',
    'Soporte técnico y asistencia remota con Supremo y AnyDesk.',
    'Technical support and remote assistance with Supremo and AnyDesk.',
  );
  docs.push({ t: tr('nav.support'), d: t3(supportDesc, locale), u: slash(localizedPath('support', locale)), k: tr('nav.support') });

  docs.push({ t: tr('nav.news'), d: t3(two('Últimes notícies i novetats.', 'Últimas noticias y novedades.', 'Latest news and updates.'), locale), u: slash(localizedPath('news', locale)), k: tr('nav.news') });

  // --- Serveis, manteniment, solucions i núvol (items) ---
  items.forEach((it) => {
    const feats = it.features.map((f) => t3(f, locale)).join(' · ');
    docs.push({
      t: t3(it.title, locale),
      d: t3(it.tagline, locale),
      u: slash(`${localizedPath('service', locale)}/${it.slug}`),
      k: t3(categories[it.cat].hero.eyebrow, locale),
      b: `${t3(it.intro, locale)} ${feats}`.toLowerCase(),
    });
  });

  // --- Notícies ---
  posts.forEach((p) => {
    docs.push({
      t: t3n(p.title, locale),
      d: t3n(p.excerpt, locale),
      u: slash(`${localizedPath('news', locale)}/${p.slug}`),
      k: t3n(p.tag, locale),
      b: p.body.map((x) => t3n(x, locale)).join(' ').toLowerCase(),
    });
  });

  return docs;
}
