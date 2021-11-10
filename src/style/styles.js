import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import floor from "../asset/floor.png"

const GlobalStyle = createGlobalStyle`
  ${reset};
  body {
      background-image: url(${floor});
    /* background-color: black; */
  }
`;

export default GlobalStyle;
