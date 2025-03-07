"use client"

import { useState } from "react"
import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { X, BookOpen, Leaf, Heart, Calendar, Clock, ArrowRight } from "lucide-react"
import { rainbowColors } from "@/lib/constants"

// Dados simulados dos posts
const posts = [
  {
    id: 1,
    title: "Moda Inclusiva: Mais que uma Tendência",
    author: "Marina Santos",
    excerpt: "Como a moda está se transformando para acolher todas as identidades e expressões.",
    content: `
      A moda inclusiva não é apenas uma tendência passageira, mas um movimento transformador que está redefinindo os padrões da indústria fashion. Este artigo explora como marcas e designers estão abraçando a diversidade e criando peças que celebram todas as identidades e expressões.

      A Importância da Representatividade

      A representatividade na moda vai além de campanhas publicitárias diversas - trata-se de criar roupas que verdadeiramente atendam às necessidades de diferentes corpos, identidades e expressões. Isso inclui:

      • Modelagens adaptativas que consideram diferentes tipos de corpo
      • Tecidos e acabamentos que proporcionam conforto e funcionalidade
      • Designs que respeitam e celebram diferentes expressões de gênero

      O Futuro da Moda Inclusiva

      O movimento da moda inclusiva está apenas começando. À medida que mais vozes se juntam à conversa, vemos uma transformação profunda na indústria. As marcas que não se adaptarem a esta nova realidade ficarão para trás.

      A Pride Modas está comprometida em liderar esta mudança, oferecendo peças que não apenas vestem, mas empoderam cada pessoa a expressar sua verdadeira identidade.
    `,
    image: "/inclusiva.jpg",
    date: "2024-02-25",
    readTime: "5 min",
    color: rainbowColors.red,
    icon: BookOpen,
  },
  {
    id: 2,
    title: "Sustentabilidade na Indústria da Moda",
    author: "Rafael Costa",
    excerpt: "Práticas sustentáveis e seu impacto positivo no meio ambiente.",
    content: `
      A sustentabilidade se tornou uma prioridade urgente na indústria da moda. Este artigo explora como marcas conscientes estão adotando práticas eco-friendly e criando um futuro mais sustentável para a moda.

      Práticas Sustentáveis

      A transformação da indústria da moda passa por várias iniciativas sustentáveis:

      • Uso de materiais reciclados e biodegradáveis
      • Processos de produção com baixo impacto ambiental
      • Economia circular e reaproveitamento de materiais
      • Condições justas de trabalho

      O Papel do Consumidor

      O consumidor consciente tem um papel fundamental nesta transformação. Ao escolher marcas comprometidas com a sustentabilidade, cada pessoa contribui para um futuro mais verde.

      A Pride Modas acredita que moda sustentável e inclusiva andam juntas. Nosso compromisso é criar peças que não apenas celebram a diversidade, mas também respeitam o meio ambiente.
    `,
    image: "/sustentabilidade.jpg",
    date: "2024-02-24",
    readTime: "4 min",
    color: rainbowColors.green,
    icon: Leaf,
  },
  {
    id: 3,
    title: "Expressão e Identidade através da Moda",
    author: "Julia Oliveira",
    excerpt: "Como as roupas podem ser uma forma de expressão pessoal.",
    content: `
      A moda é uma das formas mais poderosas de expressão pessoal. Este artigo explora como as roupas que escolhemos podem ser uma manifestação de nossa identidade e uma forma de comunicação não-verbal.

      O Poder da Expressão Pessoal

      As roupas são mais que simples peças de tecido - são uma linguagem visual que nos permite:

      • Expressar nossa personalidade
      • Afirmar nossa identidade
      • Comunicar nossos valores
      • Construir confiança

      Quebrando Padrões

      A moda contemporânea está quebrando padrões tradicionais e criando espaço para expressões mais autênticas e diversas. Não existem mais regras rígidas sobre o que vestir - a única regra é ser você mesmo.

      A Pride Modas acredita que cada pessoa deve ter a liberdade de expressar sua identidade através da moda, sem julgamentos ou limitações.
    `,
    image: "/sapatosreto.jpg",
    date: "2024-02-23",
    readTime: "3 min",
    color: rainbowColors.purple,
    icon: Heart,
  },
]

