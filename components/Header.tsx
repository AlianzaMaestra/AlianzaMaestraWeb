import Link from "next/link";
import { Suspense } from "react";
import type { Locale } from "@/lib/config";
import { createT } from "@/lib/i18n";
import Brand from "./Brand";
import LangSwitcher from "./LangSwitcher";
import { contactHref, sectionHref } from "./ContactLink";

export default function Header({ locale }: { locale: Locale }) {
  const t = createT(locale);
  return (
    <header>
      <div className="wrap nav">
        <Brand locale={locale} />
        <nav className="nav-links">
          <Link href={sectionHref(locale, "como")}>{t("nav_how")}</Link>
          <Link href={sectionHref(locale, "sectores")}>{t("nav_sectors")}</Link>
          <Link href={`/${locale}/red`}>{t("nav_network")}</Link>
          <Link href={sectionHref(locale, "unete")}>{t("nav_join")}</Link>
        </nav>
        <div className="nav-cta">
          <Suspense fallback={<div className="lang" aria-hidden="true" />}>
            <LangSwitcher locale={locale} />
          </Suspense>
          <Link className="btn btn-ghost btn-sm" href={contactHref(locale, "colaborador")}>
            {t("cta_join_short")}
          </Link>
          <Link className="btn btn-primary btn-sm" href={contactHref(locale, "cliente")}>
            {t("cta_help_short")}
          </Link>
        </div>
      </div>
    </header>
  );
}
