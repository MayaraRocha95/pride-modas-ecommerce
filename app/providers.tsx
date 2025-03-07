"use client"

import type * as React from "react"
import { ThemeProvider as NextThemesProvider } from "next-themes"
import { CartProvider } from "@/components/cart-provider"
import { FavoritesProvider } from "@/components/favorites-provider"
import { Toaster } from "@/components/toaster"

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <NextThemesProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
      <CartProvider>
        <FavoritesProvider>
          {children}
          <Toaster />
        </FavoritesProvider>
      </CartProvider>
    </NextThemesProvider>
  )
}

