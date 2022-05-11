import Link from "next/link";
import { useRouter } from "next/router";

import styled from "styled-components";
import widthConstaints from "./widthConstraints";

export default function Header() {
  const { pathname } = useRouter();

  return (
    <Wrapper>
      <div>
        <nav>
          <Link href="/">
            <NavLink isCurrentPage={pathname === "/"}>Accueil</NavLink>
          </Link>
          <Link href="/characters">
            <NavLink isCurrentPage={pathname === "/characters"}>
              Liste des personnages
            </NavLink>
          </Link>
        </nav>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.header`
  padding: 24px 0;
  background-color: ${(p) => p.theme.main};
  color: ${(p) => p.theme.background};
  & div {
    ${widthConstaints};
  }
`;

const NavLink = styled.a`
  margin-right: 24px;
  cursor: pointer;
  border-bottom: solid 2px ${(p) => (p.isCurrentPage ? "" : "transparent")};
  transition: border-bottom ease 0.3s;
`;
