import {View, Text, TouchableOpacity} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {SafeAreaView} from 'react-native';
import React from 'react';

import {Pokemon} from '../../containers/Pokemon';
import usePokemons from '../../hooks/pokemons';
import * as Styled from './styles';

type Props = {
  onPokemonPress: (pokemonName: string) => void;
};
export const Pokemons = ({onPokemonPress}: Props) => {
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
                <TouchableOpacity
                  onPress={() => onPokemonPress(pokemon.name)}
                  key={index}>
                  <Pokemon name={pokemon.name} />
                </TouchableOpacity>
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
