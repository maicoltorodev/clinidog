import { ServiceLayout } from "@/components/service-layout"
import { Card } from "@/components/ui/card"
import { Grab as XRay, Search, Heart, CheckCircle } from "lucide-react"

export default function RayosXPage() {
  return (
    <ServiceLayout>
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-4 mb-6">
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10">
              <XRay className="h-8 w-8 text-primary" />
            </div>
            <div>
              <h1 className="text-4xl font-bold text-balance">{"Rayos X Veterinarios"}</h1>
              <p className="text-lg text-muted-foreground mt-2">{"Diagnóstico por imágenes de alta precisión"}</p>
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
                "Contamos con equipos de radiología digital de última generación que nos permiten obtener imágenes claras y precisas para diagnosticar diversas condiciones médicas. Los rayos X son fundamentales para detectar fracturas, problemas respiratorios, objetos extraños y muchas otras afecciones."
              }
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 gap-6 mt-12">
            <Card className="p-6">
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                  <XRay className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">{"Radiografías Óseas"}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {"Diagnóstico de fracturas, luxaciones y problemas ortopédicos con imágenes de alta definición."}
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
                  <h3 className="font-semibold text-lg mb-2">{"Radiografías Torácicas"}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {
                      "Evaluación de pulmones, corazón y estructuras torácicas para detectar enfermedades respiratorias."
                    }
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
                  <h3 className="font-semibold text-lg mb-2">{"Radiografías Abdominales"}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {"Visualización de órganos internos y detección de objetos extraños o masas anormales."}
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                  <XRay className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">{"Radiografías Dentales"}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {"Evaluación de la salud dental y estructuras maxilofaciales para diagnósticos precisos."}
                  </p>
                </div>
              </div>
            </Card>
          </div>

          {/* Benefits */}
          <Card className="p-8 bg-muted/50 mt-12">
            <h3 className="text-2xl font-bold mb-6">{"Ventajas de Nuestro Servicio"}</h3>
            <div className="space-y-4">
              {[
                "Equipos de radiología digital de última generación",
                "Imágenes de alta resolución para diagnósticos precisos",
                "Resultados rápidos para comenzar el tratamiento sin demora",
                "Menor exposición a radiación que sistemas tradicionales",
                "Personal capacitado en técnicas de imagen veterinaria",
                "Interpretación inmediata por veterinarios especializados",
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
