import Link from "next/link";
import type { Locale } from "@/lib/config";

export default function Brand({ locale }: { locale: Locale }) {
  return (
    <Link className="brand" href={`/${locale}`} aria-label="Alianza Maestra Group">
      <span className="mark">A</span>
      <span>
        Alianza Maestra
        <small>GROUP · AMG</small>
      </span>
    </Link>
  );
}
