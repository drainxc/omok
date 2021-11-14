import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import floor from "../asset/img/floor.png";

const GlobalStyle = createGlobalStyle`
  ${reset};
  body {
      background-image: url(${floor});
      -webkit-user-select: none;
      -moz-user-select: none; 
      -ms-user-select: none;
      user-select: none; // 드래그 방지
  }
`;

export default GlobalStyle;
