import Link from "next/link";
import type { ReactNode } from "react";
import type { Locale } from "@/lib/config";

type Intent = "cliente" | "colaborador";

// Enlace a la sección de contacto (en la home) fijando la intención y, opcionalmente,
// el sector de contexto. Sustituye el comportamiento data-scroll + data-intent del prototipo.
export function contactHref(locale: Locale, intent?: Intent, sector?: string) {
  const params = new URLSearchParams();
  if (intent) params.set("intent", intent);
  if (sector) params.set("sector", sector);
  const q = params.toString();
  return `/${locale}${q ? `?${q}` : ""}#contacto`;
}

export function sectionHref(locale: Locale, anchor: string) {
  return `/${locale}#${anchor}`;
}

export default function ContactLink({
  locale,
  intent,
  sector,
  className,
  children,
}: {
  locale: Locale;
  intent?: Intent;
  sector?: string;
  className?: string;
  children: ReactNode;
}) {
  return (
    <Link href={contactHref(locale, intent, sector)} className={className}>
      {children}
    </Link>
  );
}
