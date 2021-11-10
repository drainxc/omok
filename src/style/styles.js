import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import floor from "../asset/floor.png"

const GlobalStyle = createGlobalStyle`
  ${reset};
  body {
      background-image: url(${floor});
      display: flex;
      justify-content: center;
      padding: 5%;
  }
`;

export default GlobalStyle;
