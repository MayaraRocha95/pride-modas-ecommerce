"use client"

import { useState } from "react"
import { ProductGrid } from "@/components/product-grid"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"

const sizes = [
  { label: "PP", value: "pp" },
  { label: "P", value: "p" },
  { label: "M", value: "m" },
  { label: "G", value: "g" },
  { label: "GG", value: "gg" },
  { label: "XGG", value: "xgg" },
  { label: "Único", value: "unico" },
]

export default function ProductsPage() {
  const [selectedSize, setSelectedSize] = useState<string>("")
  const [priceRange, setPriceRange] = useState({ min: "", max: "" })
  const [sortBy, setSortBy] = useState("newest")

  return (
    <div className="min-h-[80vh] bg-white">
      <div className="container mx-auto px-4 py-16">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Filtros */}
          <div className="w-full md:w-64 space-y-6">
            <div>
              <h2 className="text-lg font-semibold text-gray-900 mb-4">Filtros</h2>
              <Separator className="mb-4" />

              {/* Tamanhos */}
              <div className="space-y-4">
                <Label className="text-base font-medium text-gray-900">Tamanhos</Label>
                <div className="grid grid-cols-3 gap-2">
                  {sizes.map((size) => (
                    <Button
                      key={size.value}
                      variant={selectedSize === size.value ? "default" : "outline"}
                      className={`border border-gray-200 ${
                        selectedSize === size.value
                          ? "bg-gradient-to-r from-[#E6007E] to-[#FF4D8D] text-white"
                          : "hover:border-[#E6007E] hover:text-[#E6007E]"
                      }`}
                      onClick={() => setSelectedSize(size.value === selectedSize ? "" : size.value)}
                    >
                      {size.label}
                    </Button>
                  ))}
                </div>
              </div>

              <Separator className="my-6" />

              {/* Preço */}
              <div className="space-y-4">
                <Label className="text-base font-medium text-gray-900">Preço</Label>
                <div className="grid gap-4">
                  <div className="grid grid-cols-2 gap-2 items-center">
                    <div>
                      <Label htmlFor="min" className="text-sm text-gray-600">
                        Mínimo
                      </Label>
                      <Input
                        id="min"
                        type="number"
                        placeholder="R$ 0"
                        value={priceRange.min}
                        onChange={(e) => setPriceRange({ ...priceRange, min: e.target.value })}
                        className="border border-gray-200"
                      />
                    </div>
                    <div>
                      <Label htmlFor="max" className="text-sm text-gray-600">
                        Máximo
                      </Label>
                      <Input
                        id="max"
                        type="number"
                        placeholder="R$ 1000"
                        value={priceRange.max}
                        onChange={(e) => setPriceRange({ ...priceRange, max: e.target.value })}
                        className="border border-gray-200"
                      />
                    </div>
                  </div>
                  <Button className="w-full bg-gradient-to-r from-[#E6007E] to-[#FF4D8D] hover:opacity-90 text-white">
                    Aplicar Filtros
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Lista de Produtos */}
          <div className="flex-1">
            <div className="flex items-center justify-between mb-6">
              <h1 className="text-2xl font-bold text-gray-900">Nossos Produtos</h1>
              <div className="flex items-center gap-2">
                <Label htmlFor="sort" className="text-sm text-gray-600">
                  Ordenar por:
                </Label>
                <select
                  id="sort"
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="border border-gray-200 rounded-md px-3 py-1.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#E6007E]"
                >
                  <option value="newest">Mais Recentes</option>
                  <option value="price-asc">Menor Preço</option>
                  <option value="price-desc">Maior Preço</option>
                  <option value="name">Nome A-Z</option>
                </select>
              </div>
            </div>
            <ProductGrid selectedSize={selectedSize} priceRange={priceRange} sortBy={sortBy} />
          </div>
        </div>
      </div>
    </div>
  )
}

