import type { Metadata } from "next";
import type { ReactNode } from "react";
import { notFound } from "next/navigation";
import { LOCALES, SITE_URL, isLocale, type Locale } from "@/lib/config";
import { createT } from "@/lib/i18n";
import { fontVariables } from "../fonts";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import RevealObserver from "@/components/RevealObserver";

export function generateStaticParams() {
  return LOCALES.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const locale = (isLocale(params.locale) ? params.locale : "es") as Locale;
  const t = createT(locale);
  return {
    metadataBase: new URL(SITE_URL),
    title: {
      default: "Alianza Maestra Group — " + t("hero_eyebrow"),
      template: "%s · Alianza Maestra Group",
    },
    description: t("hero_sub"),
    applicationName: "Alianza Maestra Group",
    authors: [{ name: "Alianza Maestra Group" }],
  };
}

export default function LocaleLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: { locale: string };
}) {
  if (!isLocale(params.locale)) notFound();
  const locale = params.locale as Locale;

  return (
    <html lang={locale} className={fontVariables}>
      <body>
        <Header locale={locale} />
        <main id="app">{children}</main>
        <Footer locale={locale} />
        <RevealObserver />
      </body>
    </html>
  );
}
