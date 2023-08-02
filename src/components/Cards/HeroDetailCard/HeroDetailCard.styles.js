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
  @media (max-width: 800px) {
    min-width: 90%;
    margin: 0 auto;
  }
`

export const HeroThumbNail = styled.figure`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  margin: 0 0 0 20px;
  overflow: hidden;
  img {
    width: 150px;
    height: 150px;
    object-fit: cover;
  }
`

export const HeroNameAndDescription = styled.div`
  display: flex;
  flex-direction: column;
  padding-right: 70px;
  @media (max-width: 800px) {
    padding-right: 10px;
    text-overflow: ellipsis;
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 5;
    -webkit-box-orient: vertical;
  }
`

export const HeroName = styled.p`
  color: var(--black);
  font-size: 24px;
  font-weight: 700;
  margin: 0;
`