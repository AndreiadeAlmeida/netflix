import { createGlobalStyle } from 'styled-components/macro';

// eslint-disable-next-line import/prefer-default-export
export const GlobalStyles = createGlobalStyle`
    html, body {
        font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        background-color: black;
        color: #333333;font-size: 16px;
    }
`;
