import React, { useContext } from 'react';
import { CatchedContext } from '../contexts/CatchedContext';

const CaughtPokemonList = props => {
  const [caughtpokemons, setCaughtPokemons] = useContext(CatchedContext);

  const content = caughtpokemons.map(pokemon => (
    <button type="button" className="btn btn-info">
      <img src={pokemon.front_default} alt="" />
    </button>
  ));
  return content;
};

export default CaughtPokemonList;
