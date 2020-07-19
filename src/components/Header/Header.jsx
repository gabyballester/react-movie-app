import React from "react";
import "./Header.scss";
import { NavLink } from "react-router-dom";

const Header = (props) => {
  return (
    <header>
      <NavLink to="/popular">
        <span className="populares">Peliculas Populares</span>
      </NavLink>
      <NavLink to="/upcoming">
        <span className="populares">Películas de pre-estreno</span>
      </NavLink>
      <NavLink to="/top_rated">
        <span className="populares">Películas más votadas</span>
      </NavLink>
    </header>
  );
};

export default Header;