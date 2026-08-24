# Sistema tipográfico · Alianza Maestra

Informe para aplicar la escala de fuentes de la **v1** a tu proyecto.
Criterio: **desktop es la referencia** (los tamaños que ya viste) y **móvil escala solo** vía `clamp()` — sin tener que mantener dos juegos de tamaños.

---

## 1. Base

| Ajuste | Valor | Nota |
|---|---|---|
| `html` (root) | **16px** = `1rem` | Todo lo demás se expresa en `rem`, así que escala desde aquí. |
| Titulares | **Fraunces** (serif) | `font-weight: 600`, `line-height: 1.12`, `letter-spacing: -.01em` |
| Texto / UI | **Inter** (sans) | `line-height: 1.6`, peso 400–600 |
| Etiquetas mayúsculas | Inter | `text-transform: uppercase` + `letter-spacing` (ver §5) |

> **1rem = 16px**. Para convertir: `px ÷ 16 = rem`. Ej.: 24px = 1.5rem.

---

## 2. La escala (tokens)

Consolidé las variaciones casi idénticas (0.94/0.95/0.96 → una sola, etc.) en una escala limpia y mantenible. El resultado visual es el mismo que la v1.

Los titulares usan `clamp(mínimo, fluido, máximo)`: **el máximo es el tamaño desktop**, el mínimo es el de móvil, y entre medias escala con el ancho de pantalla. No hacen falta media queries para ellos.

| Token | Desktop | Móvil (mín.) | px desktop | Uso |
|---|---|---|---|---|
| `--fs-hero` | `clamp(2.5rem, 5.4vw, 4.15rem)` | 2.5rem | ~66px | H1 del hero |
| `--fs-h1` | `clamp(2.1rem, 4.4vw, 3.4rem)` | 2.1rem | ~54px | Cabecera de página interior / sector |
| `--fs-h2` | `clamp(1.9rem, 3.4vw, 2.7rem)` | 1.9rem | ~43px | Títulos de sección |
| `--fs-h2-alt` | `clamp(1.8rem, 3vw, 2.5rem)` | 1.8rem | ~40px | H2 más contenido (Partner) |
| `--fs-quote` | `clamp(1.5rem, 3vw, 2.25rem)` | 1.5rem | ~36px | Testimonio / cita |
| `--fs-stat-xl` | `clamp(2.25rem, 4vw, 3rem)` | 2.25rem | ~48px | Cifra grande (`0€`) |
| `--fs-stat` | `clamp(1.9rem, 3vw, 2.4rem)` | 1.9rem | ~38px | Números 01–04, escasez |
| `--fs-stat-sm` | `2rem` | — | 32px | Nombre de partner destacado |
| `--fs-h3` | `1.4rem` | — | ~22px | Subtítulos, título de bloque |
| `--fs-h4` | `1.28rem` | — | ~20px | Título de tarjeta de sector |
| `--fs-card-title` | `1.25rem` | — | 20px | Título de tarjeta de valor |
| `--fs-title-sm` | `1.12rem` | — | ~18px | Título de paso |
| `--fs-lead` | `clamp(1.05rem, 1.5vw, 1.2rem)` | 1.05rem | ~19px | Subtítulo del hero |
| `--fs-body-lg` | `1.05rem` | — | ~17px | Subtítulo de sección |
| `--fs-body` | `1rem` | — | 16px | Texto base |
| `--fs-body-md` | `0.95rem` | — | ~15px | Texto de tarjetas / inputs |
| `--fs-body-sm` | `0.9rem` | — | ~14px | Texto secundario, botones, enlaces |
| `--fs-small` | `0.85rem` | — | ~14px | Notas, hubs, botón flotante |
| `--fs-xs` | `0.8rem` | — | ~13px | Consentimiento, pies pequeños |
| `--fs-label` | `0.78rem` | — | ~12.5px | Etiquetas de formulario, títulos de footer |
| `--fs-eyebrow` | `0.72rem` | — | ~11.5px | Eyebrow dorado |
| `--fs-caption` | `0.7rem` | — | ~11px | Etiquetas mono, "marcas insignia" |
| `--fs-micro` | `0.68rem` | — | ~11px | Eyebrows más pequeños |
| `--fs-nano` | `0.62rem` | — | ~10px | Subtítulo "GROUP" |

---

## 3. Bloque listo para pegar

Ponlo al principio de tu CSS, dentro de `:root`.

