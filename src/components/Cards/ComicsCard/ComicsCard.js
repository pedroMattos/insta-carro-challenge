import { ComicCover, ComicDescription, ComicTitle, ComicTitleAndDescriptions, ComicsCardWrapper } from "./ComicsCard.styles";
import useComicDate from "./hooks/useComicDate";

export default function ComicsCard({ comicData }) {
  const comicDate = useComicDate(comicData.dates, "onsaleDate")
  const comicDescription = !!comicData.description?.trim() ? comicData.description : 'Quadrinho sem descrição'

  return (
    <ComicsCardWrapper>
      <ComicCover>
        <img src={`${comicData.thumbnail.path}.${comicData.thumbnail.extension}`} alt="comic thumb" />
      </ComicCover>
      <ComicTitleAndDescriptions>
        <ComicTitle>{comicData.title}</ComicTitle>
        <p>{comicDate} * 47 pages</p>
        <ComicDescription>{comicDescription}</ComicDescription>
      </ComicTitleAndDescriptions>
    </ComicsCardWrapper>
  )
}