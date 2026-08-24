import type { ReactNode } from "react";

export type SectorIconKey =
  | "educacion"
  | "vivienda"
  | "movilidad"
  | "tecnologia"
  | "marketing"
  | "empresa";

// Trazados SVG portados del prototipo, uno por sector.
const PATHS: Record<SectorIconKey, ReactNode> = {
  educacion: (
    <>
      <path d="M3 9l9-5 9 5-9 5-9-5z" />
      <path d="M7 11v5c0 1 2 2 5 2s5-1 5-2v-5" />
    </>
  ),
  vivienda: (
    <>
      <path d="M4 11l8-6 8 6" />
      <path d="M6 10v9h12v-9" />
      <path d="M10 19v-5h4v5" />
    </>
  ),
  movilidad: (
    <>
      <path d="M5 12l1.5-5h11L19 12" />
      <path d="M4 12h16v5H4z" />
      <circle cx="7.5" cy="17.5" r="1.5" />
      <circle cx="16.5" cy="17.5" r="1.5" />
    </>
  ),
  tecnologia: (
    <>
      <rect x="3" y="4" width="18" height="12" rx="1" />
      <path d="M8 20h8" />
      <path d="M12 16v4" />
    </>
  ),
  marketing: (
    <>
      <path d="M4 10v4h3l6 4V6l-6 4H4z" />
      <path d="M17 9a4 4 0 010 6" />
    </>
  ),
  empresa: (
    <>
      <path d="M4 20V8l6-4 6 4v12" />
      <path d="M4 20h16" />
      <path d="M9 20v-4h2v4" />
      <path d="M14 12h2M14 9h2" />
    </>
  ),
};

export function SectorIcon({ name }: { name: SectorIconKey }) {
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
      {PATHS[name]}
    </svg>
  );
}
