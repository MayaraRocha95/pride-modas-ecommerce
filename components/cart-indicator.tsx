"use client"

import { ShoppingCart } from "lucide-react"
import { useCart } from "./cart-provider"

export function CartIndicator({ color = "#86007D" }: { color?: string }) {
  const { itemCount } = useCart()

  return (
    <div className="relative">
      <ShoppingCart className="h-5 w-5 transition-colors duration-300" style={{ stroke: color }} />
      {itemCount > 0 && (
        <span className="absolute -top-2 -right-2 h-4 w-4 rounded-full bg-[#E6007E] text-white text-xs flex items-center justify-center">
          {itemCount}
        </span>
      )}
      <span className="sr-only">Carrinho</span>
    </div>
  )
}

