import HeroCard from "../../../components/Cards/HeroCard/HeroCard";
import Loading from "../../../components/Loading/Loading";
import Pagination from "../../../components/Pagination/Pagination";
import useHeroesData from "../../../hooks/useHeroesData";
import { CardsArea, CardsSection, CardsSectionHeader, HeroesCounter } from "../Home.styles";
import LoveFilter from "./LoveFilter";

export default function HomeCards() {
  const { heroes, isLoading, totalItems, handlePageChange, handleSearch } = useHeroesData()
  return (
    <CardsSection>
      <CardsSectionHeader>
        <HeroesCounter>Encontrados {totalItems} heróis</HeroesCounter>
        <LoveFilter />
      </CardsSectionHeader>
      <CardsArea>
        {!isLoading ?
          heroes.map((hero) => <HeroCard key={hero.id} heroData={hero} />)
          : <Loading />}
      </CardsArea>
      <Pagination totalItems={totalItems} itemsPerPage={8} onChangePage={handlePageChange} />
    </CardsSection>
  )
}