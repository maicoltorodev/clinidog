import { ServiceLayout } from "@/components/service-layout"
import { Card } from "@/components/ui/card"
import { Stethoscope, Heart, Shield, Activity, CheckCircle } from "lucide-react"

export default function CirugiaPage() {
  return (
    <ServiceLayout>
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-4 mb-6">
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10">
              <Stethoscope className="h-8 w-8 text-primary" />
            </div>
            <div>
              <h1 className="text-4xl font-bold text-balance">{"Cirugía Veterinaria"}</h1>
              <p className="text-lg text-muted-foreground mt-2">
                {"Procedimientos quirúrgicos con tecnología moderna"}
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
                "Contamos con quirófanos equipados con tecnología de avanzada para realizar cirugías de baja, mediana y alta complejidad. Nuestro equipo de veterinarios especializados garantiza la seguridad y el bienestar de tu mascota durante todo el procedimiento."
              }
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 gap-6 mt-12">
            <Card className="p-6">
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                  <Stethoscope className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">{"Cirugías de Rutina"}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {"Esterilizaciones, castraciones y procedimientos preventivos con técnicas modernas."}
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                  <Activity className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">{"Cirugías de Tejidos Blandos"}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {"Procedimientos abdominales, torácicos y de órganos internos con precisión."}
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
                  <h3 className="font-semibold text-lg mb-2">{"Cirugías Ortopédicas"}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {"Fracturas, luxaciones y problemas articulares con equipos especializados."}
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
                  <h3 className="font-semibold text-lg mb-2">{"Cirugías de Emergencia"}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {"Atención quirúrgica urgente disponible las 24 horas del día."}
                  </p>
                </div>
              </div>
            </Card>
          </div>

          {/* Benefits */}
          <Card className="p-8 bg-muted/50 mt-12">
            <h3 className="text-2xl font-bold mb-6">{"Nuestro Compromiso Quirúrgico"}</h3>
            <div className="space-y-4">
              {[
                "Quirófanos equipados con tecnología moderna y esterilización completa",
                "Anestesia monitoreada constantemente por personal especializado",
                "Veterinarios con amplia experiencia en procedimientos quirúrgicos",
                "Cuidados post-operatorios con seguimiento personalizado",
                "Medicación y tratamiento del dolor adecuado para cada caso",
                "Hospitalización 24/7 en caso de ser necesario",
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
