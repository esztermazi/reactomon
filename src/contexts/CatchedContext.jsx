import React, { useState, createContext } from 'react';

export const CatchedContext = createContext();

export const CatchedProvider = props => {
  const [catchedpokemons, setCatchedPokemons] = useState([]);

  return (
    <CatchedContext.Provider value={[catchedpokemons, setCatchedPokemons]}>
      {props.children}
    </CatchedContext.Provider>
  );
};
