import type { Locale } from '../i18n/utils';

type L = Record<Locale, string>;
export const t3k = (o: L, l: Locale): string => o[l] ?? o.ca;
const two = (ca: string, es: string, en: string): L => ({ ca, es, en });

export const kdHero = {
  eyebrow: two('Kit Digital', 'Kit Digital', 'Kit Digital'),
  title: two('Digitalitza la teva empresa amb ajudes', 'Digitaliza tu empresa con ayudas', 'Digitalise your company with grants'),
  subtitle: two(
    "Som agents digitalitzadors: t'assessorem i tramitem les ajudes del Kit Digital de principi a fi, perquè aprofitis la subvenció sense complicacions.",
    'Somos agentes digitalizadores: te asesoramos y tramitamos las ayudas del Kit Digital de principio a fin, para que aproveches la subvención sin complicaciones.',
    'We are digitalisation agents: we advise you and handle the Kit Digital grants from start to finish, so you use the subsidy hassle-free.'),
};

export interface KdItem {
  icon: string;
  accent: string;
  title: L;
  desc: L;
  href: string;
}

export const kdItems: KdItem[] = [
  {
    icon: 'external', accent: 'blue', href: '/servei/desenvolupament-mida',
    title: two('Lloc web i presència a internet', 'Sitio web y presencia en internet', 'Website and online presence'),
    desc: two('Web professional, posicionament i visibilitat per a la teva empresa.', 'Web profesional, posicionamiento y visibilidad para tu empresa.', 'Professional website, SEO and visibility for your company.'),
  },
  {
    icon: 'shopping-cart', accent: 'pink', href: '/servei/desenvolupament-mida',
    title: two('Comerç electrònic', 'Comercio electrónico', 'E-commerce'),
    desc: two('Botiga online per vendre els teus productes i serveis a internet.', 'Tienda online para vender tus productos y servicios en internet.', 'Online store to sell your products and services online.'),
  },
  {
    icon: 'layers', accent: 'emerald', href: '/servei/gestio-erp',
    title: two('Gestió de processos (ERP)', 'Gestión de procesos (ERP)', 'Process management (ERP)'),
    desc: two('Digitalitza i automatitza facturació, comptabilitat i magatzem amb GestioERP.', 'Digitaliza y automatiza facturación, contabilidad y almacén con GestioERP.', 'Digitise and automate invoicing, accounting and warehouse with GestioERP.'),
  },
  {
    icon: 'sparkles', accent: 'violet', href: '/servei/gestio-erp',
    title: two('Gestió de clients (CRM)', 'Gestión de clientes (CRM)', 'Customer management (CRM)'),
    desc: two('Organitza els teus clients, oportunitats i vendes en un sol lloc.', 'Organiza tus clientes, oportunidades y ventas en un solo lugar.', 'Organise your customers, opportunities and sales in one place.'),
  },
  {
    icon: 'lock', accent: 'indigo', href: '/servei/vpn-ciberseguretat',
    title: two('Ciberseguretat', 'Ciberseguridad', 'Cybersecurity'),
    desc: two('Protecció davant amenaces, VPN i seguretat per als teus dispositius.', 'Protección ante amenazas, VPN y seguridad para tus dispositivos.', 'Threat protection, VPN and security for your devices.'),
  },
  {
    icon: 'phone', accent: 'teal', href: '/servei/telefonia-voip',
    title: two('Comunicacions segures', 'Comunicaciones seguras', 'Secure communications'),
    desc: two('Telefonia VoIP i comunicacions al núvol per treballar des de qualsevol lloc.', 'Telefonía VoIP y comunicaciones en la nube para trabajar desde cualquier lugar.', 'VoIP telephony and cloud communications to work from anywhere.'),
  },
];
