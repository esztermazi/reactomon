import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import NavBar from './components/Navbar';
import WelcomeMessage from './components/WelcomeMessage';
import PokemonList from './components/PokemonList';
import TypeList from './components/TypeList';
import PokemonCardFront from './components/PokemonCardFront';
import CaughtPokemonList from './components/CaughtPokemonList';
import { CatchedProvider } from './contexts/CatchedContext';
import './App.css';

const App = props => {
  let content = (
    <Router>
      <React.Fragment>
        <CatchedProvider>
          <NavBar />
          <Route exact path="/" component={WelcomeMessage} />
          <div className="PokemonContainer">
            <Route exact path="/pokemons" component={PokemonList} />
          </div>
          <div className="caught-container">
            <div
              className="btn-group-vertical"
              role="group"
              aria-label="Basic example"
            >
              <Route
                exact
                path="/pokemonS/catched"
                component={CaughtPokemonList}
              />
            </div>
          </div>
          <Route exact path="/types" component={TypeList} />
          <Route exact path="/pokemon/:name" component={PokemonCardFront} />
        </CatchedProvider>
      </React.Fragment>
    </Router>
  );

  return content;
};

export default App;
