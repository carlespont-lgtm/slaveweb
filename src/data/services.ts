import type { Locale } from '../i18n/utils';

type L = Record<Locale, string>;
export const t3 = (o: L, l: Locale): string => o[l] ?? o.ca;

export type CatKey = 'serv' | 'mant' | 'sol' | 'nuvol';

export interface Accent { from: string; to: string; soft: string; text: string; }
export const accentColors: Record<string, Accent> = {
  emerald: { from: '#34d39e', to: '#0c7d68', soft: '#d0fbe7', text: '#0c7d68' },
  blue: { from: '#60a5fa', to: '#1d4ed8', soft: '#dbeafe', text: '#1d4ed8' },
  indigo: { from: '#818cf8', to: '#4338ca', soft: '#e0e7ff', text: '#4338ca' },
  violet: { from: '#c084fc', to: '#7c3aed', soft: '#f3e8ff', text: '#7c3aed' },
  pink: { from: '#f472b6', to: '#be185d', soft: '#fce7f3', text: '#be185d' },
  amber: { from: '#fbbf24', to: '#d97706', soft: '#fef3c7', text: '#b45309' },
  orange: { from: '#fb923c', to: '#c2410c', soft: '#ffedd5', text: '#c2410c' },
  teal: { from: '#2dd4bf', to: '#0f766e', soft: '#ccfbf1', text: '#0f766e' },
  cyan: { from: '#22d3ee', to: '#0e7490', soft: '#cffafe', text: '#0e7490' },
  lime: { from: '#a3e635', to: '#4d7c0f', soft: '#ecfccb', text: '#4d7c0f' },
  red: { from: '#f87171', to: '#b91c1c', soft: '#fee2e2', text: '#b91c1c' },
  sky: { from: '#38bdf8', to: '#0369a1', soft: '#e0f2fe', text: '#0369a1' },
};
const slugAccent: Record<string, string> = {
  // serveis
  'gestio-erp': 'emerald', 'desenvolupament-mida': 'violet', 'fitoware-vivers': 'lime',
  'migracio-nuvol': 'sky', integracions: 'indigo', 'suport-manteniment': 'amber',
  // manteniment
  'contracte-manteniment': 'blue', 'banc-hores': 'amber', 'servei-tecnic': 'orange',
  'cost-copia': 'teal', garanties: 'emerald', 'recuperacio-dades': 'red',
  // solucions
  'programari-gestio': 'emerald', 'wifi-professional': 'cyan', 'vpn-ciberseguretat': 'indigo',
  servidors: 'blue', 'impressores-3d': 'orange', 'productes-equips': 'pink',
  // núvol
  'telefonia-voip': 'teal', 'backup-online': 'sky', 'office-365': 'red',
  'dropbox-business': 'blue', antivirus: 'violet',
};
export const accentOf = (slug: string): Accent => accentColors[slugAccent[slug]] ?? accentColors.emerald;

// Il·lustració de colors (component Illustration) per a cada servei —
// escollides perquè dins d'una mateixa categoria totes siguin diferents.
const serviceIllo: Record<string, string> = {
  // serveis
  'gestio-erp': 'dashboard', 'desenvolupament-mida': 'rocket', 'fitoware-vivers': 'box',
  'migracio-nuvol': 'cloud', integracions: 'connect', 'suport-manteniment': 'support',
  // manteniment
  'contracte-manteniment': 'files', 'banc-hores': 'clock', 'servei-tecnic': 'support',
  'cost-copia': 'printer', garanties: 'security', 'recuperacio-dades': 'server',
  // solucions
  'programari-gestio': 'dashboard', 'wifi-professional': 'wifi', 'vpn-ciberseguretat': 'security',
  servidors: 'server', 'impressores-3d': 'printer', 'productes-equips': 'box',
  // núvol
  'telefonia-voip': 'phone', 'backup-online': 'cloud', 'office-365': 'mail',
  'dropbox-business': 'files', antivirus: 'security',
};
export const svcIllo = (slug: string): string => serviceIllo[slug] ?? 'dashboard';

export interface Item {
  slug: string;
  cat: CatKey;
  icon: string;
  title: L;
  tagline: L;
  intro: L;
  features: L[];
  external?: string;
}

export interface Category {
  key: CatKey;
  icon: string;
  segment: string; // routeSegments key for the overview page
  hero: { eyebrow: L; title: L; subtitle: L };
  cardsTitle: L;
}

const two = (ca: string, es: string, en: string): L => ({ ca, es, en });

