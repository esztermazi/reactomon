import React from 'react';
import PokemonCard from './PokemonCard';

const PokemonList = props => {
  const content = props.pokemons.map(pokemon => (
    <PokemonCard pokemon={pokemon} key={pokemon.name} />
  ));
  return content;
};

export default PokemonList;
