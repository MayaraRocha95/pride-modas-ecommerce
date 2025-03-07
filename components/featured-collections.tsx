"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { X, ShoppingCart } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { useCart } from "@/components/cart-provider"
import { rainbowColors } from "@/lib/constants"

// Dados simulados das coleções
const collections = [
  {
    id: 1,
    name: "Coleção Orgulho",
    image: "/orgulho.jpg",
    description: "Celebre sua identidade com nossa coleção especial Pride.",
    color: rainbowColors.red,
    products: [
      {
        id: 101,
        name: "Boné Coração Rainbow",
        price: 79.9,
        image: "/bonecoração.jpg",
      },
      {
        id: 102,
        name: "Boné Pride",
        price: 199.9,
        image: "/boneequality.jpg",
      },
      {
        id: 103,
        name: "Chapéu Rainbow",
        price: 159.9,
        image: "/chapeu.jpg",
      },
      {
        id: 104,
        name: "Moletom Pride",
        price: 149.9,
        image: "/blusadefrio.jpg",
      },
    ],
  },
  {
    id: 2,
    name: "Coleção Arco-Íris",
    image: "/arcoiris.jpg",
    description: "Cores vibrantes para todos os momentos.",
    color: rainbowColors.green,
    products: [
      {
        id: 201,
        name: "Cropped  Colorido",
        price: 89.9,
        image: "/cropped.jpg",
      },
      {
        id: 202,
        name: "Blusa Rainbow",
        price: 129.9,
        image: "/blusadefrio.jpg",
      },
      {
        id: 203,
        name: "Blusa Tie-dye",
        price: 189.9,
        image: "/tie-dye.jpeg",
      },
      {
        id: 204,
        name: "Tênis Plataforma",
        price: 399.9,
        image: "/tenisplataforma.jpg",
      },
    ],
  },
  {
    id: 3,
    name: "Coleção Sem Gênero",
    image: "/semgenero.jpg",
    description: "Roupas para todas as pessoas, sem rótulos.",
    color: rainbowColors.purple,
    products: [
      {
        id: 301,
        name: "Conjunto Neutro",
        price: 259.9,
        image: "/conjunto.jpg",
      },
      {
        id: 302,
        name: "Camiseta Básica",
        price: 79.9,
        image: "/camisabasica.jpg",
      },
      {
        id: 303,
        name: "Camisa Gola Role",
        price: 139.9,
        image: "/golarole.jpg",
      },
      {
        id: 304,
        name: "Tênis Branco",
        price: 159.9,
        image: "/tenisbranco.jpg",
      },
    ],
  },
]

export function FeaturedCollections() {
  const [selectedCollection, setSelectedCollection] = useState<(typeof collections)[0] | null>(null)
  const { addItem } = useCart()

  return (
    <>
      <section className="py-12 bg-white">
        <div className="container px-4">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold text-gray-900">Coleções em Destaque</h2>
            <Link href="/colecoes" className="text-[#E6007E] hover:text-[#FF4D8D]">
              Ver Todas
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {collections.map((collection) => (
              <button
                key={collection.id}
                onClick={() => setSelectedCollection(collection)}
                className="text-left focus:outline-none focus:ring-2 focus:ring-[#E6007E] focus:ring-offset-2 rounded-lg"
              >
                <Card className="overflow-hidden group border border-gray-200">
                  <CardContent className="p-0">
                    <div className="relative aspect-[2/1] overflow-hidden">
                      <Image
                        src={collection.image || "/placeholder.svg"}
                        alt={collection.name}
                        fill
                        className="object-cover transition-transform group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                      <div className="absolute bottom-4 left-4 right-4">
                        <h3 className="text-xl font-bold text-white mb-1">{collection.name}</h3>
                        <p className="text-sm text-white/90">{collection.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Modal */}
      {selectedCollection && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-hidden relative">
            <div className="p-6 border-b border-gray-200">
              <div className="flex items-center justify-between">
                <h3 className="text-2xl font-bold text-gray-900">{selectedCollection.name}</h3>
                <button
                  onClick={() => setSelectedCollection(null)}
                  className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                >
                  <X className="h-6 w-6 text-gray-500" />
                  <span className="sr-only">Fechar</span>
                </button>
              </div>
              <p className="text-gray-600 mt-1">{selectedCollection.description}</p>
            </div>

            <div className="p-6 overflow-auto max-h-[calc(90vh-200px)]">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {selectedCollection.products.map((product) => (
                  <div key={product.id} className="group">
                    <div className="relative aspect-square rounded-lg overflow-hidden border border-gray-200">
                      <Image
                        src={product.image || "/placeholder.svg"}
                        alt={product.name}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform"
                      />
                    </div>
                    <div className="mt-3 space-y-2">
                      <h4 className="font-medium text-gray-900">{product.name}</h4>
                      <p className="text-lg font-semibold text-gray-900">R$ {product.price.toFixed(2)}</p>
                      <Button
                        onClick={(e) => {
                          e.preventDefault()
                          addItem({
                            id: product.id,
                            name: product.name,
                            price: product.price,
                            image: product.image,
                          })
                        }}
                        className="w-full bg-gradient-to-r from-[#E6007E] to-[#FF4D8D] hover:opacity-90 text-white"
                      >
                        <ShoppingCart className="h-4 w-4 mr-2" />
                        Adicionar ao Carrinho
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

