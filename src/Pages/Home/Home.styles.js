import { styled } from "styled-components";

export const HomeHeaderWrapper = styled.nav`
  display: flex;
  flex-direction: column;
  margin-top: 120px;
  align-items: center;
  @media (max-width: 800px) {
    margin: 0 auto;
  }
`

export const HomeTitle = styled.h1`
  font-size: 48px;
  margin: 0;
  font-weight: 900;
  line-height: normal;
  color: var(--black);
  text-align: center;
  @media (max-width: 800px) {
    padding: 10px;
    font-size: 30px;
  }
`
  
  export const HeaderText = styled.p`
  text-align: center;
  margin: 0;
  font-size: 24px;
  font-weight: 500;
  color: var(--black);
  opacity: .6;
  @media (max-width: 800px) {
    text-align: center;
    padding: 0 10px;
    font-size: 18px;
  }
`

export const CardsSection = styled.section`
  display: flex;
  width: 880px;
  margin: 0 auto;
  flex-direction: column;
  margin-top: 50px;
  @media (max-width: 800px) {
    width: 100vw;
  }
`

export const CardsSectionHeader = styled.div`
  display: flex;
  justify-content: space-between;
  @media (max-width: 800px) {
    margin: 20px 40px;
    justify-content: space-between;
    flex-direction: column-reverse;
    gap: 10px;
    align-items: center;
  }
`

export const HeroesCounter = styled.p`
  font-size: 16px;
  font-weight: 500;
  color: var(--gray);
  margin: 0;
`

export const LoveFilterButton = styled.button`
  display: flex;
  gap: 10px;
  align-items: center;
  color: var(--orange);
  font-weight: 500;
  font-size: 18px;
  border: none;
  background-color: transparent;
  cursor: pointer;
`

export const CardsArea = styled.div`
  display: flex;
  gap: 15px;
  flex-wrap: wrap;
  margin-top: 20px;
  min-height: 539px;
`

export const HomeWrapper = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media (max-width: 800px) {
    width: 100vw;
  }
`
