import Footer from "../../components/Footer/Footer";
import { HomeWrapper } from "./Home.styles";
import HomeCards from "./HomeCards";
import HomeHeader from "./HomeHeader";

export default function Home() {
  return (
    <HomeWrapper>
      <HomeHeader />
      <HomeCards />
      <Footer />
    </HomeWrapper>
  )
}