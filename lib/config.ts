// Configuración central del sitio (SEO, contacto, hubs).
// Cambia SITE_URL por el dominio real en producción.
export const SITE_URL = "https://alianza-maestra.com";

export const CONTACT = {
  waNumber: "491772642178",
  waDisplay: "+49 177 264 2178",
  email: "hola@alianza-maestra.com",
} as const;

export const HUBS = ["Málaga", "München", "Helsinki"] as const;

export const LOCALES = ["es", "en"] as const;
export type Locale = (typeof LOCALES)[number];
export const DEFAULT_LOCALE: Locale = "es";

export function isLocale(value: string): value is Locale {
  return (LOCALES as readonly string[]).includes(value);
}
