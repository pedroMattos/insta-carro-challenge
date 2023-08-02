import { useEffect, useState } from "react"
import { DexieDb } from "../Dexie"

export default function useOnlyFavorites() {
  const [allFavorites, setAllFavorites] = useState(null)
  const onlyFavorites = async () => {
    const favorites = await DexieDb.FavoriteHeroes.toArray()
    setAllFavorites(favorites.map((favorite) => (favorite.hero)))
  }

  useEffect(() => {
    onlyFavorites()
  }, [])

  return { allFavorites }
}