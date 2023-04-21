import {View, Text} from 'react-native';
import React from 'react';

import {Pokemon} from '../../components/pokemon';
import usePokemons from '../../hooks/pokemons';

export const Pokemons = () => {
  const {pokemons, error, loading} = usePokemons();

  const renderPokemons = () => {
    if (error) {
      return (
        <View>
          <Text>Erro :/</Text>
        </View>
      );
    }
    if (loading) {
      return (
        <View>
          <Text>Loading...</Text>
        </View>
      );
    }

    if (pokemons?.length >= 1) {
      return (
        <View>
          {pokemons.map((pokemon, index) => (
            <Pokemon key={index} name={pokemon.name} id={pokemon.id} />
          ))}
        </View>
      );
    }
    return (
      <View>
        <Text>.../</Text>
      </View>
    );
  };
  return renderPokemons();
};
