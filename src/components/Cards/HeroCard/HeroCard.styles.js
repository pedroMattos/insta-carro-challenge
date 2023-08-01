import { styled } from "styled-components";

export const HeroCardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 240px;
  border: 1px solid var(--gray);
  border-radius: 10px;
  max-width: 206px;
  align-items: center;
  padding-top: 10px;
  gap: 10px;
`

export const HeroFigure = styled.figure`
  width: 180px;
  height: 130px;
  margin: 0;
  overflow: hidden;
  border-radius: 8px;
  img {
    width: 100%;
    height: auto;
    object-fit: cover;
  }
`

export const HeroLoveAndName = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`

export const HeroName = styled.p`
  margin: 0;
  width: 100px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  padding-left: 13px;
`

export const LoveButton = styled.button`
  margin-right: 13px;
`
