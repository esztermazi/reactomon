import React, { useState, useEffect } from 'react';
import PokemonCardBack from './PokemonCardBack';
import axios from 'axios';

const PokemonList = props => {
  const [pokemons, setPokemons] = useState([]);

  function getPokemons() {
    return axios.get(`https://pokeapi.co/api/v2/pokemon`).then(res => {
      setPokemons(res.data.results);
    });
  }

  useEffect(() => {
    getPokemons();
  });

  const content = pokemons.map(pokemon => (
    <PokemonCardBack key={pokemon.name} pokemon={pokemon} />
  ));
  return content;
};

export default PokemonList;
