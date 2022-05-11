import styled from "styled-components";
import widthConstaints from "./widthConstraints";

export default function Footer() {
  return (
    <Wrapper>
      <div>© 2022 Hello Golf. Tous droits réservés.</div>
    </Wrapper>
  );
}

const Wrapper = styled.footer`
  padding: 52px 0;
  background-color: ${(p) => p.theme.background2};
  & div {
    ${widthConstaints};
    text-align: center;
  }
`;
