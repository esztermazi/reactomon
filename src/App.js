import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import NavBar from './components/Navbar';
import WelcomeMessage from './components/WelcomeMessage';
import PokemonList from './components/PokemonList';
import TypeList from './components/TypeList';
import PokemonCardFront from './components/PokemonCardFront';
import './App.css';
import axios from 'axios';

const App = props => {
  const [pokemons, setPokemons] = useState([]);
  const [types, setTypes] = useState([]);

  const getPokemons = () => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon`)
      .then(res => setPokemons(res.data.results));
  };

  const getTypes = () => {
    axios
      .get(`https://pokeapi.co/api/v2/type`)
      .then(res => setTypes(res.data.results));
  };

  useEffect(() => {
    getPokemons();
    getTypes();
  });

  let content = (
    <Router>
      <React.Fragment>
        <NavBar />
        <div className="PokemonContainer">
          <Route exact path="/" component={WelcomeMessage} />
          <Route
            exact
            path="/pokemons"
            render={props => <PokemonList pokemons={pokemons} />}
          />
          <Route
            exact
            path="/types"
            render={props => <TypeList types={types} />}
          />
        </div>
        <Route exact path="/pokemon/:name" component={PokemonCardFront} />
      </React.Fragment>
    </Router>
  );

  return content;
};

export default App;
