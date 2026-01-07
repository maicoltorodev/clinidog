import { ServiceLayout } from "@/components/service-layout"
import { Card } from "@/components/ui/card"
import { Clock, Phone, Heart, AlertCircle, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function EmergenciasPage() {
  return (
    <ServiceLayout>
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-4 mb-6">
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-accent/10">
              <Clock className="h-8 w-8 text-accent" />
            </div>
            <div>
              <h1 className="text-4xl font-bold text-balance">{"Emergencias Veterinarias 24/7"}</h1>
              <p className="text-lg text-muted-foreground mt-2">
                {"Atención urgente disponible todos los días del año"}
              </p>
            </div>
          </div>

          {/* Emergency Alert */}
          <Card className="p-6 bg-accent/10 border-accent mt-8">
            <div className="flex items-start gap-4">
              <AlertCircle className="h-6 w-6 text-accent shrink-0 mt-1" />
              <div className="space-y-3 flex-1">
                <h3 className="text-xl font-bold text-accent">{"¿Tu mascota necesita atención urgente?"}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {"Estamos disponibles las 24 horas del día, los 365 días del año para atender cualquier emergencia."}
                </p>
                <div className="flex flex-col sm:flex-row gap-3 pt-2">
                  <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground" asChild>
                    <a href="https://wa.me/573114926051" target="_blank" rel="noopener noreferrer">
                      <Phone className="mr-2 h-5 w-5" />
                      Llamar 311 492 6051
                    </a>
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-accent text-accent hover:bg-accent/10 bg-transparent"
                    asChild
                  >
                    <a href="https://wa.me/573123015259" target="_blank" rel="noopener noreferrer">
                      <Phone className="mr-2 h-5 w-5" />
                      Llamar 312 301 5259
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Description */}
      <section className="container mx-auto px-4 pb-12">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="prose prose-lg max-w-none">
            <p className="text-lg leading-relaxed text-muted-foreground">
              {
                "Las emergencias veterinarias pueden ocurrir en cualquier momento. En CLINIDOG contamos con personal especializado y equipos completos para atender urgencias médicas las 24 horas, incluyendo fines de semana y festivos."
              }
            </p>
          </div>

          {/* Emergency Types */}
          <div className="mt-12">
            <h3 className="text-2xl font-bold mb-6">{"Situaciones de Emergencia"}</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="p-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent/10">
                    <AlertCircle className="h-5 w-5 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">{"Traumatismos y Accidentes"}</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {"Atropellamientos, caídas, mordeduras, heridas graves y fracturas."}
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent/10">
                    <Heart className="h-5 w-5 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">{"Dificultad Respiratoria"}</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {"Problemas para respirar, jadeo excesivo, tos severa o asfixia."}
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent/10">
                    <AlertCircle className="h-5 w-5 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">{"Intoxicaciones"}</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {"Ingesta de sustancias tóxicas, plantas venenosas o alimentos peligrosos."}
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent/10">
                    <Heart className="h-5 w-5 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">{"Convulsiones"}</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {"Episodios convulsivos, pérdida de conciencia o colapso repentino."}
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent/10">
                    <AlertCircle className="h-5 w-5 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">{"Hemorragias"}</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {"Sangrado abundante, vómito o diarrea con sangre."}
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent/10">
                    <Heart className="h-5 w-5 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">{"Partos Complicados"}</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {"Distocias, trabajo de parto prolongado o complicaciones obstétricas."}
                    </p>
                  </div>
                </div>
              </Card>
            </div>
          </div>

          {/* What We Offer */}
          <Card className="p-8 bg-muted/50 mt-12">
            <h3 className="text-2xl font-bold mb-6">{"¿Qué Ofrecemos en Emergencias?"}</h3>
            <div className="space-y-4">
              {[
                "Atención médica inmediata por veterinarios especializados",
                "Quirófano equipado disponible para cirugías de emergencia",
                "Rayos X y ecografías para diagnóstico rápido",
                "Laboratorio clínico para análisis urgentes",
                "Medicamentos y suministros médicos completos",
                "Hospitalización 24/7 con monitoreo constante",
                "Equipos de oxigenoterapia y soporte vital",
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-primary shrink-0 mt-0.5" />
                  <p className="leading-relaxed">{item}</p>
                </div>
              ))}
            </div>
          </Card>

          {/* Important Info */}
          <Card className="p-8 bg-primary/5 mt-8">
            <h3 className="text-2xl font-bold mb-4">{"Información Importante"}</h3>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                {
                  "Ante cualquier emergencia, llámanos inmediatamente. Mientras te diriges a la clínica, mantén a tu mascota lo más tranquila posible y evita darle comida o agua."
                }
              </p>
              <p>
                {
                  "Si es posible, ten a mano el historial médico de tu mascota, información sobre medicamentos que toma y detalles sobre el incidente o síntomas."
                }
              </p>
              <p className="font-semibold text-foreground">
                {"Recuerda: En caso de emergencia, cada minuto cuenta. No dudes en contactarnos de inmediato."}
              </p>
            </div>
          </Card>
        </div>
      </section>
    </ServiceLayout>
  )
}
