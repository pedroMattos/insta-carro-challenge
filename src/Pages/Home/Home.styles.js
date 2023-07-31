import { styled } from "styled-components";

export const HomeHeaderWrapper = styled.nav`
  display: flex;
  flex-direction: column;
  margin-top: 140px;
  align-items: center;
`

export const HomeTitle = styled.h1`
  font-size: 48px;
  margin: 0;
  font-weight: 900;
  line-height: normal;
  color: var(--black);
  text-align: center;
  `
  
  export const HeaderText = styled.p`
  text-align: center;
  margin: 0;
  font-size: 24px;
  font-weight: 500;
  color: var(--black);
  opacity: .6;
`

export const CardsSection = styled.section`
  display: flex;
  width: 880px;
  margin: 0 auto;
  flex-direction: column;
  margin-top: 50px;
`

export const CardsSectionHeader = styled.div`
  display: flex;
  justify-content: space-between;
`

export const HeroesCounter = styled.p`
  font-size: 18px;
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
`
