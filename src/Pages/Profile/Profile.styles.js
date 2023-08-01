import { styled } from "styled-components";

export const Banner = styled.div`
  width: 100vw;
  height: 500px;
  z-index: 0;
  ${({ $backGroundImage }) => $backGroundImage ? `
  background-image: url(${$backGroundImage});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 0 30%;
  ` : ''}
`

export const Overlay = styled.div`
  background-color: black;
  opacity: .7;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 1;
`

export const BannerWrapper = styled.div`
  position: relative;
`

export const ProfiteTitle = styled.h1`
  text-transform: uppercase;
  position: absolute;
  z-index: 3;
  color: white;
  width: 30%;
  top: 100px;
  left: 200px;
  margin: 0;
`
