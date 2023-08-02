import { connect } from "react-redux";
import HeroDetailCard from "../../components/Cards/HeroDetailCard/HeroDetailCard";
import Footer from "../../components/Footer/Footer";
import useProfileData from "../../hooks/useProfileData";
import ProfileHeader from "./ProfileHeader";
import ComicCardsArea from "./ComicCardsArea";
import Loading from "../../components/Loading/Loading";

const mapStateToProps = (state) => {
  return {
    data: state.data.data,
  };
}

function Profile({ data }) {
  const { comicsData, isLoading, bannerImage } = useProfileData()
  return (
    <>
      <ProfileHeader image={bannerImage} />
      <HeroDetailCard heroData={data}/>
      {!isLoading ?
      (<ComicCardsArea comicsData={comicsData} />)  
      : <Loading />}
      <Footer />
    </>
  )
}

export default connect(mapStateToProps)(Profile)
