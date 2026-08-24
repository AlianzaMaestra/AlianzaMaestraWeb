import Link from "next/link";
import { DEFAULT_LOCALE } from "@/lib/config";
import { fontVariables } from "./fonts";

// 404 raíz. Como el layout raíz es passthrough, aquí definimos html/body propios.
export default function NotFound() {
  return (
    <html lang={DEFAULT_LOCALE} className={fontVariables}>
      <body>
        <main
          style={{
            minHeight: "100vh",
            display: "grid",
            placeItems: "center",
            textAlign: "center",
            padding: "40px",
          }}
        >
          <div>
            <p className="eyebrow" style={{ justifyContent: "center" }}>
              Error 404
            </p>
            <h1 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(32px,6vw,56px)", margin: "16px 0 12px" }}>
              Página no encontrada
            </h1>
            <p style={{ marginBottom: 28 }}>La página que buscas no existe o se ha movido.</p>
            <Link className="btn btn-primary" href={`/${DEFAULT_LOCALE}`}>
              Volver al inicio <span className="arw">↗</span>
            </Link>
          </div>
        </main>
      </body>
    </html>
  );
}
