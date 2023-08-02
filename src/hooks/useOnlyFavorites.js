import { useEffect, useState } from "react"
import { DexieDb } from "../Dexie"

export default function useOnlyFavorites() {
  const [allFavorites, setAllFavorites] = useState(null)
  const [isLoadingFavorites, setIsLoadingFavorites] = useState(true)
  const onlyFavorites = async () => {
    setIsLoadingFavorites(true)
    const favorites = await DexieDb.FavoriteHeroes.toArray()
    setAllFavorites(favorites.map((favorite) => (favorite.hero)))
    setIsLoadingFavorites(false)
  }

  useEffect(() => {
    onlyFavorites()
  }, [])

  return { allFavorites, onlyFavorites, isLoadingFavorites }
}