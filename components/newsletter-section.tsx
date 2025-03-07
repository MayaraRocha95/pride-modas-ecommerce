"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useToast } from "@/components/ui/use-toast"
import { Loader2 } from "lucide-react"

export function NewsletterSection() {
  const [email, setEmail] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const { toast } = useToast()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    // Validação básica de email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      toast({
        title: "Email inválido",
        description: "Por favor, insira um email válido.",
        variant: "destructive",
      })
      return
    }

    setIsLoading(true)

    // Simula o envio do email (delay de 1.5s)
    await new Promise((resolve) => setTimeout(resolve, 1500))

    toast({
      title: "Inscrição confirmada! 🎉",
      description: (
        <div className="mt-2 space-y-2 text-sm">
          <p>
            Enviamos um email de confirmação para <strong>{email}</strong>
          </p>
          <p>Verifique sua caixa de entrada para confirmar sua inscrição.</p>
        </div>
      ),
    })

    setEmail("")
    setIsLoading(false)
  }

  return (
    <section className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#FF0018]/20 via-[#FFA52C]/20 via-[#FFFF41]/15 via-[#008018]/20 via-[#0000F9]/20 to-[#86007D]/20" />
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-[#FF0018]/30 to-[#FFA52C]/30 blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-br from-[#0000F9]/30 to-[#86007D]/30 blur-3xl" />
      </div>
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-[0.05]" />
      <div className="container mx-auto px-4 text-center relative">
        <h2 className="text-2xl font-bold mb-4 text-[#662D91]">Fique por dentro das novidades</h2>
        <p className="mb-8 text-gray-600 max-w-2xl mx-auto">
          Assine nossa newsletter e receba atualizações sobre novos produtos, promoções exclusivas e conteúdo para a
          comunidade LGBTQIAPN+.
        </p>
        <form onSubmit={handleSubmit} className="max-w-md mx-auto flex gap-2">
          <Input
            type="email"
            placeholder="Seu melhor email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="flex-1 px-4 py-2 rounded-full bg-white/80 backdrop-blur-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-[#E6007E] text-gray-900 placeholder:text-gray-500"
            disabled={isLoading}
            required
          />
          <Button
            type="submit"
            className="bg-gradient-to-r from-[#E6007E] to-[#FF4D8D] hover:opacity-90 text-white rounded-full"
            disabled={isLoading}
          >
            {isLoading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Enviando...
              </>
            ) : (
              "Assinar"
            )}
          </Button>
        </form>
      </div>
    </section>
  )
}

