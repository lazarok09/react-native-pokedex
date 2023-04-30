import type {NativeStackScreenProps} from '@react-navigation/native-stack';
import React from 'react';

import {Pokemons} from '../containers/Pokemons';
import {StackParamList} from '../../App';

export type PokemonsScreenProps = NativeStackScreenProps<StackParamList>;

const PokemonsScreen = (props: PokemonsScreenProps) => {
  const {navigation} = props;
  const handleOnPokemonPress = (pokemonName: string) => {
    navigation.navigate('Pokemon', {
      name: pokemonName,
    });
  };
  return <Pokemons onPokemonPress={handleOnPokemonPress} />;
};
export default PokemonsScreen;
