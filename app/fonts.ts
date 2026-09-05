import { Fraunces, Hanken_Grotesk, Spline_Sans_Mono } from "next/font/google";

// Mismas familias que el prototipo, ahora auto-hospedadas por next/font (sin bloqueo de red, mejor LCP/SEO).
export const fraunces = Fraunces({
  subsets: ["latin"],
  style: ["normal", "italic"],
  display: "swap",
  variable: "--font-fraunces",
});

export const hanken = Hanken_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
  variable: "--font-hanken",
});

export const splineMono = Spline_Sans_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
  variable: "--font-spline-mono",
});

export const fontVariables = `${fraunces.variable} ${hanken.variable} ${splineMono.variable}`;
