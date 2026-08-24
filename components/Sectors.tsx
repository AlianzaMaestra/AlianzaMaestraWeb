import Link from "next/link";
import type { Locale } from "@/lib/config";
import { createT } from "@/lib/i18n";
import { SECTORS, label, desc } from "@/lib/sectors";
import { SectorIcon } from "@/lib/icons";

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
              <div className="ico">
                <SectorIcon name={s.icon} />
              </div>
              <h3>{label(s, locale)}</h3>
              <p className="desc">{desc(s, locale).split(".")[0]}.</p>
              <div className="proj">
                <span className="pl">
                  {t("card_featured")}
                  <b>{s.proyecto.name}</b>
                </span>
                <span className="see">
                  {t("see_sector")} <span className="arw">↗</span>
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
