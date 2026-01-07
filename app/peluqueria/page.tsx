import { ServiceLayout } from "@/components/service-layout"
import { Card } from "@/components/ui/card"
import { Scissors, Sparkles, Heart, CheckCircle } from "lucide-react"

export default function PeluqueriaPage() {
  return (
    <ServiceLayout>
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-4 mb-6">
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10">
              <Scissors className="h-8 w-8 text-primary" />
            </div>
            <div>
              <h1 className="text-4xl font-bold text-balance">{"Peluquería Canina y Felina"}</h1>
              <p className="text-lg text-muted-foreground mt-2">{"Servicios profesionales de estética y grooming"}</p>
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
                "En CLINIDOG ofrecemos servicios profesionales de peluquería canina y felina con personal capacitado y productos de alta calidad. Cuidamos la estética de tu mascota con amor y dedicación, respetando su bienestar en todo momento."
              }
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 gap-6 mt-12">
            <Card className="p-6">
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                  <Sparkles className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">{"Baño y Secado"}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {
                      "Baño completo con shampoos especializados según el tipo de pelaje, secado profesional y cepillado."
                    }
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                  <Scissors className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">{"Corte de Pelo"}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {
                      "Cortes según raza, estilo personalizado o preferencia del dueño. Técnicas profesionales de grooming."
                    }
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
                  <h3 className="font-semibold text-lg mb-2">{"Corte de Uñas"}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {"Corte seguro de uñas con herramientas especializadas, evitando molestias y lesiones."}
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
                  <h3 className="font-semibold text-lg mb-2">{"Limpieza de Oídos"}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {"Limpieza profunda de oídos para prevenir infecciones y mantener la higiene de tu mascota."}
                  </p>
                </div>
              </div>
            </Card>
          </div>

          {/* Benefits */}
          <Card className="p-8 bg-muted/50 mt-12">
            <h3 className="text-2xl font-bold mb-6">{"Beneficios de Nuestro Servicio"}</h3>
            <div className="space-y-4">
              {[
                "Personal profesional capacitado en grooming canino y felino",
                "Productos de alta calidad específicos para cada tipo de pelaje",
                "Ambiente tranquilo y cómodo para reducir el estrés de tu mascota",
                "Atención personalizada según las necesidades de cada animal",
                "Equipos modernos y técnicas actualizadas de estética animal",
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
