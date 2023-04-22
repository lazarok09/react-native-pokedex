import {
  TextInputSubmitEditingEventData,
  NativeSyntheticEvent,
} from 'react-native';
import React from 'react';

import {SearchBar} from '../../components/searchBar';

type HomeSearchBarProps = {
  onSearchSubmit: (pokemonName: string) => void;
};

export const HomeSearchBar = ({onSearchSubmit}: HomeSearchBarProps) => {
  const handleSearchSubmit = (
    e: NativeSyntheticEvent<TextInputSubmitEditingEventData>,
  ) => {
    onSearchSubmit(e.nativeEvent.text);
  };

  return <SearchBar handleSearchSubmit={handleSearchSubmit} />;
};
export default HomeSearchBar;
