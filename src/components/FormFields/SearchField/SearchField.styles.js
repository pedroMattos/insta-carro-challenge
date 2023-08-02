import { styled } from "styled-components";

export const CustomField = styled.input`
  width: 680px;
  border-radius: 100px;
  border: 0;
  background-color: var(--orange-100-opacity);
  padding: 10px 100px;
  font-size: 18px;
  color: var(--orange);
  &::placeholder {
    color: var(--orange);
  }
  @media (max-width: 800px) {
    width: 200px;
    margin: 0 auto;
  }
`

export const InputWrapper = styled.div`
  position: relative;
  margin-bottom: 30px;
  svg {
    position: absolute;
    top: 10px;
    left: 40px;
  }
  @media (max-width: 800px) {
    margin: 10px auto;
  }
`