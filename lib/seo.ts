import type { Metadata } from "next";
import { LOCALES, SITE_URL, type Locale } from "./config";

const OG_LOCALE: Record<Locale, string> = { es: "es_ES", en: "en_US" };

// Construye metadata con canonical + hreflang para cada idioma.
// `subpath` es la ruta SIN el segmento de idioma (ej. "" para la home, "/red", "/sector/vivienda").
export function pageMetadata({
  locale,
  subpath = "",
  title,
  description,
}: {
  locale: Locale;
  subpath?: string;
  title: string;
  description: string;
}): Metadata {
  const canonical = `/${locale}${subpath}`;
  const languages: Record<string, string> = {};
  for (const l of LOCALES) languages[l] = `/${l}${subpath}`;
  languages["x-default"] = `/es${subpath}`;

  // Tarjeta Open Graph de marca (generada en app/[locale]/opengraph-image.tsx).
  // La referenciamos explícitamente para que también la hereden sector/red,
  // cuyo openGraph propio reemplazaría la imagen inyectada por el layout.
  const ogImage = { url: `/${locale}/opengraph-image`, width: 1200, height: 630, alt: "Alianza Maestra Group" };

  return {
    title,
    description,
    alternates: {
      canonical,
      languages,
    },
    openGraph: {
      type: "website",
      siteName: "Alianza Maestra Group",
      locale: OG_LOCALE[locale],
      url: `${SITE_URL}${canonical}`,
      title,
      description,
      images: [ogImage],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage.url],
    },
  };
}
