import type React from "react"
import type { Metadata } from "next"
import { Geist } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const _geist = Geist({ 
  subsets: ["latin"],
  display: "swap",
  preload: true,
  adjustFontFallback: true,
})

export const metadata: Metadata = {
  title: "CLINIDOG - Clínica Veterinaria Profesional",
  description:
    "Clínica veterinaria profesional dedicada al cuidado integral de tus mascotas. Servicios de consulta, vacunación, cirugía y emergencias 24/7 en Bogotá.",
  generator: "v0.app",
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
  openGraph: {
    title: "CLINIDOG - Clínica Veterinaria Profesional",
    description:
      "Clínica veterinaria profesional dedicada al cuidado integral de tus mascotas 24/7.",
    url: "https://clinidog.com",
    siteName: "CLINIDOG",
    images: [
      {
        url: "/imagen-meta-data.jpg",
        width: 1200,
        height: 630,
        alt: "CLINIDOG - Clínica Veterinaria",
      },
    ],
    locale: "es_CO",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "CLINIDOG - Clínica Veterinaria Profesional",
    description:
    "Clínica veterinaria profesional dedicada al cuidado integral de tus mascotas 24/7.",
    images: ["/imagen-meta-data.jpg"],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <head>
        <link rel="preconnect" href="https://www.google.com" />
        <link rel="dns-prefetch" href="https://www.google.com" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0, user-scalable=yes" />
      </head>
      <body className={`${_geist.className} antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
