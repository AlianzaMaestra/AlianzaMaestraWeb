import Link from "next/link";
import type { Locale } from "@/lib/config";
import { createT } from "@/lib/i18n";
import { contactHref } from "@/components/ContactLink";

// Estructura tomada de example-hero.html: a la izquierda solo eyebrow +
// titular; a la derecha una caja separada por un filete con las tres
// ventajas y el CTA. Sustituye al párrafo corrido anterior.
export default function Join({ locale }: { locale: Locale }) {
  const t = createT(locale);
  const benefits = [t("join_b1"), t("join_b2"), t("join_b3")];

  return (
    <section className="section join" id="unete">
      <div className="wrap join-grid">
        <div className="join-lead reveal">
          <span className="eyebrow">{t("join_eyebrow")}</span>
          <h2>{t("join_h2")}</h2>
        </div>

        <div className="join-valuebox reveal">
          <ul className="benes">
            {benefits.map((b, i) => (
              <li key={i}>
                <span className="dash" aria-hidden="true">—</span>
                <span dangerouslySetInnerHTML={{ __html: b }} />
              </li>
            ))}
          </ul>
          <Link className="btn btn-clay" href={contactHref(locale, "colaborador")}>
            {/* Sin espacio entre el rótulo y la flecha: así no hay punto de
                corte y, si el texto parte en dos líneas, la flecha viaja
                con la última palabra en vez de quedarse sola. */}
            <span>
              {t("join_cta")}
              <span className="arw">↗</span>
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
