"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import {
  Heart,
  Stethoscope,
  Scissors,
  Home,
  Grab as XRay,
  FlaskConical,
  Sparkles,
  ShoppingBag,
  Pill,
  Leaf,
  ScanLine,
  Clock,
  Phone,
  MapPin,
  Star,
  ChevronLeft,
  ChevronRight,
  Menu,
  X,
} from "lucide-react"
import { useEffect, useRef, useState } from "react"

// WhatsApp Icon Component
const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
  </svg>
)

export default function HomePage() {
  const observerRef = useRef<IntersectionObserver | null>(null)
  const [currentReview, setCurrentReview] = useState(0)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const reviews = [
    {
      author: "Os Mol Cas",
      role: "Local Guide",
      reviews: "276 opiniones",
      photos: "38 fotos",
      time: "Hace 3 semanas",
      rating: 5,
      text: "Super confiable después de 5 años atendiendo mi mascota",
    },
    {
      author: "Hilda Cabrera",
      role: "Local Guide",
      reviews: "45 opiniones",
      photos: "10 fotos",
      time: "Hace 2 meses",
      rating: 5,
      text: "Los conozco hace muchos años. Excelentes y comprometidos.",
    },
    {
      author: "Carlos Prado",
      role: "Local Guide",
      reviews: "29 opiniones",
      photos: "11 fotos",
      time: "Hace un mes",
      rating: 5,
      text: "El mejor lugar para tus mascotas",
    },
    {
      author: "Liza Armenta",
      role: "Local Guide",
      reviews: "60 opiniones",
      photos: "43 fotos",
      time: "Hace un año",
      rating: 5,
      text: "Amazing service and support. They are certified by ICA to issue travel certificates. The doctor was so helpful and supportive, kept communication with me vía WhatsApp regarding the process with ICA until I had successfully gotten the certificate.",
    },
    {
      author: "pier ruhss",
      role: "Local Guide",
      reviews: "15 opiniones",
      photos: "25 fotos",
      time: "Hace 3 años",
      rating: 4,
      text: "Excelente sitio para tratar a tu mascota, el lugar es agradable y siempre bien aseado, los profesionales capacitados, el trato con mi perrita ha sido excelente, No le coloco 5 🌟 porque solo reciben efectivo.",
    },
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentReview((prev) => (prev + 1) % 5)
    }, 5000) // Cambia cada 5 segundos

    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    const isMobile = window.matchMedia("(max-width: 768px)").matches

    if (!isMobile) return

    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio > 0.5) {
            entry.target.classList.add("viewport-active")
          } else {
            entry.target.classList.remove("viewport-active")
          }
        })
      },
      {
        threshold: [0.5], // Activar cuando el 50% del elemento es visible
        rootMargin: "-20% 0px -20% 0px", // Detectar cuando está más cerca del centro
      },
    )

    const elements = document.querySelectorAll(".hover-element")
    elements.forEach((el) => observerRef.current?.observe(el))

    return () => {
      observerRef.current?.disconnect()
    }
  }, [])

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
                href="#servicios"
                onClick={(e) => {
                  e.preventDefault()
                  const element = document.getElementById('servicios')
                  element?.scrollIntoView({ behavior: 'smooth', block: 'start' })
                }}
                className="px-5 py-2.5 rounded-lg text-base font-semibold text-foreground/70 hover:text-primary hover:bg-primary/5 transition-all duration-200 relative group"
              >
                {"Servicios"}
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-primary to-accent group-hover:w-3/4 transition-all duration-200" />
              </a>
              <a 
                href="#nosotros"
                onClick={(e) => {
                  e.preventDefault()
                  const element = document.getElementById('nosotros')
                  element?.scrollIntoView({ behavior: 'smooth', block: 'start' })
                }}
                className="px-5 py-2.5 rounded-lg text-base font-semibold text-foreground/70 hover:text-primary hover:bg-primary/5 transition-all duration-200 relative group"
              >
                {"Nosotros"}
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-primary to-accent group-hover:w-3/4 transition-all duration-200" />
              </a>
              <a 
                href="#horarios"
                onClick={(e) => {
                  e.preventDefault()
                  const element = document.getElementById('horarios')
                  element?.scrollIntoView({ behavior: 'smooth', block: 'start' })
                }}
                className="px-5 py-2.5 rounded-lg text-base font-semibold text-foreground/70 hover:text-primary hover:bg-primary/5 transition-all duration-200 relative group"
              >
                {"Horarios"}
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-primary to-accent group-hover:w-3/4 transition-all duration-200" />
              </a>
              <a 
                href="#contacto"
                onClick={(e) => {
                  e.preventDefault()
                  const element = document.getElementById('contacto')
                  if (element) {
                    const headerOffset = 100
                    const elementPosition = element.getBoundingClientRect().top
                    const offsetPosition = elementPosition + window.pageYOffset - headerOffset
                    window.scrollTo({
                      top: offsetPosition,
                      behavior: 'smooth'
                    })
                  }
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
                  href="#contacto"
                  onClick={(e) => {
                    e.preventDefault()
                    const element = document.getElementById('contacto')
                    if (element) {
                      const headerOffset = 100
                      const elementPosition = element.getBoundingClientRect().top
                      const offsetPosition = elementPosition + window.pageYOffset - headerOffset
                      window.scrollTo({
                        top: offsetPosition,
                        behavior: 'smooth'
                      })
                    }
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
                href="#servicios"
                onClick={() => setMobileMenuOpen(false)}
                className="block px-4 py-3 rounded-lg text-base font-semibold text-foreground/70 hover:text-primary hover:bg-primary/5 transition-all"
              >
                {"Servicios"}
              </a>
              <a
                href="#nosotros"
                onClick={() => setMobileMenuOpen(false)}
                className="block px-4 py-3 rounded-lg text-base font-semibold text-foreground/70 hover:text-primary hover:bg-primary/5 transition-all"
              >
                {"Nosotros"}
              </a>
              <a
                href="#horarios"
                onClick={() => setMobileMenuOpen(false)}
                className="block px-4 py-3 rounded-lg text-base font-semibold text-foreground/70 hover:text-primary hover:bg-primary/5 transition-all"
              >
                {"Horarios"}
              </a>
              <a
                href="#contacto"
                onClick={(e) => {
                  e.preventDefault()
                  setMobileMenuOpen(false)
                  const element = document.getElementById('contacto')
                  if (element) {
                    const headerOffset = 100
                    const elementPosition = element.getBoundingClientRect().top
                    const offsetPosition = elementPosition + window.pageYOffset - headerOffset
                    window.scrollTo({
                      top: offsetPosition,
                      behavior: 'smooth'
                    })
                  }
                }}
                className="block px-4 py-3 rounded-lg text-base font-semibold text-foreground/70 hover:text-primary hover:bg-primary/5 transition-all"
              >
                {"Contacto"}
              </a>
              <div className="pt-2 px-4">
                <Button
                  className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-semibold"
                  asChild
                >
                  <a 
                    href="#contacto" 
                    onClick={(e) => {
                      e.preventDefault()
                      setMobileMenuOpen(false)
                      const element = document.getElementById('contacto')
                      if (element) {
                        const headerOffset = 100
                        const elementPosition = element.getBoundingClientRect().top
                        const offsetPosition = elementPosition + window.pageYOffset - headerOffset
                        window.scrollTo({
                          top: offsetPosition,
                          behavior: 'smooth'
                        })
                      }
                    }}
                  >
                    Contacto
                  </a>
                </Button>
              </div>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative container mx-auto px-4 py-16 md:py-24 overflow-hidden">
        {/* Background gradient mesh */}
        <div className="absolute inset-0 gradient-mesh opacity-50 -z-10" />
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center relative">
          <div className="space-y-6 animate-in fade-in slide-in-from-left duration-700">
            <div className="inline-flex items-center rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary animate-in fade-in slide-in-from-left duration-500 delay-100">
              <Heart className="mr-2 h-4 w-4 animate-scale-pulse" />
              Cuidando mascotas desde 1997
            </div>
            <h1 className="text-4xl font-bold leading-tight tracking-tight text-balance md:text-5xl lg:text-6xl bg-gradient-to-r from-primary via-primary to-accent bg-clip-text text-transparent">
              {"Clínica Veterinaria 24 Horas en Bogotá"}
            </h1>
            <p className="text-lg text-muted-foreground text-pretty leading-relaxed">
              {
                "Centro de salud especializado en atención médica de mascotas. Atención ininterrumpida las 24 horas del día, los 365 días del año en Puente Largo, Bogotá."
              }
            </p>
            <div className="flex flex-col gap-3 sm:flex-row animate-in fade-in slide-in-from-bottom duration-700 delay-300">
              <Button
                size="lg"
                className="bg-accent hover:bg-accent/90 text-accent-foreground hover:scale-105 transition-transform"
                asChild
              >
                <a href="https://wa.me/573123015259" target="_blank" rel="noopener noreferrer">
                  <Phone className="mr-2 h-5 w-5" />
                  312 301 5259
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-primary text-primary hover:bg-primary/10 bg-transparent hover:scale-105 transition-transform"
                asChild
              >
                <a href="https://wa.me/573114926051" target="_blank" rel="noopener noreferrer">
                  <Phone className="mr-2 h-5 w-5" />
                  311 492 6051
                </a>
              </Button>
            </div>
          </div>
          <div className="relative animate-in fade-in slide-in-from-right duration-700 delay-200">
            <div className="aspect-square rounded-3xl overflow-hidden bg-gradient-to-br from-primary/10 via-accent/5 to-primary/10 animate-float relative shadow-2xl">
              <div className="absolute inset-0 shine-effect opacity-0 hover:opacity-100 transition-opacity duration-300" />
              <img src="/title-image.png" alt="Veterinario con mascota" className="h-full w-full object-cover relative z-10" />
            </div>
            <div className="absolute -bottom-6 -right-6 gradient-accent text-accent-foreground rounded-2xl p-6 shadow-2xl max-w-[200px] animate-pulse-glow animate-in fade-in zoom-in duration-500 delay-500 border-2 border-white/20 backdrop-blur-sm">
              <div className="text-3xl font-bold drop-shadow-lg">{"27+"}</div>
              <div className="text-sm font-medium">{"Años de experiencia cuidando a tus mascotas"}</div>
            </div>
            {/* Floating decorative elements */}
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-primary/10 rounded-full blur-2xl animate-pulse" />
            <div className="absolute top-1/2 -right-8 w-32 h-32 bg-accent/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="servicios" className="relative bg-gradient-to-b from-muted/30 via-background to-muted/20 py-16 md:py-24 overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center space-y-4 mb-12 animate-in fade-in slide-in-from-bottom duration-700">
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl text-balance bg-gradient-to-r from-primary via-primary to-accent bg-clip-text text-transparent">{"Servicios Especializados"}</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              {"Atención médica completa para mascotas con tecnología de avanzada"}
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: Scissors,
                title: "Peluquería",
                description: "Servicios profesionales de estética y grooming para tu mascota",
                href: "/peluqueria",
              },
              {
                icon: Stethoscope,
                title: "Cirugía",
                description: "Procedimientos quirúrgicos con equipos modernos y personal especializado",
                href: "/cirugia",
              },
              {
                icon: Home,
                title: "Guardería 24 hrs",
                description: "Cuidado y hospedaje las 24 horas del día en instalaciones seguras",
                href: "/guarderia",
              },
              {
                icon: XRay,
                title: "Rayos X",
                description: "Diagnóstico por imágenes con tecnología radiológica avanzada",
                href: "/rayos-x",
              },
              {
                icon: FlaskConical,
                title: "Laboratorio",
                description: "Análisis clínicos completos para diagnósticos precisos",
                href: "/laboratorio",
              },
              {
                icon: Sparkles,
                title: "Limpieza Dental",
                description: "Limpieza dental profesional con tecnología ultrasónica Cavitron",
                href: "/limpieza-dental",
              },
              {
                icon: ShoppingBag,
                title: "Pet Shop",
                description: "Accesorios, juguetes y productos para el cuidado de tu mascota",
                href: "/pet-shop",
              },
              {
                icon: Pill,
                title: "Medicamentos",
                description: "Farmacia veterinaria con amplio stock de medicinas",
                href: "/medicamentos",
              },
              {
                icon: Heart,
                title: "Concentrados",
                description: "Alimentos balanceados y concentrados de las mejores marcas",
                href: "/concentrados",
              },
              {
                icon: Leaf,
                title: "Homeopatía",
                description: "Medicina alternativa y tratamientos homeopáticos especializados",
                href: "/homeopatia",
              },
              {
                icon: ScanLine,
                title: "Ecografías y Endoscopias",
                description: "Procedimientos diagnósticos no invasivos de última generación",
                href: "/ecografia-endoscopia",
              },
              {
                icon: Clock,
                title: "Emergencias 24/7",
                description: "Atención de urgencias disponible todos los días del año",
                href: "/emergencias",
              },
            ].map((service, index) => (
              <Link key={index} href={service.href}>
                <Card
                  className="p-6 card-hover bg-card h-full cursor-pointer group hover-element animate-in fade-in slide-in-from-bottom duration-500 border-gradient relative overflow-hidden"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {/* Gradient overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/0 via-primary/0 to-accent/0 group-hover:from-primary/5 group-hover:via-primary/5 group-hover:to-accent/5 transition-all duration-300 opacity-0 group-hover:opacity-100" />
                  
                  <div className="flex flex-col gap-4 relative z-10">
                    <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-primary/10 to-accent/10 group-hover:from-primary/20 group-hover:to-accent/20 group-[.viewport-active]:from-primary/20 group-[.viewport-active]:to-accent/20 transition-all group-hover:scale-110 group-hover:rotate-3 group-[.viewport-active]:scale-110 group-[.viewport-active]:rotate-3 duration-300 shadow-lg group-hover:shadow-xl">
                      <service.icon className="h-7 w-7 text-primary group-hover:text-accent group-[.viewport-active]:text-accent transition-colors group-hover:animate-bounce-soft group-[.viewport-active]:animate-bounce-soft" />
                    </div>
                    <h3 className="text-xl font-bold group-hover:text-primary group-[.viewport-active]:text-primary transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed group-hover:text-foreground/80 transition-colors">{service.description}</p>
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section id="nosotros" className="relative py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 gradient-mesh opacity-30 -z-10" />
        <div className="container mx-auto px-4 relative">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
            <div className="relative order-2 lg:order-1 animate-in fade-in slide-in-from-left duration-700 hover-element hover:scale-105 viewport-active:scale-105 transition-transform duration-500">
              <div className="aspect-[4/3] rounded-3xl overflow-hidden bg-gradient-to-br from-primary/10 via-accent/5 to-primary/10 shadow-2xl relative">
                <div className="absolute inset-0 shine-effect opacity-0 hover:opacity-100 transition-opacity duration-500" />
                <img
                  src="/clinica.png"
                  alt="Clínica moderna"
                  className="h-full w-full object-cover relative z-10"
                />
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-background/20 via-transparent to-transparent z-20" />
              </div>
              {/* Decorative dots */}
              <div className="absolute -bottom-4 -left-4 w-20 h-20 bg-primary/20 rounded-full blur-2xl" />
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-accent/20 rounded-full blur-2xl" />
            </div>
            <div className="space-y-6 order-1 lg:order-2 animate-in fade-in slide-in-from-right duration-700 delay-200">
              <h2 className="text-3xl font-bold tracking-tight md:text-4xl text-balance bg-gradient-to-r from-primary via-primary to-accent bg-clip-text text-transparent">
                {"¿Por qué elegir CLINIDOG?"}
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                {
                  "CLINIDOG inició sus actividades como clínica veterinaria en 1997. Bajo una visión futurista, se fue ampliando así como también sus servicios, infraestructura y equipos."
                }
              </p>
              <div className="space-y-4">
                {[
                  {
                    title: "Atención 24/7 los 365 días",
                    description: "Servicio ininterrumpido las 24 horas del día, todos los días del año",
                  },
                  {
                    title: "Tecnología de Avanzada",
                    description: "Equipos modernos para diagnósticos precisos y tratamientos efectivos",
                  },
                  {
                    title: "Equipo con Mística y Cariño",
                    description: "Personal que atiende a tu mascota con el cuidado y amor que merece",
                  },
                  {
                    title: "27 Años de Experiencia",
                    description: "Más de dos décadas brindando atención veterinaria de calidad en Bogotá",
                  },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="flex gap-4 animate-in fade-in slide-in-from-right duration-500 hover-element hover:translate-x-2 viewport-active:translate-x-2 transition-all p-4 rounded-xl hover:bg-primary/5 group"
                    style={{ animationDelay: `${400 + index * 100}ms` }}
                  >
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-accent/20 to-primary/20 group-hover:from-accent/30 group-hover:to-primary/30 transition-all group-hover:scale-110 shadow-lg">
                      <Heart className="h-6 w-6 text-accent animate-scale-pulse" />
                    </div>
                    <div className="space-y-1 flex-1">
                      <h3 className="font-bold text-lg group-hover:text-primary transition-colors">{item.title}</h3>
                      <p className="text-muted-foreground leading-relaxed group-hover:text-foreground/90 transition-colors">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Hours & Contact - Premium Design */}
      <section id="horarios" className="relative py-24 md:py-32 overflow-hidden bg-gradient-to-br from-primary/5 via-background to-accent/5">
        {/* Elegant background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl -translate-y-1/2" />
          <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-accent/5 rounded-full blur-3xl translate-y-1/2" />
          <div className="absolute top-1/2 left-0 w-96 h-96 bg-primary/3 rounded-full blur-3xl -translate-x-1/2" />
        </div>
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          {/* Header */}
          <div className="text-center mb-16 animate-in fade-in slide-in-from-bottom duration-700">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
              <Clock className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium text-primary">{"Disponibilidad 24/7"}</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-extrabold mb-6 bg-gradient-to-r from-primary via-primary to-accent bg-clip-text text-transparent">
              {"Estamos para Ayudarte"}
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              {"Atención veterinaria profesional disponible las 24 horas del día, los 365 días del año en Bogotá"}
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-12 lg:gap-8 max-w-7xl mx-auto mb-12">
            {/* Horarios Card */}
            <div className="md:col-span-5 animate-in fade-in slide-in-from-left duration-700">
              <Card className="bg-card border-2 border-primary/10 shadow-2xl p-8 md:p-10 h-full hover:shadow-primary/20 hover:border-primary/20 transition-all duration-500 group">
                <div className="flex items-center gap-4 mb-8">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-primary/80 shadow-lg group-hover:scale-110 transition-transform">
                    <Clock className="h-7 w-7 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-primary via-primary to-accent bg-clip-text text-transparent">{"Horarios"}</h3>
                    <p className="text-sm text-muted-foreground mt-1">{"Atención continua"}</p>
                  </div>
                </div>
                
                <div className="space-y-6">
                  <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-primary/10 via-primary/5 to-accent/5 p-6 border border-primary/20">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-2xl" />
                    <div className="relative">
                      <div className="flex flex-col gap-4 mb-4">
                        <div>
                          <span className="font-semibold text-2xl block mb-2 text-foreground">{"Todos los días"}</span>
                          <span className="text-sm text-muted-foreground">{"Durante todo el año"}</span>
                        </div>
                        <div className="inline-flex items-center gap-2 bg-accent px-5 py-3 rounded-full shadow-lg w-fit">
                          <div className="w-2 h-2 bg-accent-foreground rounded-full animate-pulse" />
                          <span className="text-base font-bold text-accent-foreground">{"24 HORAS"}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="rounded-xl bg-muted/50 p-6 border border-border">
                    <div className="flex items-start gap-4">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent/10">
                        <Heart className="h-5 w-5 text-accent" />
                      </div>
                      <p className="text-muted-foreground leading-relaxed pt-1">
                        {
                          "Atención ininterrumpida las 24 horas del día, los 365 días del año. Siempre disponibles para cuidar de tu mascota con el amor y profesionalismo que merece."
                        }
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 pt-4 border-t border-border">
                    <div className="flex -space-x-2">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-primary/70 border-2 border-background shadow-md" />
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-accent to-accent/70 border-2 border-background shadow-md" />
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-accent border-2 border-background shadow-md" />
                    </div>
                    <div>
                      <span className="block text-sm font-semibold text-foreground">{"Equipo disponible 24/7"}</span>
                      <span className="block text-xs text-muted-foreground">{"Veterinarios especializados"}</span>
                    </div>
                  </div>
                </div>
              </Card>
            </div>

            {/* Map Card - Centro y más grande */}
            <div id="ubicacion" className="md:col-span-7 animate-in fade-in slide-in-from-bottom duration-700 delay-300">
              <Card className="bg-card border-2 border-primary/10 shadow-2xl p-6 md:p-8 h-full hover:shadow-primary/20 hover:border-primary/20 transition-all duration-500 flex flex-col group">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-4">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-accent to-accent/80 shadow-lg group-hover:scale-110 transition-transform">
                      <MapPin className="h-7 w-7 text-accent-foreground" />
                    </div>
                    <div>
                      <h3 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-primary via-primary to-accent bg-clip-text text-transparent">{"Nuestra Ubicación"}</h3>
                      <p className="text-sm text-muted-foreground mt-1">{"Puente Largo, Bogotá"}</p>
                    </div>
                  </div>
                  <a
                    href="https://maps.app.goo.gl/fv3ihJzEAqBb7PZBA"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hidden md:flex items-center gap-2 px-4 py-2 rounded-lg bg-primary/10 hover:bg-primary/20 text-primary font-medium transition-colors text-sm"
                  >
                    <span>{"Abrir Maps"}</span>
                    <MapPin className="h-4 w-4" />
                  </a>
                </div>
                
                <div className="flex-1 flex flex-col rounded-xl overflow-hidden border-2 border-border shadow-inner bg-muted/30">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3976.4422314636786!2d-74.06573622418668!3d4.692962141722866!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f9adadf936d11%3A0x6f30c3932148ba2d!2sVETERINARIA%20CLINIDOG!5e0!3m2!1ses-419!2sco!4v1767744558861!5m2!1ses-419!2sco"
                    width="100%"
                    height="100%"
                    style={{ border: 0, minHeight: '450px' }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="w-full h-full"
                  />
                </div>
                <a
                  href="https://maps.app.goo.gl/fv3ihJzEAqBb7PZBA"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="md:hidden mt-4 flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-primary/10 hover:bg-primary/20 text-primary font-medium transition-colors text-sm"
                >
                  <span>{"Abrir en Google Maps"}</span>
                  <MapPin className="h-4 w-4" />
                </a>
              </Card>
            </div>

          </div>

          {/* Contacto Section - Full Width */}
          <div id="contacto" className="grid md:grid-cols-2 gap-6 lg:gap-8 max-w-6xl mx-auto animate-in fade-in slide-in-from-bottom duration-700 delay-400">
            {/* Teléfonos Card */}
            <Card className="bg-card border-2 border-primary/10 shadow-xl p-8 hover:shadow-primary/20 hover:border-primary/20 transition-all duration-500 group">
              <div className="flex items-center gap-4 mb-6">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-accent to-accent/80 shadow-lg group-hover:scale-110 transition-transform">
                  <Phone className="h-7 w-7 text-accent-foreground" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold bg-gradient-to-r from-primary via-primary to-accent bg-clip-text text-transparent">{"Teléfonos"}</h3>
                  <p className="text-sm text-muted-foreground mt-1">{"Contáctanos por WhatsApp"}</p>
                </div>
              </div>
              
              <div className="space-y-4">
                <a 
                  href="https://wa.me/573123015259" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center justify-between p-4 rounded-xl bg-gradient-to-r from-primary/5 to-accent/5 hover:from-primary/10 hover:to-accent/10 border border-primary/10 transition-all group/item"
                >
                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 group-hover/item:bg-primary/20 transition-colors">
                      <WhatsAppIcon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <span className="block font-bold text-xl text-foreground">{"312 301 5259"}</span>
                      <span className="block text-sm text-muted-foreground">{"Línea principal"}</span>
                    </div>
                  </div>
                  <span className="px-3 py-1 rounded-full bg-accent/20 text-xs font-medium text-accent">{"WhatsApp"}</span>
                </a>
                
                <a 
                  href="https://wa.me/573114926051" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center justify-between p-4 rounded-xl bg-gradient-to-r from-primary/5 to-accent/5 hover:from-primary/10 hover:to-accent/10 border border-primary/10 transition-all group/item"
                >
                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 group-hover/item:bg-primary/20 transition-colors">
                      <WhatsAppIcon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <span className="block font-bold text-xl text-foreground">{"311 492 6051"}</span>
                      <span className="block text-sm text-muted-foreground">{"Línea alternativa"}</span>
                    </div>
                  </div>
                  <span className="px-3 py-1 rounded-full bg-accent/20 text-xs font-medium text-accent">{"WhatsApp"}</span>
                </a>
              </div>
              
              <div className="mt-6 pt-6 border-t border-border">
                <Button
                  className="w-full bg-accent hover:bg-accent/90 text-accent-foreground shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all duration-300 font-bold py-6"
                  size="lg"
                  asChild
                >
                  <a href="https://wa.me/573123015259" target="_blank" rel="noopener noreferrer">
                    <Phone className="mr-2 h-5 w-5" />
                    Llamar Ahora
                  </a>
                </Button>
              </div>
            </Card>

            {/* Dirección y Zonas Card */}
            <Card className="bg-card border-2 border-primary/10 shadow-xl p-8 hover:shadow-primary/20 hover:border-primary/20 transition-all duration-500 group">
              <div className="flex items-center gap-4 mb-6">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-primary/80 shadow-lg group-hover:scale-110 transition-transform">
                  <MapPin className="h-7 w-7 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold bg-gradient-to-r from-primary via-primary to-accent bg-clip-text text-transparent">{"Dirección"}</h3>
                  <p className="text-sm text-muted-foreground mt-1">{"Visítanos en nuestra clínica"}</p>
                </div>
              </div>
              
              <div className="space-y-6">
                <div className="p-5 rounded-xl bg-muted/50 border border-border">
                  <a
                    href="https://maps.app.goo.gl/fv3ihJzEAqBb7PZBA"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block group/item"
                  >
                    <div className="flex items-start gap-3">
                      <MapPin className="h-5 w-5 text-primary mt-1 shrink-0 group-hover/item:text-accent transition-colors" />
                      <div>
                        <span className="block font-semibold text-foreground group-hover/item:text-primary transition-colors mb-1">
                          {"Transversal 54 # 103B - 78"}
                        </span>
                        <span className="block text-foreground/80 group-hover/item:text-foreground transition-colors mb-1">
                          {"Puente Largo, Bogotá"}
                        </span>
                        <span className="block text-sm text-muted-foreground group-hover/item:text-foreground/60 transition-colors">
                          {"Colombia"}
                        </span>
                      </div>
                    </div>
                  </a>
                </div>

                <div className="p-5 rounded-xl bg-gradient-to-br from-primary/5 to-accent/5 border border-primary/10">
                  <div className="flex items-start gap-3 mb-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                      <MapPin className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg mb-2 text-foreground">{"Zonas de Servicio"}</h4>
                      <p className="text-sm leading-relaxed text-muted-foreground">
                        {
                          "Puente Largo, Pasadena, Ilarco, Niza, Rio Negro, Pontevedra, Alhambra, Morato y Lagos de Córdoba"
                        }
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Google Reviews Section */}
      <section className="relative bg-gradient-to-b from-background via-muted/20 to-muted/30 py-16 md:py-24 overflow-hidden">
        {/* Decorative background */}
        <div className="absolute top-1/2 left-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl translate-x-1/4" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            {/* Google Business Info */}
            <div className="text-center mb-12">
              <div className="flex items-center justify-center gap-2 mb-2">
                <h2 className="text-2xl font-bold bg-gradient-to-r from-primary via-primary to-accent bg-clip-text text-transparent">{"VETERINARIA CLINIDOG"}</h2>
              </div>
              <p className="text-muted-foreground mb-2">{"Tv. 56 #104a-21, Bogotá, Colombia"}</p>
              <div className="flex items-center justify-center gap-2">
                <div className="flex items-center gap-1">
                  <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  <span className="text-2xl font-bold">{"4.6"}</span>
                </div>
                <span className="text-muted-foreground">{"78 opiniones"}</span>
              </div>
              <a
                href="https://www.google.com/search?q=clinidog&oq=clini&gs_lcrp=EgZjaHJvbWUqBggAEEUYOzIGCAAQRRg7MgYIARBFGDsyBggCEEUYOTIGCAMQRRg7MgYIBBBFGDsyBggFEEUYPDIGCAYQRRg9MgYIBxBFGD3SAQc0NzFqMGo3qAIIsAIB8QVwRScVb5nF-_EFcEUnFW-Zxfs&sourceid=chrome&ie=UTF-8#lrd=0x8e3f9adadf936d11:0x6f30c3932148ba2d,1,,,"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-muted-foreground mt-4 hover:text-primary hover:underline inline-block transition-colors"
              >
                {"Opiniones verificadas de Google Reviews"}
              </a>
            </div>

            {/* Reviews Carousel */}
            <div className="relative">
              <div className="overflow-hidden rounded-2xl">
                <div
                  className="flex transition-transform duration-500 ease-in-out"
                  style={{ transform: `translateX(-${currentReview * 100}%)` }}
                >
                  {reviews.map((review, index) => (
                    <div key={index} className="min-w-full px-4">
                      <Card className="p-8 bg-card shadow-xl border border-primary/10 hover:shadow-2xl transition-all duration-300">
                        <div className="space-y-4">
                          {/* Review Header */}
                          <div className="flex items-start justify-between">
                            <div className="flex-1">
                              <div className="flex items-center gap-2 mb-1">
                                <h3 className="font-bold text-lg">{review.author}</h3>
                                {review.role && (
                                  <span className="text-xs bg-primary/10 text-primary px-2 py-0.5 rounded">
                                    {review.role}
                                  </span>
                                )}
                              </div>
                              <div className="flex items-center gap-3 text-xs text-muted-foreground">
                                <span>{review.reviews}</span>
                                <span>•</span>
                                <span>{review.photos}</span>
                                <span>•</span>
                                <span>{review.time}</span>
                              </div>
                            </div>
                            <div className="flex gap-1">
                              {[...Array(5)].map((_, i) => (
                                <Star
                                  key={i}
                                  className={`h-5 w-5 ${
                                    i < review.rating
                                      ? "fill-yellow-400 text-yellow-400"
                                      : "fill-gray-200 text-gray-200"
                                  }`}
                                />
                              ))}
                            </div>
                          </div>

                          {/* Review Text */}
                          <p className="text-muted-foreground leading-relaxed text-base">
                            {review.text}
                          </p>

                          {/* Google Badge */}
                          <div className="pt-4 border-t">
                            <div className="flex items-center gap-2 text-sm text-muted-foreground">
                              <svg
                                className="h-5 w-5"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                              >
                                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
                                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
                              </svg>
                              <span>{"Opinión verificada de Google"}</span>
                            </div>
                          </div>
                        </div>
                      </Card>
                    </div>
                  ))}
                </div>
              </div>

              {/* Navigation Buttons */}
              <button
                onClick={() =>
                  setCurrentReview((prev) => (prev - 1 + reviews.length) % reviews.length)
                }
                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-background border rounded-full p-2 shadow-lg hover:bg-accent transition-colors z-10"
                aria-label="Comentario anterior"
              >
                <ChevronLeft className="h-6 w-6" />
              </button>
              <button
                onClick={() => setCurrentReview((prev) => (prev + 1) % reviews.length)}
                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-background border rounded-full p-2 shadow-lg hover:bg-accent transition-colors z-10"
                aria-label="Siguiente comentario"
              >
                <ChevronRight className="h-6 w-6" />
              </button>

              {/* Dots Indicator */}
              <div className="flex justify-center gap-2 mt-8">
                {reviews.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentReview(index)}
                    className={`h-2 rounded-full transition-all ${
                      index === currentReview ? "bg-primary w-8" : "bg-muted-foreground/30 w-2"
                    }`}
                    aria-label={`Ir al comentario ${index + 1}`}
                  />
                ))}
              </div>
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
              <div className="flex items-center gap-3 mb-4">
                <img src="/logo.png" alt="CLINIDOG Logo" className="h-10 w-10 object-contain" />
                <span className="font-bold text-xl bg-gradient-to-r from-primary via-primary to-accent bg-clip-text text-transparent">{"CLINIDOG"}</span>
              </div>
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
