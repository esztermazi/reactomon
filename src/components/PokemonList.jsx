import React, { Component } from 'react';
import PokemonCard from './PokemonCard';

class PokemonList extends Component {
  render() {
    return this.props.pokemons.map(pokemon => (
      <PokemonCard pokemon={pokemon} key={pokemon.name} />
    ));
  }
}

export default PokemonList;
