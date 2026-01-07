"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Phone, ArrowLeft, Clock, MapPin, Menu, X } from "lucide-react"
import type { ReactNode } from "react"
import { useState } from "react"

interface ServiceLayoutProps {
  children: ReactNode
}

export function ServiceLayout({ children }: ServiceLayoutProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur-xl supports-[backdrop-filter]:bg-background/60 shadow-lg">
        <div className="container mx-auto px-4">
          <div className="flex h-20 items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 group">
              <div className="relative">
                <div className="absolute inset-0 bg-primary/20 rounded-full blur-xl group-hover:bg-primary/30 transition-colors" />
                <img 
                  src="/logo.png" 
                  alt="CLINIDOG Logo" 
                  className="relative h-12 w-12 md:h-14 md:w-14 object-contain transition-transform group-hover:scale-105" 
                />
              </div>
              <div>
                <span className="text-xl md:text-2xl font-extrabold bg-gradient-to-r from-primary via-primary to-accent bg-clip-text text-transparent block">
                  {"CLINIDOG"}
                </span>
                <span className="text-xs text-muted-foreground hidden sm:block">{"Veterinaria 24/7"}</span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1">
              <a
                href="/#servicios"
                onClick={(e) => {
                  e.preventDefault()
                  window.location.href = '/#servicios'
                  setTimeout(() => {
                    const element = document.getElementById('servicios')
                    element?.scrollIntoView({ behavior: 'smooth', block: 'start' })
                  }, 100)
                }}
                className="px-5 py-2.5 rounded-lg text-base font-semibold text-foreground/70 hover:text-primary hover:bg-primary/5 transition-all duration-200 relative group"
              >
                {"Servicios"}
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-primary to-accent group-hover:w-3/4 transition-all duration-200" />
              </a>
              <a
                href="/#nosotros"
                onClick={(e) => {
                  e.preventDefault()
                  window.location.href = '/#nosotros'
                  setTimeout(() => {
                    const element = document.getElementById('nosotros')
                    element?.scrollIntoView({ behavior: 'smooth', block: 'start' })
                  }, 100)
                }}
                className="px-5 py-2.5 rounded-lg text-base font-semibold text-foreground/70 hover:text-primary hover:bg-primary/5 transition-all duration-200 relative group"
              >
                {"Nosotros"}
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-primary to-accent group-hover:w-3/4 transition-all duration-200" />
              </a>
              <a
                href="/#horarios"
                onClick={(e) => {
                  e.preventDefault()
                  window.location.href = '/#horarios'
                  setTimeout(() => {
                    const element = document.getElementById('horarios')
                    element?.scrollIntoView({ behavior: 'smooth', block: 'start' })
                  }, 100)
                }}
                className="px-5 py-2.5 rounded-lg text-base font-semibold text-foreground/70 hover:text-primary hover:bg-primary/5 transition-all duration-200 relative group"
              >
                {"Horarios"}
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-primary to-accent group-hover:w-3/4 transition-all duration-200" />
              </a>
              <a
                href="/#contacto"
                onClick={(e) => {
                  e.preventDefault()
                  window.location.href = '/#contacto'
                  setTimeout(() => {
                    const element = document.getElementById('contacto')
                    element?.scrollIntoView({ behavior: 'smooth', block: 'start' })
                  }, 100)
                }}
                className="px-5 py-2.5 rounded-lg text-base font-semibold text-foreground/70 hover:text-primary hover:bg-primary/5 transition-all duration-200 relative group"
              >
                {"Contacto"}
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-primary to-accent group-hover:w-3/4 transition-all duration-200" />
              </a>
            </nav>

            {/* CTA Button Desktop */}
            <div className="hidden lg:flex items-center gap-3">
              <Button 
                size="lg"
                className="bg-accent hover:bg-accent/90 text-accent-foreground shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-200 font-semibold px-8 py-6 text-lg" 
                asChild
              >
                <a 
                  href="/#contacto"
                  onClick={(e) => {
                    e.preventDefault()
                    window.location.href = '/#contacto'
                    setTimeout(() => {
                      const element = document.getElementById('contacto')
                      element?.scrollIntoView({ behavior: 'smooth', block: 'start' })
                    }, 100)
                  }}
                >
                  Contacto
                </a>
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg hover:bg-muted transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6 text-foreground" />
              ) : (
                <Menu className="h-6 w-6 text-foreground" />
              )}
            </button>
          </div>

          {/* Mobile Menu */}
          <div
            className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
              mobileMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
            }`}
          >
            <nav className="py-4 space-y-2 border-t">
              <a
                href="/#servicios"
                onClick={() => setMobileMenuOpen(false)}
                className="block px-4 py-3 rounded-lg text-base font-semibold text-foreground/70 hover:text-primary hover:bg-primary/5 transition-all"
              >
                {"Servicios"}
              </a>
              <a
                href="/#nosotros"
                onClick={() => setMobileMenuOpen(false)}
                className="block px-4 py-3 rounded-lg text-base font-semibold text-foreground/70 hover:text-primary hover:bg-primary/5 transition-all"
              >
                {"Nosotros"}
              </a>
              <a
                href="/#horarios"
                onClick={() => setMobileMenuOpen(false)}
                className="block px-4 py-3 rounded-lg text-base font-semibold text-foreground/70 hover:text-primary hover:bg-primary/5 transition-all"
              >
                {"Horarios"}
              </a>
              <a
                href="/#contacto"
                onClick={() => setMobileMenuOpen(false)}
                className="block px-4 py-3 rounded-lg text-base font-semibold text-foreground/70 hover:text-primary hover:bg-primary/5 transition-all"
              >
                {"Contacto"}
              </a>
              <div className="pt-2 px-4">
                <Button
                  className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-semibold"
                  asChild
                >
                  <a href="/#contacto" onClick={() => setMobileMenuOpen(false)}>
                    Contacto
                  </a>
                </Button>
              </div>
            </nav>
          </div>
        </div>
      </header>

      {/* Back Button */}
      <div className="container mx-auto px-4 py-6">
        <Button variant="ghost" asChild className="gap-2">
          <Link href="/">
            <ArrowLeft className="h-4 w-4" />
            Volver a Inicio
          </Link>
        </Button>
      </div>

      {/* Main Content */}
      {children}

      {/* Contact CTA */}
      <section className="bg-primary text-primary-foreground py-16">
        <div className="container mx-auto px-4 text-center space-y-6">
          <h2 className="text-3xl font-bold">{"¿Necesitas este servicio?"}</h2>
          <p className="text-lg max-w-2xl mx-auto text-primary-foreground/90">
            {"Contáctanos ahora para agendar una cita o resolver cualquier duda sobre nuestros servicios"}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground" asChild>
              <a href="https://wa.me/573114926051" target="_blank" rel="noopener noreferrer">
                <Phone className="mr-2 h-5 w-5" />
                311 492 6051
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-transparent border-primary-foreground hover:bg-primary-foreground/10"
              asChild
            >
              <a href="https://wa.me/573123015259" target="_blank" rel="noopener noreferrer">
                <Phone className="mr-2 h-5 w-5" />
                312 301 5259
              </a>
            </Button>
          </div>
          <div className="pt-8 space-y-3 text-primary-foreground/90">
            <div className="flex items-center justify-center gap-2">
              <Clock className="h-5 w-5" />
              <span>{"Atención 24/7 - Los 365 días del año"}</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <MapPin className="h-5 w-5" />
              <a
                href="https://maps.app.goo.gl/fv3ihJzEAqBb7PZBA"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                <span>{"Transversal 54 # 103B - 78, Puente Largo, Bogotá"}</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t bg-muted/30">
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
            {/* About Section */}
            <div className="space-y-4">
              <Link href="/" className="flex items-center gap-3 mb-4">
                <img src="/logo.png" alt="CLINIDOG Logo" className="h-10 w-10 object-contain" />
                <span className="font-bold text-xl bg-gradient-to-r from-primary via-primary to-accent bg-clip-text text-transparent">{"CLINIDOG"}</span>
              </Link>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {
                  "Veterinaria CLINIDOG en Bogotá. Más de 27 años de experiencia cuidando a tus mascotas. Atención 24/7 los 365 días del año con servicios especializados y tecnología de avanzada."
                }
              </p>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Clock className="h-4 w-4" />
                <span>{"Abierto 24 horas"}</span>
              </div>
            </div>

            {/* Services Section */}
            <div className="space-y-4">
              <h3 className="font-semibold text-lg mb-4">{"Servicios"}</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/peluqueria" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    {"Peluquería"}
                  </Link>
                </li>
                <li>
                  <Link href="/cirugia" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    {"Cirugía"}
                  </Link>
                </li>
                <li>
                  <Link href="/guarderia" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    {"Guardería 24 hrs"}
                  </Link>
                </li>
                <li>
                  <Link href="/rayos-x" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    {"Rayos X"}
                  </Link>
                </li>
                <li>
                  <Link href="/laboratorio" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    {"Laboratorio"}
                  </Link>
                </li>
                <li>
                  <Link href="/limpieza-dental" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    {"Limpieza Dental"}
                  </Link>
                </li>
                <li>
                  <Link href="/emergencias" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    {"Emergencias 24/7"}
                  </Link>
                </li>
              </ul>
            </div>

            {/* More Services Section */}
            <div className="space-y-4">
              <h3 className="font-semibold text-lg mb-4">{"Más Servicios"}</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/pet-shop" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    {"Pet Shop"}
                  </Link>
                </li>
                <li>
                  <Link href="/medicamentos" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    {"Medicamentos"}
                  </Link>
                </li>
                <li>
                  <Link href="/concentrados" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    {"Concentrados"}
                  </Link>
                </li>
                <li>
                  <Link href="/homeopatia" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    {"Homeopatía"}
                  </Link>
                </li>
                <li>
                  <Link href="/ecografia-endoscopia" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    {"Ecografías y Endoscopias"}
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact Section */}
            <div className="space-y-4">
              <h3 className="font-semibold text-lg mb-4">{"Contacto"}</h3>
              <ul className="space-y-3">
                <li>
                  <a
                    href="https://maps.app.goo.gl/fv3ihJzEAqBb7PZBA"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    <MapPin className="h-4 w-4 mt-0.5 shrink-0" />
                    <span>{"Transversal 54 # 103B - 78, Puente Largo, Bogotá"}</span>
                  </a>
                </li>
                <li>
                  <a
                    href="https://wa.me/573114926051"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Phone className="h-4 w-4" />
                    <span>{"311 492 6051"}</span>
                  </a>
                </li>
                <li>
                  <a
                    href="https://wa.me/573123015259"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Phone className="h-4 w-4" />
                    <span>{"312 301 5259"}</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="border-t pt-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <p className="text-sm text-muted-foreground text-center">
                {"© 2026 VETERINARIA CLINIDOG BOGOTÁ. Todos los derechos reservados."}
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4 text-sm">
                <Link href="/politica-privacidad" className="text-muted-foreground hover:text-primary transition-colors">
                  {"Política de Privacidad"}
                </Link>
                <span className="text-muted-foreground">{"•"}</span>
                <Link href="/cookies" className="text-muted-foreground hover:text-primary transition-colors">
                  {"Política de Cookies"}
                </Link>
                <span className="text-muted-foreground">{"•"}</span>
                <Link href="/terminos" className="text-muted-foreground hover:text-primary transition-colors">
                  {"Términos y Condiciones"}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
