import type { Locale } from "@/lib/config";
import { createT } from "@/lib/i18n";

export default function Trust({ locale }: { locale: Locale }) {
  const t = createT(locale);
  return (
    <section className="section trust-band" id="confianza">
      <div className="wrap">
        <div className="section-head reveal">
          <span className="eyebrow">{t("trust_eyebrow")}</span>
          <h2>{t("trust_h2")}</h2>
          <p>{t("trust_p")}</p>
        </div>
        <div className="criteria reveal">
          {[1, 2, 3, 4].map((n) => (
            <div className="crit" key={n}>
              <h3>
                <span className="n">{`0${n}`}</span> <span>{t(`crit${n}_t` as "crit1_t")}</span>
              </h3>
              <p>{t(`crit${n}_d` as "crit1_d")}</p>
            </div>
          ))}
        </div>
        <p className="note reveal">{t("trust_note")}</p>
      </div>
    </section>
  );
}
