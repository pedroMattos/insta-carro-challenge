import { useNavigate } from "react-router-dom";
import LoveIconOff from "../../Icons/LoveIconOff/LoveIconOff";
import { HeroCardWrapper, HeroDescription, HeroFigure, HeroLoveAndName, HeroName, LoveButton } from "./HeroCard.styles";

export default function HeroCard({ heroData }) {
  const navigate = useNavigate()
  const heroDescriptionText = !!heroData.description.trim() ? heroData.description : 'Herói sem descrição'
  const handleNavigate = () => {
    navigate(`/profile/${heroData.id}`)
  }
  return (
    <HeroCardWrapper>
      <HeroFigure onClick={handleNavigate}>
        <img src={`${heroData.thumbnail.path}.${heroData.thumbnail.extension}`} alt={heroData.name} />
      </HeroFigure>
      <HeroLoveAndName>
        <HeroName onClick={handleNavigate}>{heroData.name}</HeroName>
        <LoveButton>
          <LoveIconOff width={20} height={20} />
        </LoveButton>
      </HeroLoveAndName>
      <HeroDescription onClick={handleNavigate}>
        {heroDescriptionText}
      </HeroDescription>
    </HeroCardWrapper>
  )
}