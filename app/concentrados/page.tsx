import { ServiceLayout } from "@/components/service-layout"
import { Card } from "@/components/ui/card"
import { Heart, Bold as Food, Sparkles, CheckCircle } from "lucide-react"

export default function ConcentradosPage() {
  return (
    <ServiceLayout>
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-4 mb-6">
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10">
              <Heart className="h-8 w-8 text-primary" />
            </div>
            <div>
              <h1 className="text-4xl font-bold text-balance">{"Concentrados y Alimento"}</h1>
              <p className="text-lg text-muted-foreground mt-2">{"Nutrición de calidad para tu mascota"}</p>
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
                "Ofrecemos una amplia variedad de alimentos balanceados y concentrados de las mejores marcas del mercado. Contamos con opciones para todas las etapas de vida, razas especiales y necesidades dietéticas específicas de tu mascota."
              }
            </p>
          </div>

          {/* Products Grid */}
          <div className="grid md:grid-cols-2 gap-6 mt-12">
            <Card className="p-6">
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                  <Food className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">{"Alimento para Cachorros"}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {"Fórmulas especiales para el crecimiento saludable en las primeras etapas de vida."}
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
                  <h3 className="font-semibold text-lg mb-2">{"Alimento para Adultos"}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {"Nutrición balanceada para mantener la salud y vitalidad en la edad adulta."}
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
                  <h3 className="font-semibold text-lg mb-2">{"Alimento Premium"}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {"Marcas de gama alta con ingredientes seleccionados y mayor valor nutricional."}
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                  <Food className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">{"Dietas Especiales"}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {"Alimentos medicados para problemas renales, hepáticos, digestivos y alergias."}
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
                  <h3 className="font-semibold text-lg mb-2">{"Alimento para Gatos"}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {"Fórmulas específicas para felinos con los nutrientes que necesitan."}
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
                  <h3 className="font-semibold text-lg mb-2">{"Snacks y Premios"}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {"Golosinas saludables para entrenamiento y momentos especiales con tu mascota."}
                  </p>
                </div>
              </div>
            </Card>
          </div>

          {/* Benefits */}
          <Card className="p-8 bg-muted/50 mt-12">
            <h3 className="text-2xl font-bold mb-6">{"Marcas de Confianza"}</h3>
            <div className="space-y-4">
              {[
                "Marcas líderes reconocidas internacionalmente",
                "Alimentos balanceados con todos los nutrientes esenciales",
                "Opciones para todas las razas, tamaños y edades",
                "Asesoría profesional para elegir el mejor alimento",
                "Productos con registro sanitario y garantía de calidad",
                "Disponibilidad en diferentes presentaciones y tamaños",
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
