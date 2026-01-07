import { ServiceLayout } from "@/components/service-layout"
import { Card } from "@/components/ui/card"
import { ScanLine, Heart, Search, CheckCircle } from "lucide-react"

export default function EcografiaEndoscopiaPage() {
  return (
    <ServiceLayout>
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-4 mb-6">
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10">
              <ScanLine className="h-8 w-8 text-primary" />
            </div>
            <div>
              <h1 className="text-4xl font-bold text-balance">{"Ecografías y Endoscopias"}</h1>
              <p className="text-lg text-muted-foreground mt-2">{"Diagnóstico por imagen de última generación"}</p>
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
                "Contamos con tecnología de avanzada para realizar ecografías y endoscopias, procedimientos diagnósticos no invasivos que permiten visualizar órganos internos y estructuras del cuerpo con gran detalle, facilitando diagnósticos precisos y oportunos."
              }
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 gap-6 mt-12">
            <Card className="p-6">
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                  <ScanLine className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">{"Ecografía Abdominal"}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {"Evaluación de órganos abdominales como hígado, riñones, vejiga, bazo y sistema digestivo."}
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
                  <h3 className="font-semibold text-lg mb-2">{"Ecocardiografía"}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {"Ecografía especializada del corazón para evaluar función cardíaca y detectar anomalías."}
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                  <Search className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">{"Endoscopia Digestiva"}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {"Exploración interna del sistema digestivo para diagnóstico y extracción de cuerpos extraños."}
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                  <ScanLine className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">{"Ecografía de Gestación"}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {"Seguimiento de embarazo, conteo de fetos y evaluación de su desarrollo."}
                  </p>
                </div>
              </div>
            </Card>
          </div>

          {/* Benefits */}
          <Card className="p-8 bg-muted/50 mt-12">
            <h3 className="text-2xl font-bold mb-6">{"Ventajas de Nuestros Procedimientos"}</h3>
            <div className="space-y-4">
              {[
                "Procedimientos no invasivos que no causan dolor",
                "No requieren radiación como los rayos X",
                "Imágenes en tiempo real para diagnósticos precisos",
                "Equipos de última generación con alta resolución",
                "Realizados por veterinarios especializados",
                "Permiten visualizar tejidos blandos con gran detalle",
                "Útiles para guiar biopsias y otros procedimientos",
              ].map((benefit, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-primary shrink-0 mt-0.5" />
                  <p className="leading-relaxed">{benefit}</p>
                </div>
              ))}
            </div>
          </Card>

          {/* Use Cases */}
          <Card className="p-8 bg-primary/5 mt-8">
            <h3 className="text-2xl font-bold mb-6">{"¿Cuándo se Necesitan?"}</h3>
            <div className="space-y-3 text-muted-foreground">
              <p className="leading-relaxed">
                {
                  "Las ecografías y endoscopias son especialmente útiles para diagnosticar problemas abdominales, cardíacos, confirmar embarazos, detectar tumores, evaluar órganos internos, localizar cuerpos extraños y guiar procedimientos como biopsias."
                }
              </p>
              <p className="leading-relaxed">
                {
                  "Son procedimientos seguros que proporcionan información valiosa sin someter a tu mascota a cirugías exploratorias innecesarias."
                }
              </p>
            </div>
          </Card>
        </div>
      </section>
    </ServiceLayout>
  )
}
