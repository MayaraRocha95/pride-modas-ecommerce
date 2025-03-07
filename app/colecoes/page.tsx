import { FeaturedCollections } from "@/components/featured-collections"

export default function CollectionsPage() {
  return (
    <div className="min-h-[80vh] bg-white">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-3xl font-bold mb-8 text-gray-900">Nossas Coleções</h1>
        <FeaturedCollections />
      </div>
    </div>
  )
}

