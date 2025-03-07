"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { Heart, User, Search, X } from "lucide-react"
import { CartIndicator } from "./cart-indicator"
import { rainbowColors } from "@/lib/constants"
import { Input } from "./ui/input"
import { Button } from "./ui/button"
import { useRouter } from "next/navigation"

export function Header() {
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")
  const router = useRouter()

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (searchQuery.trim()) {
      router.push(`/busca?q=${encodeURIComponent(searchQuery.trim())}`)
      setIsSearchOpen(false)
      setSearchQuery("")
    }
  }

  return (
    <header className="w-full bg-white sticky top-0 z-50 border-b border-gray-100">
      <div className="container mx-auto flex h-20 items-center justify-between px-4">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-r from-[#E6007E] to-[#FF4D8D]">
            <span className="text-lg font-bold text-white">PM</span>
          </div>
          <span className="text-xl font-bold text-gray-900">Pride Modas</span>
        </Link>

        {/* Navigation */}
        <nav
          className={`hidden md:flex items-center gap-8 transition-opacity duration-300 ${isSearchOpen ? "opacity-0" : "opacity-100"}`}
        >
          {[
            ["Início", "/"],
            ["Produtos", "/produtos"],
            ["Coleções", "/colecoes"],
            ["Sobre Nós", "/sobre-nos"],
            ["Blog", "/blog"],
          ].map(([name, href]) => (
            <Link
              key={name}
              href={href}
              className="text-sm font-medium text-gray-600 hover:text-[#E6007E] transition-colors"
            >
              {name}
            </Link>
          ))}
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-6">
          {isSearchOpen ? (
            <form onSubmit={handleSearch} className="flex items-center gap-2 animate-in slide-in-from-top-2">
              <Input
                type="search"
                placeholder="Buscar produtos..."
                className="w-[300px] border-gray-200"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                autoFocus
              />
              <Button
                type="submit"
                size="icon"
                className="bg-gradient-to-r from-[#E6007E] to-[#FF4D8D] hover:opacity-90"
              >
                <Search className="h-4 w-4 text-white" />
              </Button>
              <Button type="button" size="icon" variant="outline" onClick={() => setIsSearchOpen(false)}>
                <X className="h-4 w-4" />
              </Button>
            </form>
          ) : (
            <>
              <button onClick={() => setIsSearchOpen(true)} className="transition-transform hover:scale-110">
                <Search className="h-5 w-5" style={{ stroke: rainbowColors.red }} />
                <span className="sr-only">Buscar</span>
              </button>
              <Link href="/favoritos" className="transition-transform hover:scale-110">
                <Heart className="h-5 w-5" style={{ stroke: rainbowColors.orange }} />
                <span className="sr-only">Favoritos</span>
              </Link>
              <Link href="/perfil" className="transition-transform hover:scale-110">
                <User className="h-5 w-5" style={{ stroke: rainbowColors.green }} />
                <span className="sr-only">Perfil</span>
              </Link>
              <Link href="/carrinho" className="transition-transform hover:scale-110">
                <CartIndicator color={rainbowColors.purple} />
              </Link>
            </>
          )}
        </div>
      </div>
    </header>
  )
}