export default function BlogPage() {
  const [selectedPost, setSelectedPost] = useState<(typeof posts)[0] | null>(null)

  return (
    <div className="min-h-[80vh] bg-white">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-8 text-gray-900">Blog</h1>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <button
              key={post.id}
              onClick={() => setSelectedPost(post)}
              className="text-left focus:outline-none focus:ring-2 focus:ring-[#E6007E] focus:ring-offset-2 rounded-lg"
            >
              <Card className="h-full overflow-hidden group hover:shadow-lg transition-all duration-300 bg-white border border-gray-100">
                <CardContent className="p-0">
                  <div className="relative aspect-[16/9]">
                    <Image src={post.image || "/placeholder.svg"} alt={post.title} fill className="object-cover" />
                    <div
                      className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity"
                      style={{ backgroundColor: post.color }}
                    />
                    <div className="absolute top-4 left-4">
                      <div
                        className="w-10 h-10 rounded-full flex items-center justify-center bg-white/90 backdrop-blur-sm group-hover:scale-110 transition-transform"
                        style={{ color: post.color }}
                      >
                        <post.icon className="w-5 h-5" />
                      </div>
                    </div>
                  </div>
                </CardContent>
                <CardHeader>
                  <CardTitle className="text-gray-900 group-hover:text-[#E6007E] transition-colors flex items-center justify-between">
                    {post.title}
                    <ArrowRight
                      className="w-5 h-5 transition-transform group-hover:translate-x-1"
                      style={{ color: post.color }}
                    />
                  </CardTitle>
                  <p className="text-sm text-gray-600">{post.excerpt}</p>
                  <div className="flex flex-col gap-2 mt-4">
                    <span className="text-sm font-medium" style={{ color: post.color }}>
                      Por {post.author}
                    </span>
                    <div className="flex items-center gap-4 text-sm text-gray-500">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" style={{ color: post.color }} />
                        {new Date(post.date).toLocaleDateString("pt-BR")}
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" style={{ color: post.color }} />
                        {post.readTime}
                      </div>
                    </div>
                  </div>
                </CardHeader>
              </Card>
            </button>
          ))}
        </div>
      </div>

      {/* Modal Ajustado */}
      {selectedPost && (
        <div
          className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center"
          onClick={(e) => {
            if (e.target === e.currentTarget) {
              setSelectedPost(null)
            }
          }}
        >
          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4">
              <div className="w-full max-w-4xl bg-white rounded-xl shadow-xl transform transition-all">
                {/* Cabeçalho com Imagem */}
                <div className="relative aspect-[21/9]">
                  <Image
                    src={selectedPost.image || "/placeholder.svg"}
                    alt={selectedPost.title}
                    fill
                    className="object-cover rounded-t-xl"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-t-xl" />

                  {/* Botão Fechar */}
                  <Button
                    onClick={() => setSelectedPost(null)}
                    variant="outline"
                    size="icon"
                    className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm hover:bg-white group"
                  >
                    <X className="h-5 w-5 text-[#86007D] group-hover:scale-110 transition-transform" />
                    <span className="sr-only">Fechar</span>
                  </Button>

                  {/* Informações do Post */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <div className="flex items-center gap-3 mb-4">
                      <div
                        className="w-12 h-12 rounded-full flex items-center justify-center bg-white/90 backdrop-blur-sm"
                        style={{ color: selectedPost.color }}
                      >
                        <selectedPost.icon className="w-6 h-6" />
                      </div>
                      <div className="flex flex-col">
                        <span className="text-sm font-medium">Por {selectedPost.author}</span>
                        <div className="flex gap-4 text-sm">
                          <div className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" style={{ color: selectedPost.color }} />
                            {new Date(selectedPost.date).toLocaleDateString("pt-BR")}
                          </div>
                          <div className="flex items-center gap-1">
                            <Clock className="w-4 h-4" style={{ color: selectedPost.color }} />
                            {selectedPost.readTime}
                          </div>
                        </div>
                      </div>
                    </div>
                    <h2 className="text-3xl font-bold">{selectedPost.title}</h2>
                  </div>
                </div>

                {/* Conteúdo do Post */}
                <div className="px-6 py-8">
                  <div className="prose prose-lg max-w-none">
                    {selectedPost.content.split("\n\n").map((paragraph, index) => (
                      <p key={index} className="mb-4 text-gray-600 leading-relaxed">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </div>

                {/* Rodapé com Botão */}
                <div className="px-6 py-4 border-t border-gray-100 flex justify-end">
                  <Button
                    onClick={() => setSelectedPost(null)}
                    className="bg-gradient-to-r from-[#86007D] to-[#A31F88] text-white hover:opacity-90"
                  >
                    Fechar artigo
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

