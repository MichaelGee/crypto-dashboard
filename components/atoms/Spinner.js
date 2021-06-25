import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";

const rotate = keyframes`
from {
  transform: rotate(0deg);
}
to {
  transform: rotate(360deg);
}
`;

export const Spinner = styled.span`
  &::before {
    content: '';
    -webkit-transform-origin: center;
    animation: ${rotate} 600ms infinite linear;
    border-radius: 50%;
    border: 0.35rem solid #000;
    border-right-color: transparent;
    border-top-color: transparent;
    content: '';
    display: block;
    height: ${props => props.size};
    transform-origin: center;
    width: ${props => props.size};
  }
`;

Spinner.defaultProps = {
  color: 'primary',
  size: '2.5rem',
};