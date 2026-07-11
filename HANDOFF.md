# Web Slave Computers (slave.net) — Guía de desarrollo

Guía para que otra persona pueda continuar el desarrollo de la web.
Proyecto: `E:\ServBay\www\salve web`  ·  Última actualización: 11/07/2026.

---

## 1. Qué es

Web corporativa **trilingüe (CA / ES / EN)** de **Slave Computers, S.L.** (grupo SIAM Cloud, creadores de Fitoware).
Es un sitio **100 % estático** hecho con **Astro 5 + Tailwind CSS 4**: se compila a HTML y se sube por FTP. No hay backend ni base de datos.

- Dominio: **https://slave.net**  ·  Hosting: **dinahosting** (FTP)
- Repo GitHub: **https://github.com/carlespont-lgtm/slaveweb**
- Idiomas: **catalán** (por defecto, sin prefijo), `/es/` y `/en/`

---

## 2. Puesta en marcha

Requiere **Node 18+** (probado con Node 23).

```bash
npm install       # instalar dependencias
npm run dev       # servidor de desarrollo (http://localhost:4321)
npm run build     # compila a /dist  ← ESTO es lo que se sube
npm run preview   # previsualiza el build
```

**Publicar:** `npm run build` y subir **todo el contenido de `dist/`** a la raíz del dominio en dinahosting (FTP). Al ser estático, funciona en cualquier hosting Apache sin configuración.

---

## 3. Estructura

```
salve web/
├─ astro.config.mjs        Config Astro (site, i18n CA/ES/EN, Tailwind)
├─ package.json
├─ public/                 Servido tal cual
│  ├─ brand/               Logos (slave-logo.png, siamcloud-mark.svg,
│  │                       gestioerp-mark.svg, fitoware-mark.svg, ionnavis.svg),
│  │                       og.png (imagen social 1200×630)
│  ├─ mockups/             Capturas SVG de producto (localizadas -ca/-en)
│  ├─ video/               fitoware-hero.mp4 (vídeo de fondo de la pág. Fitoware)
│  ├─ favicon.svg · robots.txt
└─ src/
   ├─ layouts/BaseLayout.astro   <head> SEO + barra de scroll + scripts globales
   ├─ components/
   │  ├─ Header.astro      Menú desktop (megamenús con ilustraciones) + móvil + BUSCADOR
   │  ├─ Footer.astro · LangSwitcher.astro · Logo.astro · Icon.astro
   │  ├─ Illustration.astro    ⭐ Ilustraciones SVG de colores (escenas + tinte por color)
   │  ├─ ServiceMockup.astro    Mockup "ventana de app" (hero de overviews)
   │  ├─ Partners.astro · WhatsAppWidget.astro · CookieConsent.astro · Locations.astro
   │  ├─ CardMockup.astro       (glassmorphism; ya NO se usa, se sustituyó por Illustration)
   │  └─ pages/            Un componente por tipo de página (ver §4)
   ├─ data/
   │  ├─ services.ts       ⭐ TODOS los servicios (trilingüe) + colores + ilustraciones
   │  └─ news.ts           ⭐ TODAS las noticias (trilingüe) + ilustraciones
   ├─ i18n/
   │  ├─ utils.ts          Rutas localizadas, hreflang, useTranslations
   │  ├─ ca.json ⭐ referencia · es.json · en.json  (mismas claves, mismo orden)
   ├─ lib/
   │  ├─ pages.ts          Generador de sitemaps (prioridades, changefreq, lastmod)
   │  └─ search.ts         Generador del índice de búsqueda
   ├─ pages/               Rutas Astro (ver §4)
   └─ styles/global.css    Tokens de color de marca + animaciones/efectos
```

---

## 4. Rutas e i18n

El **catalán no lleva prefijo**; ES y EN sí. Astro genera URLs por carpeta (acaban en `/`).

