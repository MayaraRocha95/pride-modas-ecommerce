import Link from "next/link"
import { Facebook, Instagram, Twitter, InstagramIcon as BrandTiktok } from "lucide-react"
import { rainbowColors } from "@/lib/constants"

export function Footer() {
  return (
    <footer className="bg-white">
      <div className="container px-4 py-16">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-4">
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-900">Sobre</h3>
            <p className="text-sm text-gray-600">
              Pride Modas - Moda inclusiva e sustentável para todos os corpos e identidades.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-900">Links Rápidos</h3>
            <ul className="space-y-3 text-sm text-gray-600">
              <li>
                <Link href="/sobre-nos" className="hover:text-[#E6007E] transition-colors">
                  Sobre Nós
                </Link>
              </li>
              <li>
                <Link href="/produtos" className="hover:text-[#E6007E] transition-colors">
                  Produtos
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-[#E6007E] transition-colors">
                  Blog
                </Link>
              </li>
              </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-900">Atendimento</h3>
            <ul className="space-y-3 text-sm text-gray-600">
              <li>Email: contato@pridemodas.com</li>
              <li>Telefone: (11) 1234-5678</li>
              <li>Segunda a Sexta: 9h às 18h</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-900">Redes Sociais</h3>
            <div className="flex space-x-4">
              <Link href="#" className="hover:scale-110 transition-transform">
                <Facebook className="h-5 w-5" style={{ stroke: rainbowColors.red }} />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="hover:scale-110 transition-transform">
                <Instagram className="h-5 w-5" style={{ stroke: rainbowColors.orange }} />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="hover:scale-110 transition-transform">
                <Twitter className="h-5 w-5" style={{ stroke: rainbowColors.yellow }} />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="hover:scale-110 transition-transform">
                <BrandTiktok className="h-5 w-5" style={{ stroke: rainbowColors.green }} />
                <span className="sr-only">TikTok</span>
              </Link>
            </div>
          </div>
        </div>
        <div className="mt-16 pt-8 border-t border-gray-100 text-center text-sm text-gray-600">
          © 2025 Pride Modas. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  )
}

