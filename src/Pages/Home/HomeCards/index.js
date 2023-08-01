import HeroCard from "../../../components/Cards/HeroCard/HeroCard";
import Pagination from "../../../components/Pagination/Pagination";
import useHeroesData from "../../../hooks/useHeroesData";
import { CardsArea, CardsSection, CardsSectionHeader, HeroesCounter } from "../Home.styles";
import LoveFilter from "./LoveFilter";

export default function HomeCards() {
  const { heroes, isLoading, totalItems, handlePageChange, handleSearch } = useHeroesData()
  return (
    <CardsSection>
      <CardsSectionHeader>
        <HeroesCounter>Encontrados XX heróis</HeroesCounter>
        <LoveFilter />
      </CardsSectionHeader>
      <CardsArea>
        {!isLoading && heroes.map((hero) => <HeroCard key={hero.id} heroData={hero} />)}
      </CardsArea>
      <Pagination totalItems={totalItems} itemsPerPage={8} onChangePage={handlePageChange} />
    </CardsSection>
  )
}