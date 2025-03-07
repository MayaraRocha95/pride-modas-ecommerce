"use client"

import type React from "react"

import { useState } from "react"
import { User, Mail, MapPin, Save } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card } from "@/components/ui/card"
import { useToast } from "@/components/ui/use-toast"

// Dados simulados do usuário
const initialUserData = {
  name: "João Silva",
  email: "joao.silva@email.com",
  address: {
    street: "Rua das Flores",
    number: "123",
    complement: "Apto 45",
    neighborhood: "Centro",
    city: "São Paulo",
    state: "SP",
    zipCode: "01234-567",
  },
}

export default function ProfilePage() {
  const [userData, setUserData] = useState(initialUserData)
  const [isLoading, setIsLoading] = useState(false)
  const { toast } = useToast()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    // Simula uma chamada à API
    await new Promise((resolve) => setTimeout(resolve, 1500))

    toast({
      title: "Perfil atualizado!",
      description: "Suas informações foram atualizadas com sucesso.",
    })

    setIsLoading(false)
  }

  return (
    <div className="min-h-[80vh] bg-white">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-bold mb-8 text-gray-900">Meu Perfil</h1>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Dados Pessoais */}
            <Card className="p-6">
              <h2 className="text-xl font-semibold mb-6 text-gray-900 flex items-center gap-2">
                <User className="w-5 h-5 text-[#E6007E]" />
                Dados Pessoais
              </h2>
              <div className="grid gap-6 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="name">Nome completo</Label>
                  <Input
                    id="name"
                    value={userData.name}
                    onChange={(e) => setUserData({ ...userData, name: e.target.value })}
                    className="border-gray-200"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">E-mail</Label>
                  <div className="relative">
                    <Input
                      id="email"
                      type="email"
                      value={userData.email}
                      onChange={(e) => setUserData({ ...userData, email: e.target.value })}
                      className="border-gray-200"
                    />
                    <Mail className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  </div>
                </div>
              </div>
            </Card>

            {/* Endereço */}
            <Card className="p-6">
              <h2 className="text-xl font-semibold mb-6 text-gray-900 flex items-center gap-2">
                <MapPin className="w-5 h-5 text-[#86007D]" />
                Endereço
              </h2>
              <div className="grid gap-6 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="street">Rua</Label>
                  <Input
                    id="street"
                    value={userData.address.street}
                    onChange={(e) =>
                      setUserData({
                        ...userData,
                        address: { ...userData.address, street: e.target.value },
                      })
                    }
                    className="border-gray-200"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="number">Número</Label>
                  <Input
                    id="number"
                    value={userData.address.number}
                    onChange={(e) =>
                      setUserData({
                        ...userData,
                        address: { ...userData.address, number: e.target.value },
                      })
                    }
                    className="border-gray-200"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="complement">Complemento</Label>
                  <Input
                    id="complement"
                    value={userData.address.complement}
                    onChange={(e) =>
                      setUserData({
                        ...userData,
                        address: { ...userData.address, complement: e.target.value },
                      })
                    }
                    className="border-gray-200"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="neighborhood">Bairro</Label>
                  <Input
                    id="neighborhood"
                    value={userData.address.neighborhood}
                    onChange={(e) =>
                      setUserData({
                        ...userData,
                        address: { ...userData.address, neighborhood: e.target.value },
                      })
                    }
                    className="border-gray-200"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="city">Cidade</Label>
                  <Input
                    id="city"
                    value={userData.address.city}
                    onChange={(e) =>
                      setUserData({
                        ...userData,
                        address: { ...userData.address, city: e.target.value },
                      })
                    }
                    className="border-gray-200"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="state">Estado</Label>
                  <Input
                    id="state"
                    value={userData.address.state}
                    onChange={(e) =>
                      setUserData({
                        ...userData,
                        address: { ...userData.address, state: e.target.value },
                      })
                    }
                    className="border-gray-200"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="zipCode">CEP</Label>
                  <Input
                    id="zipCode"
                    value={userData.address.zipCode}
                    onChange={(e) =>
                      setUserData({
                        ...userData,
                        address: { ...userData.address, zipCode: e.target.value },
                      })
                    }
                    className="border-gray-200"
                  />
                </div>
              </div>
            </Card>

            {/* Botão Salvar */}
            <div className="flex justify-end">
              <Button
                type="submit"
                className="bg-gradient-to-r from-[#E6007E] to-[#FF4D8D] text-white hover:opacity-90"
                disabled={isLoading}
              >
                {isLoading ? (
                  <>
                    <Save className="mr-2 h-4 w-4 animate-spin" />
                    Salvando...
                  </>
                ) : (
                  <>
                    <Save className="mr-2 h-4 w-4" />
                    Salvar alterações
                  </>
                )}
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

