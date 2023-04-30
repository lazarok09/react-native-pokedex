import {View, StyleSheet, Text} from 'react-native';
import {PanResponder} from 'react-native';
import React, {useState} from 'react';

import {getColorByType, getIconByType} from '../../utils/pokemon';
import {PokemonInfoStatus} from '../../components/PokemonInfo';
import {PokeImage} from '../../components/PokeImage';
import {getPokemonImageSRC} from '../../utils/image';
import {getEnglishFlavor} from '../../utils/general';
import {Heading} from '../../components/Heading';
import usePokemon from '../../hooks/pokemon';
import useSpecie from '../../hooks/specie';
import {Tag} from '../../components/Tag';
import theme from '../../styles/theme';

type PokemonContainerProps = {
  name: string;
};

export const Pokemon = (props: PokemonContainerProps) => {
  const [currentPokemon, setCurrentPokemon] = useState(props.name);

  const {pokemon, loading} = usePokemon(currentPokemon);
  const {specie} = useSpecie(pokemon.id);

  const panResponder = PanResponder.create({
    onMoveShouldSetPanResponderCapture: (_, gestureState) => {
      // Define as condições para o início do gesto de arrastar
      const {dx} = gestureState;
      return dx < 1 || dx > 1;
    },
    onPanResponderRelease: (_, gestureState) => {
      // moved to the right
      if (gestureState.dx < 1) {
        // go to one pokemon before (previous) this one
        if (!loading) {
          setCurrentPokemon(`${pokemon.id + 1}`);
        }
      }
      // moved to the left
      if (gestureState.dx > 1) {
        // go to one pokemon after (next) this one

        if (pokemon.id === 1) {
          return;
        }
        if (!loading) {
          setCurrentPokemon(`${pokemon.id - 1}`);
        }
      }
    },
  });

  console.log(
    '🚀 ~ file: index.tsx:73 ~ getEnglishFlavor ~ flavor_text_entries:',
    specie,
  );
  return (
    <View>
      <View style={styles.headingContainer}>
        <View style={styles.headingAndTagsContainer}>
          <Heading as="h2" customStyles={styles.headingText}>
            {loading ? 'Carregando' : pokemon.name}
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
          <Text style={styles.typeText}>
            {pokemon.id ? `#${pokemon.id}` : ''}
          </Text>
        </View>
      </View>

      <View {...panResponder.panHandlers}>
        <PokeImage url={getPokemonImageSRC(pokemon)} />
      </View>

      <Text style={styles.flavorText}>{getEnglishFlavor(specie)}</Text>
      <PokemonInfoStatus pokemonStatus={pokemon?.stats} />
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
  flavorText: {
    color: theme.colors.text_03,
    fontSize: Number(theme.typography.sizes.xxlarge.replace('px', '')),
    fontWeight: '600',
  },
  pokemonTypesContainer: {
    flexDirection: 'row',
    gap: 14,
  },
});
