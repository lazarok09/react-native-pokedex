import {View, Text, TouchableOpacity} from 'react-native';
import {SafeAreaView} from 'react-native';
import {FlatList} from 'react-native';
import React from 'react';

import {ItemDivider, PokemonListItem} from '../../components/PokemonListItem';
import usePokemons from '../../hooks/pokemons';

type Props = {
  handleOnPokemonPress: (pokemonName: string) => void;
};

export const Pokemons = ({
  handleOnPokemonPress: handleOnPokemonPress,
}: Props) => {
  const {pokemons, error} = usePokemons();

  const renderPokemons = () => {
    if (error) {
      return (
        <View>
          <Text>Erro :/</Text>
        </View>
      );
    }

    if (pokemons?.length >= 1) {
      return (
        <SafeAreaView>
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
