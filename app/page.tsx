import { redirect } from "next/navigation";
import { DEFAULT_LOCALE } from "@/lib/config";

// La raíz redirige al idioma por defecto.
export default function RootPage() {
  redirect(`/${DEFAULT_LOCALE}`);
}
