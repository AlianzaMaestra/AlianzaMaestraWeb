import type { Locale } from "@/lib/config";
import { createT } from "@/lib/i18n";
import { SHOW_COLLAB_NAMES, collabType, type Collaborator } from "@/lib/sectors";
import { contactHref } from "./ContactLink";
import Link from "next/link";

export default function CollabCard({
  c,
  locale,
  topLabel,
  sectorId,
}: {
  c: Collaborator;
  locale: Locale;
  topLabel?: string;
  sectorId?: string;
}) {
  const t = createT(locale);
  const showName = c.flagship || SHOW_COLLAB_NAMES;
  const top = topLabel || t("verified_by_amg");
  const title = showName ? c.n : t("collab_anon");
  const badge = c.flagship && !SHOW_COLLAB_NAMES ? <span className="insignia">{t("insignia")}</span> : null;

  return (
    <div className="collab">
      <span className="verified">
        <span className="dot" />
        {top}
      </span>
      <h4>
        {title}
        {badge}
      </h4>
      <span className="type">{collabType(c, locale)}</span>
      <Link className="via" href={contactHref(locale, "cliente", sectorId)}>
        {t("contact_via_amg")} <span className="arw">↗</span>
      </Link>
    </div>
  );
}

// Toggle "Mostrar nombres" (beta, deshabilitado) portado del prototipo.
export function BetaToggle({ locale }: { locale: Locale }) {
  const t = createT(locale);
  return (
    <div className={`beta-toggle ${SHOW_COLLAB_NAMES ? "on" : ""}`} title={t("beta_title")}>
      <span>{t("beta_show_names")}</span>
      <span className="switch" />
      <span className="tag-beta">beta</span>
    </div>
  );
}