| Página | CA | ES | EN | Componente |
|---|---|---|---|---|
| Inicio | `/` | `/es/` | `/en/` | `HomePage` |
| Servicios | `/serveis/` | `/es/servicios/` | `/en/services/` | `CategoryOverview` |
| Mantenimiento | `/manteniment/` | `/es/mantenimiento/` | `/en/maintenance/` | `CategoryOverview` |
| Soluciones | `/solucions/` | `/es/soluciones/` | `/en/solutions/` | `CategoryOverview` |
| Nube | `/nuvol/` | `/es/nube/` | `/en/cloud/` | `CategoryOverview` |
| Noticias | `/noticies/` | `/es/noticias/` | `/en/news/` | `NewsPage` |
| Fitoware | `/fitoware/` | `/es/fitoware/` | `/en/fitoware/` | `ProductPage` |
| Contacto | `/contacte/` | `/es/contacto/` | `/en/contact/` | `ContactPage` |
| Soporte / Legal / Cookies | … | … | … | `SupportPage` / `LegalPage` / `CookiesPage` |

- Detalle de servicio: `/servei/[slug]/` (ES `/es/servicio/…`, EN `/en/service/…`) → `ServiceDetail`
- Detalle de noticia: `/noticies/[slug]/` (ES `/es/noticias/…`, EN `/en/news/…`) → `NewsPost`

Las traducciones de los **segmentos de URL** están en `src/i18n/utils.ts` → `routeSegments`.

---

## 5. Cómo hacer los cambios más habituales

### Añadir / editar un SERVICIO
Editar **`src/data/services.ts`**, array `items`. Cada item:
```ts
{
  slug: 'mi-servicio', cat: 'serv' | 'mant' | 'sol' | 'nuvol', icon: 'wifi',
  title:   two('CA', 'ES', 'EN'),
  tagline: two('CA', 'ES', 'EN'),
  intro:   two('CA', 'ES', 'EN'),
  features: [ two(...), two(...) ],
  body?:   [ two(...), two(...) ],   // párrafos de texto explicativo largo (opcional)
}
```
El helper `two(ca, es, en)` crea el objeto trilingüe. La ficha de detalle y el listado se generan solos.
- **Color** del servicio: mapa `slugAccent` (mismo archivo). Paleta en `accentColors`.
- **Ilustración** (imagen de la card): mapa `serviceIllo` → función `svcIllo(slug)`. Escenas disponibles en `Illustration.astro` (ver §6). Dentro de una misma categoría, elige escenas distintas para que las cards no parezcan iguales.

### Añadir / editar una NOTICIA
Editar **`src/data/news.ts`**, array `posts`. Campos: `slug`, `date` (ISO), `tag`, `title`, `excerpt`, `body[]`, y `link?` (con `logo?` opcional para mostrar un icono en el botón). La ilustración y su color por noticia están en `postVisual` → `illoOf(slug)` / `newsAccent(slug)`.

### Añadir un TEXTO / traducción
Añadir la clave en **`ca.json`** (referencia) y **la misma clave** en `es.json` y `en.json`, en el mismo orden. Uso: `t('mi.clave')` en los `.astro`.

### Menú (cabecera)
**`src/components/Header.astro`**. Megamenús desktop (ilustraciones por servicio) y acordeones móvil se generan desde el array `hubs` y `services.ts`. Buscador incluido (§7).

