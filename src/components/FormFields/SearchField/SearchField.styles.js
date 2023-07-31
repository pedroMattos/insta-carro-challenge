import { styled } from "styled-components";

export const CustomField = styled.input`
  width: 680px;
  border-radius: 100px;
  border: 0;
  background-color: var(--orange-100);
  opacity: .2;
  padding: 20px 100px;
  font-size: 24px;
  &::placeholder {
    color: var(--orange);
  }
`

export const InputWrapper = styled.div`
  position: relative;
  margin-top: 50px;
  svg {
    position: absolute;
    top: 18px;
    left: 40px;
  }
`