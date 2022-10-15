import { createGlobalStyle } from 'styled-components';
import { normalize } from 'polished';

export const GlobalStyle = createGlobalStyle`
  ${normalize()}

  *, *::before, *::after {
    box-sizing: border-box;
  }

  html, body, #root, main {
    height: 100%;
  }

  body {
    font-family: ${({ theme }) => theme.text.primaryFont};
    margin: 0;
  }

  main {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto;
    width: 90%;
  }
`;
