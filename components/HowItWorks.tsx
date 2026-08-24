import Link from "next/link";
import type { Locale } from "@/lib/config";
import { createT } from "@/lib/i18n";
import { contactHref } from "@/components/ContactLink";

export default function HowItWorks({ locale }: { locale: Locale }) {
  const t = createT(locale);
  return (
    <section className="section section-alt" id="como">
      <div className="wrap">
        <div className="section-head reveal">
          <span className="eyebrow">{t("how_eyebrow")}</span>
          <h2 dangerouslySetInnerHTML={{ __html: t("how_h2") }} />
          <p>{t("how_p")}</p>
        </div>
        <div className="steps reveal">
          {[1, 2, 3, 4].map((n) => (
            <div className="step" key={n}>
              <div className="num">{`0${n}`}</div>
              <h3>{t(`step${n}_t` as "step1_t")}</h3>
              <p>{t(`step${n}_d` as "step1_d")}</p>
            </div>
          ))}
        </div>
        <div className="money reveal">
          <div className="m-txt" dangerouslySetInnerHTML={{ __html: t("money") }} />
          <Link className="btn btn-ghost btn-sm" href={contactHref(locale, "cliente")}>
            <span>{t("money_cta")}</span> <span className="arw">↗</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
