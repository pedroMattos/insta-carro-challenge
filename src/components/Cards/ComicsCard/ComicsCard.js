import CircleIcon from "../../Icons/CircleIcon/Circleicon";
import { ComicCover, ComicDescription, ComicTitle, ComicTitleAndDescriptions, ComicsCardWrapper, DatesAndPages } from "./ComicsCard.styles";
import useComicDate from "./hooks/useComicDate";

export default function ComicsCard({ comicData }) {
  const comicDate = useComicDate(comicData.dates, "onsaleDate")
  const comicDescription = !!comicData.description?.trim() ? comicData.description : 'Quadrinho sem descrição'
  console.log(comicData)

  return (
    <ComicsCardWrapper>
      <ComicCover>
        <img src={`${comicData.thumbnail.path}.${comicData.thumbnail.extension}`} alt="comic thumb" />
      </ComicCover>
      <ComicTitleAndDescriptions>
        <ComicTitle>{comicData.title}</ComicTitle>
        <DatesAndPages>{comicDate} <CircleIcon width={10} height={10}/> {comicData.pageCount} pages</DatesAndPages>
        <ComicDescription>{comicDescription}</ComicDescription>
      </ComicTitleAndDescriptions>
    </ComicsCardWrapper>
  )
}