"use client"

import * as React from "react"

type FavoriteItem = {
  id: number
  name: string
  price: number
  image: string
  category: string
}

type FavoritesContextType = {
  items: FavoriteItem[]
  addItem: (item: FavoriteItem) => void
  removeItem: (id: number) => void
  isFavorite: (id: number) => boolean
}

export const FavoritesContext = React.createContext<FavoritesContextType | undefined>(undefined)

export function FavoritesProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = React.useState<FavoriteItem[]>(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("favorites")
      return saved ? JSON.parse(saved) : []
    }
    return []
  })

  React.useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(items))
  }, [items])

  const addItem = React.useCallback((newItem: FavoriteItem) => {
    setItems((currentItems) => {
      const exists = currentItems.some((item) => item.id === newItem.id)
      if (exists) return currentItems
      return [...currentItems, newItem]
    })
  }, [])

  const removeItem = React.useCallback((id: number) => {
    setItems((currentItems) => currentItems.filter((item) => item.id !== id))
  }, [])

  const isFavorite = React.useCallback(
    (id: number) => {
      return items.some((item) => item.id === id)
    },
    [items],
  )

  const value = React.useMemo(
    () => ({
      items,
      addItem,
      removeItem,
      isFavorite,
    }),
    [items, addItem, removeItem, isFavorite],
  )

  return <FavoritesContext.Provider value={value}>{children}</FavoritesContext.Provider>
}

export function useFavorites() {
  const context = React.useContext(FavoritesContext)
  if (context === undefined) {
    throw new Error("useFavorites must be used within a FavoritesProvider")
  }
  return context
}

