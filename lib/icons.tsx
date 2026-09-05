import {
  GraduationCap,
  House,
  CarFront,
  Monitor,
  Megaphone,
  BriefcaseBusiness,
  type LucideIcon,
} from "lucide-react";

export type SectorIconKey =
  | "educacion"
  | "vivienda"
  | "movilidad"
  | "tecnologia"
  | "marketing"
  | "empresa";

// Un icono de lucide por sector.
const ICONS: Record<SectorIconKey, LucideIcon> = {
  educacion: GraduationCap,
  vivienda: House,
  movilidad: CarFront,
  tecnologia: Monitor,
  marketing: Megaphone,
  empresa: BriefcaseBusiness,
};

export function SectorIcon({ name, size = 48 }: { name: SectorIconKey; size?: number }) {
  const Icon = ICONS[name];
  return <Icon size={size} strokeWidth={1.8} aria-hidden="true" />;
}
