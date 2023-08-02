import { useEffect, useState } from "react"
import { DexieDb } from "../Dexie"

export default function useFavorites(id) {
  const [myFavoriteHero, setMyFavoriteHero] = useState(null)
  const favoriteHero = async (hero) => {
    await isFavorite(id)
    if (myFavoriteHero) {
      removeFavorite()
      return
    }
    try {
      await DexieDb.FavoriteHeroes.add({ id: hero.id, hero })
      setMyFavoriteHero(true)
    } catch (error) {
      console.error(error)
    }
  }

  const removeFavorite = async () => {
    await DexieDb.FavoriteHeroes.where({ id: id }).delete()
    setMyFavoriteHero(false)
  }

  const isFavorite = async (id) => {
    const hero = await DexieDb.FavoriteHeroes.where('id').equals(id).first()
    if (hero) setMyFavoriteHero(true)
  }

  useEffect(() => {
    isFavorite(id)
  }, [])

  return { favoriteHero, myFavoriteHero }
}