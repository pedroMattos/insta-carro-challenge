import { useEffect, useState } from "react";
import getHeroById from "../services/getHeroById";
import { useParams } from "react-router-dom";

export default function useProfileData() {
  const { id, name } = useParams()
  const [heroData, setHeroData] = useState(null)
  const [isLoading, setIsLoading] = useState(true)
  const [bannerImage, setBannerImage] = useState(null)

  const fetchHeroData = async () => {
    const { results } = await getHeroById(id)
    setHeroData(results)
    setBannerImage(`${results.at(0).thumbnail.path}.${results.at(0).thumbnail.extension}`)
    setIsLoading(false)
  }

  useEffect(() => {
    fetchHeroData()
  }, [])

  return { isLoading, heroData, name, bannerImage }
}