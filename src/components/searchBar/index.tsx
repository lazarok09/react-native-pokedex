import Icon from 'react-native-vector-icons/EvilIcons';
import React from 'react';

import * as Styled from './styles';

// https://oblador.github.io/react-native-vector-icons/

export const SearchBar = () => {
  return (
    <Styled.Wrapper>
      <Icon name="search" height={30} width={30} />
      <Styled.CustomTextInput placeholder="Search pokemons, items e etc." />
    </Styled.Wrapper>
  );
};
