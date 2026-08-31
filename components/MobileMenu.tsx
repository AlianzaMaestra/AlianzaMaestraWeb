"use client";

import Link from "next/link";
import { Suspense, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { usePathname } from "next/navigation";
import type { Locale } from "@/lib/config";
import { createT } from "@/lib/i18n";
import Brand from "./Brand";
import LangSwitcher from "./LangSwitcher";
import { contactHref, sectionHref } from "./ContactLink";

// Navegación de móvil / tablet (<= 900px). El header a ese ancho no tiene sitio
// para los cuatro enlaces más el selector de idioma y los dos CTA, así que todo
// eso se recoge aquí: hamburguesa en el header y panel a pantalla completa con
// los mismos destinos, sin perder ninguno.
export default function MobileMenu({ locale }: { locale: Locale }) {
  const t = createT(locale);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const panelRef = useRef<HTMLDivElement>(null);
  // El <header> lleva backdrop-filter, y eso lo convierte en bloque contenedor
  // de sus descendientes `position: fixed`: el panel quedaría recortado a los
  // 70px de la barra. Por eso se monta en <body> mediante portal.
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  // Cierra al navegar a otra ruta (los enlaces a #ancla no cambian pathname:
  // esos se cierran en el onClick de cada enlace).
  useEffect(() => setOpen(false), [pathname]);

  // Con el panel abierto: bloquea el scroll del fondo, cierra con Escape y
  // lleva el foco al panel para que el teclado no se quede detrás.
  useEffect(() => {
    if (!open) return;
    const { overflow } = document.body.style;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    panelRef.current?.focus();
    return () => {
      document.body.style.overflow = overflow;
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const close = () => setOpen(false);

  const links: { href: string; label: string }[] = [
    { href: sectionHref(locale, "como"), label: t("nav_how") },
    { href: sectionHref(locale, "sectores"), label: t("nav_sectors") },
    { href: `/${locale}/red`, label: t("nav_network") },
    { href: sectionHref(locale, "unete"), label: t("nav_join") },
  ];

  return (
    <>
      <button
        type="button"
        className="burger"
        aria-label={t("nav_menu_open")}
        aria-expanded={open}
        aria-controls="mobile-menu"
        onClick={() => setOpen(true)}
      >
        <span />
        <span />
        <span />
      </button>

      {mounted &&
        createPortal(
          <div
          id="mobile-menu"
          ref={panelRef}
          className={`mpanel${open ? " open" : ""}`}
          hidden={!open}
          tabIndex={-1}
          role="dialog"
          aria-modal="true"
          aria-label={t("nav_menu_open")}
        >
          <div className="mpanel-top">
            <Brand locale={locale} />
            <button type="button" className="mpanel-close" aria-label={t("nav_menu_close")} onClick={close}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" aria-hidden="true">
                <path d="M6 6l12 12M18 6L6 18" />
              </svg>
            </button>
          </div>

          <nav className="mpanel-links">
            {links.map((l) => (
              <Link key={l.href} href={l.href} onClick={close}>
                {l.label}
              </Link>
            ))}
          </nav>

          <div className="mpanel-foot">
            <Suspense fallback={<div className="lang" aria-hidden="true" />}>
              <LangSwitcher locale={locale} />
            </Suspense>
            <Link className="btn btn-ghost" href={contactHref(locale, "colaborador")} onClick={close}>
              {t("cta_join_short")}
            </Link>
            <Link className="btn btn-primary" href={contactHref(locale, "cliente")} onClick={close}>
              {t("cta_help_short")}
            </Link>
          </div>
          </div>,
          document.body,
        )}
    </>
  );
}
