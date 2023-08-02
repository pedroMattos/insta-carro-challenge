import { styled } from "styled-components";

export const HeroCardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 250px;
  border: 1px solid var(--gray);
  border-radius: 10px;
  max-width: 206px;
  align-items: center;
  padding-top: 10px;
  gap: 10px;
  cursor: pointer;
  background-color: white;
  @media (max-width: 800px) {
    max-width: 450px;
    margin: 0 auto;
    height: 500px;
  }
`

export const HeroFigure = styled.figure`
  width: 180px;
  height: 130px;
  margin: 0;
  overflow: hidden;
  border-radius: 8px;
  @media (max-width: 800px) {
    width: 400px;
    height: 300px;
  }
  img {
    width: 100%;
    height: auto;
    object-fit: cover;
    @media (max-width: 800px) {
      width: 400px;
      height: 300px;
    }
  }
`

export const HeroLoveAndName = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const HeroName = styled.p`
  margin: 0;
  width: 100px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  @media (max-width: 800px) {
    padding-left: 23px;
    font-size: 22px;
    width: 250px;
  }
`

export const LoveButton = styled.button`
  margin-right: 13px;
  background-color: white;
  border: 0;
  cursor: pointer;
  border-radius: 50%;
  height: 30px;
  width: 30px;
  padding: 3px;
  transition-duration: .5s;
  display: flex;
  align-items: center;
  justify-content: center;
  &:hover {
    svg path {
      fill: white;
    }
    transition-duration: .5s;
    background-color: var(--orange);
    opacity: .8;
  }
  @media (max-width: 800px) {
    height: 50px;
    width: 50px;
    margin-right: 23px;
    svg {
      width: 40px;
      height: 40px;
    }
  }
`

export const HeroDescription = styled.p`
  margin: 0;
  text-overflow: ellipsis;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  font-size: 14px;
  width: 180px;
  color: var(--black);
  @media (max-width: 800px) {
    font-size: 20px;
    width: 400px;
  }
`
