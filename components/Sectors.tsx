import Link from "next/link";
import type { Locale } from "@/lib/config";
import { createT } from "@/lib/i18n";
import { SECTORS, label } from "@/lib/sectors";
import { SectorIcon } from "@/lib/icons";
import { ArrowRight } from "lucide-react";

export default function Sectors({ locale }: { locale: Locale }) {
  const t = createT(locale);
  return (
    <section className="section" id="sectores">
      <div className="wrap">
        <div className="section-head reveal">
          <span className="eyebrow">{t("sec_eyebrow")}</span>
          <h2>{t("sec_h2")}</h2>
          <p>{t("sec_p")}</p>
        </div>
        <div className="sectors">
          {SECTORS.map((s) => (
            <Link className="card reveal" href={`/${locale}/sector/${s.id}`} key={s.id}>
              <div className="card-icon">
                <SectorIcon name={s.icon} />
              </div>
              <h3 className="card-title">{label(s, locale)}</h3>
              <div className="card-footer">
                <span className="card-link">{t("see_sector")}</span>
                <ArrowRight className="card-arrow" size={22} strokeWidth={1.8} aria-hidden="true" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
