import React from 'react';
import './style/Navbar.css';
import PokeBallImage from '../resources/pokeball.png';
import { Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const NavBar = props => {
  return (
    <nav>
      <img src={PokeBallImage} alt="icon" />
      <h1>Reactomon</h1>
      <Nav className="justify-content-center">
        <Nav.Item>
          <NavLink to="/pokemons">Pokemons</NavLink>
        </Nav.Item>
        <Nav.Item>
          <NavLink to="/types">Types</NavLink>
        </Nav.Item>
      </Nav>
    </nav>
  );
};

export default NavBar;
