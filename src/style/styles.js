import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import floor from "../asset/floor.png";

const GlobalStyle = createGlobalStyle`
  ${reset};
  body {
      background-image: url(${floor});
      -webkit-user-select: none;
      -moz-user-select: none; 
      -ms-user-select: none;
      user-select: none;
  }
`;

export default GlobalStyle;
