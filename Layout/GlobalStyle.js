import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    html {
        font-size : 18px;
        color : ${(p) => p.theme.main};
        background-color : ${(p) => p.theme.background};
    }
    p {
      line-height : 1.5;
    }
`;

export default GlobalStyle;
