import type {NativeStackScreenProps} from '@react-navigation/native-stack';
import React from 'react';

import {PokemonResult} from '../templates/PokemonResult';
import {StackParamList} from '../../App';

export type PokemonScreenProps = NativeStackScreenProps<StackParamList>;

const PokemonScreen = (props: PokemonScreenProps) => {
  const {route} = props;
  function getPokemonName() {
    const key: StackParamList['Pokemon']['name'] = 'name';

    if (route && route.params && route.params[key]) {
      return route.params[key];
    }

    return 'charizard';
  }
  return <PokemonResult name={getPokemonName()} />;
};

export default PokemonScreen;
