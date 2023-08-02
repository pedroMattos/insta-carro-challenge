import HeroCard from "../../../components/Cards/HeroCard/HeroCard";
import Loading from "../../../components/Loading/Loading";

export default function AllHeroes({
  showFavorites,
  isLoading,
  heroesData,
  favoriteHeroes,
  isLoadingFavorites
}) {

  if (isLoading || isLoadingFavorites) return <Loading />
  if (showFavorites) return favoriteHeroes.map((hero) => <HeroCard key={hero.id} heroData={hero} />)
  return (heroesData.map((hero) => <HeroCard key={hero.id} heroData={hero} />))
}