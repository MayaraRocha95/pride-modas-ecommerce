import Image from "next/image"
import { rainbowColors } from "@/lib/constants"

const teamMembers = [
  {
    name: "Ana Silva",
    role: "CEO & Fundadora",
    image: "/anasilva.jpg",
    color: rainbowColors.red,
  },
  {
    name: "Carlos Santos",
    role: "Diretor Criativo",
    image: "/carlossantos.jpg",
    color: rainbowColors.orange,
  },
  {
    name: "Marina Lima",
    role: "Designer de Moda",
    image: "/marinalima.jpg",
    color: rainbowColors.green,
  },
  {
    name: "João Oliveira",
    role: "Gerente de Sustentabilidade",
    image: "/joaooliveira.jpg",
    color: rainbowColors.purple,
  },
]

export default function AboutPage() {
  return (
    <div className="min-h-[80vh] bg-white">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-8 text-gray-900">Sobre Nós</h1>

        {/* Hero Section */}
        <div className="relative w-full h-[400px] rounded-2xl overflow-hidden mb-16 border border-gray-200">
          <Image src="/equipe.jpg" alt="Equipe Pride Modas" fill className="object-cover" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center bg-white/90 backdrop-blur-sm p-8 rounded-2xl max-w-2xl mx-4 border border-gray-200">
              <h2 className="text-3xl font-bold mb-4 text-gray-900">Moda que Celebra a Diversidade</h2>
              <p className="text-gray-600 leading-relaxed">
                Desde 2020, a Pride Modas tem sido mais que uma marca de roupas - somos um movimento pela inclusão e
                expressão autêntica através da moda.
              </p>
            </div>
          </div>
        </div>

        {/* História e Missão */}
        <div className="grid gap-8 md:grid-cols-2 mb-16">
          <div className="space-y-6">
            <div className="p-6 rounded-xl border border-gray-200 bg-white">
              <h2 className="text-2xl font-bold mb-4 text-gray-900">Nossa História</h2>
              <p className="text-gray-600 leading-relaxed">
                A Pride Modas nasceu do sonho de criar um espaço verdadeiramente inclusivo no mundo da moda. Tudo
                começou em uma pequena loja em São Paulo, onde nossa fundadora Ana Silva percebeu a necessidade de
                roupas que realmente representassem a diversidade da comunidade LGBTQIAPN+.
              </p>
              <p className="text-gray-600 leading-relaxed mt-4">
                Com determinação e uma visão clara, transformamos esse sonho em uma marca nacional que não apenas veste,
                mas celebra todas as formas de expressão e identidade. Nossa jornada é marcada por histórias de
                empoderamento, aceitação e amor próprio.
              </p>
            </div>
            <div className="relative h-[300px] rounded-xl overflow-hidden border border-gray-200">
              <Image
                src="/atelie.jpg"
                alt="Nossa primeira loja"
                fill
                className="object-cover"
              />
            </div>
          </div>
          <div className="space-y-6">
            <div className="relative h-[300px] rounded-xl overflow-hidden border border-gray-200">
              <Image src="/loja.jpg" alt="Nosso ateliê" fill className="object-cover" />
            </div>
            <div className="p-6 rounded-xl border border-gray-200 bg-white">
              <h2 className="text-2xl font-bold mb-4 text-gray-900">Nossa Missão</h2>
              <p className="text-gray-600 leading-relaxed">
                Nossa missão vai além de criar roupas bonitas - queremos transformar a indústria da moda em um espaço
                mais inclusivo e sustentável. Acreditamos que cada peça de roupa é uma oportunidade de expressão e
                afirmação da identidade.
              </p>
              <p className="text-gray-600 leading-relaxed mt-4">
                Trabalhamos com materiais sustentáveis e processos éticos, garantindo que nosso impacto positivo se
                estenda do social ao ambiental. Cada coleção é pensada para celebrar a diversidade em todas as suas
                formas.
              </p>
            </div>
          </div>
        </div>

        {/* Valores */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-gray-900">Nossos Valores</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              ["Inclusão", "Criamos para todos os corpos e identidades", rainbowColors.red],
              ["Diversidade", "Celebramos todas as formas de amor", rainbowColors.orange],
              ["Sustentabilidade", "Compromisso com o futuro do planeta", rainbowColors.green],
              ["Qualidade", "Excelência em cada detalhe", rainbowColors.purple],
            ].map(([title, desc, color]) => (
              <div
                key={title}
                className="p-6 rounded-xl bg-white border border-gray-200 transition-transform hover:scale-105"
              >
                <h3 className="text-xl font-bold mb-2" style={{ color }}>
                  {title}
                </h3>
                <p className="text-gray-600">{desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Equipe */}
        <div>
          <h2 className="text-3xl font-bold mb-8 text-gray-900">Nossa Equipe</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {teamMembers.map((member) => (
              <div key={member.name} className="group relative rounded-xl overflow-hidden border border-gray-200">
                <div className="aspect-square relative">
                  <Image src={member.image || "/placeholder.svg"} alt={member.name} fill className="object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                  <h3 className="font-bold text-lg">{member.name}</h3>
                  <p className="text-sm opacity-90">{member.role}</p>
                </div>
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity"
                  style={{ backgroundColor: member.color }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