export const categories: Record<CatKey, Category> = {
  serv: {
    key: 'serv', icon: 'sparkles', segment: 'services',
    hero: {
      eyebrow: two('Serveis', 'Servicios', 'Services'),
      title: two('El que fem per la teva empresa', 'Lo que hacemos por tu empresa', 'What we do for your company'),
      subtitle: two(
        "De la implantació d'un ERP al núvol al desenvolupament a mida quan cap programa estàndard encaixa.",
        'De la implantación de un ERP en la nube al desarrollo a medida cuando ningún programa estándar encaja.',
        'From deploying a cloud ERP to custom development when no standard program fits.'),
    },
    cardsTitle: two('Els nostres serveis', 'Nuestros servicios', 'Our services'),
  },
  mant: {
    key: 'mant', icon: 'wrench', segment: 'maintenance',
    hero: {
      eyebrow: two('Manteniment', 'Mantenimiento', 'Maintenance'),
      title: two("Elimina les incidències informàtiques des d'avui", 'Elimina las incidencias informáticas desde hoy', 'Eliminate IT incidents starting today'),
      subtitle: two(
        'Amb els nostres plans de manteniment, les avaries informàtiques deixen de ser un problema per a la teva empresa.',
        'Con nuestros planes de mantenimiento, las averías informáticas dejan de ser un problema para tu empresa.',
        'With our maintenance plans, IT failures stop being a problem for your company.'),
    },
    cardsTitle: two('Els nostres serveis de manteniment', 'Nuestros servicios de mantenimiento', 'Our maintenance services'),
  },
  sol: {
    key: 'sol', icon: 'network', segment: 'solutions',
    hero: {
      eyebrow: two('Solucions', 'Soluciones', 'Solutions'),
      title: two('Solucions per a tota la teva infraestructura', 'Soluciones para toda tu infraestructura', 'Solutions for your entire infrastructure'),
      subtitle: two(
        'Software de gestió, xarxes, seguretat, servidors i equips: cobrim totes les necessitats tecnològiques de la teva empresa.',
        'Software de gestión, redes, seguridad, servidores y equipos: cubrimos todas las necesidades tecnológicas de tu empresa.',
        'Management software, networks, security, servers and equipment: we cover all your company’s technology needs.'),
    },
    cardsTitle: two('Les nostres solucions', 'Nuestras soluciones', 'Our solutions'),
  },
  nuvol: {
    key: 'nuvol', icon: 'cloud', segment: 'cloud',
    hero: {
      eyebrow: two('Núvol', 'Nube', 'Cloud'),
      title: two('Porta la teva empresa al núvol, amb seguretat', 'Lleva tu empresa a la nube, con seguridad', 'Take your company to the cloud, securely'),
      subtitle: two(
        'Telefonia, còpies de seguretat, correu professional i eines de col·laboració: les solucions cloud més avançades i rendibles.',
        'Telefonía, copias de seguridad, correo profesional y herramientas de colaboración: las soluciones cloud más avanzadas y rentables.',
        'Telephony, backups, professional email and collaboration tools: the most advanced, cost-effective cloud solutions.'),
    },
    cardsTitle: two('Els nostres serveis cloud', 'Nuestros servicios cloud', 'Our cloud services'),
  },
};

