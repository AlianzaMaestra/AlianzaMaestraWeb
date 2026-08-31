import type { Metadata } from "next";
import { Suspense } from "react";
import { isLocale, type Locale } from "@/lib/config";
import { createT } from "@/lib/i18n";
import { pageMetadata } from "@/lib/seo";

// ── Secciones de la home ─────────────────────────────────────────────
// Cada una es un componente independiente. Para añadir/quitar una sección
// o cambiar su orden, edita solo la lista de abajo (comenta una línea con //).
import Hero from "@/components/Hero";
import AboutSection from "@/components/AboutSection";
import HowItWorks from "@/components/HowItWorks";
import Sectors from "@/components/Sectors";
import Trust from "@/components/Trust";
import Network from "@/components/Network";
import ModelSection from "@/components/ModelSection";  // NUEVA (alternativa a Trust)
import Join from "@/components/Join";
import ContactSection from "@/components/ContactSection";
// ─────────────────────────────────────────────────────────────────────

const HOME_TITLE: Record<Locale, string> = {
  es: "Red privada de profesionales verificados uno a uno",
  en: "Private network of professionals vetted one by one",
};

export function generateMetadata({ params }: { params: { locale: string } }): Metadata {
  const locale = (isLocale(params.locale) ? params.locale : "es") as Locale;
  const t = createT(locale);
  return pageMetadata({ locale, subpath: "", title: HOME_TITLE[locale], description: t("hero_sub") });
}

export default function HomePage({ params }: { params: { locale: string } }) {
  const locale = (isLocale(params.locale) ? params.locale : "es") as Locale;

  return (
    <>
      <Hero locale={locale} />
      <AboutSection locale={locale} />
      <HowItWorks locale={locale} />
      <Sectors locale={locale} />

      {/* ── POR QUÉ FIARSE / MODELO ──────────────────────────────────────
          Dos versiones. Deja UNA activa y comenta la otra.               */}
      {/* ACTUAL — "No es un directorio abierto." (argumento en negación,
          repite lo que ya dice AboutSection).                            */}
      {/* <Trust locale={locale} /> */}
      {/* NUEVA — "Alineados con tu resultado, no con tu tiempo."
          Copy y estructura calcados de la sección "El modelo" de
          example.html. Responde al precio, que hoy solo aparece en la
          línea pequeña de HowItWorks.                                    */}
      <ModelSection locale={locale} />

      {/* ── LA RED ───────────────────────────────────────────────────────
          Misma sección; solo cambia el titular.                          */}
      {/* ACTUAL — "Una alianza que crece uno a uno."                     */}
      {/* <Network locale={locale} /> */}
      {/* NUEVA — "Quiénes ya están dentro."                              */}
      {/* <Network locale={locale} variant="alt" /> */}

      <Join locale={locale} />
      <Suspense fallback={<section className="section contact" id="contacto" />}>
        <ContactSection locale={locale} />
      </Suspense>
    </>
  );
}
