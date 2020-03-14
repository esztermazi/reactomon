import React from 'react';
import './style/Navbar.css';
import Logo from '../resources/logo.png';
import { Nav, Badge, Button } from 'react-bootstrap';
import { NavLink, Link } from 'react-router-dom';

const NavBar = props => {
  const content = (
    <nav>
      <Link to="/">
        <img className="logo" src={Logo} alt="icon" />
      </Link>
      <h1>Reactomon</h1>
      <Nav className="justify-content-center">
        <Nav.Item>
          <NavLink className="nav-item nav-link" to="/pokemons">
            <Button variant="warning">
              Pokemons <Badge variant="light">20</Badge>
            </Button>
          </NavLink>
        </Nav.Item>
        <Nav.Item>
          <NavLink className="nav-item nav-link" to="/types">
            <Button variant="warning">
              Types <Badge variant="light">20</Badge>
            </Button>
          </NavLink>
        </Nav.Item>
      </Nav>
    </nav>
  );
  return content;
};

export default NavBar;
