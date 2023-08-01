import { Banner, BannerWrapper, Overlay, ProfiteTitle } from "../Profile.styles";

export default function ProfileHeader({ image }) {
  return (
    <BannerWrapper>
      <ProfiteTitle>Descubra Todos os quadrinhos deste personagem</ProfiteTitle>
      <Banner $backGroundImage={image} />
      <Overlay />
    </BannerWrapper>
  )
}