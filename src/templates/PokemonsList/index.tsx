import {SafeAreaView, View} from 'react-native';
import React from 'react';

import HomeSearchBar from '../../containers/HomeSearchBar';
import {BackButton} from '../../components/BackButton';
import {Pokemons} from '../../containers/Pokemons';
import * as Styled from './styles';

type Props = {
  handleOnPokemonPress: (pokemonName: string) => void;
  handleOnSearchSubmit: (pokemonName: string) => void;
  handleOnBackButton: () => void;
};
export const PokemonsList = ({
  handleOnBackButton,
  handleOnPokemonPress,
  handleOnSearchSubmit,
}: Props) => {
  return (
    <Styled.Wrapper>
      <SafeAreaView>
        <View>
          <BackButton handleBackButton={handleOnBackButton} />
          <HomeSearchBar onSearchSubmit={handleOnSearchSubmit} />
          <Pokemons handleOnPokemonPress={handleOnPokemonPress} />
        </View>
      </SafeAreaView>
    </Styled.Wrapper>
  );
};
