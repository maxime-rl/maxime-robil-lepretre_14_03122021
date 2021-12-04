import React from 'react'
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";

export default function NavBar() {
  return (
    <nav>
      <Link to="/">HRnet</Link>
      <ul>
        <li>
          <NavLink activeClassName="active-link" to="/">Home</NavLink>
        </li>
        <li>
          <NavLink activeClassName="active-link" to="/employee-list">Current employees</NavLink>
        </li>
      </ul>
    </nav>
  )
}