```css
:root{
  /* --- Titulares (fluidos, desktop = máximo) --- */
  --fs-hero:      clamp(2.5rem, 5.4vw, 4.15rem);
  --fs-h1:        clamp(2.1rem, 4.4vw, 3.4rem);
  --fs-h2:        clamp(1.9rem, 3.4vw, 2.7rem);
  --fs-h2-alt:    clamp(1.8rem, 3vw, 2.5rem);
  --fs-quote:     clamp(1.5rem, 3vw, 2.25rem);

  /* --- Cifras / destacados --- */
  --fs-stat-xl:   clamp(2.25rem, 4vw, 3rem);
  --fs-stat:      clamp(1.9rem, 3vw, 2.4rem);
  --fs-stat-sm:   2rem;

  /* --- Subtítulos y títulos menores --- */
  --fs-h3:          1.4rem;
  --fs-h4:          1.28rem;
  --fs-card-title:  1.25rem;
  --fs-title-sm:    1.12rem;

  /* --- Texto --- */
  --fs-lead:      clamp(1.05rem, 1.5vw, 1.2rem);
  --fs-body-lg:   1.05rem;
  --fs-body:      1rem;
  --fs-body-md:   0.95rem;
  --fs-body-sm:   0.9rem;
  --fs-small:     0.85rem;
  --fs-xs:        0.8rem;

  /* --- Etiquetas / mayúsculas --- */
  --fs-label:     0.78rem;
  --fs-eyebrow:   0.72rem;
  --fs-caption:   0.7rem;
  --fs-micro:     0.68rem;
  --fs-nano:      0.62rem;
}
```

Y luego lo usas así:

```css
.hero h1        { font-size: var(--fs-hero); }
h2, .section-title { font-size: var(--fs-h2); }
.card h3        { font-size: var(--fs-card-title); }
p               { font-size: var(--fs-body); }
.form label     { font-size: var(--fs-label); }
.eyebrow        { font-size: var(--fs-eyebrow); }
```

---

## 4. Cómo se comporta en móvil (el "responsive")

Dos mecanismos, y con esto no necesitas mantener tamaños aparte:

**a) `clamp()` para titulares (recomendado, ya incluido).**
`clamp(mín, fluido, máx)` escala con el ancho de la ventana:
- En desktop ancho → se queda en el **máximo** (el tamaño que elegiste).
- En móvil → baja hasta el **mínimo**, sin saltos ni media queries.
- El valor central (`vw`) hace la transición suave.

**b) `rem` para todo lo demás.**
Como todo está en `rem`, depende del `html`. Si en pantallas muy pequeñas quieres encoger la escala **entera** de golpe, baja el root:

```css
@media (max-width: 480px){
  html{ font-size: 15px; }   /* toda la escala se reduce ~6% */
}
```

> Regla práctica: **titulares → `clamp()`**; **texto y etiquetas → `rem` fijo** (opcionalmente + el ajuste de root en móvil muy pequeño).

---

## 5. Line-height y letter-spacing (para que cuadre)

El tamaño solo no basta; estos acompañan a la escala:

| Rol | line-height | letter-spacing |
|---|---|---|
| Titulares (Fraunces) | `1.12` | `-0.01em` |
| Texto (Inter) | `1.6` | normal |
| Lead / subtítulos | `1.5`–`1.6` | normal |
| Eyebrow / etiquetas mayúsculas | `1.3` | `0.24em` |
| Títulos de footer (mayúsculas) | normal | `0.14em` |
| Labels de formulario (mayúsculas) | normal | `0.04em` |

```css
h1,h2,h3,h4{ line-height:1.12; letter-spacing:-.01em; }
body{ line-height:1.6; }
.eyebrow, .label{ text-transform:uppercase; letter-spacing:.24em; }
```

---

## 6. Migración rápida

1. Pega el bloque `:root` del §3 al inicio de tu CSS.
2. Busca en tu proyecto todos los `font-size:` "a pelo".
3. Sustitúyelos por el `var(--fs-…)` que corresponda según la tabla del §2.
4. Confirma que `html` está en `16px` (por defecto lo está; no lo fuerces salvo el ajuste de móvil del §4b).
5. Revisa en desktop primero (es la referencia) y luego estrecha la ventana para comprobar que los titulares escalan.

**Regla de oro:** ningún `font-size` numérico suelto en el CSS de componentes — siempre un token. Así cambiar toda la jerarquía es tocar una sola línea.