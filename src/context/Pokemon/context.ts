import {createContext, Dispatch, SetStateAction} from 'react';

export type PokemonProviderValues = {
  color: PokemonTypeColors;
  setColor: Dispatch<SetStateAction<PokemonProviderValues['color']>>;
};

export const DEFAULT_VALUES: PokemonProviderValues = {
  color: '#6890F0',
  setColor: () => '#705898',
};

export const PokemonContext =
  createContext<PokemonProviderValues>(DEFAULT_VALUES);
