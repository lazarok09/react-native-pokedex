import {View, StyleSheet, Text} from 'react-native';
import {PanResponder} from 'react-native';
import React, {useState} from 'react';

import {getColorByType, getIconByType} from '../../utils/pokemon';
import {PokeImage} from '../../components/PokeImage';
import {Heading} from '../../components/Heading';
import usePokemon from '../../hooks/pokemon';
import {Tag} from '../../components/Tag';
import theme from '../../styles/theme';

type PokemonContainerProps = {
  name: string;
};

export const Pokemon = (props: PokemonContainerProps) => {
  const [currentPokemon, setCurrentPokemon] = useState(props.name);

  const {pokemon} = usePokemon(currentPokemon);

  function getPokemonImageSRC() {
    if (Object.keys(pokemon).length > 0) {
      const hasABetterImage = !!pokemon?.sprites?.front_default?.length;
      if (hasABetterImage) {
        return pokemon.sprites.front_default;
      }
    }
    return '';
  }

  const panResponder = PanResponder.create({
    onMoveShouldSetPanResponderCapture: (_, gestureState) => {
      // Define as condições para o início do gesto de arrastar
      const {dx} = gestureState;
      return dx < 1 || dx > 1;
    },
    onPanResponderRelease: (_, gestureState) => {
      // moved to the left
      if (gestureState.dx < 1) {
        // go to one pokemon before (previous) this one
        setCurrentPokemon(`${pokemon.id + 1}`);
      }
      // moved to the right
      if (gestureState.dx > 1) {
        // go to one pokemon after (next) this one
        setCurrentPokemon(`${pokemon.id + -1}`);
      }
    },
  });

  return (
    <View>
      <View style={styles.headingContainer}>
        <View style={styles.headingAndTagsContainer}>
          <Heading as="h2" customStyles={styles.headingText}>
            {pokemon.name || 'carregando'}
          </Heading>

          <View style={styles.pokemonTypesContainer}>
            {pokemon?.types?.map(thisPokemon => (
              <Tag
                icon={getIconByType(thisPokemon.type.name)}
                text={thisPokemon.type.name}
                color={getColorByType(thisPokemon.type.name)}
              />
            ))}
          </View>
        </View>

        <View style={styles.typeContainer}>
          <Text style={styles.typeText}>{`#${pokemon.id}`}</Text>
        </View>
      </View>

      <View {...panResponder.panHandlers}>
        <PokeImage url={getPokemonImageSRC()} />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  headingContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  headingAndTagsContainer: {
    justifyContent: 'space-between',
    gap: 20,
  },
  headingText: {
    textTransform: 'capitalize',
  },
  typeContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  typeText: {
    color: theme.colors.text_01,
    fontSize: Number(theme.typography.sizes.xhuge.replace('px', '')),
    fontWeight: '700',
  },
  pokemonTypesContainer: {
    flexDirection: 'row',
    gap: 14,
  },
});
