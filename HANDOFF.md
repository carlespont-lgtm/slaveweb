# Web Slave Computers (slave.net) — Guía de traspaso

Documento para que otro compañero pueda continuar el proyecto. Última actualización: 11/07/2026.

---

## 1. Qué es

Web corporativa **trilingüe (CA / ES / EN)** de **Slave Computers, S.L.** (grupo SIAM Cloud, creadores de Fitoware).
Sitio **100% estático** hecho con **Astro 5 + Tailwind CSS 4**. No hay backend ni base de datos: se compila a HTML y se sube por FTP.

- Dominio: **https://slave.net** (hosting actual: **dinahosting**)
- Repo GitHub: **https://github.com/carlespont-lgtm/slaveweb**
- Idiomas: **catalán (por defecto, sin prefijo)**, `/es/` y `/en/`

---

## 2. Requisitos y puesta en marcha

```bash
# Node 18+ (probado con Node 23)
npm install          # instalar dependencias
npm run dev          # servidor de desarrollo (http://localhost:4321)
npm run build        # compilar a /dist  ← ESTO es lo que se sube
npm run preview      # previsualizar el build
```

**Para publicar:** ejecutar `npm run build` y subir **todo el contenido de la carpeta `dist/`** a la raíz del dominio en dinahosting (por FTP). Al ser estático, funciona en cualquier hosting Apache sin configuración especial.

---

## 3. Estructura del proyecto

```
salve web/
├─ astro.config.mjs        Configuración Astro (site, i18n CA/ES/EN, Tailwind)
├─ package.json
├─ public/                 Archivos servidos tal cual
│  ├─ brand/               Logos (slave-logo.png), og.png (imagen social 1200×630)
│  ├─ mockups/             Capturas SVG de producto (localizadas -ca/-en)
│  ├─ favicon.svg
│  └─ robots.txt           Apunta a /sitemap.xml
└─ src/
   ├─ layouts/
   │  └─ BaseLayout.astro  <head> con SEO, OG, Twitter, hreflang, JSON-LD
   ├─ components/
   │  ├─ Header.astro      Menú + megamenús desktop + acordeones móvil + BUSCADOR
   │  ├─ Footer.astro
   │  ├─ Icon.astro        Iconos SVG estilo Lucide (por nombre)
   │  ├─ Logo.astro
   │  ├─ LangSwitcher.astro
   │  ├─ ServiceMockup.astro  Mockup generado (se usa en fichas, ya NO en el menú)
   │  └─ pages/            Componentes de página (HomePage, ProductPage, etc.)
   ├─ data/
   │  ├─ services.ts       ⭐ TODOS los servicios/soluciones (trilingüe)
   │  └─ news.ts           ⭐ TODAS las noticias (trilingüe)
   ├─ i18n/
   │  ├─ utils.ts          Rutas localizadas, hreflang, useTranslations
   │  ├─ ca.json ⭐ referencia principal
   │  ├─ es.json / en.json Traducciones (mismas claves que ca.json)
   ├─ lib/
   │  ├─ pages.ts          Generador de sitemaps (índice + por idioma)
   │  └─ search.ts         Generador del índice de búsqueda
   ├─ pages/               Rutas (ver punto 4)
   └─ styles/global.css    Estilos globales + tokens de color de marca
```

---

## 4. Rutas (i18n)

Astro genera las URLs por carpeta. El **catalán no lleva prefijo**; ES y EN sí.

| Página | CA | ES | EN |
|---|---|---|---|
| Inicio | `/` | `/es/` | `/en/` |
| Servicios | `/serveis/` | `/es/servicios/` | `/en/services/` |
| Mantenimiento | `/manteniment/` | `/es/mantenimiento/` | `/en/maintenance/` |
| Soluciones | `/solucions/` | `/es/soluciones/` | `/en/solutions/` |
| Nube | `/nuvol/` | `/es/nube/` | `/en/cloud/` |
| Noticias | `/noticies/` | `/es/noticias/` | `/en/news/` |
| Fitoware | `/fitoware/` | `/es/fitoware/` | `/en/fitoware/` |
| Contacto | `/contacte/` | `/es/contacto/` | `/en/contact/` |

