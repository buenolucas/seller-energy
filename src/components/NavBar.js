import React from "react";
import "./NavBar.css";
import logo from "../logo.svg";
import { NavLink } from "react-router-dom";

class NavBar extends React.Component {
  render() {
    return (
      <div className="navbar">
        <div className="navbrand">
          <img src={logo} className="navlogo" alt="logo" />
        </div>
        <nav className="navblock">
          <ul className="navlinks">
            <li>
              <NavLink to="/dashboard/">Dashboard</NavLink>
            </li>
            <li>
              <NavLink to="/tracks/">Trilha dos Treinos</NavLink>
            </li>
            <li>
              <NavLink to="/reports/">Relatórios</NavLink>
            </li>
            <li>
              <NavLink to="/settings/">Configurações</NavLink>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}
export default NavBar;
