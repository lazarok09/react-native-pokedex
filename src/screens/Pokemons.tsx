import type {NativeStackScreenProps} from '@react-navigation/native-stack';
import React from 'react';

import {Pokemons} from '../containers/Pokemons/pokemons';
import {StackParamList} from '../../App';

export type PokemonsScreenProps = NativeStackScreenProps<StackParamList>;

const PokemonsScreen = (props: PokemonsScreenProps) => {
  const {} = props;
  return <Pokemons />;
};
export default PokemonsScreen;
