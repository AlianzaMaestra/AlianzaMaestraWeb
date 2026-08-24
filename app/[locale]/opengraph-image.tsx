import { ImageResponse } from "next/og";
import { LOCALES, isLocale, type Locale } from "@/lib/config";

// Tarjeta Open Graph (1200×630) generada con la paleta y el logo de la marca.
// Se genera para /es y /en en build y aplica a home, sectores y red.
export const runtime = "nodejs";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = "Alianza Maestra Group";

export function generateStaticParams() {
  return LOCALES.map((locale) => ({ locale }));
}

const COPY: Record<Locale, { eyebrow: string; title: string; foot: string }> = {
  es: {
    eyebrow: "RED PRIVADA · MÁLAGA · MÜNCHEN · HELSINKI",
    title: "Cuéntanos qué necesitas. Ya sabemos a quién llamar.",
    foot: "6 sectores · 3 hubs europeos · profesionales verificados uno a uno",
  },
  en: {
    eyebrow: "PRIVATE NETWORK · MÁLAGA · MÜNCHEN · HELSINKI",
    title: "Tell us what you need. We already know who to call.",
    foot: "6 sectors · 3 European hubs · professionals vetted one by one",
  },
};

// Paleta del theme.
const PINE = "#1E4A3D";
const CLAY = "#C0603A";
const PAPER = "#FCFBF8";
const SAND = "#E7E0D1";

export default function OpengraphImage({ params }: { params: { locale: string } }) {
  const locale = (isLocale(params.locale) ? params.locale : "es") as Locale;
  const c = COPY[locale];

  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: PINE,
          padding: "72px",
          fontFamily: "Georgia, 'Times New Roman', serif",
        }}
      >
        {/* Marca */}
        <div style={{ display: "flex", alignItems: "center", gap: "22px" }}>
          <div
            style={{
              width: "78px",
              height: "78px",
              borderRadius: "20px",
              background: CLAY,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: PAPER,
              fontSize: "46px",
              fontWeight: 700,
            }}
          >
            A
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ color: PAPER, fontSize: "36px", fontWeight: 600 }}>Alianza Maestra</div>
            <div
              style={{
                color: SAND,
                fontSize: "17px",
                letterSpacing: "5px",
                fontFamily: "monospace",
                marginTop: "2px",
              }}
            >
              GROUP · AMG
            </div>
          </div>
        </div>

        {/* Titular */}
        <div style={{ display: "flex", flexDirection: "column", gap: "28px" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "18px",
              color: SAND,
              fontSize: "21px",
              letterSpacing: "3px",
              fontFamily: "monospace",
            }}
          >
            <div style={{ width: "48px", height: "2px", background: CLAY }} />
            {c.eyebrow}
          </div>
          <div
            style={{
              display: "flex",
              color: PAPER,
              fontSize: "68px",
              fontWeight: 600,
              lineHeight: 1.1,
              maxWidth: "980px",
            }}
          >
            {c.title}
          </div>
        </div>

        {/* Pie */}
        <div style={{ display: "flex", color: SAND, fontSize: "24px", fontFamily: "monospace" }}>{c.foot}</div>
      </div>
    ),
    { ...size }
  );
}
