import Link from "next/link";
import type { Locale } from "@/lib/config";
import { createT } from "@/lib/i18n";
import { SECTORS, SHOW_COLLAB_NAMES } from "@/lib/sectors";

// `variant="alt"` usa el titular NUEVO ("Quiénes ya están dentro.") en lugar
// del actual ("Una alianza que crece uno a uno."). Ver app/[locale]/page.tsx.
export default function Network({
  locale,
  variant = "current",
}: {
  locale: Locale;
  variant?: "current" | "alt";
}) {
  const t = createT(locale);

  // Chips: insignias con nombre + un chip agregado con el resto (anónimos).
  const allCollabs = SECTORS.flatMap((s) => s.colaboradores);
  let chips: { text: string; muted?: boolean }[];
  if (SHOW_COLLAB_NAMES) {
    chips = [...new Set(allCollabs.map((c) => c.n))].map((text) => ({ text }));
  } else {
    const flag = [...new Set(allCollabs.filter((c) => c.flagship).map((c) => c.n))];
    const others = allCollabs.length - flag.length;
    chips = flag.map((text) => ({ text }));
    chips.push({ text: t("chip_more").replace("{n}", String(others)), muted: true });
  }

  return (
    <section className="section" id="red">
      <div className="wrap">
        <div className="section-head reveal">
          <span className="eyebrow">{t("net_eyebrow")}</span>
          <h2>{t(variant === "alt" ? "net_h2_alt" : "net_h2")}</h2>
          <p>{t("net_p")}</p>
        </div>
        <div className="logos reveal">
          {chips.map((c, i) => (
            <span className={`logo-chip${c.muted ? " muted-chip" : ""}`} key={i}>
              {c.text}
            </span>
          ))}
        </div>
        <div className="red-foot reveal">
          <span>{t("net_foot")}</span>
          <Link className="btn btn-ghost" href={`/${locale}/red`}>
            <span>{t("net_cta")}</span> <span className="arw">↗</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
