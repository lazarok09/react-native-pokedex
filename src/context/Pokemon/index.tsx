import {useState} from 'react';
import React from 'react';

import {PokemonContext, DEFAULT_VALUES} from './context';

type PokemonProviderProps = {
  children: React.ReactNode;
};
export const PokemonProvider = ({children}: PokemonProviderProps) => {
  const [color, setColor] = useState(DEFAULT_VALUES.color);

  return (
    //@ts-ignore
    <PokemonContext.Provider value={{color, setColor}}>
      {children}
    </PokemonContext.Provider>
  );
};
