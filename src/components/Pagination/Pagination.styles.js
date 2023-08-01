import { styled } from "styled-components";

export const PaginationWrapper = styled.div`
  display: flex;
  margin-top: 20px;
  gap: 10px;
  justify-content: flex-end;
`

export const NextPrevButton = styled.button`
  background-color: var(--orange);
  width: 30px;
  height: 30px;
  ${({ $isNext }) => $isNext ? 'transform: rotate(180deg);' : ''}
  box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.20);
  border-radius: 4px;
  border: 0;
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
`

export const Ellipsis = styled.span`
  margin: 0 5px;
`