import type { Locale } from "@/lib/config";
import { createT } from "@/lib/i18n";

// ─────────────────────────────────────────────────────────────────────
// SECCIÓN NUEVA — alternativa a <Trust />.
// Copy y estructura calcados de la sección "El modelo" de example.html:
// eyebrow + titular + lista de tres puntos a la izquierda, tarjeta de
// precio con ventajas a la derecha.
// Para activarla, ver la lista de secciones en app/[locale]/page.tsx.
// ─────────────────────────────────────────────────────────────────────

type IconKey = "plus" | "check" | "clock";

const ICONS: Record<IconKey, JSX.Element> = {
  plus: <path d="M5 12h14M12 5v14" />,
  check: <path d="M4 12l5 5L20 6" />,
  clock: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5.2l3.2 2" />
    </>
  ),
};

function Ico({ name, sw = 1.9 }: { name: IconKey; sw?: number }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={sw}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {ICONS[name]}
    </svg>
  );
}

export default function ModelSection({ locale }: { locale: Locale }) {
  const t = createT(locale);

  const points: { icon: IconKey; title: string; desc: string }[] = [
    { icon: "plus", title: t("model1_t"), desc: t("model1_d") },
    { icon: "check", title: t("model2_t"), desc: t("model2_d") },
    { icon: "clock", title: t("model3_t"), desc: t("model3_d") },
  ];

  const features = [t("model_f1"), t("model_f2"), t("model_f3")];

  return (
    <section className="section trust-band" id="modelo">
      <div className="wrap model-grid">
        <div className="reveal">
          <span className="eyebrow">{t("model_eyebrow")}</span>
          <h2 className="model-title">{t("model_h2")}</h2>

          <ul className="model-list">
            {points.map((p, i) => (
              <li key={i}>
                <span className="k">
                  <Ico name={p.icon} />
                </span>
                <div>
                  <h3>{p.title}</h3>
                  <p>{p.desc}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <aside className="price-card reveal">
          <span className="pc-eye">{t("model_price_eye")}</span>
          <div className="big">{t("model_price")}</div>
          <p className="sub">{t("model_price_sub")}</p>
          <ul className="pc-list">
            {features.map((f, i) => (
              <li key={i}>
                <Ico name="check" sw={2.2} />
                <span>{f}</span>
              </li>
            ))}
          </ul>
          <p className="pc-note">{t("model_price_note")}</p>
        </aside>
      </div>
    </section>
  );
}
