import Link from "next/link";
import type { Locale } from "@/lib/config";
import { createT } from "@/lib/i18n";
import { CONTACT } from "@/lib/config";
import { SECTORS, label } from "@/lib/sectors";
import Brand from "./Brand";

export default function Footer({ locale }: { locale: Locale }) {
  const t = createT(locale);
  return (
    <footer>
      <div className="wrap">
        <div className="foot-grid">
          <div>
            <Brand locale={locale} />
            <p>{t("foot_p")}</p>
          </div>
          <div className="foot-col">
            <h4>{t("foot_sectors")}</h4>
            <div>
              {SECTORS.map((s) => (
                <Link key={s.id} href={`/${locale}/sector/${s.id}`}>
                  {label(s, locale)}
                </Link>
              ))}
            </div>
          </div>
          <div className="foot-col">
            <h4>{t("foot_contact")}</h4>
            <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>
            <a href={`https://wa.me/${CONTACT.waNumber}`} target="_blank" rel="noopener">
              WhatsApp · {CONTACT.waDisplay}
            </a>
            <span>Málaga · München · Helsinki</span>
          </div>
        </div>
        <div className="foot-bottom">
          <span>© {new Date().getFullYear()} Alianza Maestra Group</span>
          <span>{t("foot_bottom_r")}</span>
        </div>
      </div>
    </footer>
  );
}
