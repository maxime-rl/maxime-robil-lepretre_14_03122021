import { createGlobalStyle } from "styled-components";
import { normalize } from "styled-normalize";
import { styleVariables } from "./variables";

/**
 * Global styles for all the Application
 */
const GlobalStyle = createGlobalStyle`
  ${normalize}

  html {
    box-sizing: border-box;
    font-size: 62.5%;
  }
  
  body {
    margin: 0;
    padding: 0;
    height: 100%;
    font-family: 'Roboto', sans-serif;
    font-size: 1.6rem;
    line-height: 1.6rem;
  }

  #root {
    max-width: ${styleVariables.wrapperMax};
    margin: 0 auto;
  }

  h1 {
    text-align: center;
    margin: ${styleVariables.measureLarger} 0;
    line-height: 3.8rem;
  }

  ul {
    margin: 0;
    padding: 0;
  }
  
  li {
    list-style: none;
  }

  a {
    text-decoration: inherit;
    color: inherit;
  }

  input {
    height: 2.8rem;
  }

  button,
  select {
    cursor: pointer;
  }

  .active {
    text-decoration: underline;
  }

  .sr-only {
    border: 0;
    clip: rect(1px, 1px, 1px, 1px);
    height: 1px;
    margin: -1px !important;
    overflow: hidden;
    padding: 0;
    position: absolute;
    width: 1px;
    white-space: nowrap;
  }
`;

export default GlobalStyle;
