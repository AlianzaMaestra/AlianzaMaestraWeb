"use client";

import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import { LOCALES, type Locale } from "@/lib/config";

// Nombre de cada idioma en su propio idioma (convención habitual en selectores).
const NATIVE: Record<Locale, string> = { es: "Español", en: "English" };
const ARIA: Record<Locale, string> = { es: "Seleccionar idioma", en: "Select language" };

// Cambia el idioma conservando la misma ruta (intercambia el segmento de locale).
export default function LangSwitcher({ locale }: { locale: Locale }) {
  const pathname = usePathname() || `/${locale}`;
  const searchParams = useSearchParams();
  const query = searchParams.toString();

  const swap = (target: Locale) => {
    const segments = pathname.split("/");
    // segments[0] === "" ; segments[1] === locale actual
    segments[1] = target;
    const path = segments.join("/") || `/${target}`;
    return query ? `${path}?${query}` : path;
  };

  return (
    <div className="lang">
      <button className="lang-trigger" type="button" aria-haspopup="menu" aria-label={ARIA[locale]}>
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <circle cx="12" cy="12" r="9" />
          <path d="M3 12h18" />
          <path d="M12 3c2.4 2.5 3.6 5.5 3.6 9s-1.2 6.5-3.6 9c-2.4-2.5-3.6-5.5-3.6-9s1.2-6.5 3.6-9z" />
        </svg>
        <span>{locale.toUpperCase()}</span>
      </button>

      <ul className="lang-menu" role="menu">
        {LOCALES.map((l) => (
          <li key={l} role="none">
            <Link
              href={swap(l)}
              role="menuitem"
              hrefLang={l}
              className={l === locale ? "active" : undefined}
              aria-current={l === locale ? "true" : undefined}
            >
              <span>{NATIVE[l]}</span>
              <span className="code">{l.toUpperCase()}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
