import Link from "next/link";
import type { Locale } from "@/lib/config";

// Composición del logotipo: isotipo (montaña A/M) + logotipo tipográfico
// "ALIANZA MAESTRA · GROUP". Ambos son PNG monocromos con fondo transparente,
// así que se pintan con `mask-image` + `currentColor` (ver .brand en
// globals.css). De ese modo heredan el color del contexto: tinta en el header
// y blanco sobre el pine del footer, sin duplicar ficheros.
export default function Brand({ locale }: { locale: Locale }) {
  return (
    <Link className="brand" href={`/${locale}`} aria-label="Alianza Maestra Group">
      <span className="brand-mark" aria-hidden="true" />
      <span className="brand-word" aria-hidden="true" />
    </Link>
  );
}
