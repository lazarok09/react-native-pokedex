import {StyleSheet, View, Text} from 'react-native';
import {useContext} from 'react';
import React from 'react';

import {PokemonContext} from '../../context/Pokemon/context';
import {getEnglishFlavor} from '../../utils/general';
import {getColorByType} from '../../utils/pokemon';
import {PokemonInfoStatus} from '../PokemonInfo';
import usePokemon from '../../hooks/pokemon';
import useSpecie from '../../hooks/specie';
import theme from '../../styles/theme';
import {WeakTo} from '../WeakTo';

export const InfoTab = ({pokemonName}: {pokemonName: string}) => {
  const {setColor} = useContext(PokemonContext);
  const {pokemon, loading} = usePokemon(pokemonName);
  const {specie} = useSpecie(pokemon.name);

  function getCurrentPokemonColor(): PokemonTypeColors {
    if (Object.keys(pokemon).length > 0) {
      const result = getColorByType(pokemon?.types[0]?.type?.name);
      setColor(result);
      return result;
    }
    return '#7038F8';
  }

  return (
    <View style={styles.infoArea}>
      <Text style={styles.flavorText}>{getEnglishFlavor(specie)}</Text>
      <PokemonInfoStatus
        color={getCurrentPokemonColor()}
        pokemonStatus={pokemon?.stats}
      />
      <Text style={styles.flavorText}>Battle condition</Text>
      <Text style={styles.flavorText}>Weak to</Text>
      <WeakTo loading={loading} pokemon={pokemon} />
    </View>
  );
};
const styles = StyleSheet.create({
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
  infoArea: {
    backgroundColor: theme.colors.background,
    width: '100%',
    height: '100%',
    borderTopLeftRadius: 60,
    borderTopRightRadius: 60,
    padding: 60,
  },
});
