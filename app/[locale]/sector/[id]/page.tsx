import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { isLocale, LOCALES, type Locale } from "@/lib/config";
import { createT } from "@/lib/i18n";
import { pageMetadata } from "@/lib/seo";
import { SECTORS, sectorById, label, desc, specialties, projectLine } from "@/lib/sectors";
import { SectorIcon } from "@/lib/icons";
import CollabCard, { BetaToggle } from "@/components/CollabCard";
import { contactHref, sectionHref } from "@/components/ContactLink";

export function generateStaticParams() {
  return LOCALES.flatMap((locale) => SECTORS.map((s) => ({ locale, id: s.id })));
}

export function generateMetadata({ params }: { params: { locale: string; id: string } }): Metadata {
  const locale = (isLocale(params.locale) ? params.locale : "es") as Locale;
  const s = sectorById(params.id);
  if (!s) return {};
  return pageMetadata({
    locale,
    subpath: `/sector/${s.id}`,
    title: label(s, locale),
    description: desc(s, locale),
  });
}

export default function SectorPage({ params }: { params: { locale: string; id: string } }) {
  const locale = (isLocale(params.locale) ? params.locale : "es") as Locale;
  const s = sectorById(params.id);
  if (!s) notFound();
  const t = createT(locale);
  const idx = SECTORS.indexOf(s) + 1;

  return (
    <>
      <div className="wrap">
        <div className="crumb">
          <Link href={`/${locale}`}>{t("crumb_home")}</Link>
          <span className="sep">/</span>
          <Link href={sectionHref(locale, "sectores")}>{t("crumb_sectors")}</Link>
          <span className="sep">/</span>
          <b>{label(s, locale)}</b>
        </div>

        <section className="sector-hero">
          <div className="ico-lg">
            <SectorIcon name={s.icon} />
          </div>
          <span className="eyebrow">{t("sector_of").replace("{n}", String(idx))}</span>
          <h1 style={{ marginTop: 14 }}>{label(s, locale)}</h1>
          <p className="intro">{desc(s, locale)}</p>
        </section>

        <div className="sector-body">
          <div>
            <span className="eyebrow">{t("specialties")}</span>
            <ul className="spec-list" style={{ marginTop: 18 }}>
              {specialties(s, locale).map((e) => (
                <li key={e}>{e}</li>
              ))}
            </ul>
          </div>
          <div className="feature-proj">
            <span className="eyebrow">{t("featured_project")}</span>
            <h3>{s.proyecto.name}</h3>
            <p>{projectLine(s, locale)}</p>
          </div>
        </div>

        <div className="collab-head">
          <h2>{t("collabs_in_sector")}</h2>
          <BetaToggle locale={locale} />
        </div>
        <p className="collab-note" style={{ marginTop: 10 }}>
          {t("collab_note_sector")}
        </p>
        <div className="collab-grid">
          {s.colaboradores.map((c) => (
            <CollabCard key={c.n} c={c} locale={locale} sectorId={s.id} />
          ))}
        </div>

        <div className="cta-band">
          <h2>{t("sector_cta_title").replace("{sector}", label(s, locale))}</h2>
          <p>{t("sector_cta_p")}</p>
          <Link className="btn btn-primary" href={contactHref(locale, "cliente", s.id)}>
            {t("cta_need_help")}
          </Link>
        </div>
      </div>
    </>
  );
}
