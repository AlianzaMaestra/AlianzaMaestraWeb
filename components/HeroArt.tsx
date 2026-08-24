import type { TFunction } from "@/lib/i18n";

// Ilustración del hero (grafo de la red) portada del prototipo, con animaciones CSS.
export default function HeroArt({ t }: { t: TFunction }) {
  return (
    <div className="hero-art" aria-hidden="true">
      <svg viewBox="0 0 420 360">
        <path className="draw" d="M70 60 C 150 60, 160 180, 215 180" fill="none" stroke="var(--line)" strokeWidth="2" />
        <path className="draw d2" d="M70 180 C 140 180, 150 180, 215 180" fill="none" stroke="var(--pine)" strokeWidth="2.5" />
        <path className="draw d3" d="M70 300 C 150 300, 160 180, 215 180" fill="none" stroke="var(--line)" strokeWidth="2" />
        <path className="draw d4" d="M215 180 C 300 180, 300 110, 360 110" fill="none" stroke="var(--clay)" strokeWidth="2.5" />
        <path className="draw d4" d="M215 180 C 300 180, 300 250, 360 250" fill="none" stroke="var(--pine)" strokeWidth="2.5" />
        <g className="pop">
          <circle cx="70" cy="60" r="9" fill="var(--paper)" stroke="var(--muted)" strokeWidth="2" />
          <text className="node-label" x="70" y="40" textAnchor="middle">{t("svg_families")}</text>
        </g>
        <g className="pop p2">
          <circle cx="70" cy="180" r="11" fill="var(--pine)" />
          <text className="node-label" x="70" y="160" textAnchor="middle" fill="var(--pine)">{t("svg_you")}</text>
        </g>
        <g className="pop">
          <circle cx="70" cy="300" r="9" fill="var(--paper)" stroke="var(--muted)" strokeWidth="2" />
          <text className="node-label" x="70" y="326" textAnchor="middle">{t("svg_companies")}</text>
        </g>
        <g className="pop p3">
          <circle cx="215" cy="180" r="30" fill="var(--white)" stroke="var(--pine)" strokeWidth="2.5" />
          <text x="215" y="176" textAnchor="middle" fontFamily="var(--font-serif)" fontSize="22" fontWeight="600" fill="var(--pine)">AMG</text>
          <text className="node-label" x="215" y="196" textAnchor="middle" fill="var(--muted)">{t("svg_criterio")}</text>
        </g>
        <g className="pop p4">
          <circle cx="360" cy="110" r="11" fill="var(--clay)" />
          <text className="node-label" x="360" y="90" textAnchor="middle" fill="var(--clay)">{t("svg_partner")}</text>
        </g>
        <g className="pop p5">
          <circle cx="360" cy="250" r="11" fill="var(--pine)" />
          <text className="node-label" x="360" y="278" textAnchor="middle" fill="var(--pine)">{t("svg_partner")}</text>
        </g>
      </svg>
    </div>
  );
}
