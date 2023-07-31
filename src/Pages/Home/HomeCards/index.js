import HeroCard from "../../../components/Cards/HeroCard/HeroCard";
import { CardsArea, CardsSection, CardsSectionHeader, HeroesCounter } from "../Home.styles";
import LoveFilter from "./LoveFilter";

export default function HomeCards() {
  return (
    <CardsSection>
      <CardsSectionHeader>
        <HeroesCounter>Encontrados XX heróis</HeroesCounter>
        <LoveFilter />
      </CardsSectionHeader>
      <CardsArea>
        <HeroCard />
        <HeroCard />
        <HeroCard />
        <HeroCard />
      </CardsArea>
    </CardsSection>
  )
}