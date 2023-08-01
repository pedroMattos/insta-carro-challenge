import { HeroDetailCardWrapper, HeroName, HeroNameAndDescription, HeroThumbNail } from "./HeroDetailCard.styles";

export default function HeroDetailCard ({ heroData }) {
  return(
    <HeroDetailCardWrapper>
      <HeroThumbNail>
        <img src={`${heroData.thumbnail.path}.${heroData.thumbnail.extension}`} alt="hero data" />
      </HeroThumbNail>
      <HeroNameAndDescription>
        <HeroName>{heroData.name}</HeroName>
        <p>{heroData.description}</p>
      </HeroNameAndDescription>
    </HeroDetailCardWrapper>
  )
}