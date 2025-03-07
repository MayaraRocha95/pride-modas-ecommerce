import { Heart, Users2, Shield, Sparkles } from "lucide-react"
import { rainbowColors } from "@/lib/constants"

const values = [
  {
    icon: Heart,
    title: "Inclusão",
    description:
      "Criamos roupas para todos os corpos, identidades e expressões, celebrando a diversidade em todas as suas formas.",
    color: rainbowColors.red,
    gradient: "from-[#FF0018]/20 to-[#FFA52C]/20",
  },
  {
    icon: Users2,
    title: "Comunidade",
    description: "Apoiamos e fortalecemos a comunidade LGBTQIAPN+ através de parcerias com organizações e eventos.",
    color: rainbowColors.orange,
    gradient: "from-[#FFA52C]/20 to-[#FFFF41]/20",
  },
  {
    icon: Shield,
    title: "Qualidade",
    description: "Utilizamos materiais de alta qualidade e processos éticos para criar peças duráveis e confortáveis.",
    color: rainbowColors.green,
    gradient: "from-[#008018]/20 to-[#0000F9]/20",
  },
  {
    icon: Sparkles,
    title: "Expressão",
    description: "Acreditamos que a moda é uma forma poderosa de expressão pessoal e afirmação da identidade.",
    color: rainbowColors.purple,
    gradient: "from-[#0000F9]/20 to-[#86007D]/20",
  },
]

export function ValuesSection() {
  return (
    <section className="py-24 relative overflow-hidden bg-white">
      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/90 backdrop-blur-sm border border-gray-200 mb-4">
            <span className="w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: rainbowColors.purple }} />
            <span className="text-sm font-medium text-gray-900">Nossos Princípios</span>
          </span>
          <h2 className="text-4xl font-bold text-gray-900 bg-clip-text">Nossos Valores</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <div
              key={value.title}
              className="group relative bg-white rounded-2xl p-8 hover:shadow-xl transition-all duration-500 animate-in fade-in slide-in-from-bottom-4"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Gradient Background */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${value.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl`}
              />

              {/* Content */}
              <div className="relative z-10">
                <div className="mb-6">
                  <div className="w-16 h-16 rounded-xl bg-white shadow-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-500 relative">
                    <value.icon
                      className="w-8 h-8 transition-transform duration-500 group-hover:rotate-12"
                      style={{ stroke: value.color }}
                    />
                    <div
                      className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-10 transition-opacity duration-500"
                      style={{ backgroundColor: value.color }}
                    />
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-4 transition-colors duration-500" style={{ color: value.color }}>
                  {value.title}
                </h3>
                <p className="text-gray-600 leading-relaxed group-hover:text-gray-900 transition-colors duration-500">
                  {value.description}
                </p>
              </div>

              {/* Decorative Elements */}
              <div
                className="absolute -bottom-1 left-0 right-0 h-1 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 scale-x-0 group-hover:scale-x-100"
                style={{ backgroundColor: value.color }}
              />
              <div
                className="absolute top-4 right-4 w-2 h-2 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:scale-150"
                style={{ backgroundColor: value.color }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

