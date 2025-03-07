"use client"

import Link from "next/link"
import Image from "next/image"
import { Heart, ShoppingCart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useCart } from "@/components/cart-provider"
import { useFavorites } from "@/components/favorites-provider"
import { useToast } from "@/components/ui/use-toast"

// Dados simulados dos produtos
const products = [
  {
    id: 1,
    name: "Camiseta Be Yourself",
    price: 79.9,
    image: "/amisa.jpg",
    category: "Camisetas",
    isNew: true,
    colors: ["Branco", "Preto", "Azul"],
    sizes: ["PP", "P", "M", "G", "GG"],
    createdAt: "2024-02-20",
    description: "Camiseta com estampa motivacional",
  },
  {
    id: 2,
    name: "Jaqueta Denim Pride",
    price: 199.9,
    image: "/blusadefrio.jpg",
    category: "Jaquetas",
    isNew: true,
    colors: ["Azul", "Preto"],
    sizes: ["P", "M", "G", "GG"],
    createdAt: "2024-02-23",
    description: "Jaqueta jeans com patches coloridos",
  },
  {
    id: 3,
    name: " Coleção Verão",
    price: 89.9,
    image: "/coleçãoveraõ.jpg",
    category: "Shorts",
    isNew: false,
    colors: ["Arco-íris", "Preto"],
    sizes: ["PP", "P", "M", "G"],
    createdAt: "2024-02-15",
    description: "Shorts com listras coloridas",
  },
  {
    id: 4,
    name: "Body Tote Pride",
    price: 79.9,
    image: "/body.jpg",
    category: "Acessórios",
    isNew: true,
    colors: ["Arco-íris", "Preto", "Branco"],
    sizes: ["Único"],
    createdAt: "2024-02-24",
    description: "Bolsa tote com estampa pride",
  },
]

interface ProductGridProps {
  selectedSize?: string
  priceRange?: {
    min: string
    max: string
  }
  sortBy?: string
  searchQuery?: string
}

export function ProductGrid({ selectedSize, priceRange, sortBy = "newest", searchQuery }: ProductGridProps) {
  const { addItem } = useCart()
  const { addItem: addToFavorites, removeItem: removeFromFavorites, isFavorite } = useFavorites()
  const { toast } = useToast()

  // Filtra os produtos com base em todos os critérios
  let filteredProducts = products.filter((product) => {
    // Filtro por busca
    if (searchQuery) {
      const query = searchQuery.toLowerCase()
      return (
        product.name.toLowerCase().includes(query) ||
        product.description.toLowerCase().includes(query) ||
        product.category.toLowerCase().includes(query)
      )
    }

    // Filtro por tamanho
    if (selectedSize && !product.sizes.map((s) => s.toLowerCase()).includes(selectedSize)) {
      return false
    }

    // Filtro por preço
    if (priceRange?.min && product.price < Number(priceRange.min)) {
      return false
    }

    if (priceRange?.max && product.price > Number(priceRange.max)) {
      return false
    }

    return true
  })

  // Ordena os produtos
  filteredProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case "newest":
        return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
      case "price-asc":
        return a.price - b.price
      case "price-desc":
        return b.price - a.price
      case "name":
        return a.name.localeCompare(b.name)
      default:
        return 0
    }
  })

  const handleAddToCart = (product: (typeof products)[0]) => {
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
    })

    toast({
      title: "Produto adicionado!",
      description: `${product.name} foi adicionado ao seu carrinho.`,
    })
  }

  const toggleFavorite = (product: (typeof products)[0]) => {
    if (isFavorite(product.id)) {
      removeFromFavorites(product.id)
      toast({
        title: "Removido dos favoritos",
        description: `${product.name} foi removido dos seus favoritos.`,
      })
    } else {
      addToFavorites({
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.image,
        category: product.category,
      })
      toast({
        title: "Adicionado aos favoritos",
        description: `${product.name} foi adicionado aos seus favoritos.`,
      })
    }
  }

  if (searchQuery && filteredProducts.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-600">Nenhum produto encontrado para "{searchQuery}"</p>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {filteredProducts.map((product) => (
        <div key={product.id} className="group relative p-4 rounded-2xl hover:scale-105 transition-all duration-300">
          <div className="absolute inset-0 rounded-2xl border border-gray-200" />
          <div className="relative">
            <div className="relative mb-4">
              {product.isNew && (
                <span className="absolute top-2 left-2 z-10 bg-[#E6007E] text-white px-3 py-1 rounded-full text-xs font-medium">
                  Novo
                </span>
              )}
              <button
                onClick={() => toggleFavorite(product)}
                className="absolute top-2 right-2 z-10 p-2 rounded-full bg-white/80 backdrop-blur-sm hover:bg-white transition-colors group-hover:scale-110"
              >
                <Heart
                  className={`h-5 w-5 ${isFavorite(product.id) ? "fill-[#E6007E] text-[#E6007E]" : "text-[#E6007E]"}`}
                />
              </button>
              <Link href={`/produtos/${product.id}`}>
                <div className="relative aspect-square overflow-hidden rounded-xl border border-gray-200">
                  <Image
                    src={product.image || "/bonecoração.jpg"}
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
              <div className="flex flex-wrap gap-2 mb-4">
                {product.colors.map((color) => (
                  <span
                    key={color}
                    className="text-xs px-2 py-1 bg-gray-50 rounded-full text-gray-600 hover:bg-gray-100 transition-colors"
                  >
                    {color}
                  </span>
                ))}
              </div>
              <div className="flex flex-wrap gap-2 mb-4">
                {product.sizes.map((size) => (
                  <span
                    key={size}
                    className="text-xs px-2 py-1 bg-gray-50 rounded-full text-gray-600 hover:bg-gray-100 transition-colors"
                  >
                    {size}
                  </span>
                ))}
              </div>
              <Button
                onClick={() => handleAddToCart(product)}
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
  )
}

