import NunitoSansBlack from './public/assets/fonts/NunitoSans-Black.ttf';
import NunitoSansBold from './public/assets/fonts/NunitoSans-Bold.ttf';
import NunitoSansExtraBold from './public/assets/fonts/NunitoSans-ExtraBold.ttf';
import NunitoSansExtraBoldITalic from './public/assets/fonts/NunitoSans-ExtraBoldItalic.ttf';
import NunitoSansExtraLight from './public/assets/fonts/NunitoSans-ExtraLight.ttf';
import NunitoSansItalic from './public/assets/fonts/NunitoSans-Italic.ttf';
import NunitoSansLight from './public/assets/fonts/NunitoSans-ExtraLight.ttf';
import NunitoSansRegular from './public/assets/fonts/NunitoSans-Regular.ttf';
import NunitoSansSemiBold from './public/assets/fonts/NunitoSans-SemiBold.ttf';
import {css} from '@emotion/react';

const globalStyle = css`
  @font-face {
    font-family: 'NunitoSans', sans-serif;
    font-weight: 300;
    src: url(${NunitoSansBlack}) format('truetype');
    font-display: swap;
  }

  @font-face {
    font-family: 'NunitoSans', sans-serif;
    src: url(${NunitoSansBold}) format('truetype');
    font-display: swap;
  }

  @font-face {
    font-family: 'NunitoSans', sans-serif;
    font-weight: 500;
    src: url(${NunitoSansExtraBold}) format('truetype');
    font-display: swap;
  }

  @font-face {
    font-family: 'NunitoSans', sans-serif;
    font-weight: 700;
    src: url(${NunitoSansLight}) format('truetype');
    font-display: swap;
  }

  @font-face {
    font-family: 'NunitoSans', sans-serif;
    src: url(${NunitoSansExtraLight}) format('truetype');
    font-display: swap;
  }

  @font-face {
    font-family: 'NunitoSans', sans-serif;
    font-weight: 500;
    src: url(${NunitoSansExtraBoldITalic}) format('truetype');
    font-display: swap;
  }

  @font-face {
    font-family: 'NunitoSans', sans-serif;
    font-weight: 700;
    src: url(${NunitoSansRegular}) format('truetype');
    font-display: swap;
  }

  @font-face {
    font-family: 'NunitoSans', sans-serif;
    font-weight: 700;
    src: url(${NunitoSansSemiBold}) format('truetype');
    font-display: swap;
  }

  @font-face {
    font-family: 'NunitoSans', sans-serif;
    font-weight: 700;
    src: url(${NunitoSansItalic}) format('truetype');
    font-display: swap;
  }

  html,
  body,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  a,
  p,
  span,
  em,
  small,
  strong,
  sub,
  sup,
  mark,
  del,
  ins,
  strike,
  abbr,
  dfn,
  blockquote,
  q,
  cite,
  code,
  pre,
  ol,
  ul,
  li,
  dl,
  dt,
  dd,
  div,
  section,
  article,
  main,
  aside,
  nav,
  header,
  hgroup,
  footer,
  img,
  figure,
  figcaption,
  address,
  time,
  audio,
  video,
  canvas,
  iframe,
  details,
  summary,
  fieldset,
  form,
  label,
  legend,
  table,
  caption,
  tbody,
  tfoot,
  thead,
  tr,
  th,
  td {
    margin: 0;
    padding: 0;
    border: 0;
  }

  /* Typography
 * *********************************** */

  html {
    font-size: 62.5%;
    scroll-behavior: smooth;
    -webkit-scroll-behavior: smooth;
  }

  body {
    font-family: 'NunitoSans', sans-serif;;
    font-size: 1.6rem;
    line-height: 1.4;
    scroll-behavior: smooth;
    -webkit-scroll-behavior: smooth;
    // color: #495057;
  }

  * {
    font-family: inherit;
    font-size: inherit;
    line-height: inherit;
  }

  a,
  a:visited {
    // color: inherit;
  }

  /* Layout
 * *********************************** */

  article,
  aside,
  footer,
  header,
  nav,
  section,
  main {
    display: block;
  }

  * {
    box-sizing: border-box;
  }

  *:before,
  *:after {
    box-sizing: inherit;
  }

  /* Elements
 * *********************************** */

  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  ul {
    list-style: none;
  }

  img,
  video {
    max-width: 100%;
  }

  img {
    border-style: none;
  }

  blockquote,
  q {
    quotes: none;
  }

  blockquote:after,
  blockquote:before,
  q:after,
  q:before {
    content: '';
    content: none;
  }

  /* Attributes & states
 * *********************************** */

  [hidden] {
    display: none !important;
  }

  [disabled] {
    cursor: not-allowed;
  }

  :focus:not(:focus-visible) {
    outline: none;
  }

  /* Utility classes
 * *********************************** */

  .sr-only {
    position: absolute;
    clip: rect(1px, 1px, 1px, 1px);
    left: -9999px;
    top: -9999px;
  }
`;

export default globalStyle;
