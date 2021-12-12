import React from "react";
import * as S from "./NavBar.styled";
import { NavLink } from "react-router-dom";

/**
 * @name NavBar
 * @returns {ReactElement}
 */
export default function NavBar() {
  return (
    <S.Nav>
      <S.HomeLink to="/">HRnet</S.HomeLink>
      <S.NavLinkList>
        <li>
          <NavLink activeclassname="active" to="/">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink activeclassname="active" to="/employee-list">
            Employees
          </NavLink>
        </li>
      </S.NavLinkList>
    </S.Nav>
  );
}
