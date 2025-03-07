import Link from "next/link"
import { HeroSection } from "@/components/hero-section"
import { ValuesSection } from "@/components/values-section"
import { ProductGrid } from "@/components/product-grid"
import { NewsletterSection } from "@/components/newsletter-section"
import { ArrowRight } from "lucide-react"

export default function Home() {
  return (
    <div className="bg-white">
      <HeroSection />
      <div className="container mx-auto px-4 py-24">
        <div className="flex items-center justify-between mb-12">
          <div className="flex items-center gap-4">
            <h2 className="text-3xl font-bold text-gray-900">Produtos Populares</h2>
            <span className="px-3 py-1 rounded-full bg-[#E6007E]/10 text-[#E6007E] text-sm font-medium animate-pulse">
              Destaques
            </span>
          </div>
          <Link
            href="/produtos"
            className="group flex items-center gap-2 text-[#E6007E] hover:text-[#FF4D8D] font-medium"
          >
            Ver Todos
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
        <ProductGrid />
      </div>
      <ValuesSection />
      <NewsletterSection />
    </div>
  )
}

