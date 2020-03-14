import React from 'react';
import './style/Navbar.css';
import Logo from '../resources/logo.png';
import { Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const NavBar = props => {
  return (
    <nav>
      <img className="logo" src={Logo} alt="icon" />
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
