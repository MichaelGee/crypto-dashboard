import { css } from "@emotion/react";

const breakpoints = {
  sm: "576px",
  md: "768px",
  lg: "992px",
  xl: "1200px",
  xxl: "1400px",
};

const mq = Object.keys(breakpoints).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (max-width: ${breakpoints[label]}) {
      ${css(...args)}
    }
  `;
  return acc;
}, {});

const font = {
  size: {
    largest: "7.0rem",
    larger: "4.0rem",
    large: "3.0rem",
    big: "2.3rem",
    medium: "1.55rem",
    normal: "1.6rem",
    small: "1.4rem",
    tiny: "1.2rem",
    tiniest: "1.0rem",
    inherit: "inherit",
  },
  weight: {
    bold: 600,
    bolder: 800,
    light: 200,
    normal: 300,
    thin: 100,
  },
};

const colors = {
  background: "#F3F6FE",
  blue: "#1A73E8",
  darkBlue: "#1F263E",
  red: "#E60023",
  white: "hsl(0, 0%, 100%)",
  button: '#e3f2fd'
};

const space = {
  one: "1rem",
  two: "1.5rem",
  three: "2rem",
  four: "2.5rem",
  five: "3rem",
};

const darkTheme = {
  colors,
  font,
  mq,
  font,
  space,
};

const lightTheme = {
  colors,
  font,
  mq,
  font,
  space,
};

export const theme = (mode) => (mode === "light" ? lightTheme : darkTheme);
