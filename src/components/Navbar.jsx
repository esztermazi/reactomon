import React from 'react';
import { Link } from 'react-router-dom';
import './style/Navbar.css';
import PokeBallImage from '../resources/pokeball.png';
import { Nav } from 'react-bootstrap';

const NavBar = props => {
  return (
    <nav>
      <img
        src={PokeBallImage}
        style={{ width: 100, marginTop: -7 }}
        alt="icon"
      />
      <h1>Reactomon</h1>
      <Nav className="justify-content-center" activeKey="/home">
        <Nav.Item>
          <Nav.Link>Pokemons</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link>Types</Nav.Link>
        </Nav.Item>
      </Nav>
    </nav>
  );
};

export default NavBar;
