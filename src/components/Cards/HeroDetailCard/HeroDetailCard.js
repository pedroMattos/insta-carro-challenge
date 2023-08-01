import { HeroDetailCardWrapper, HeroName, HeroNameAndDescription, HeroThumbNail } from "./HeroDetailCard.styles";

export default function HeroDetailCard ({ heroData }) {
  const heroDescription = !!heroData.description.trim() ? heroData.description : 'Herói sem descrição'
  return(
    <HeroDetailCardWrapper>
      <HeroThumbNail>
        <img src={`${heroData.thumbnail.path}.${heroData.thumbnail.extension}`} alt="hero data" />
      </HeroThumbNail>
      <HeroNameAndDescription>
        <HeroName>{heroData.name}</HeroName>
        <p>{heroDescription}</p>
      </HeroNameAndDescription>
    </HeroDetailCardWrapper>
  )
}