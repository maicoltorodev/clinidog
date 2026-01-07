import { ServiceLayout } from "@/components/service-layout"
import { Card } from "@/components/ui/card"
import { Home, Heart, Shield, Clock, CheckCircle } from "lucide-react"

export default function GuarderiaPage() {
  return (
    <ServiceLayout>
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-4 mb-6">
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10">
              <Home className="h-8 w-8 text-primary" />
            </div>
            <div>
              <h1 className="text-4xl font-bold text-balance">{"Guardería y Hospedaje 24 Horas"}</h1>
              <p className="text-lg text-muted-foreground mt-2">
                {"Cuidado profesional y amoroso las 24 horas del día"}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Description */}
      <section className="container mx-auto px-4 pb-12">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="prose prose-lg max-w-none">
            <p className="text-lg leading-relaxed text-muted-foreground">
              {
                "Nuestro servicio de guardería y hospedaje ofrece un ambiente seguro, cómodo y amoroso para tu mascota. Con supervisión profesional las 24 horas del día, garantizamos el bienestar y la felicidad de tu compañero mientras estás ausente."
              }
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 gap-6 mt-12">
            <Card className="p-6">
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                  <Clock className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">{"Supervisión 24/7"}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {"Vigilancia constante por personal capacitado durante todo el día y la noche."}
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                  <Heart className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">{"Alimentación Personalizada"}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {"Respetamos la dieta específica de tu mascota con horarios establecidos."}
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                  <Shield className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">{"Instalaciones Seguras"}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {"Áreas amplias, limpias y seguras diseñadas para el confort de tu mascota."}
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                  <Home className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">{"Espacios Cómodos"}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {"Áreas de descanso confortables y espacios de juego para mantenerlos activos."}
                  </p>
                </div>
              </div>
            </Card>
          </div>

          {/* Benefits */}
          <Card className="p-8 bg-muted/50 mt-12">
            <h3 className="text-2xl font-bold mb-6">{"¿Qué Incluye Nuestro Servicio?"}</h3>
            <div className="space-y-4">
              {[
                "Supervisión veterinaria permanente las 24 horas",
                "Alimentación según las indicaciones del dueño",
                "Administración de medicamentos si es necesario",
                "Áreas de juego y ejercicio supervisado",
                "Limpieza y mantenimiento constante de las instalaciones",
                "Atención inmediata ante cualquier emergencia médica",
                "Reportes del estado de tu mascota durante su estadía",
              ].map((benefit, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-primary shrink-0 mt-0.5" />
                  <p className="leading-relaxed">{benefit}</p>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </section>
    </ServiceLayout>
  )
}
