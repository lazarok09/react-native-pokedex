import Icon from 'react-native-vector-icons/EvilIcons';
import {StyleSheet, Text} from 'react-native';
import React from 'react';

import theme from '../../styles/theme';
import * as Styled from './styles';

// https://oblador.github.io/react-native-vector-icons/

export const SearchBar = () => {
  return (
    <Styled.Wrapper>
      <Styled.CustomTextInput placeholder="Search pokemons, items e etc." />
      <Text style={styles.searchIcon}>
        <Icon name="search" size={45} color={theme.colors.text_03} />;
      </Text>
    </Styled.Wrapper>
  );
};

const styles = StyleSheet.create({
  searchIcon: {
    padding: 0,
    position: 'absolute',
    bottom: 11,
    left: 11,
  },
});
