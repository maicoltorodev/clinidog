import { ServiceLayout } from "@/components/service-layout"
import { Card } from "@/components/ui/card"
import { Leaf, Heart, Sparkles, CheckCircle } from "lucide-react"

export default function HomeopatiaPage() {
  return (
    <ServiceLayout>
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-4 mb-6">
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10">
              <Leaf className="h-8 w-8 text-primary" />
            </div>
            <div>
              <h1 className="text-4xl font-bold text-balance">{"Tratamiento Homeopático"}</h1>
              <p className="text-lg text-muted-foreground mt-2">{"Medicina alternativa natural y holística"}</p>
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
                "La homeopatía veterinaria es una alternativa natural que estimula las capacidades curativas del organismo. Utilizamos remedios naturales individualizados para tratar diversas afecciones, complementando o como alternativa a la medicina convencional."
              }
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 gap-6 mt-12">
            <Card className="p-6">
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                  <Leaf className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">{"Tratamientos Naturales"}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {"Remedios homeopáticos preparados con sustancias naturales sin efectos secundarios agresivos."}
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
                  <h3 className="font-semibold text-lg mb-2">{"Enfoque Holístico"}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {"Tratamiento integral que considera al animal como un todo, no solo los síntomas."}
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                  <Sparkles className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">{"Condiciones Crónicas"}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {"Especialmente efectiva para enfermedades crónicas y problemas recurrentes."}
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                  <Leaf className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">{"Complemento a Medicina Convencional"}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {"Puede combinarse con tratamientos tradicionales para mejores resultados."}
                  </p>
                </div>
              </div>
            </Card>
          </div>

          {/* Conditions Treated */}
          <Card className="p-8 bg-muted/50 mt-12">
            <h3 className="text-2xl font-bold mb-6">{"Condiciones que Tratamos"}</h3>
            <div className="grid md:grid-cols-2 gap-3">
              {[
                "Alergias y problemas dermatológicos",
                "Problemas digestivos y gastrointestinales",
                "Ansiedad y problemas de comportamiento",
                "Enfermedades respiratorias recurrentes",
                "Problemas articulares y musculares",
                "Fortalecimiento del sistema inmunológico",
                "Problemas urinarios crónicos",
                "Apoyo en enfermedades degenerativas",
              ].map((condition, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <p className="leading-relaxed text-sm">{condition}</p>
                </div>
              ))}
            </div>
          </Card>

          {/* Benefits */}
          <Card className="p-8 bg-primary/5 mt-8">
            <h3 className="text-2xl font-bold mb-6">{"Beneficios de la Homeopatía"}</h3>
            <div className="space-y-4">
              {[
                "Tratamientos sin efectos secundarios agresivos",
                "Estimula las capacidades naturales de curación del cuerpo",
                "Segura para animales de todas las edades",
                "Puede usarse junto con medicamentos convencionales",
                "Enfoque personalizado para cada mascota",
                "Atención a las causas profundas, no solo síntomas",
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
