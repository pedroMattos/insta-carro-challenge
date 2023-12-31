import { styled } from "styled-components";
import { HeroDetailCardWrapper, HeroName, HeroNameAndDescription } from "../HeroDetailCard/HeroDetailCard.styles";

export const ComicsCardWrapper = styled(HeroDetailCardWrapper)`
  position: unset;
  height: 180px;
  @media (max-width: 800px) {
    width: 90%;
    margin: 0 auto;
  }
`

export const ComicCover = styled.figure`
  min-width: 150px;
  height: 180px;
  border-radius: 40px 0 0 40px;
  overflow: hidden;
  margin: 0;
  img {
    min-width: 150px;
    height: 180px;
    object-fit: cover;
  }
`

export const ComicTitleAndDescriptions = styled(HeroNameAndDescription)`
`

export const DatesAndPages = styled.p`
  font-size: 14px;
`

export const ComicTitle = styled(HeroName)`
@media (max-width: 800px) {
  min-width: 150px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
`

export const ComicDescription = styled.p`
  text-overflow: ellipsis;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  margin: 0;
`