"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

// Mejora progresiva: revela con fade-in los elementos .reveal en cuanto su zona entra en viewport.
// Usamos scroll + requestAnimationFrame (no IntersectionObserver) porque el callback del observer
// se entrega en cola de tareas y se retrasa mientras el hero anima (stroke-dashoffset repinta en el
// hilo principal). El scroll y el rAF sí se disparan cada frame, así ninguna sección espera al hero.
// El contenido ya está en el HTML (renderizado en servidor); esto es solo presentación.
export default function RevealObserver() {
  const pathname = usePathname();

  useEffect(() => {
    let els = Array.from(document.querySelectorAll<HTMLElement>(".reveal:not(.in)"));
    if (els.length === 0) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      els.forEach((el) => el.classList.add("in"));
      return;
    }

    let ticking = false;

    const check = () => {
      ticking = false;
      const vh = window.innerHeight;
      els = els.filter((el) => {
        const rect = el.getBoundingClientRect();
        // Un pelín antes de que entre del todo para que se sienta inmediato.
        if (rect.top < vh * 0.95 && rect.bottom > 0) {
          el.classList.add("in");
          return false; // ya revelado: fuera de la lista
        }
        return true;
      });
      if (els.length === 0) stop();
    };

    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(check);
      }
    };

    const stop = () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };

    check(); // pase inicial: revela lo ya visible al cargar
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return stop;
  }, [pathname]);

  return null;
}
