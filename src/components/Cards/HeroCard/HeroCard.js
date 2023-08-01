import LoveIconOff from "../../Icons/LoveIconOff/LoveIconOff";
import { HeroCardWrapper, HeroFigure, HeroLoveAndName, HeroName, LoveButton } from "./HeroCard.styles";

export default function HeroCard({ heroData }) {
  return (
    <HeroCardWrapper>
      <HeroFigure>
        <img src={`${heroData.thumbnail.path}.${heroData.thumbnail.extension}`} alt={heroData.name} />
      </HeroFigure>
      <HeroLoveAndName>
        <HeroName>{heroData.name}</HeroName>
        <LoveButton>
          <LoveIconOff width={20} height={20} />
        </LoveButton>
      </HeroLoveAndName>
    </HeroCardWrapper>
  )
}