import HeroCard from "../../../components/Cards/HeroCard/HeroCard";
import Loading from "../../../components/Loading/Loading";
import { EmptyStateWrapper } from "../Home.styles";

export default function AllHeroes({
  showFavorites,
  isLoading,
  heroesData,
  favoriteHeroes,
  isLoadingFavorites,
  totalItems
}) {

  if (totalItems === 0 && !isLoading) return <EmptyStateWrapper><p>Nenhum herói encontrado</p></EmptyStateWrapper>
  if (isLoading || isLoadingFavorites) return <Loading />
  if (showFavorites && favoriteHeroes.length === 0) return <EmptyStateWrapper><p>Nenhum herói favoritado</p></EmptyStateWrapper>
  if (showFavorites) return favoriteHeroes.map((hero) => <HeroCard key={hero.id} heroData={hero} />)
  return (heroesData.map((hero) => <HeroCard key={hero.id} heroData={hero} />))
}