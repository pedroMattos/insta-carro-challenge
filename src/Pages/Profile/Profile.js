import { connect } from "react-redux";
import HeroDetailCard from "../../components/Cards/HeroDetailCard/HeroDetailCard";
import Footer from "../../components/Footer/Footer";
import useProfileData from "../../hooks/useProfileData";
import ProfileHeader from "./ProfileHeader";
import ComicCardsArea from "./ComicCardsArea";
import Loading from "../../components/Loading/Loading";
import { ProfileWrapper } from "./Profile.styles";

const mapStateToProps = (state) => {
  return {
    data: state.data.data,
  };
}

function Profile({ data }) {
  const { comicsData, isLoading, bannerImage } = useProfileData()
  return (
    <ProfileWrapper>
      <ProfileHeader image={bannerImage} />
      <HeroDetailCard heroData={data}/>
      {!isLoading ?
      (<ComicCardsArea comicsData={comicsData} />)  
      : <Loading />}
      <Footer />
    </ProfileWrapper>
  )
}

export default connect(mapStateToProps)(Profile)
