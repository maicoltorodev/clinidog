import { ServiceLayout } from "@/components/service-layout"
import { Card } from "@/components/ui/card"
import { FlaskConical, Microscope, Heart, Droplet, CheckCircle } from "lucide-react"

export default function LaboratorioPage() {
  return (
    <ServiceLayout>
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-4 mb-6">
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10">
              <FlaskConical className="h-8 w-8 text-primary" />
            </div>
            <div>
              <h1 className="text-4xl font-bold text-balance">{"Laboratorio Clínico"}</h1>
              <p className="text-lg text-muted-foreground mt-2">{"Análisis clínicos completos y precisos"}</p>
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
                "Nuestro laboratorio clínico veterinario cuenta con equipos modernos para realizar análisis completos que permiten diagnósticos precisos. Ofrecemos una amplia gama de pruebas hematológicas, bioquímicas, microbiológicas y parasitológicas."
              }
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 gap-6 mt-12">
            <Card className="p-6">
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                  <Droplet className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">{"Análisis Hematológicos"}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {"Hemogramas completos, conteo de células sanguíneas y evaluación de la función de la sangre."}
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                  <FlaskConical className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">{"Química Sanguínea"}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {"Evaluación de función renal, hepática, niveles de glucosa, electrolitos y más."}
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                  <Microscope className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">{"Análisis de Orina"}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {"Urianálisis completo para detectar infecciones, problemas renales y otras afecciones."}
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
                  <h3 className="font-semibold text-lg mb-2">{"Exámenes Coprológicos"}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {"Detección de parásitos intestinales y evaluación de la salud digestiva."}
                  </p>
                </div>
              </div>
            </Card>
          </div>

          {/* Benefits */}
          <Card className="p-8 bg-muted/50 mt-12">
            <h3 className="text-2xl font-bold mb-6">{"¿Por Qué Realizar Análisis de Laboratorio?"}</h3>
            <div className="space-y-4">
              {[
                "Diagnósticos precisos para iniciar el tratamiento adecuado",
                "Detección temprana de enfermedades antes de que muestren síntomas",
                "Monitoreo de condiciones crónicas como diabetes o problemas renales",
                "Evaluación prequirúrgica para garantizar la seguridad de la anestesia",
                "Resultados rápidos procesados en nuestras instalaciones",
                "Interpretación profesional por veterinarios especializados",
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
