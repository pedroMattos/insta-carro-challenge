import HeroDetailCard from "../../components/Cards/HeroDetailCard/HeroDetailCard";
import Footer from "../../components/Footer/Footer";
import useProfileData from "../../hooks/useProfileData";
import ProfileHeader from "./ProfileHeader";

export default function Profile() {
  const { heroData, isLoading, name, bannerImage } = useProfileData()
  console.log(heroData, name)
  return (
    <>
      <ProfileHeader image={bannerImage} />
      <HeroDetailCard/>
      <Footer />
    </>
  )
}
