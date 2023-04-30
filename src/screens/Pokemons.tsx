import type {NativeStackScreenProps} from '@react-navigation/native-stack';
import React from 'react';

import {PokemonsList} from '../templates/PokemonsList';
import {StackParamList} from '../../App';

export type PokemonsScreenProps = NativeStackScreenProps<StackParamList>;

const PokemonsScreen = (props: PokemonsScreenProps) => {
  const {navigation} = props;

  const handleOnPokemonPress = (pokemonName: string) => {
    navigation.navigate('Pokemon', {
      name: pokemonName,
    });
  };
  const handleOnSearchSubmit = (pokemonName: string) => {
    navigation.navigate('Pokemon', {
      name: pokemonName,
    });
  };
  const handleOnBackButtonPress = () => {
    navigation.goBack();
  };
  return (
    <PokemonsList
      handleOnBackButton={handleOnBackButtonPress}
      handleOnPokemonPress={handleOnPokemonPress}
      handleOnSearchSubmit={handleOnSearchSubmit}
    />
  );
};
export default PokemonsScreen;
