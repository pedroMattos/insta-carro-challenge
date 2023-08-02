import SearchField from "../../../components/FormFields/SearchField/SearchField";
import Pagination from "../../../components/Pagination/Pagination";
import useHeroesData from "../../../hooks/useHeroesData";
import { CardsArea, CardsSection, CardsSectionHeader, HeroesCounter } from "../Home.styles";
import LoveFilter from "./LoveFilter";
import { useState } from "react";
import useOnlyFavorites from "../../../hooks/useOnlyFavorites";
import AllHeroes from "./AllHeroes";

export default function HomeCards() {
  const { heroes, isLoading, totalItems, handlePageChange, handleSearch } = useHeroesData()
  const { allFavorites } = useOnlyFavorites()
  const [showFavorites, setShowFavorites] = useState(heroes)
  const handleFilterFavorites = () => setShowFavorites((show) => !show)

  return (
    <CardsSection>
      <SearchField onChange={handleSearch} />
      <CardsSectionHeader>
        <HeroesCounter>Encontrados {totalItems} heróis</HeroesCounter>
        <LoveFilter onClick={handleFilterFavorites} />
      </CardsSectionHeader>
      <CardsArea>
        <AllHeroes isLoading={isLoading} heroesData={heroes} showFavorites={showFavorites} favoriteHeroes={allFavorites} />
      </CardsArea>
      {!showFavorites && <Pagination totalItems={totalItems} itemsPerPage={8} onChangePage={handlePageChange} />}
    </CardsSection>
  )
}