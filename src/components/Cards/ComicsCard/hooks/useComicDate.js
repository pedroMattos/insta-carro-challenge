import moment from "moment/moment";
import { useCallback, useEffect, useState } from "react";

export default function useComicDate(comicDates, findParam) {
  const [date, setDate] = useState(null)

  const findDate = useCallback(() => {
    const comicDate = comicDates.find((comicDate) => comicDate.type === findParam).date
    setDate(moment(comicDate).format('MM/DD/YYYY'))
  }, [comicDates, findParam])

  useEffect(() => {
    findDate()
  }, [comicDates, findDate])

  return date
}