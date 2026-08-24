import type { Locale } from "./config";
import type { SectorIconKey } from "./icons";

export type Collaborator = {
  n: string;
  t_es: string;
  t_en: string;
  flagship?: boolean;
};

export type Sector = {
  id: string;
  icon: SectorIconKey;
  label_es: string;
  label_en: string;
  desc_es: string;
  desc_en: string;
  esp_es: string[];
  esp_en: string[];
  proyecto: { name: string; line_es: string; line_en: string };
  colaboradores: Collaborator[];
};

// PENDIENTE DE DEBATIR — mostrar nombres de colaboradores.
// false = anónimo (los proyectos insignia siempre se muestran con nombre).
export const SHOW_COLLAB_NAMES = false;

export const SECTORS: Sector[] = [
  {
    id: "educacion",
    icon: "educacion",
    label_es: "Educación y Familia",
    label_en: "Education & Family",
    desc_es:
      "Cuidado infantil, apoyo educativo y profesionales de confianza para el día a día, con foco en infancia y comunidad germano-hispana.",
    desc_en:
      "Childcare, educational support and trusted professionals for everyday life, focused on children and the German-Spanish community.",
    esp_es: ["Cuidado infantil", "Apoyo educativo", "Orientación familiar", "Proyectos educativos"],
    esp_en: ["Childcare", "Educational support", "Family guidance", "Educational projects"],
    proyecto: {
      name: "Meister Allianz",
      line_es: "Cuidado infantil privado y acompañamiento familiar en München.",
      line_en: "Private childcare and family support in Munich.",
    },
    colaboradores: [
      { n: "Meister Allianz", t_es: "Cuidado infantil privado · München", t_en: "Private childcare · München", flagship: true },
    ],
  },
  {
    id: "vivienda",
    icon: "vivienda",
    label_es: "Vivienda e Instalaciones",
    label_en: "Housing & Facilities",
    desc_es:
      "Instalaciones técnicas, agua, mantenimiento, construcción y compra-venta inmobiliaria premium en la Costa del Sol y Europa.",
    desc_en:
      "Technical installations, water, maintenance, construction and premium real estate across the Costa del Sol and Europe.",
    esp_es: ["Instalaciones técnicas y agua", "Reformas y mantenimiento", "Construcción e ingeniería", "Real estate premium"],
    esp_en: ["Technical & water installations", "Renovation & maintenance", "Construction & engineering", "Premium real estate"],
    proyecto: {
      name: "Aquayala",
      line_es: "Instalaciones técnicas e hidráulicas en Fuengirola.",
      line_en: "Technical and plumbing installations in Fuengirola.",
    },
    colaboradores: [
      { n: "Aquayala", t_es: "Instalaciones e hidráulica · Costa del Sol", t_en: "Installations & plumbing · Costa del Sol", flagship: true },
      { n: "PropHero", t_es: "Inversión inmobiliaria", t_en: "Real estate investment" },
      { n: "Koti Rentals", t_es: "Alquiler y gestión · Helsinki", t_en: "Rentals & management · Helsinki" },
      { n: "Nexa Prime Homes", t_es: "Real estate premium", t_en: "Premium real estate" },
      { n: "Siegel GmbH", t_es: "Construcción · München", t_en: "Construction · München" },
    ],
  },
  {
    id: "movilidad",
    icon: "movilidad",
    label_es: "Movilidad y Transporte",
    label_en: "Mobility & Transport",
    desc_es:
      "Traslados privados, transporte premium y soluciones de movilidad para clientes exigentes en Europa.",
    desc_en:
      "Private transfers, premium transport and mobility solutions for demanding clients across Europe.",
    esp_es: ["Conductores privados", "Transporte premium", "Logística", "Movilidad para eventos"],
    esp_en: ["Private drivers", "Premium transport", "Logistics", "Event mobility"],
    proyecto: {
      name: "Málaga Driver",
      line_es: "Movilidad premium en la Costa del Sol.",
      line_en: "Premium mobility on the Costa del Sol.",
    },
    colaboradores: [
      { n: "Málaga Driver", t_es: "Movilidad premium · Costa del Sol", t_en: "Premium mobility · Costa del Sol", flagship: true },
      { n: "Alarcón VIP", t_es: "Transporte privado", t_en: "Private transport" },
    ],
  },
  {
    id: "tecnologia",
    icon: "tecnologia",
    label_es: "Tecnología y Digital",
    label_en: "Technology & Digital",
    desc_es:
      "Producto digital, IA aplicada, software, automatización y telecomunicaciones para negocios y profesionales.",
    desc_en:
      "Digital product, applied AI, software, automation and telecoms for businesses and professionals.",
    esp_es: ["Desarrollo web y apps", "Automatización e IA", "Software a medida", "Telecomunicaciones"],
    esp_en: ["Web & app development", "Automation & AI", "Custom software", "Telecommunications"],
    proyecto: {
      name: "Fragua Systems",
      line_es: "Desarrollo de software y automatización.",
      line_en: "Software development and automation.",
    },
    colaboradores: [
      { n: "Fragua Systems", t_es: "Software y automatización", t_en: "Software & automation" },
      { n: "Iberika Telecom", t_es: "Conectividad e infraestructura", t_en: "Connectivity & infrastructure" },
    ],
  },
  {
    id: "marketing",
    icon: "marketing",
    label_es: "Marketing, Diseño y Media",
    label_en: "Marketing, Design & Media",
    desc_es:
      "Diseño gráfico, branding, dirección creativa, fotografía, contenido y crecimiento para marcas con visión internacional.",
    desc_en:
      "Graphic design, branding, creative direction, photography, content and growth for brands with international vision.",
    esp_es: ["Diseño y branding", "Marketing y contenidos", "Fotografía y audiovisual", "Posicionamiento"],
    esp_en: ["Design & branding", "Marketing & content", "Photography & video", "SEO & positioning"],
    proyecto: {
      name: "Grafiru",
      line_es: "Diseño gráfico, branding y dirección creativa.",
      line_en: "Graphic design, branding and creative direction.",
    },
    colaboradores: [
      { n: "Grafiru", t_es: "Branding y diseño", t_en: "Branding & design" },
      { n: "Verargb Studio", t_es: "Fotografía y retrato editorial", t_en: "Editorial photography & portrait" },
    ],
  },
  {
    id: "empresa",
    icon: "empresa",
    label_es: "Empresa y Consultoría",
    label_en: "Business & Consulting",
    desc_es:
      "Consultoría estratégica, gestión de proyectos, finanzas, fiscalidad y asesoría para decisiones importantes.",
    desc_en:
      "Strategic consulting, project management, finance, tax and advisory for important decisions.",
    esp_es: ["Consultoría estratégica", "Finanzas y fiscalidad", "Asesoría legal", "Gestión de proyectos"],
    esp_en: ["Strategic consulting", "Finance & tax", "Legal advisory", "Project management"],
    proyecto: {
      name: "Bayteca",
      line_es: "Consultoría y gestión de proyectos.",
      line_en: "Consulting and project management.",
    },
    colaboradores: [
      { n: "Bayteca", t_es: "Consultoría de negocio", t_en: "Business consulting" },
      { n: "Ortega Leiva", t_es: "Asesoría y planificación", t_en: "Advisory & planning" },
    ],
  },
];

export const sectorById = (id: string) => SECTORS.find((s) => s.id === id);

// Selector de idioma equivalente a L(o,k) del prototipo.
export function label(sector: Sector, locale: Locale): string {
  return locale === "en" ? sector.label_en : sector.label_es;
}
export function desc(sector: Sector, locale: Locale): string {
  return locale === "en" ? sector.desc_en : sector.desc_es;
}
export function specialties(sector: Sector, locale: Locale): string[] {
  return locale === "en" ? sector.esp_en : sector.esp_es;
}
export function projectLine(sector: Sector, locale: Locale): string {
  return locale === "en" ? sector.proyecto.line_en : sector.proyecto.line_es;
}
export function collabType(c: Collaborator, locale: Locale): string {
  return locale === "en" ? c.t_en : c.t_es;
}
