import type { MetadataRoute } from "next";
import { LOCALES, SITE_URL } from "@/lib/config";
import { SECTORS } from "@/lib/sectors";

export default function sitemap(): MetadataRoute.Sitemap {
  // Rutas (sin idioma) que existen en todos los locales.
  const subpaths = ["", "/red", ...SECTORS.map((s) => `/sector/${s.id}`)];
  const now = new Date();

  return subpaths.flatMap((sub) =>
    LOCALES.map((locale) => ({
      url: `${SITE_URL}/${locale}${sub}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: sub === "" ? 1 : 0.7,
      alternates: {
        languages: Object.fromEntries(LOCALES.map((l) => [l, `${SITE_URL}/${l}${sub}`])),
      },
    }))
  );
}
