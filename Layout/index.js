import styled, { ThemeProvider } from "styled-components";

import GlobalStyle from "./GlobalStyle";
import theme from "./theme.json";

import Header from "./Header";
import Footer from "./Footer";

import widthConstaints from "./widthConstraints";

export default function Layout({ children }) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Header />
      <Main>{children}</Main>
      <Footer />
    </ThemeProvider>
  );
}

const Main = styled.main`
  ${widthConstaints};
  margin-bottom: 36px;
`;
