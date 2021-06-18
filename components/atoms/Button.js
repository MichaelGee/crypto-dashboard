import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";
import { css } from "@emotion/css";

const rotate = keyframes`
from {
  transform: rotate(0deg);
}
to {
  transform: rotate(360deg);
}
`;

export const Button = styled.button`
  text-align: center;
  border-radius: 0.375rem;
  padding: 0.75rem 2.25rem;
  border: none;
  font-size: ${({ theme }) => theme.font.size.tiny};
  text-transform: uppercase;
  font-weight: 500;
  color: #3b82f6;
  background-color: ${({ theme }) => theme.colors.button};
  ${({ loading }) =>
    loading &&
    css`
      color: transparent !important;
      pointer-events: none;
      position: relative;
      outline: none;
      &::after {
        content: "";
        animation: ${rotate} 550ms infinite linear;
        border: 2px solid #2196f3;
        border-radius: 50%;
        border-right-color: transparent !important;
        border-top-color: transparent !important;
        height: 1.2em;
        width: 1.2em;
        position: absolute;
        left: calc(50% - (1.2em / 2));
        top: calc(50% - (1.2em / 2));
      }
    `}
  ${({ large }) =>
    large &&
    css`
      width: 100%;
      font-size: 1.5rem;
      padding: 1.5rem 2rem;
    `}

${({ medium }) =>
    medium &&
    css`
      width: 100%;
      font-size: 1.5rem;
      padding: 0.9rem 1.25rem;
    `}


${({ block }) =>
    block &&
    css`
      width: 100%;
    `}

&:hover {
    background: rgba(30, 136, 229, 0.2);
    color: #1976d2;
    
  }
`;
