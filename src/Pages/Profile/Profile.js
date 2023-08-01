import { connect } from "react-redux";
import HeroDetailCard from "../../components/Cards/HeroDetailCard/HeroDetailCard";
import Footer from "../../components/Footer/Footer";
import useProfileData from "../../hooks/useProfileData";
import ProfileHeader from "./ProfileHeader";

const mapStateToProps = (state) => {
  return {
    data: state.data.data,
  };
}

function Profile({ data }) {
  const { heroData, isLoading, name, bannerImage } = useProfileData()
  return (
    <>
      <ProfileHeader image={bannerImage} />
      <HeroDetailCard heroData={data}/>
      <Footer />
    </>
  )
}

export default connect(mapStateToProps)(Profile)
