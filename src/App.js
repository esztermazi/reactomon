import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import NavBar from './components/Navbar';
import PokemonList from './components/PokemonList';
import './App.css';
import Axios from 'axios';

class App extends Component {
  state = {
    pokemons: []
  };

  componentDidMount() {
    Axios.get('https://pokeapi.co/api/v2/pokemon').then(res =>
      this.setState({ pokemons: res.data.results })
    );
  }

  render() {
    return (
      <Router>
        <React.Fragment>
          <NavBar />
          <Route
            exact
            path="/pokemons"
            render={props => (
              <div className="PokemonContainer">
                <PokemonList pokemons={this.state.pokemons} />
              </div>
            )}
          />
        </React.Fragment>
      </Router>
    );
  }
}

export default App;
