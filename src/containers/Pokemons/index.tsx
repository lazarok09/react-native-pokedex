import {ScrollView} from 'react-native-gesture-handler';
import {SafeAreaView} from 'react-native';
import {View, Text} from 'react-native';
import React from 'react';

import {Pokemon} from '../../containers/Pokemon';
import usePokemons from '../../hooks/pokemons';
import * as Styled from './styles';

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
        <SafeAreaView>
          <ScrollView>
            <Styled.Wrapper>
              {pokemons.map((pokemon, index) => (
                <Pokemon key={index} name={pokemon.name} />
              ))}
            </Styled.Wrapper>
          </ScrollView>
        </SafeAreaView>
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
