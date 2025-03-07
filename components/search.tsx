"use client"

import * as React from "react"
import { SearchIcon } from "lucide-react"
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command"
import { Button } from "@/components/ui/button"

// Simulated product data - replace with your actual data source
const searchItems = [
  {
    id: 1,
    name: "Camiseta Pride Rainbow",
    category: "Camisetas",
    href: "/produtos/camiseta-pride-rainbow",
  },
  {
    id: 2,
    name: "Jaqueta Denim Arco-Íris",
    category: "Jaquetas",
    href: "/produtos/jaqueta-denim-arco-iris",
  },
  // Add more items...
]

export function Search() {
  const [open, setOpen] = React.useState(false)

  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault()
        setOpen((open) => !open)
      }
    }
    document.addEventListener("keydown", down)
    return () => document.removeEventListener("keydown", down)
  }, [])

  return (
    <>
      <Button
        variant="outline"
        className="relative h-9 w-9 p-0 xl:h-10 xl:w-60 xl:justify-start xl:px-3 xl:py-2"
        onClick={() => setOpen(true)}
      >
        <SearchIcon className="h-4 w-4 xl:mr-2" />
        <span className="hidden xl:inline-flex">Buscar produtos...</span>
        <span className="sr-only">Buscar produtos</span>
        <kbd className="pointer-events-none absolute right-1.5 top-2 hidden h-6 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium opacity-100 xl:flex">
          <span className="text-xs">⌘</span>K
        </kbd>
      </Button>
      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder="Digite para buscar..." />
        <CommandList>
          <CommandEmpty>Nenhum resultado encontrado.</CommandEmpty>
          <CommandGroup heading="Produtos">
            {searchItems.map((item) => (
              <CommandItem
                key={item.id}
                value={item.name}
                onSelect={() => {
                  setOpen(false)
                  window.location.href = item.href
                }}
              >
                {item.name}
              </CommandItem>
            ))}
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </>
  )
}

