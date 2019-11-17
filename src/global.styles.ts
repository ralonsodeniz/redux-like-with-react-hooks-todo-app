// inside styled components library exists a method called createGlobalStyle
import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
/* fonts */
@import url('https://fonts.googleapis.com/css?family=Raleway:300,400,700&display=swap');

*,
::after,
::before {
  box-sizing: border-box;
}

body {
  margin: 0;
  font-family: 'Raleway';
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  color: #2A201F;
  text-align: left;
  background-color: #ECEDF2;
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New', monospace;
}
`;
