import Icon from 'react-native-vector-icons/EvilIcons';
import {StyleSheet} from 'react-native';
import {Text} from 'react-native';
import React from 'react';

import * as Styled from './styles';

// https://oblador.github.io/react-native-vector-icons/

export const SearchBar = () => {
  return (
    <Styled.Wrapper>
      <Styled.CustomTextInput placeholder="Search pokemons, items e etc." />
      <Text>
        <Icon name="search" size={50} color={'#c23c00'} />;
      </Text>
    </Styled.Wrapper>
  );
};

const styles = StyleSheet.create({
  searchIcon: {
    padding: 10,
    position: 'absolute',

    left: 0,
  },
});
