"use client"

import { useSearchParams } from "next/navigation"
import { ProductGrid } from "@/components/product-grid"

export default function SearchPage() {
  const searchParams = useSearchParams()
  const query = searchParams.get("q")

  return (
    <div className="min-h-[80vh] bg-white">
      <div className="container mx-auto px-4 py-16">
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-gray-900 mb-2">Resultados da busca</h1>
          {query && (
            <p className="text-gray-600">
              Mostrando resultados para: <span className="font-medium">"{query}"</span>
            </p>
          )}
        </div>
        <ProductGrid searchQuery={query || ""} />
      </div>
    </div>
  )
}

