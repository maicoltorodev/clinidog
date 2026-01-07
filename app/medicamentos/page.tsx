import { ServiceLayout } from "@/components/service-layout"
import { Card } from "@/components/ui/card"
import { Pill, Heart, Shield, CheckCircle } from "lucide-react"

export default function MedicamentosPage() {
  return (
    <ServiceLayout>
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-4 mb-6">
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10">
              <Pill className="h-8 w-8 text-primary" />
            </div>
            <div>
              <h1 className="text-4xl font-bold text-balance">{"Medicamentos Veterinarios"}</h1>
              <p className="text-lg text-muted-foreground mt-2">{"Farmacia completa para la salud de tu mascota"}</p>
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
                "Nuestra farmacia veterinaria cuenta con un amplio inventario de medicamentos de las mejores marcas para tratar diversas condiciones de salud. Contamos con antibióticos, antiinflamatorios, antiparasitarios, suplementos y mucho más."
              }
            </p>
          </div>

          {/* Categories Grid */}
          <div className="grid md:grid-cols-2 gap-6 mt-12">
            <Card className="p-6">
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                  <Pill className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">{"Antibióticos"}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {"Medicamentos para tratar infecciones bacterianas con fórmulas específicas para veterinaria."}
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
                  <h3 className="font-semibold text-lg mb-2">{"Antiinflamatorios"}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {"Medicamentos para el dolor y la inflamación, seguros y efectivos para mascotas."}
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
                  <h3 className="font-semibold text-lg mb-2">{"Antiparasitarios"}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {"Desparasitantes internos y externos, pipetas antipulgas y antigarrapatas."}
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
                  <h3 className="font-semibold text-lg mb-2">{"Suplementos"}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {"Vitaminas, minerales y suplementos nutricionales para fortalecer la salud."}
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                  <Pill className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">{"Medicamentos Especializados"}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {"Tratamientos para enfermedades crónicas, problemas cardíacos, diabetes y más."}
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
                  <h3 className="font-semibold text-lg mb-2">{"Productos Dermatológicos"}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {"Tratamientos para problemas de piel, alergias y condiciones dermatológicas."}
                  </p>
                </div>
              </div>
            </Card>
          </div>

          {/* Benefits */}
          <Card className="p-8 bg-muted/50 mt-12">
            <h3 className="text-2xl font-bold mb-6">{"Ventajas de Nuestra Farmacia"}</h3>
            <div className="space-y-4">
              {[
                "Medicamentos originales de laboratorios certificados",
                "Almacenamiento adecuado garantizando la efectividad",
                "Asesoría profesional sobre dosis y administración",
                "Disponibilidad inmediata las 24 horas del día",
                "Precios competitivos y justos",
                "Prescripción veterinaria incluida en tus consultas",
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
