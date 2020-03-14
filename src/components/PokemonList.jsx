import React from 'react';
import PokemonCardBack from './PokemonCardBack';

const PokemonList = props => {
  const content = props.pokemons.map(pokemon => (
    <PokemonCardBack pokemon={pokemon} key={pokemon.name} />
  ));
  return content;
};

export default PokemonList;
