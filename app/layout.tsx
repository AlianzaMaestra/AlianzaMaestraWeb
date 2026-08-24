import "./globals.css";
import type { ReactNode } from "react";

// Layout raíz "passthrough": el <html>/<body> con el idioma correcto se define
// en app/[locale]/layout.tsx para que cada idioma tenga su propio lang (SEO).
export default function RootLayout({ children }: { children: ReactNode }) {
  return children;
}
