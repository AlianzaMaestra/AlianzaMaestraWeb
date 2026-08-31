"use client";

import { useEffect, useRef, useState } from "react";
import { useSearchParams } from "next/navigation";
import type { Locale } from "@/lib/config";
import { CONTACT } from "@/lib/config";
import { createT } from "@/lib/i18n";
import { sectorById, label } from "@/lib/sectors";

type Intent = "cliente" | "colaborador";

export default function ContactSection({ locale }: { locale: Locale }) {
  const t = createT(locale);
  const searchParams = useSearchParams();

  const [intent, setIntent] = useState<Intent>("cliente");
  const [contextSector, setContextSector] = useState("");
  const [error, setError] = useState("");
  const nameRef = useRef<HTMLInputElement>(null);
  const msgRef = useRef<HTMLTextAreaElement>(null);
  const consentRef = useRef<HTMLInputElement>(null);

  // Sincroniza intención y sector desde la URL (?intent=&sector=).
  useEffect(() => {
    const qIntent = searchParams.get("intent");
    if (qIntent === "cliente" || qIntent === "colaborador") setIntent(qIntent);
    setContextSector(searchParams.get("sector") || "");
  }, [searchParams]);

  const isClient = intent === "cliente";

  function buildMessage() {
    const nombre = nameRef.current?.value.trim() || "";
    const msg = msgRef.current?.value.trim() || "";
    const sector = contextSector ? sectorById(contextSector) : undefined;
    const sectorLabel = sector ? label(sector, locale) : "";
    const name = nombre || t("m_noname");
    const lines: string[] = [];
    if (isClient) {
      lines.push(t("m_greet_c").replace("{n}", name));
      if (sectorLabel) lines.push(t("m_sector") + sectorLabel);
      lines.push(t("m_need") + msg);
    } else {
      lines.push(t("m_greet_p").replace("{n}", name));
      if (sectorLabel) lines.push(t("m_spec") + sectorLabel);
      lines.push(t("m_about") + msg);
    }
    lines.push(t("m_from"));
    return { text: lines.join("\n"), sectorLabel };
  }

  function submit(via: "wa" | "email") {
    const nombre = nameRef.current?.value.trim() || "";
    const msg = msgRef.current?.value.trim() || "";
    const consent = consentRef.current?.checked;
    if (!nombre || !msg) {
      setError(t("err_fields"));
      return;
    }
    if (!consent) {
      setError(t("err_consent"));
      return;
    }
    setError("");
    const { text, sectorLabel } = buildMessage();
    if (via === "wa") {
      window.open(`https://wa.me/${CONTACT.waNumber}?text=${encodeURIComponent(text)}`, "_blank", "noopener");
    } else {
      const subject = isClient ? t("subj_c") + (sectorLabel ? " — " + sectorLabel : "") : t("subj_p");
      window.location.href = `mailto:${CONTACT.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(text)}`;
    }
  }

  return (
    <section className="section contact" id="contacto">
      <div className="wrap contact-grid">
        <div className="contact-intro">
          <span className="eyebrow">{t("contact_eyebrow")}</span>
          <h2>{isClient ? t("contact_title_client") : t("contact_title_partner")}</h2>
          <p>{isClient ? t("contact_sub_client") : t("contact_sub_partner")}</p>
          <ul className="contact-points">
            <li>{t("cp1")}</li>
            <li>{t("cp2")}</li>
            <li>{t("cp3")}</li>
          </ul>
        </div>
        <div className="contact-form">
          <div className="intent-toggle">
            <button type="button" className={isClient ? "active" : undefined} onClick={() => setIntent("cliente")}>
              {t("intent_client")}
            </button>
            <button type="button" className={!isClient ? "active" : undefined} onClick={() => setIntent("colaborador")}>
              {t("intent_partner")}
            </button>
          </div>
          <div className="field">
            <label htmlFor="f-nombre">{t("f_name_label")}</label>
            <input id="f-nombre" ref={nameRef} type="text" placeholder={t("f_name_ph")} autoComplete="name" />
          </div>
          <div className="field">
            <label htmlFor="f-msg">{isClient ? t("f_msg_label_client") : t("f_msg_label_partner")}</label>
            <textarea id="f-msg" ref={msgRef} rows={4} placeholder={t("f_msg_ph")} />
          </div>
          <label className="consent">
            <input type="checkbox" ref={consentRef} />
            <span dangerouslySetInnerHTML={{ __html: t("consent") }} />
          </label>
          {error ? <p className="form-err">{error}</p> : null}
          <div className="form-actions">
            <button type="button" className="btn btn-primary" onClick={() => submit("wa")}>
              {t("send_wa")} <span className="arw">↗</span>
            </button>
            <button type="button" className="btn btn-ghost" onClick={() => submit("email")}>
              {t("send_email")}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
