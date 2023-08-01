import { useEffect, useState } from "react";
import getHeroById from "../services/getHeroById";
import { useParams } from "react-router-dom";

export default function useProfileData() {
  const { id } = useParams()
  const [comicsData, setComisData] = useState(null)
  const [isLoading, setIsLoading] = useState(true)
  const [bannerImage, setBannerImage] = useState(null)

  const fetchComics = async () => {
    const { results } = await getHeroById(id)
    setComisData(results)
    setBannerImage(`${results.at(0).images.at(0).path}.${results.at(0).images.at(0).extension}`)
    setIsLoading(false)
  }

  useEffect(() => {
    fetchComics()
  }, [])

  return { isLoading, comicsData, bannerImage }
}