export const items: Item[] = [
  // ---------- SERVEIS ----------
  {
    slug: 'gestio-erp', cat: 'serv', icon: 'cloud',
    title: two('Programari de gestió (ERP)', 'Software de gestión (ERP)', 'Management software (ERP)'),
    tagline: two('GestioERP: facturació, TPV, comptabilitat i magatzem al núvol.', 'GestioERP: facturación, TPV, contabilidad y almacén en la nube.', 'GestioERP: invoicing, POS, accounting and warehouse in the cloud.'),
    intro: two(
      'Implantem GestioERP: facturació, TPV, comptabilitat, magatzem i CRM en un sol sistema, al núvol i modular. Actives només el que fas servir i pagues només per això.',
      'Implantamos GestioERP: facturación, TPV, contabilidad, almacén y CRM en un solo sistema, en la nube y modular. Activas solo lo que usas y pagas solo por eso.',
      'We deploy GestioERP: invoicing, POS, accounting, warehouse and CRM in a single, modular cloud system. Switch on only what you use and pay only for that.'),
    features: [
      two('Facturació i comptabilitat', 'Facturación y contabilidad', 'Invoicing and accounting'),
      two('TPV i magatzem', 'TPV y almacén', 'POS and warehouse'),
      two('CRM i control horari', 'CRM y control horario', 'CRM and time tracking'),
      two('Modular i al núvol', 'Modular y en la nube', 'Modular and cloud-based'),
    ],
  },
  {
    slug: 'desenvolupament-mida', cat: 'serv', icon: 'sparkles',
    title: two('Desenvolupament a mida', 'Desarrollo a medida', 'Custom development'),
    tagline: two("Quan el problema no cap en cap programa estàndard, el desenvolupem.", 'Cuando el problema no cabe en ningún programa estándar, lo desarrollamos.', 'When the problem fits no standard program, we build it.'),
    intro: two(
      "Anys d'experiència resolent problemes reals: web, apps Android i iOS, back-office i integracions. Si el teu cas no encaixa en cap programa estàndard, el desenvolupem a la teva mida.",
      'Años de experiencia resolviendo problemas reales: web, apps Android e iOS, back-office e integraciones. Si tu caso no encaja en ningún programa estándar, lo desarrollamos a tu medida.',
      'Years of experience solving real problems: web, Android and iOS apps, back-office and integrations. If your case fits no standard program, we build it to your measure.'),
    features: [
      two('Web i portals a mida', 'Web y portales a medida', 'Custom web and portals'),
      two('Apps Android i iOS', 'Apps Android e iOS', 'Android and iOS apps'),
      two('Back-office i automatismes', 'Back-office y automatismos', 'Back-office and automation'),
      two('Integracions amb els teus sistemes', 'Integraciones con tus sistemas', 'Integrations with your systems'),
    ],
  },
  {
    slug: 'fitoware-vivers', cat: 'serv', icon: 'leaf',
    title: two('Fitoware per a vivers', 'Fitoware para viveros', 'Fitoware for nurseries'),
    tagline: two('Producte propi: passaport fitosanitari europeu i traçabilitat.', 'Producto propio: pasaporte fitosanitario europeo y trazabilidad.', 'Our own product: European plant passport and traceability.'),
    intro: two(
      'Fitoware és el nostre producte propi per a vivers i planta ornamental: catàleg d\'espècies, passaport fitosanitari europeu (Reglament UE 2016/2031) i traçabilitat, en dues edicions (GestioERP i Microsoft Dynamics 365).',
      'Fitoware es nuestro producto propio para viveros y planta ornamental: catálogo de especies, pasaporte fitosanitario europeo (Reglamento UE 2016/2031) y trazabilidad, en dos ediciones (GestioERP y Microsoft Dynamics 365).',
      'Fitoware is our own product for nurseries and ornamental plants: species catalogue, European plant passport (EU Regulation 2016/2031) and traceability, in two editions (GestioERP and Microsoft Dynamics 365).'),
    features: [
      two("Catàleg d'espècies botàniques", 'Catálogo de especies botánicas', 'Botanical species catalogue'),
      two('Passaport fitosanitari en un clic', 'Pasaporte fitosanitario en un clic', 'Plant passport in one click'),
      two('Traçabilitat i etiquetes', 'Trazabilidad y etiquetas', 'Traceability and labels'),
      two('Dues edicions: GestioERP i Dynamics 365', 'Dos ediciones: GestioERP y Dynamics 365', 'Two editions: GestioERP and Dynamics 365'),
    ],
    external: 'https://fitoware.com',
  },
  {
    slug: 'migracio-nuvol', cat: 'serv', icon: 'layers',
    title: two('Migració al núvol', 'Migración a la nube', 'Cloud migration'),
    tagline: two('Del servidor del despatx al navegador, sense complicacions.', 'Del servidor del despacho al navegador, sin complicaciones.', 'From the office server to the browser, hassle-free.'),
    intro: two(
      "Movem la teva empresa al núvol: deixes de comprar maquinari, de fer còpies de seguretat a mà i de dependre d'un servidor al despatx. Migració sense pèrdua de dades i amb formació per a l'equip.",
      'Movemos tu empresa a la nube: dejas de comprar hardware, de hacer copias de seguridad a mano y de depender de un servidor en el despacho. Migración sin pérdida de datos y con formación para el equipo.',
      'We move your company to the cloud: no more buying hardware, backing up by hand or depending on an office server. Loss-free migration with team training.'),
    features: [
      two('Sense comprar maquinari', 'Sin comprar hardware', 'No hardware to buy'),
      two('Còpies de seguretat automàtiques', 'Copias de seguridad automáticas', 'Automatic backups'),
      two('Accés des de qualsevol lloc', 'Acceso desde cualquier lugar', 'Access from anywhere'),
      two('Migració sense pèrdua de dades', 'Migración sin pérdida de datos', 'Loss-free migration'),
    ],
  },
  {
    slug: 'integracions', cat: 'serv', icon: 'external',
    title: two('Integracions', 'Integraciones', 'Integrations'),
    tagline: two('Connectem els teus sistemes: Dynamics 365, APIs i pagaments.', 'Conectamos tus sistemas: Dynamics 365, APIs y pagos.', 'We connect your systems: Dynamics 365, APIs and payments.'),
    intro: two(
      'Connectem el teu programari de gestió amb la resta de sistemes: Microsoft Dynamics 365 Business Central, APIs de tercers, passarel·les de pagament, facturació electrònica i comerç electrònic.',
      'Conectamos tu software de gestión con el resto de sistemas: Microsoft Dynamics 365 Business Central, APIs de terceros, pasarelas de pago, facturación electrónica y comercio electrónico.',
      'We connect your management software with the rest of your systems: Microsoft Dynamics 365 Business Central, third-party APIs, payment gateways, e-invoicing and e-commerce.'),
    features: [
      two('Microsoft Dynamics 365 Business Central', 'Microsoft Dynamics 365 Business Central', 'Microsoft Dynamics 365 Business Central'),
      two('APIs i serveis de tercers', 'APIs y servicios de terceros', 'Third-party APIs and services'),
      two('Passarel·les de pagament', 'Pasarelas de pago', 'Payment gateways'),
      two('Facturació electrònica', 'Facturación electrónica', 'E-invoicing'),
    ],
  },
  {
    slug: 'suport-manteniment', cat: 'serv', icon: 'shield',
    title: two('Suport i manteniment', 'Soporte y mantenimiento', 'Support & maintenance'),
    tagline: two('Acompanyament continu: actualitzacions, còpies i suport.', 'Acompañamiento continuo: actualizaciones, copias y soporte.', 'Ongoing support: updates, backups and help.'),
    intro: two(
      "T'acompanyem cada dia: actualitzacions, còpies de seguretat, servei tècnic in situ i remot i assistència remota amb Supremo i AnyDesk, perquè tu t'ocupis del teu negoci.",
      'Te acompañamos cada día: actualizaciones, copias de seguridad, servicio técnico in situ y remoto y asistencia remota con Supremo y AnyDesk, para que tú te ocupes de tu negocio.',
      'We support you every day: updates, backups, on-site and remote technical service and remote assistance with Supremo and AnyDesk, so you can focus on your business.'),
    features: [
      two('Actualitzacions i còpies de seguretat', 'Actualizaciones y copias de seguridad', 'Updates and backups'),
      two('Servei tècnic in situ i remot', 'Servicio técnico in situ y remoto', 'On-site and remote technical service'),
      two('Assistència remota (Supremo/AnyDesk)', 'Asistencia remota (Supremo/AnyDesk)', 'Remote assistance (Supremo/AnyDesk)'),
      two('Plans de manteniment a mida', 'Planes de mantenimiento a medida', 'Custom maintenance plans'),
    ],
  },
  // ---------- MANTENIMENT ----------
  {
    slug: 'contracte-manteniment', cat: 'mant', icon: 'file-text',
    title: two('Contracte de manteniment', 'Contrato de mantenimiento', 'Maintenance contract'),
    tagline: two('Disponibilitat de tècnics i terminis de resposta garantits.', 'Disponibilidad de técnicos y plazos de respuesta garantizados.', 'Technician availability and guaranteed response times.'),
    intro: two(
      "Ens adaptem a les necessitats de cada empresa: des de la cessió de tècnics a hores fixes fins al manteniment sota demanda, amb tots els avantatges d'un contracte i el pagament per ús d'un paquet d'hores.",
      'Nos adaptamos a las necesidades de cada empresa: desde la cesión de técnicos a horas fijas hasta el mantenimiento bajo demanda, con todas las ventajas de un contrato y el pago por uso de un paquete de horas.',
      'We adapt to each company: from fixed-hours technician assignment to on-demand maintenance, with all the benefits of a contract and pay-per-use hour packs.'),
    features: [
      two('Disponibilitat de tècnics garantida', 'Disponibilidad de técnicos garantizada', 'Guaranteed technician availability'),
      two('Termini de resposta compromès', 'Plazo de respuesta comprometido', 'Committed response time'),
      two('Manteniment preventiu i correctiu', 'Mantenimiento preventivo y correctivo', 'Preventive and corrective maintenance'),
      two('Pagament per ús, sense sorpreses', 'Pago por uso, sin sorpresas', 'Pay per use, no surprises'),
    ],
  },
  {
    slug: 'banc-hores', cat: 'mant', icon: 'clock',
    title: two("Banc d'hores", 'Bolsa de horas', 'Hours bank'),
    tagline: two("Paquet d'hores sense caducitat i fins a un 30% més econòmic.", 'Paquete de horas sin caducidad y hasta un 30% más económico.', 'A no-expiry hours pack, up to 30% cheaper.'),
    intro: two(
      "Per a empreses que no volen una quota fixa: adquireixes un paquet d'hores —sense caducitat— i, segons la quantitat, obtens descomptes importants. Registrem cada intervenció en un portal web.",
      'Para empresas que no quieren una cuota fija: adquieres un paquete de horas —sin caducidad— y, según la cantidad, obtienes descuentos importantes. Registramos cada intervención en un portal web.',
      'For companies that don’t want a fixed fee: you buy an hours pack —with no expiry— and get significant discounts by volume. We log every intervention in a web portal.'),
    features: [
      two('Preus fins a un 30% més econòmics', 'Precios hasta un 30% más económicos', 'Prices up to 30% cheaper'),
      two('Hores sense caducitat', 'Horas sin caducidad', 'Hours never expire'),
      two('Portal web transparent de consum', 'Portal web transparente de consumo', 'Transparent usage web portal'),
      two('Avís al 10% restant per renovar', 'Aviso al 10% restante para renovar', 'Alert at 10% remaining to renew'),
    ],
  },
  {
    slug: 'servei-tecnic', cat: 'mant', icon: 'wrench',
    title: two('Servei tècnic', 'Servicio técnico', 'Technical service'),
    tagline: two('Assistència in situ i remota en menys de 24 h.', 'Asistencia in situ y remota en menos de 24 h.', 'On-site and remote assistance in under 24 h.'),
    intro: two(
      "Des del nostre centre d'assistència tècnica atenem els clients en remot i coordinem l'assistència in situ quan cal. Cobertura de dilluns a divendres, en menys de 24 h, i en menys de 4 h si és urgent.",
      'Desde nuestro centro de asistencia técnica atendemos a los clientes en remoto y coordinamos la asistencia in situ cuando hace falta. Cobertura de lunes a viernes, en menos de 24 h, y en menos de 4 h si es urgente.',
      'From our technical support centre we assist clients remotely and coordinate on-site help when needed. Coverage Monday to Friday, in under 24 h, and under 4 h for urgent cases.'),
    features: [
      two('Assistència tècnica in situ', 'Asistencia técnica in situ', 'On-site technical assistance'),
      two('Assistència remota en línia', 'Asistencia remota en línea', 'Online remote assistance'),
      two('Outsourcing informàtic', 'Outsourcing informático', 'IT outsourcing'),
      two('Projectes i migracions a preu tancat', 'Proyectos y migraciones a precio cerrado', 'Fixed-price projects and migrations'),
    ],
  },
  {
    slug: 'cost-copia', cat: 'mant', icon: 'printer',
    title: two('Cost per còpia', 'Coste por copia', 'Cost per copy'),
    tagline: two("Lloguer d'impressores multifunció, tot inclòs des de 29,90 €.", 'Alquiler de impresoras multifunción, todo incluido desde 29,90 €.', 'Multifunction printer rental, all-inclusive from €29.90.'),
    intro: two(
      "T'instal·lem un equip multifunció A4 làser amb escàner, sense permanència ni costos d'instal·lació. Per una petita quota mensual amb còpies incloses, hi afegim consumibles i servei tècnic. Tu només poses el paper.",
      'Te instalamos un equipo multifunción A4 láser con escáner, sin permanencia ni costes de instalación. Por una pequeña cuota mensual con copias incluidas, añadimos consumibles y servicio técnico. Tú solo pones el papel.',
      'We install a laser A4 multifunction device with scanner, no lock-in and no install costs. For a small monthly fee with copies included, we add consumables and technical service. You just add the paper.'),
    features: [
      two('Sense permanència ni instal·lació', 'Sin permanencia ni instalación', 'No lock-in, no install fee'),
      two('Consumibles inclosos', 'Consumibles incluidos', 'Consumables included'),
      two('Servei tècnic inclòs', 'Servicio técnico incluido', 'Technical service included'),
      two('Des de 29,90 € / mes', 'Desde 29,90 € / mes', 'From €29.90 / month'),
    ],
  },
  {
    slug: 'garanties', cat: 'mant', icon: 'shield',
    title: two('Garanties', 'Garantías', 'Warranties'),
    tagline: two('Gestionem la garantia dels teus equips per fabricant.', 'Gestionamos la garantía de tus equipos por fabricante.', 'We manage your equipment warranties by manufacturer.'),
    intro: two(
      "Porta'ns el teu equip i ens encarreguem de tota la gestió de la garantia amb el fabricant (Acer, Asus, HP, Apple, Brother…), perquè tu no perdis temps ni productivitat.",
      'Tráenos tu equipo y nos encargamos de toda la gestión de la garantía con el fabricante (Acer, Asus, HP, Apple, Brother…), para que tú no pierdas tiempo ni productividad.',
      'Bring us your device and we handle the whole warranty process with the manufacturer (Acer, Asus, HP, Apple, Brother…), so you don’t lose time or productivity.'),
    features: [
      two('Gestió amb el fabricant', 'Gestión con el fabricante', 'Handled with the manufacturer'),
      two('Recollida i seguiment', 'Recogida y seguimiento', 'Pickup and tracking'),
      two('Equip de substitució si cal', 'Equipo de sustitución si hace falta', 'Replacement unit if needed'),
      two('Tota la gestió, sense que hi perdis temps', 'Toda la gestión, sin que pierdas tiempo', 'The whole process, without wasting your time'),
    ],
  },
  {
    slug: 'recuperacio-dades', cat: 'mant', icon: 'server',
    title: two('Recuperació de dades', 'Recuperación de datos', 'Data recovery'),
    tagline: two('Recuperem la informació de qualsevol dispositiu.', 'Recuperamos la información de cualquier dispositivo.', 'We recover data from any device.'),
    intro: two(
      "Recuperem dades en tot tipus de suports —disc dur, RAID, targetes, memòries, servidors, PC, Mac i portàtils— amb els protocols de seguretat més estrictes. Si no recuperem la informació, no pagues.",
      'Recuperamos datos en todo tipo de soportes —disco duro, RAID, tarjetas, memorias, servidores, PC, Mac y portátiles— con los protocolos de seguridad más estrictos. Si no recuperamos la información, no pagas.',
      'We recover data from all media —hard drives, RAID, cards, memory, servers, PC, Mac and laptops— with the strictest security protocols. If we don’t recover the data, you don’t pay.'),
    features: [
      two('Pressupostos totalment gratis', 'Presupuestos totalmente gratis', 'Completely free quotes'),
      two('Recollida a domicili', 'Recogida a domicilio', 'Pickup at your premises'),
      two('Discs, RAID, memòries i servidors', 'Discos, RAID, memorias y servidores', 'Disks, RAID, memory and servers'),
      two('Si no recuperem, no pagues', 'Si no recuperamos, no pagas', 'If we don’t recover, you don’t pay'),
    ],
  },
  // ---------- SOLUCIONS ----------
  {
    slug: 'programari-gestio', cat: 'sol', icon: 'layers',
    title: two('Programari de gestió (ERP)', 'Software de gestión (ERP)', 'Management software (ERP)'),
    tagline: two('GestioERP: facturació, comptabilitat, TPV i CRM.', 'GestioERP: facturación, contabilidad, TPV y CRM.', 'GestioERP: invoicing, accounting, POS and CRM.'),
    intro: two(
      'Implantem GestioERP i altres solucions de gestió: facturació, comptabilitat, TPV, magatzem i CRM en un sol sistema, al núvol i modular. Actives només el que fas servir.',
      'Implantamos GestioERP y otras soluciones de gestión: facturación, contabilidad, TPV, almacén y CRM en un solo sistema, en la nube y modular. Activas solo lo que usas.',
      'We deploy GestioERP and other management solutions: invoicing, accounting, POS, warehouse and CRM in a single, modular cloud system. Switch on only what you use.'),
    features: [
      two('Facturació i comptabilitat', 'Facturación y contabilidad', 'Invoicing and accounting'),
      two('TPV i magatzem', 'TPV y almacén', 'POS and warehouse'),
      two('CRM i control horari', 'CRM y control horario', 'CRM and time tracking'),
      two('Al núvol i modular', 'En la nube y modular', 'Cloud-based and modular'),
    ],
  },
  {
    slug: 'wifi-professional', cat: 'sol', icon: 'wifi',
    title: two('WiFi professional', 'WiFi profesional', 'Professional WiFi'),
    tagline: two('Cobertura, seguretat i estabilitat amb Ubiquiti UniFi.', 'Cobertura, seguridad y estabilidad con Ubiquiti UniFi.', 'Coverage, security and stability with Ubiquiti UniFi.'),
    intro: two(
      "Resolem els problemes de cobertura WiFi amb un estudi previ i els millors equips Ubiquiti UniFi: punts d'accés gestionables per a interior i exterior, ideals per a hotels, oficines i naus.",
      'Resolvemos los problemas de cobertura WiFi con un estudio previo y los mejores equipos Ubiquiti UniFi: puntos de acceso gestionables para interior y exterior, ideales para hoteles, oficinas y naves.',
      'We solve WiFi coverage problems with a prior survey and the best Ubiquiti UniFi gear: managed indoor/outdoor access points, ideal for hotels, offices and warehouses.'),
    features: [
      two('Estudi de cobertura previ', 'Estudio de cobertura previo', 'Prior coverage survey'),
      two('Ubiquiti UniFi interior i exterior', 'Ubiquiti UniFi interior y exterior', 'Ubiquiti UniFi indoor and outdoor'),
      two("Xarxa d'hostes amb portal captiu (hotels)", 'Red de invitados con portal cautivo (hoteles)', 'Guest network with captive portal (hotels)'),
      two('Gestió centralitzada i monitoratge', 'Gestión centralizada y monitorización', 'Centralised management and monitoring'),
    ],
  },
  {
    slug: 'vpn-ciberseguretat', cat: 'sol', icon: 'lock',
    title: two('VPN i ciberseguretat', 'VPN y ciberseguridad', 'VPN & cybersecurity'),
    tagline: two('Connexions xifrades, tallafocs i protecció davant amenaces.', 'Conexiones cifradas, cortafuegos y protección ante amenazas.', 'Encrypted connections, firewalls and threat protection.'),
    intro: two(
      "Protegim la teva empresa: connexions VPN xifrades per teletreballar amb seguretat, tallafocs perimetrals, segmentació de xarxa i protecció contra amenaces i ransomware.",
      'Protegemos tu empresa: conexiones VPN cifradas para teletrabajar con seguridad, cortafuegos perimetrales, segmentación de red y protección contra amenazas y ransomware.',
      'We protect your company: encrypted VPN connections for secure remote work, perimeter firewalls, network segmentation and protection against threats and ransomware.'),
    features: [
      two('VPN xifrada per a teletreball', 'VPN cifrada para teletrabajo', 'Encrypted VPN for remote work'),
      two('Tallafocs i segmentació', 'Cortafuegos y segmentación', 'Firewall and segmentation'),
      two('Protecció davant ransomware', 'Protección ante ransomware', 'Ransomware protection'),
      two('Auditoria i bones pràctiques', 'Auditoría y buenas prácticas', 'Audit and best practices'),
    ],
  },
  {
    slug: 'servidors', cat: 'sol', icon: 'server',
    title: two('Servidors', 'Servidores', 'Servers'),
    tagline: two('Físics, virtualitzats i cloud, amb migració garantida.', 'Físicos, virtualizados y cloud, con migración garantizada.', 'Physical, virtualised and cloud, with guaranteed migration.'),
    intro: two(
      "Dissenyem, instal·lem i mantenim la infraestructura de servidors de la teva empresa, adaptada a la teva càrrega de treball real. Treballem amb servidors físics de marques líders, virtualització (VMware, Hyper-V i Proxmox) i servidors al núvol, sempre amb còpies de seguretat, monitoratge 24/7 i plans de recuperació davant desastres. Fem l'estudi previ, dimensionem l'equip, el configurem i te'l migrem sense pèrdua de dades ni aturades del negoci.",
      'Diseñamos, instalamos y mantenemos la infraestructura de servidores de tu empresa, adaptada a tu carga de trabajo real. Trabajamos con servidores físicos de marcas líderes, virtualización (VMware, Hyper-V y Proxmox) y servidores en la nube, siempre con copias de seguridad, monitorización 24/7 y planes de recuperación ante desastres. Hacemos el estudio previo, dimensionamos el equipo, lo configuramos y te lo migramos sin pérdida de datos ni paradas del negocio.',
      'We design, install and maintain your company’s server infrastructure, tailored to your real workload. We work with physical servers from leading brands, virtualisation (VMware, Hyper-V and Proxmox) and cloud servers, always with backups, 24/7 monitoring and disaster-recovery plans. We run the survey, size the hardware, configure it and migrate it with no data loss and no business downtime.'),
    features: [
      two('Servidors físics de marques líders', 'Servidores físicos de marcas líderes', 'Physical servers from leading brands'),
      two('Virtualització VMware, Hyper-V i Proxmox', 'Virtualización VMware, Hyper-V y Proxmox', 'Virtualisation: VMware, Hyper-V and Proxmox'),
      two('Alta disponibilitat i redundància', 'Alta disponibilidad y redundancia', 'High availability and redundancy'),
      two('Còpies de seguretat i pla de recuperació', 'Copias de seguridad y plan de recuperación', 'Backups and disaster-recovery plan'),
      two('Monitoratge i manteniment 24/7', 'Monitorización y mantenimiento 24/7', '24/7 monitoring and maintenance'),
      two('Migració sense pèrdua de dades', 'Migración sin pérdida de datos', 'Data-loss-free migration'),
    ],
  },
  {
    slug: 'impressores-3d', cat: 'sol', icon: 'printer',
    title: two('Impressores i 3D', 'Impresoras y 3D', 'Printers & 3D'),
    tagline: two("Equips d'impressió i productes 3D per a la teva empresa.", 'Equipos de impresión y productos 3D para tu empresa.', 'Printing equipment and 3D products for your company.'),
    intro: two(
      "Et proveïm i mantenim equips d'impressió multifunció, gran format i impressió 3D, amb consumibles i servei tècnic, per a cada necessitat de la teva empresa.",
      'Te proveemos y mantenemos equipos de impresión multifunción, gran formato e impresión 3D, con consumibles y servicio técnico, para cada necesidad de tu empresa.',
      'We supply and maintain multifunction, large-format and 3D printing equipment, with consumables and technical service, for every need in your company.'),
    features: [
      two('Multifunció i gran format', 'Multifunción y gran formato', 'Multifunction and large format'),
      two('Impressió 3D', 'Impresión 3D', '3D printing'),
      two('Consumibles i recanvis', 'Consumibles y recambios', 'Consumables and spare parts'),
      two('Lloguer amb cost per còpia', 'Alquiler con coste por copia', 'Rental with cost per copy'),
    ],
  },
  {
    slug: 'productes-equips', cat: 'sol', icon: 'shopping-cart',
    title: two('Productes i equips', 'Productos y equipos', 'Products & equipment'),
    tagline: two('Els millors productes i equips informàtics per a empreses.', 'Los mejores productos y equipos informáticos para empresas.', 'The best IT products and equipment for companies.'),
    intro: two(
      'Seleccionem i venem els millors equips i productes informàtics per a empreses: ordinadors, portàtils, xarxa, emmagatzematge i perifèrics, amb assessorament i garantia.',
      'Seleccionamos y vendemos los mejores equipos y productos informáticos para empresas: ordenadores, portátiles, red, almacenamiento y periféricos, con asesoramiento y garantía.',
      'We select and sell the best IT equipment and products for companies: computers, laptops, networking, storage and peripherals, with advice and warranty.'),
    features: [
      two('Ordinadors i portàtils', 'Ordenadores y portátiles', 'Computers and laptops'),
      two('Xarxa i emmagatzematge', 'Red y almacenamiento', 'Networking and storage'),
      two('Assessorament professional', 'Asesoramiento profesional', 'Professional advice'),
      two('Garantia i servei postvenda', 'Garantía y servicio posventa', 'Warranty and after-sales service'),
    ],
  },
  // ---------- NÚVOL / CLOUD ----------
  {
    slug: 'telefonia-voip', cat: 'nuvol', icon: 'phone',
    title: two('Telefonia VoIP', 'Telefonía VoIP', 'VoIP telephony'),
    tagline: two('Centraleta al núvol amb tarifes reduïdes i sense establiment.', 'Centralita en la nube con tarifas reducidas y sin establecimiento.', 'Cloud PBX with reduced rates and no call setup fee.'),
    intro: two(
      "Substituïm la teva centraleta física per una centraleta virtual al núvol, sense inversió inicial ni manteniment de maquinari. Tens tarifes reduïdes i sense establiment de trucada, línies i extensions il·limitades, i portes les extensions al mòbil o a l'ordinador per teletreballar des de qualsevol lloc. Ho gestiones tot des del navegador: desviaments, horaris, bústies de veu, cues d'espera, locucions de benvinguda (IVR), gravació de trucades i estadístiques. Conservem el teu número i, si vols, integrem la telefonia amb el teu CRM o GestioERP perquè la fitxa del client aparegui en despenjar.",
      'Sustituimos tu centralita física por una centralita virtual en la nube, sin inversión inicial ni mantenimiento de hardware. Tienes tarifas reducidas y sin establecimiento de llamada, líneas y extensiones ilimitadas, y llevas las extensiones al móvil o al ordenador para teletrabajar desde cualquier lugar. Lo gestionas todo desde el navegador: desvíos, horarios, buzones de voz, colas de espera, locuciones de bienvenida (IVR), grabación de llamadas y estadísticas. Conservamos tu número y, si quieres, integramos la telefonía con tu CRM o GestioERP para que la ficha del cliente aparezca al descolgar.',
      'We replace your physical PBX with a virtual cloud PBX, with no upfront investment or hardware maintenance. You get reduced rates with no call-setup fee, unlimited lines and extensions, and you take your extensions to your mobile or computer to work from anywhere. You manage everything from the browser: call forwarding, schedules, voicemail, waiting queues, welcome messages (IVR), call recording and stats. We keep your number and, if you want, we integrate telephony with your CRM or GestioERP so the customer record pops up when you answer.'),
    features: [
      two('Centraleta virtual al núvol, sense maquinari', 'Centralita virtual en la nube, sin hardware', 'Virtual cloud PBX, no hardware'),
      two('Tarifes reduïdes i sense establiment', 'Tarifas reducidas y sin establecimiento', 'Reduced rates, no setup fee'),
      two('Extensions al mòbil i a l\'ordinador (teletreball)', 'Extensiones en móvil y ordenador (teletrabajo)', 'Extensions on mobile and desktop (remote work)'),
      two('IVR, cues, bústies de veu i horaris', 'IVR, colas, buzones de voz y horarios', 'IVR, queues, voicemail and schedules'),
      two('Gravació de trucades i estadístiques', 'Grabación de llamadas y estadísticas', 'Call recording and statistics'),
      two('Integració amb CRM / GestioERP i el teu número', 'Integración con CRM / GestioERP y tu número', 'CRM / GestioERP integration, keep your number'),
    ],
  },
  {
    slug: 'backup-online', cat: 'nuvol', icon: 'cloud',
    title: two('Backup online', 'Backup online', 'Online backup'),
    tagline: two('Còpies de seguretat segures amb custòdia de dades a Espanya.', 'Copias de seguridad seguras con custodia de datos en España.', 'Secure backups with data custody in Spain.'),
    intro: two(
      "Protegeix la teva informació amb còpies de seguretat automàtiques i xifrades al núvol, amb custòdia de dades a Espanya i restauració ràpida davant qualsevol incident.",
      'Protege tu información con copias de seguridad automáticas y cifradas en la nube, con custodia de datos en España y restauración rápida ante cualquier incidente.',
      'Protect your information with automatic, encrypted cloud backups, with data custody in Spain and fast restore for any incident.'),
    features: [
      two('Còpies automàtiques i xifrades', 'Copias automáticas y cifradas', 'Automatic, encrypted backups'),
      two('Custòdia de dades a Espanya', 'Custodia de datos en España', 'Data custody in Spain'),
      two('Restauració ràpida', 'Restauración rápida', 'Fast restore'),
      two('Monitoratge i alertes', 'Monitorización y alertas', 'Monitoring and alerts'),
    ],
  },
  {
    slug: 'office-365', cat: 'nuvol', icon: 'mail',
    title: two('Office 365 i Google', 'Office 365 y Google', 'Office 365 & Google'),
    tagline: two('Correu Exchange, ofimàtica i col·laboració professional.', 'Correo Exchange, ofimática y colaboración profesional.', 'Exchange email, office suite and professional collaboration.'),
    intro: two(
      "Migrem el teu correu a Microsoft 365 o Google Workspace: correu professional Exchange, ofimàtica al núvol i eines de col·laboració, amb configuració, migració i suport.",
      'Migramos tu correo a Microsoft 365 o Google Workspace: correo profesional Exchange, ofimática en la nube y herramientas de colaboración, con configuración, migración y soporte.',
      'We migrate your email to Microsoft 365 or Google Workspace: professional Exchange email, cloud office suite and collaboration tools, with setup, migration and support.'),
    features: [
      two('Correu professional Exchange', 'Correo profesional Exchange', 'Professional Exchange email'),
      two('Ofimàtica al núvol', 'Ofimática en la nube', 'Cloud office suite'),
      two('Migració sense pèrdues', 'Migración sin pérdidas', 'Loss-free migration'),
      two('Suport i formació', 'Soporte y formación', 'Support and training'),
    ],
  },
  {
    slug: 'dropbox-business', cat: 'nuvol', icon: 'folder',
    title: two('Dropbox Business', 'Dropbox Business', 'Dropbox Business'),
    tagline: two("Emmagatzematge i ús compartit d'arxius segur per a l'empresa.", 'Almacenamiento y uso compartido de archivos seguro para la empresa.', 'Secure file storage and sharing for your company.'),
    intro: two(
      "Centralitza els arxius de la teva empresa amb Dropbox Business: emmagatzematge segur, sincronització, control de permisos i recuperació de versions, accessible des de qualsevol lloc.",
      'Centraliza los archivos de tu empresa con Dropbox Business: almacenamiento seguro, sincronización, control de permisos y recuperación de versiones, accesible desde cualquier lugar.',
      'Centralise your company files with Dropbox Business: secure storage, sync, permission control and version recovery, accessible from anywhere.'),
    features: [
      two('Emmagatzematge segur', 'Almacenamiento seguro', 'Secure storage'),
      two('Sincronització i accés remot', 'Sincronización y acceso remoto', 'Sync and remote access'),
      two('Control de permisos', 'Control de permisos', 'Permission control'),
      two('Recuperació de versions', 'Recuperación de versiones', 'Version recovery'),
    ],
  },
  {
    slug: 'antivirus', cat: 'nuvol', icon: 'shield',
    title: two('Antivirus', 'Antivirus', 'Antivirus'),
    tagline: two('Protecció professional per a tots els dispositius.', 'Protección profesional para todos los dispositivos.', 'Professional protection for all devices.'),
    intro: two(
      "Protegim tots els dispositius de la teva empresa amb antivirus professional gestionat: protecció en temps real, consola centralitzada i actualitzacions automàtiques.",
      'Protegemos todos los dispositivos de tu empresa con antivirus profesional gestionado: protección en tiempo real, consola centralizada y actualizaciones automáticas.',
      'We protect all your company devices with managed professional antivirus: real-time protection, a centralised console and automatic updates.'),
    features: [
      two('Protecció en temps real', 'Protección en tiempo real', 'Real-time protection'),
      two('Consola centralitzada', 'Consola centralizada', 'Centralised console'),
      two('Actualitzacions automàtiques', 'Actualizaciones automáticas', 'Automatic updates'),
      two('Per a PC, Mac i mòbils', 'Para PC, Mac y móviles', 'For PC, Mac and mobile'),
    ],
  },
];

export const itemsByCat = (c: CatKey): Item[] => items.filter((i) => i.cat === c);
export const findItem = (slug: string): Item | undefined => items.find((i) => i.slug === slug);
