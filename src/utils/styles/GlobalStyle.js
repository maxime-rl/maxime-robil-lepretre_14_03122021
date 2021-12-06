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

  .active {
    text-decoration: underline;
  }
`;

export default GlobalStyle;
