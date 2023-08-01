import { styled } from "styled-components";

export const HeroDetailCardWrapper = styled.div`
  width: 80%;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  border-radius: 40px;
  height: 200px;
  margin: 0 auto;
  position: relative;
  bottom: 100px;
  z-index: 5;
  background-color: white;
  display: flex;
  align-items: center;
  gap: 20px;
`

export const HeroThumbNail = styled.figure`
  min-width: 150px;
  height: 150px;
  border-radius: 50%;
  margin: 0 0 0 20px;
  overflow: hidden;
  img {
    width: 100%;
    height: 150px;
    object-fit: cover;
  }
`

export const HeroNameAndDescription = styled.div`
  display: flex;
  flex-direction: column;
  padding-right: 70px;
`

export const HeroName = styled.p`
  color: var(--black);
  font-size: 24px;
  font-weight: 700;
  margin: 0;
`