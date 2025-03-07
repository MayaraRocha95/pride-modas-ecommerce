"use client"

import Image from "next/image"
import Link from "next/link"
import { Minus, Plus, Trash2, ShoppingBag, ArrowRight } from "lucide-react"
import { useCart } from "@/components/cart-provider"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { rainbowColors } from "@/lib/constants"

export default function CartPage() {
  const { items, removeItem, updateQuantity, total } = useCart()

  if (items.length === 0) {
    return (
      <div className="min-h-[80vh] bg-white flex items-center">
        <div className="container mx-auto px-4 py-16 text-center">
          <div className="max-w-md mx-auto">
            <ShoppingBag className="w-16 h-16 mx-auto mb-6" style={{ stroke: rainbowColors.purple }} />
            <h1 className="text-2xl font-bold mb-4 text-gray-900">Seu carrinho está vazio</h1>
            <p className="mb-8 text-gray-600">Adicione alguns produtos para começar suas compras!</p>
            <Link href="/produtos">
              <Button className="bg-gradient-to-r from-[#E6007E] to-[#FF4D8D] hover:opacity-90 text-white gap-2">
                Continuar Comprando
                <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-[80vh] bg-white">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-3xl font-bold mb-8 text-gray-900">Carrinho de Compras</h1>
        <div className="grid gap-8 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <Card className="bg-white border border-gray-200">
              <div className="divide-y divide-gray-200">
                {items.map((item, index) => (
                  <div key={item.id} className="flex gap-6 p-6">
                    <div className="relative h-28 w-28 flex-shrink-0 overflow-hidden rounded-lg border border-gray-200">
                      <Image src={item.image || "/placeholder.svg"} alt={item.name} fill className="object-cover" />
                    </div>
                    <div className="flex flex-1 flex-col justify-between">
                      <div className="flex justify-between">
                        <div>
                          <h3 className="font-medium text-lg text-gray-900">{item.name}</h3>
                          <p className="mt-1 text-base text-gray-600">R$ {item.price.toFixed(2)}</p>
                        </div>
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={() => removeItem(item.id)}
                          className="text-gray-400 hover:text-[#E6007E]"
                        >
                          <Trash2 className="h-5 w-5" style={{ stroke: Object.values(rainbowColors)[index % 6] }} />
                          <span className="sr-only">Remover item</span>
                        </Button>
                      </div>
                      <div className="flex items-center gap-4 mt-4">
                        <div className="flex items-center border border-gray-200 rounded-full">
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            disabled={item.quantity <= 1}
                            className="h-8 w-8 flex items-center justify-center rounded-l-full hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
                          >
                            <Minus className="h-4 w-4" style={{ stroke: Object.values(rainbowColors)[index % 6] }} />
                            <span className="sr-only">Diminuir quantidade</span>
                          </button>
                          <span className="w-12 text-center font-medium text-gray-900 border-x border-gray-200 py-1">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="h-8 w-8 flex items-center justify-center rounded-r-full hover:bg-gray-50"
                          >
                            <Plus className="h-4 w-4" style={{ stroke: Object.values(rainbowColors)[index % 6] }} />
                            <span className="sr-only">Aumentar quantidade</span>
                          </button>
                        </div>
                        <span className="text-sm text-gray-500">
                          Total: R$ {(item.price * item.quantity).toFixed(2)}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </div>
          <div>
            <Card className="bg-white border border-gray-200 p-6">
              <h2 className="text-xl font-semibold mb-4 text-gray-900">Resumo do Pedido</h2>
              <div className="space-y-3">
                <div className="flex justify-between text-gray-600">
                  <span>Subtotal</span>
                  <span>R$ {total.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-gray-600">
                  <span>Frete</span>
                  <span>Calculado no checkout</span>
                </div>
                <Separator className="my-4 bg-gray-200" />
                <div className="flex justify-between text-lg font-semibold text-gray-900">
                  <span>Total</span>
                  <span>R$ {total.toFixed(2)}</span>
                </div>
              </div>
              <div className="mt-6 space-y-3">
                <Link href="/checkout" className="block">
                  <Button className="w-full bg-gradient-to-r from-[#E6007E] to-[#FF4D8D] hover:opacity-90 text-white">
                    Finalizar Compra
                  </Button>
                </Link>
                <Link href="/produtos" className="block">
                  <Button variant="outline" className="w-full text-gray-900 border border-gray-200 hover:bg-gray-50">
                    Continuar Comprando
                  </Button>
                </Link>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}

