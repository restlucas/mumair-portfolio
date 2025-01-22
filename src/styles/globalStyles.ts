import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  html {
    scroll-behavior: smooth;
  }

  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }

  ul, ol {
    list-style: none;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  img {
    max-width: 100%;
    display: block;
  }
  
  button, input, textarea, select {
    border: none;
    background: none;
    font: inherit;
    outline: none;
  }

  button {
    cursor: pointer;
  }

  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
  
  body {
    font-family: var(--font-poppins), Helvetica, sans-serif;
    background-color: ${(props) => props.theme.colors.background};
    color: ${(props) => props.theme.colors.text};
    line-height: 1.5;
    overflow-x: hidden !important;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  h1, h2, h3, h4, h5, h6 {
    font-weight: normal;
  }

  textarea {
    resize: none;
  }

  @media (max-width: 1025px) {
    html {
      font-size: 80%;
    }

    body {
      font-size: 1.6rem; 
    }
  }
`;

export default GlobalStyle;
