import { createGlobalStyle } from "styled-components";
const GlobalStyles = createGlobalStyle`
  *, *::before, *::after {
    margin: 0;
    padding: 0;
    box-sizing: inherit;
  }

  html {
    box-sizing: border-box;
    
  }

body {
  max-width: 100%;
  width: 100%;
  
}
  
  



`;

export default GlobalStyles;
