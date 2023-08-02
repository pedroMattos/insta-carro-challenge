import { styled } from "styled-components";

export const PaginationWrapper = styled.div`
  display: flex;
  margin-top: 20px;
  gap: 10px;
  justify-content: flex-end;
  @media (max-width: 800px) {
    gap: 5px;
    justify-content: center;
  }
`

export const NextPrevButton = styled.button`
  background-color: var(--orange);
  width: 30px;
  height: 30px;
  ${({ $isNext }) => $isNext ? 'transform: rotate(180deg);' : ''}
  box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.20);
  border-radius: 4px;
  border: 0;
  @media (max-width: 800px) {
    width: 35px;
    height: 35px;
    svg {
      width: 15px;
      height: 15px;
    }
  }
`

export const PageButton = styled.button`
  width: 30px;
  height: 30px;
  box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.20);
  background-color: white;
  padding: 0;
  ${({ $isCurrent }) => $isCurrent ? `
  border: 1px solid var(--orange);
  ` : `
  border: 1px solid white;
  `}
  border-radius: 4px;
  @media (max-width: 800px) {
    width: 35px;
    height: 35px;
  }
`

export const Ellipsis = styled.span`
  margin: 0 5px;
`