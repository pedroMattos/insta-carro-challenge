import { styled } from "styled-components";

export const LoadingContainer = styled.div`
  width: 100px;
  height: 100px;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const LoadingSpinner = styled.div`
  width: 40px;
  height: 40px;
  border-left: 1px solid var(--orange);
  border-right: 1px solid var(--orange);
  border-radius: 50%;
  animation: SpinnerMove 1.2s infinite;
  
  @keyframes SpinnerMove {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`