- Detalle de servicio: `/servei/[slug]/` (ES `/es/servicio/…`, EN `/en/service/…`)
- Detalle de noticia: `/noticies/[slug]/` (ES `/es/noticias/…`, EN `/en/news/…`)

Las traducciones de los segmentos de URL están en **`src/i18n/utils.ts` → `routeSegments`**.

---

## 5. Cómo hacer los cambios más habituales

### Añadir / editar un servicio o solución
Editar **`src/data/services.ts`**. Cada item tiene `slug`, `cat` (`serv`|`mant`|`sol`|`nuvol`), `icon`, y textos trilingües (`title`, `tagline`, `intro`, `features`). El helper `two(ca, es, en)` crea el objeto de idiomas. La ficha de detalle y el listado se generan solos.
- Color del item: mapa `slugAccent` en el mismo archivo.

### Añadir / editar una noticia
Editar **`src/data/news.ts`**. Cada `Post` tiene `slug`, `date` (ISO), `tag`, `title`, `excerpt`, `body[]` y `link` opcional, todo trilingüe. Las 5 últimas salen en el menú. La miniatura del menú (icono + degradado) está en `postVisual`.

### Añadir un texto / traducción
Añadir la clave en **`ca.json`** (referencia) y **la misma clave** en `es.json` y `en.json`, en el mismo orden. Uso: `t('mi.clave')` en los `.astro`.

### Cambiar el menú (cabecera)
**`src/components/Header.astro`**. Los megamenús desktop y los acordeones de móvil se generan desde el array `hubs` y desde `services.ts`. Las imágenes grandes de los desplegables se mapean en `hubs[].mock` (archivos de `public/mockups/`).

### Iconos
**`src/components/Icon.astro`** — es un diccionario `nombre → path SVG`. Para un icono nuevo, añadir el `path` de Lucide (https://lucide.dev) y usar `<Icon name="…" />`.

---

## 6. Funcionalidades ya implementadas

- **Buscador global** (lupa en la cabecera): modal client-side, atajo `Ctrl/Cmd+K`, `Esc` cierra, flechas + Enter. Busca en páginas, servicios y noticias, es **insensible a acentos** y multi-palabra.
  - Índice generado en build: `/search-ca.json`, `/search-es.json`, `/search-en.json` (ver `src/lib/search.ts`). **Si añades contenido, el índice se regenera solo al hacer `npm run build`.**
- **Menús responsive**: megamenús con imagen en desktop; acordeones (`<details>`) en móvil. No se desbordan (`max-w-[calc(100vw-2rem)]`).
- **SEO completo** (en `BaseLayout.astro`): title, description, keywords, canonical, hreflang (CA/ES/EN + x-default), Open Graph + imagen `og.png`, Twitter Card, JSON-LD de organización.
- **Sitemaps**: `/sitemap.xml` (índice) + `/sitemap-ca.xml`, `-es`, `-en` con hreflang (ver `src/lib/pages.ts`). `robots.txt` apunta al índice.
- **WhatsApp flotante, cookies (consentimiento), scroll-to-top**.

---

## 7. Reglas de estilo del proyecto

- **Comunicación y textos de interfaz: siempre en castellano/catalán** según corresponda; toda clave nueva en los 3 idiomas.
- **Colores de marca**: verde (`brand-*`) + azul marino (`ink-*`) + toques dorados (`gold-300/400/500`). Definidos en `src/styles/global.css`. **No inventar colores nuevos.**
- Usar **clases de Tailwind**; evitar CSS propio salvo necesidad real.
- Estilo visual de referencia: **gestioerp.com** (verde corporativo).

---

## 8. Publicar y despliegue

1. `npm run build`
2. Subir el contenido de **`dist/`** a la raíz del dominio en **dinahosting** (FTP).
3. Tras publicar, dar de alta `https://slave.net/sitemap.xml` en **Google Search Console**.

> Nota: `@astrojs/sitemap` sigue en `package.json` pero **ya no se usa** (los sitemaps se generan a mano en `src/lib/pages.ts` para tener hreflang por URL). Se puede eliminar de las dependencias sin efecto.

---

## 9. Estado / git

- Rama principal: `main`. Todo commiteado y pusheado a GitHub.
- Flujo: editar → `npm run build` para verificar → commit → push.
- El repositorio **no** incluye `node_modules/` ni `dist/` (se regeneran).
