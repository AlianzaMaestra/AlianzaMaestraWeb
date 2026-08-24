# Alianza Maestra Group — Web

Sitio corporativo de Alianza Maestra Group, migrado del prototipo HTML a **Next.js 14 (App Router)** con foco en **SEO** e internacionalización real (ES/EN).

## Por qué Next.js aquí

- **Renderizado en servidor / estático**: todo el contenido llega en el HTML (no depende de JS), indexable por buscadores.
- **Rutas localizadas reales**: `/es`, `/en`, `/es/sector/[id]`, `/es/red`… en lugar del enrutado por hash del prototipo.
- **Metadata por página e idioma**: `<title>`, description, canonical, `hreflang`, Open Graph y Twitter Cards.
- **`sitemap.xml` y `robots.txt`** generados automáticamente.
- **Fuentes auto-hospedadas** con `next/font` (Fraunces, Hanken Grotesk, Spline Sans Mono) — sin peticiones bloqueantes a Google Fonts.

## Estructura

```
app/
  layout.tsx            Layout raíz (passthrough)
  page.tsx              Redirige "/" → "/es"
  icon.svg              Favicon
  sitemap.ts robots.ts  SEO técnico
  not-found.tsx         404
  [locale]/
    layout.tsx          <html lang>, Header, Footer, metadata base
    page.tsx            Home (hero, cómo, sectores, confianza, red, únete, contacto)
    red/page.tsx        Red de colaboradores
    sector/[id]/page.tsx Detalle de sector
components/             Header, Footer, LangSwitcher, ContactSection, HeroArt, CollabCard, RevealObserver…
lib/                    config, i18n (diccionarios ES/EN), sectors (datos), icons, seo
```

## Desarrollo

```bash
npm install
npm run dev      # http://localhost:3000  → redirige a /es
npm run build    # build de producción
npm start        # sirve el build
```

## Configuración

- Dominio de producción: edita `SITE_URL` en `lib/config.ts` (afecta a canonical, hreflang y sitemap).
- Contacto (WhatsApp/email): `CONTACT` en `lib/config.ts`.
- Mostrar nombres de colaboradores: flag `SHOW_COLLAB_NAMES` en `lib/sectors.ts`.
- Textos: diccionarios en `lib/i18n.ts`.
