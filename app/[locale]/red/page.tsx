import type { Metadata } from "next";
import Link from "next/link";
import { isLocale, type Locale } from "@/lib/config";
import { createT } from "@/lib/i18n";
import { pageMetadata } from "@/lib/seo";
import { SECTORS, label } from "@/lib/sectors";
import CollabCard, { BetaToggle } from "@/components/CollabCard";
import { contactHref } from "@/components/ContactLink";

export function generateMetadata({ params }: { params: { locale: string } }): Metadata {
  const locale = (isLocale(params.locale) ? params.locale : "es") as Locale;
  const t = createT(locale);
  return pageMetadata({ locale, subpath: "/red", title: t("red_h2"), description: t("red_p") });
}

export default function RedPage({ params }: { params: { locale: string } }) {
  const locale = (isLocale(params.locale) ? params.locale : "es") as Locale;
  const t = createT(locale);

  // Todos los colaboradores, etiquetados con su sector.
  const rows = SECTORS.flatMap((s) =>
    s.colaboradores.map((c) => ({ c, sectorLabel: label(s, locale), sid: s.id }))
  );

  return (
    <div className="wrap">
      <div className="crumb">
        <Link href={`/${locale}`}>{t("crumb_home")}</Link>
        <span className="sep">/</span>
        <b>{t("crumb_network")}</b>
      </div>
      <section className="section" style={{ paddingTop: 34 }}>
        <div className="section-head">
          <span className="eyebrow">{t("red_eyebrow")}</span>
          <h2>{t("red_h2")}</h2>
          <p>{t("red_p")}</p>
        </div>
        <div className="collab-bar">
          <BetaToggle locale={locale} />
          <span className="collab-note">{t("red_bar_note")}</span>
        </div>
        <div className="collab-grid">
          {rows.map(({ c, sectorLabel, sid }, i) => (
            <CollabCard key={`${c.n}-${i}`} c={c} locale={locale} topLabel={sectorLabel} sectorId={sid} />
          ))}
        </div>
        <div className="cta-band">
          <h2>{t("red_cta_title")}</h2>
          <p>{t("red_cta_p")}</p>
          <Link className="btn btn-primary" href={contactHref(locale, "cliente")}>
            {t("cta_need_help")} <span className="arw">↗</span>
          </Link>
        </div>
      </section>
    </div>
  );
}
