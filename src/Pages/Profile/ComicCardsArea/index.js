import ComicsCard from "../../../components/Cards/ComicsCard/ComicsCard";
import { ComicCardsWrapper } from "../Profile.styles";

export default function ComicCardsArea({ comicsData }) {
  return (
    <ComicCardsWrapper>
      {comicsData.map((comic) => <ComicsCard key={comic.digitalId} comicData={comic} />)}
    </ComicCardsWrapper>
  )
}