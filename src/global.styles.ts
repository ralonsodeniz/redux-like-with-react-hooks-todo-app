// inside styled components library exists a method called createGlobalStyle
import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
/* fonts */
@import url('https://fonts.googleapis.com/css?family=Raleway:300,400,700&display=swap');
/* variables */
$white: #FFF;
$black: #000;
$red: #FA4D73;
$orange: #FA9968;
$grey-1: #FAFAFA;
$grey-2: #807A7A;
$grey-3: #ECEDF2;
$grey-4: #2A201F;
$grey-5: #C0BCBC;
$base-font-family: 'Raleway', sans-serif;
$base-bg-color: $grey-3;
$base-color: $grey-4;

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
