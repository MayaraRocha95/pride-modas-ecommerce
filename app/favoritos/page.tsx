"use client"

import Image from "next/image"
import Link from "next/link"
import { Heart, ShoppingCart } from "lucide-react"
import { useFavorites } from "@/components/favorites-provider"
import { useCart } from "@/components/cart-provider"
import { Button } from "@/components/ui/button"
import { useToast } from "@/components/ui/use-toast"

export default function FavoritesPage() {
  const { items: favorites, removeItem } = useFavorites()
  const { addItem: addToCart } = useCart()
  const { toast } = useToast()

  if (favorites.length === 0) {
    return (
      <div className="min-h-[80vh] bg-white flex items-center justify-center">
        <div className="text-center">
          <Heart className="w-16 h-16 mx-auto mb-4 text-[#E6007E]" />
          <h1 className="text-2xl font-bold mb-2 text-gray-900">Sua lista de favoritos está vazia</h1>
          <p className="text-gray-600 mb-6">Explore nossos produtos e adicione seus favoritos aqui!</p>
          <Link href="/produtos">
            <Button className="bg-gradient-to-r from-[#E6007E] to-[#FF4D8D] hover:opacity-90 text-white">
              Ver Produtos
            </Button>
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-[80vh] bg-white">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-3xl font-bold mb-8 text-gray-900">Meus Favoritos</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {favorites.map((product) => (
            <div
              key={product.id}
              className="group relative p-4 rounded-2xl hover:scale-105 transition-all duration-300"
            >
              <div className="absolute inset-0 rounded-2xl border border-gray-200" />
              <div className="relative">
                <div className="relative mb-4">
                  <button
                    onClick={() => {
                      removeItem(product.id)
                      toast({
                        title: "Removido dos favoritos",
                        description: `${product.name} foi removido dos seus favoritos.`,
                      })
                    }}
                    className="absolute top-2 right-2 z-10 p-2 rounded-full bg-white/80 backdrop-blur-sm hover:bg-white transition-colors group-hover:scale-110"
                  >
                    <Heart className="h-5 w-5 fill-[#E6007E] text-[#E6007E]" />
                  </button>
                  <Link href={`/produtos/${product.id}`}>
                    <div className="relative aspect-square overflow-hidden rounded-xl border border-gray-200">
                      <Image
                        src={product.image || "/placeholder.svg"}
                        alt={product.name}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-110"
                      />
                    </div>
                  </Link>
                </div>
                <div className="space-y-2">
                  <Link href={`/produtos/${product.id}`}>
                    <p className="text-sm text-[#9B51E0] mb-1">{product.category}</p>
                    <h3 className="font-medium text-lg mb-2 text-gray-900 group-hover:text-[#E6007E] transition-colors">
                      {product.name}
                    </h3>
                    <p className="text-xl font-bold text-gray-900">R$ {product.price.toFixed(2)}</p>
                  </Link>
                  <Button
                    onClick={() => {
                      addToCart({
                        id: product.id,
                        name: product.name,
                        price: product.price,
                        image: product.image,
                      })
                      toast({
                        title: "Produto adicionado!",
                        description: `${product.name} foi adicionado ao seu carrinho.`,
                      })
                    }}
                    className="w-full bg-gradient-to-r from-[#E6007E] to-[#FF4D8D] hover:opacity-90 text-white gap-2"
                  >
                    <ShoppingCart className="h-4 w-4" />
                    Adicionar ao Carrinho
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

