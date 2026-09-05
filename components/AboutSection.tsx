import type { ReactNode } from "react";
import type { Locale } from "@/lib/config";
import { createT } from "@/lib/i18n";

// Iconos de la sección (outline, acento clay).
const ICONS: ReactNode[] = [
  // Vetado (check en círculo)
  (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M8.5 12.5l2.4 2.4 4.6-5.2" />
    </>
  ),
  // Boutique (estrella)
  <polygon key="star" points="12 3 14.7 8.5 20.8 9.4 16.4 13.7 17.4 19.8 12 16.9 6.6 19.8 7.6 13.7 3.2 9.4 9.3 8.5" />,
  // Conectar (birrete)
  (
    <>
      <path d="M3 9l9-5 9 5-9 5-9-5z" />
      <path d="M7 11v5c0 1 2 2 5 2s5-1 5-2v-5" />
    </>
  ),
];

function Ico({ children }: { children: ReactNode }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {children}
    </svg>
  );
}

export default function AboutSection({ locale }: { locale: Locale }) {
  const t = createT(locale);
  const cards = [
    { icon: ICONS[0], title: t("about1_t"), desc: t("about1_d") },
    { icon: ICONS[1], title: t("about2_t"), desc: t("about2_d") },
    { icon: ICONS[2], title: t("about3_t"), desc: t("about3_d") },
  ];

  return (
    <section className="section" id="que-es">
      <div className="wrap">
        <div className="about-head reveal">
          <span className="eyebrow">{t("about_eyebrow")}</span>
          <h2>{t("about_h2")}</h2>
          <p>{t("about_p")}</p>
        </div>
        <div className="about-grid">
          {cards.map((c, i) => (
            <article className="about-card reveal" key={i}>
              <div className="ico">
                <Ico>{c.icon}</Ico>
              </div>
              <h3>{c.title}</h3>
              <p dangerouslySetInnerHTML={{ __html: c.desc }} />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
