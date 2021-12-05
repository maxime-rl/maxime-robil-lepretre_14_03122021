import styled from "styled-components";
import { Link } from "react-router-dom";
import { styleVariables } from "../../utils/styles/variables";

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  padding: 2rem ${styleVariables.wrapper} 2rem ${styleVariables.wrapper};
  background: ${styleVariables.colorWhite};
  box-shadow: ${styleVariables.navShadow};
`;

export const NavLinkList = styled.ul`
  display: flex;

  a {
    padding-left: 3rem;
  }
`;

export const HomeLink = styled(Link)`
  font-size: 3.5rem;
  font-weight: 700;
`;
