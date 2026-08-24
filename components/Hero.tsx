import Link from "next/link";
import type { Locale } from "@/lib/config";
import { createT } from "@/lib/i18n";
import HeroArt from "@/components/HeroArt";
import { contactHref } from "@/components/ContactLink";

export default function Hero({ locale }: { locale: Locale }) {
  const t = createT(locale);
  return (
    <section className="hero">
      <div className="wrap hero-grid">
        <div>
          <span className="eyebrow">{t("hero_eyebrow")}</span>
          <h1 dangerouslySetInnerHTML={{ __html: t("hero_h1") }} />
          <p className="sub lead">{t("hero_sub")}</p>
          <div className="hero-cta">
            <Link className="btn btn-primary" href={contactHref(locale, "cliente")}>
              <span>{t("hero_cta_help")}</span> <span className="arw">↗</span>
            </Link>
            <Link className="btn btn-ghost" href={contactHref(locale, "colaborador")}>
              {t("hero_cta_join")}
            </Link>
          </div>
          <div className="hero-meta" dangerouslySetInnerHTML={{ __html: t("hero_meta") }} />
        </div>
        <HeroArt t={t} />
      </div>
    </section>
  );
}
