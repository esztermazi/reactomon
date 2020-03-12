import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import NavBar from './components/Navbar';
import PokemonList from './components/PokemonList';
import TypeList from './components/TypeList';
import './App.css';
import axios from 'axios';

class App extends Component {
  state = {
    pokemons: [],
    types: []
  };

  async componentDidMount() {
    const [firstResponse, secondResponse] = await Promise.all([
      axios.get(`https://pokeapi.co/api/v2/pokemon`),
      axios.get(`https://pokeapi.co/api/v2/type`)
    ]);
    this.setState({
      pokemons: firstResponse.data.results,
      types: secondResponse.data.results
    });
  }

  render() {
    return (
      <Router>
        <React.Fragment>
          <NavBar collectData={this.componentDidMount()} />
          <div className="PokemonContainer">
            <Route
              exact
              path="/pokemons"
              render={props => <PokemonList pokemons={this.state.pokemons} />}
            />
            <Route
              exact
              path="/types"
              render={props => <TypeList types={this.state.types} />}
            />
          </div>
        </React.Fragment>
      </Router>
    );
  }
}

export default App;
