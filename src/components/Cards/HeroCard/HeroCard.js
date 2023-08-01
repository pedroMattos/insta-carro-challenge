import { useNavigate } from "react-router-dom";
import LoveIconOff from "../../Icons/LoveIconOff/LoveIconOff";
import { HeroCardWrapper, HeroDescription, HeroFigure, HeroLoveAndName, HeroName, LoveButton } from "./HeroCard.styles";
import { connect } from "react-redux";

function HeroCard({ heroData, dispatch }) {
  const navigate = useNavigate()
  const heroDescriptionText = !!heroData.description.trim() ? heroData.description : 'Herói sem descrição'
  const handleNavigate = () => {
    dispatch({ type: 'UPDATE_DATA', payload: heroData })
    navigate(`/profile/${heroData.id}/${heroData.name}`)
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

export default connect()(HeroCard)