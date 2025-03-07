import Link from "next/link"
import { Button } from "@/components/ui/button"
import { gradients } from "@/lib/constants"
import { ArrowRight } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative min-h-[600px] flex items-center overflow-hidden bg-white">
      {/* Futura imagem de fundo */}
      <img src="/bandeira.jpg" alt="Background" className="absolute inset-0 object-cover w-full h-full" />

      {/* Gradientes e efeitos */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-[#FF0018]/30 to-[#FFA52C]/30 blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-br from-[#0000F9]/30 to-[#86007D]/30 blur-3xl" />
      </div>
      <div className="absolute inset-0 bg-gradient-to-br from-[#FF0018]/20 via-[#FFA52C]/20 via-[#FFFF41]/15 via-[#008018]/20 via-[#0000F9]/20 to-[#86007D]/20" />
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-[0.05]" />

      {/* Conteúdo */}
      <div className="container relative z-10 mx-auto px-4 py-20">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/90 backdrop-blur-sm border border-gray-200 mb-6 animate-bounce">
            <span className="w-2 h-2 rounded-full bg-[#E6007E]" />
            <span className="text-sm font-medium text-gray-900">Nova Coleção</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-gray-900">
            Vista seu{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#FF0018] via-[#FFA52C] via-[#FFFF41] via-[#008018] via-[#0000F9] to-[#86007D] animate-gradient">
              Orgulho
            </span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-600">
            Roupas que celebram a diversidade e permitem que você expresse sua identidade com estilo e conforto.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link href="/produtos">
              <Button size="lg" className={`${gradients.primary} hover:opacity-90 text-white group`}>
                Comprar Agora
                <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
            <Link href="/colecoes">
              <Button
                size="lg"
                variant="outline"
                className="border-[#E6007E] text-[#E6007E] hover:bg-[#E6007E] hover:text-white transition-colors"
              >
                Ver Coleções
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

