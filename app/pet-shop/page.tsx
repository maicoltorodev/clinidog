import { ServiceLayout } from "@/components/service-layout"
import { Card } from "@/components/ui/card"
import { ShoppingBag, Heart, Sparkles, CheckCircle } from "lucide-react"

export default function PetShopPage() {
  return (
    <ServiceLayout>
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-4 mb-6">
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10">
              <ShoppingBag className="h-8 w-8 text-primary" />
            </div>
            <div>
              <h1 className="text-4xl font-bold text-balance">{"Pet Shop"}</h1>
              <p className="text-lg text-muted-foreground mt-2">{"Todo lo que tu mascota necesita en un solo lugar"}</p>
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
                "Nuestra Pet Shop ofrece una amplia variedad de productos y accesorios de las mejores marcas para el cuidado y entretenimiento de tu mascota. Desde juguetes hasta camas, collares, correas y mucho más."
              }
            </p>
          </div>

          {/* Products Grid */}
          <div className="grid md:grid-cols-2 gap-6 mt-12">
            <Card className="p-6">
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                  <Heart className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">{"Accesorios"}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {"Collares, correas, arneses, placas de identificación y más accesorios esenciales."}
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
                  <h3 className="font-semibold text-lg mb-2">{"Juguetes"}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {"Amplia variedad de juguetes interactivos y educativos para perros y gatos."}
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
                  <h3 className="font-semibold text-lg mb-2">{"Camas y Mantas"}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {"Camas cómodas, mantas suaves y cobijas para el descanso perfecto de tu mascota."}
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                  <ShoppingBag className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">{"Platos y Bebederos"}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {"Platos, bebederos automáticos y dispensadores de alimento de diferentes tamaños."}
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
                  <h3 className="font-semibold text-lg mb-2">{"Productos de Higiene"}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {"Shampoos, cepillos, cortauñas, toallitas y productos para el cuidado diario."}
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
                  <h3 className="font-semibold text-lg mb-2">{"Ropa y Disfraces"}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {"Ropa para diferentes climas, impermeables y adorables disfraces para ocasiones especiales."}
                  </p>
                </div>
              </div>
            </Card>
          </div>

          {/* Benefits */}
          <Card className="p-8 bg-muted/50 mt-12">
            <h3 className="text-2xl font-bold mb-6">{"¿Por Qué Comprar en Nuestro Pet Shop?"}</h3>
            <div className="space-y-4">
              {[
                "Productos de marcas reconocidas y confiables",
                "Asesoría profesional para elegir lo mejor para tu mascota",
                "Precios competitivos y promociones especiales",
                "Disponibilidad inmediata - no necesitas esperar envíos",
                "Variedad de opciones para todas las razas y tamaños",
                "Calidad garantizada en todos nuestros productos",
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
