import { styled } from "styled-components";

export const FooterContainer = styled.footer`
  display: flex;
  width: 100%;
  height: 60px;
  background-color: var(--black-background);
  justify-content: space-between;
  justify-content: center;
  margin-top: 40px;
  gap: 280px;
  p {
    padding-top: 20px;
    margin: 0;
    font-size: 16px;
    color: white;
    span {
      color: var(--gray-dark);
    }
  }
  @media (max-width: 800px) {
    flex-direction: column;
    gap: 10px;
    min-width: 500px;
    height: 200px;
    align-items: center;
  }
`