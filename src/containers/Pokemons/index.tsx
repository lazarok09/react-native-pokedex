import {View, Text, TouchableOpacity} from 'react-native';
import {SafeAreaView} from 'react-native';
import {FlatList} from 'react-native';
import React from 'react';

import {ItemDivider, PokemonListItem} from '../../components/PokemonListItem';
import usePokemons from '../../hooks/pokemons';
import * as Styled from './styles';

type Props = {
  handleOnPokemonPress: (pokemonName: string) => void;
};

export const Pokemons = ({
  handleOnPokemonPress: handleOnPokemonPress,
}: Props) => {
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
          <Styled.Wrapper>
            <FlatList
              data={pokemons}
              renderItem={({item, index}) => (
                <TouchableOpacity
                  onPress={() => handleOnPokemonPress(item.name)}
                  key={index}>
                  <PokemonListItem currentPokemon={item.name} />
                </TouchableOpacity>
              )}
              keyExtractor={item => item.name}
              ItemSeparatorComponent={ItemDivider}
            />
          </Styled.Wrapper>
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