### Iconos de trazo
**`src/components/Icon.astro`** — diccionario `nombre → path SVG` (estilo Lucide, https://lucide.dev). Añade el `path` y usa `<Icon name="…" />`.

---

## 6. Ilustraciones (`Illustration.astro`)

Son mini-mockups SVG planos, **sin texto** (válidos para todos los idiomas). Se usan como cabecera de cards, en el menú y en las noticias.

- **Escenas** disponibles (prop `name`): `dashboard, window, wifi, security, server, cloud, phone, mail, files, pos, printer, support, clock, rocket, box, team, connect`.
- **Tinte de color** (prop `accent`): recibe `{from, to, soft, text}` y tinta el fondo y las manchas con el color del servicio, de modo que **cada card sea de un color distinto**. Sin `accent` usa el verde de marca por defecto.

```astro
<Illustration name={svcIllo(item.slug)} accent={accentOf(item.slug)} />
```

Para crear una escena nueva: añade una entrada al objeto `scenes` con SVG dentro del `viewBox="0 0 420 320"`.

---

## 7. Funcionalidades ya implementadas

- **Buscador global** (lupa en la cabecera): modal client-side, atajo `Ctrl/Cmd+K`, `Esc` cierra, flechas + Enter. Insensible a acentos y multi-palabra. Índice generado en build: `/search-ca|es|en.json` (`src/lib/search.ts`). **Se regenera solo al hacer `npm run build`.**
- **Transiciones de página** (View Transitions API vía `ClientRouter`): fundido + deslizamiento suave al navegar. **Todos los scripts (menú, buscador, reveals, barra de scroll) están preparados para sobrevivir a la navegación** (escuchan `astro:page-load` o se enlazan a nivel de `document`). Si añades un script nuevo, hazlo igual.
- **Barra de progreso de scroll** (arriba, gradiente verde→dorado) — en `BaseLayout.astro`.
- **Menús responsive**: megamenús centrados que no se desbordan; acordeones (`<details>`) en móvil.
- **SEO** (en `BaseLayout.astro`): title, description, keywords, canonical, hreflang (ca/es/en + x-default), Open Graph + `og.png`, Twitter Card, JSON-LD de organización. Prop `noindex` para excluir páginas.
- **Sitemaps** (`src/lib/pages.ts`): índice `/sitemap.xml` + uno por idioma con hreflang, **prioridades, changefreq y lastmod**. `robots.txt` apunta al índice.
- **WhatsApp flotante, consentimiento de cookies, reveals al hacer scroll, contadores animados**.

### Caso especial: Fitoware
El servicio **fitoware-vivers** y la noticia **fitoware-passaport** NO llevan a su ficha, sino a la página de producto **`/fitoware`** (que tiene el vídeo). Esas dos páginas de ficha están **excluidas del sitemap** y marcadas **`noindex`** para evitar contenido duplicado. Si cambias esto, revisa: `Header.astro` (`itemHref`/`newsHref`), `HomePage`, `CategoryOverview`, `NewsPage`, `lib/pages.ts` (`REDIRECTED_*`), `lib/search.ts` y las rutas `[slug].astro`.

---

## 8. Reglas de estilo del proyecto

- **Textos de interfaz siempre en los 3 idiomas** (toda clave nueva en ca/es/en).
- **Colores de marca**: verde (`brand-*`) + azul marino (`ink-*`) + dorado (`gold-300/400/500`), definidos en `src/styles/global.css`. **No inventar colores nuevos.**
- Usar **clases de Tailwind**; evitar CSS propio salvo necesidad real.
- Referencia visual: **gestioerp.com** (verde corporativo). El estilo de menús está inspirado en la web de **Pontsoft**.

---

## 9. Datos legales / de contacto (aviso legal)

En `src/components/pages/LegalPage.astro` → `legalData`:
- Razón social: **Slave Computers, S.L.**
- CIF: **B43428010**
- Domicilio: **Botarell (43772), Tarragona**
- Web: **slave.net**  ·  Correo: **lluis@slave.net**  ·  Tel: **+34 722 175 283**

> Teléfono del WhatsApp flotante: en `src/components/WhatsAppWidget.astro` (`34722175283`).

---

## 10. Publicar / desplegar

1. `npm run build`
2. Subir el contenido de **`dist/`** a la raíz del dominio en **dinahosting** (FTP).
3. Dar de alta `https://slave.net/sitemap.xml` en **Google Search Console**.

> `@astrojs/sitemap` sigue en `package.json` pero **ya no se usa** (los sitemaps se generan a mano en `src/lib/pages.ts` para tener hreflang/lastmod). Se puede quitar sin efecto.

---

## 11. Git

- Rama principal: `main`. Repo: github.com/carlespont-lgtm/slaveweb.
- Flujo: editar → `npm run build` (verificar) → commit → push.
- El repo **no** incluye `node_modules/` ni `dist/` (se regeneran). Los vídeos `.mov` originales están en `.gitignore` (el fondo usa el `.mp4` de `public/video/`).

---

## 12. Consejo para empezar

Lee primero **`src/data/services.ts`** y **`src/data/news.ts`**: casi todo el contenido de la web sale de ahí. Cambiar un texto, un color o una imagen de un servicio es editar una línea en esos archivos. Para el diseño, mira `Header.astro`, `pages/HomePage.astro` y `pages/ServiceDetail.astro`.
