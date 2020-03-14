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

  function getPokemons() {
    return axios.get(`https://pokeapi.co/api/v2/pokemon`).then(res => {
      setPokemons(res.data.results);
    });
  }

  function getTypes() {
    return axios.get(`https://pokeapi.co/api/v2/type`).then(res => {
      setTypes(res.data.results);
    });
  }

  useEffect(() => {
    getPokemons();
    getTypes();
  });

  let content = (
    <Router>
      <React.Fragment>
        <NavBar />
        <Route exact path="/" component={WelcomeMessage} />
        <div className="PokemonContainer">
          <Route
            exact
            path="/pokemons"
            render={props => <PokemonList pokemons={pokemons} />}
          />
        </div>
        <Route
          exact
          path="/types"
          render={props => <TypeList types={types} />}
        />
        <Route exact path="/pokemon/:name" component={PokemonCardFront} />
      </React.Fragment>
    </Router>
  );

  return content;
};

export default App;
