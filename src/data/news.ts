import type { Locale } from '../i18n/utils';

type L = Record<Locale, string>;
export const t3n = (o: L, l: Locale): string => o[l] ?? o.ca;

export interface Post {
  slug: string;
  date: string; // ISO YYYY-MM-DD
  tag: L;
  title: L;
  excerpt: L;
  body: L[];
  link?: { label: L; href: string };
}

const two = (ca: string, es: string, en: string): L => ({ ca, es, en });

export const posts: Post[] = [
  {
    slug: 'slave-grup-siamcloud',
    date: '2026-07-05',
    tag: two('Empresa', 'Empresa', 'Company'),
    title: two('Slave Computers, part del grup SIAM Cloud', 'Slave Computers, parte del grupo SIAM Cloud', 'Slave Computers, part of the SIAM Cloud group'),
    excerpt: two(
      'Reforcem la nostra aposta pel núvol dins del grup SIAM Cloud, la plataforma que impulsa GestioERP, Fitoware i altres solucions de gestió.',
      'Reforzamos nuestra apuesta por la nube dentro del grupo SIAM Cloud, la plataforma que impulsa GestioERP, Fitoware y otras soluciones de gestión.',
      'We strengthen our cloud commitment within the SIAM Cloud group, the platform behind GestioERP, Fitoware and other management solutions.'),
    body: [
      two('Slave Computers, S.L. forma part del grup SIAM Cloud, la plataforma tecnològica que desenvolupa i comercialitza GestioERP, Fitoware i altres solucions de gestió al núvol des de Botarell.', 'Slave Computers, S.L. forma parte del grupo SIAM Cloud, la plataforma tecnológica que desarrolla y comercializa GestioERP, Fitoware y otras soluciones de gestión en la nube desde Botarell.', 'Slave Computers, S.L. is part of the SIAM Cloud group, the technology platform that develops and markets GestioERP, Fitoware and other cloud management solutions from Botarell.'),
      two('Seguim sent el mateix equip de proximitat de sempre, ara amb la força d\'un ecosistema cloud complet al teu costat.', 'Seguimos siendo el mismo equipo de proximidad de siempre, ahora con la fuerza de un ecosistema cloud completo a tu lado.', 'We remain the same close-knit team as always, now with the strength of a complete cloud ecosystem at your side.'),
    ],
    link: { label: two('Descobreix SIAM Cloud', 'Descubre SIAM Cloud', 'Discover SIAM Cloud'), href: 'https://siamcloud.es' },
  },
  {
    slug: 'gestioerp-verifactu',
    date: '2026-05-18',
    tag: two('GestioERP', 'GestioERP', 'GestioERP'),
    title: two('GestioERP al núvol, adaptat a Verifactu', 'GestioERP en la nube, adaptado a Verifactu', 'GestioERP in the cloud, ready for Verifactu'),
    excerpt: two(
      'Facturació, comptabilitat, TPV i CRM connectats i adaptats a la nova normativa Verifactu. Prova la demo amb usuari demo i clau demo2025.',
      'Facturación, contabilidad, TPV y CRM conectados y adaptados a la nueva normativa Verifactu. Prueba la demo con usuario demo y clave demo2025.',
      'Invoicing, accounting, POS and CRM connected and adapted to the new Verifactu regulation. Try the demo with user demo and password demo2025.'),
    body: [
      two('GestioERP és el programari de gestió al núvol complet i adaptable: factures, pressupostos, comandes i albarans sense límits, amb càlcul d\'impostos automàtic i còpies de seguretat.', 'GestioERP es el software de gestión en la nube completo y adaptable: facturas, presupuestos, pedidos y albaranes sin límites, con cálculo de impuestos automático y copias de seguridad.', 'GestioERP is the complete, adaptable cloud management software: unlimited invoices, quotes, orders and delivery notes, with automatic tax calculation and backups.'),
      two('Tot adaptat a la normativa Verifactu perquè la teva empresa compleixi amb la fiscalització electrònica sense complicacions.', 'Todo adaptado a la normativa Verifactu para que tu empresa cumpla con la fiscalización electrónica sin complicaciones.', 'All adapted to the Verifactu regulation so your company complies with electronic taxation hassle-free.'),
    ],
    link: { label: two('Prova la demo', 'Prueba la demo', 'Try the demo'), href: 'https://demo.gestioerp.com/login' },
  },
  {
    slug: 'kit-digital-ajudes',
    date: '2026-03-02',
    tag: two('Kit Digital', 'Kit Digital', 'Kit Digital'),
    title: two('Kit Digital: aprofita les ajudes per digitalitzar-te', 'Kit Digital: aprovecha las ayudas para digitalizarte', 'Kit Digital: use the grants to go digital'),
    excerpt: two(
      'Com a agents digitalitzadors t\'ajudem a aprofitar les ajudes del Kit Digital, amb tota la tramitació inclosa.',
      'Como agentes digitalizadores te ayudamos a aprovechar las ayudas del Kit Digital, con toda la tramitación incluida.',
      'As digitalisation agents we help you use Kit Digital grants, with all the paperwork included.'),
    body: [
      two('El Kit Digital finança la digitalització de pimes i autònoms: web, comerç electrònic, gestió, ciberseguretat i comunicacions. Nosaltres t\'assessorem i tramitem l\'ajuda de principi a fi.', 'El Kit Digital financia la digitalización de pymes y autónomos: web, comercio electrónico, gestión, ciberseguridad y comunicaciones. Nosotros te asesoramos y tramitamos la ayuda de principio a fin.', 'Kit Digital funds the digitalisation of SMEs and freelancers: web, e-commerce, management, cybersecurity and communications. We advise you and handle the grant from start to finish.'),
      two('Contacta amb nosaltres i t\'avisarem tan bon punt s\'obri una nova convocatòria.', 'Contacta con nosotros y te avisaremos en cuanto se abra una nueva convocatoria.', 'Contact us and we\'ll let you know as soon as a new call opens.'),
    ],
    link: { label: two('Veure el Kit Digital', 'Ver el Kit Digital', 'See Kit Digital'), href: '/kit-digital' },
  },
  {
    slug: 'wifi-hotels-unifi',
    date: '2026-01-20',
    tag: two('Xarxes', 'Redes', 'Networks'),
    title: two('WiFi professional per a hotels amb Ubiquiti UniFi', 'WiFi profesional para hoteles con Ubiquiti UniFi', 'Professional WiFi for hotels with Ubiquiti UniFi'),
    excerpt: two(
      'Cobertura estable i segura a tot l\'hotel amb un estudi previ i els millors equips Ubiquiti UniFi.',
      'Cobertura estable y segura en todo el hotel con un estudio previo y los mejores equipos Ubiquiti UniFi.',
      'Stable, secure coverage across the whole hotel with a prior survey and the best Ubiquiti UniFi gear.'),
    body: [
      two('Resolem els problemes de cobertura WiFi als hotels amb un estudi previ i punts d\'accés Ubiquiti UniFi per a interior i exterior, amb xarxa d\'hostes i portal captiu.', 'Resolvemos los problemas de cobertura WiFi en los hoteles con un estudio previo y puntos de acceso Ubiquiti UniFi para interior y exterior, con red de invitados y portal cautivo.', 'We fix hotel WiFi coverage problems with a prior survey and Ubiquiti UniFi indoor/outdoor access points, with a guest network and captive portal.'),
      two('Els teus clients naveguen ràpid i tu ho gestiones tot des d\'un únic panell.', 'Tus clientes navegan rápido y tú lo gestionas todo desde un único panel.', 'Your guests browse fast and you manage everything from a single dashboard.'),
    ],
    link: { label: two('Veure WiFi professional', 'Ver WiFi profesional', 'See professional WiFi'), href: '/servei/wifi-professional' },
  },
  {
    slug: 'telefonia-voip-estalvi',
    date: '2025-11-12',
    tag: two('Comunicacions', 'Comunicaciones', 'Communications'),
    title: two('Estalvia amb la telefonia VoIP al núvol', 'Ahorra con la telefonía VoIP en la nube', 'Save with cloud VoIP telephony'),
    excerpt: two(
      'Centraleta virtual amb tarifes reduïdes i sense establiment de trucada, i extensions al mòbil per teletreballar.',
      'Centralita virtual con tarifas reducidas y sin establecimiento de llamada, y extensiones en el móvil para teletrabajar.',
      'Virtual PBX with reduced rates and no call-setup fee, plus mobile extensions for remote work.'),
    body: [
      two('La telefonia IP al núvol et permet reduir costos, mantenir el teu número i portar les extensions al mòbil per treballar des de qualsevol lloc.', 'La telefonía IP en la nube te permite reducir costes, mantener tu número y llevar las extensiones al móvil para trabajar desde cualquier lugar.', 'Cloud IP telephony lets you cut costs, keep your number and take your extensions on mobile to work from anywhere.'),
      two('Tot el control des del navegador, sense centraletes físiques ni manteniment.', 'Todo el control desde el navegador, sin centralitas físicas ni mantenimiento.', 'Full control from the browser, with no physical PBX or maintenance.'),
    ],
    link: { label: two('Veure telefonia VoIP', 'Ver telefonía VoIP', 'See VoIP telephony'), href: '/servei/telefonia-voip' },
  },
  {
    slug: 'fitoware-passaport',
    date: '2025-09-30',
    tag: two('Fitoware', 'Fitoware', 'Fitoware'),
    title: two('Fitoware: el passaport fitosanitari per als vivers', 'Fitoware: el pasaporte fitosanitario para los viveros', 'Fitoware: the plant passport for nurseries'),
    excerpt: two(
      'El nostre producte propi per a vivers: catàleg d\'espècies i passaport fitosanitari europeu en dues edicions.',
      'Nuestro producto propio para viveros: catálogo de especies y pasaporte fitosanitario europeo en dos ediciones.',
      'Our own product for nurseries: species catalogue and European plant passport in two editions.'),
    body: [
      two('Fitoware gestiona el catàleg d\'espècies botàniques i emet el passaport fitosanitari europeu (Reglament UE 2016/2031) en dues edicions: per a GestioERP i per a Microsoft Dynamics 365.', 'Fitoware gestiona el catálogo de especies botánicas y emite el pasaporte fitosanitario europeo (Reglamento UE 2016/2031) en dos ediciones: para GestioERP y para Microsoft Dynamics 365.', 'Fitoware manages the botanical species catalogue and issues the European plant passport (EU Regulation 2016/2031) in two editions: for GestioERP and for Microsoft Dynamics 365.'),
      two('Una eina pensada des del primer dia per al sector verd.', 'Una herramienta pensada desde el primer día para el sector verde.', 'A tool built from day one for the green sector.'),
    ],
    link: { label: two('Visita fitoware.com', 'Visita fitoware.com', 'Visit fitoware.com'), href: 'https://fitoware.com' },
  },
];

// Ordenats per data descendent (les 5 últimes per al menú)
export const latest = [...posts].sort((a, b) => (a.date < b.date ? 1 : -1));
export const findPost = (slug: string): Post | undefined => posts.find((p) => p.slug === slug);
