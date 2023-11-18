import { createGlobalStyle } from 'styled-components';
import ResetStyle from './ResetStyle';

export const GlobalStyle = createGlobalStyle`
  ${ResetStyle}

  html {
  font-size: 62.5%;
  scroll-behavior: smooth;
  }

  body {
    margin: 0 auto;
    background-color: #000;
    font-family: sans-serif;
    font-size: 2.4rem;
    line-height: 1.2;
    font-weight: 400;
    letter-spacing: 1;
    color: #ddd;
    scrollbar-width: none; /* Firefox */
    -ms-overflow-style: none; /* IE and Edge */
  }
`;

export default GlobalStyle;
