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
import {Tabs} from '../Tabs';

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
  const INFO = (
    <>
      <View style={styles.flavorArea}>
        <Text style={styles.flavorText}>{getEnglishFlavor(specie)}</Text>
      </View>
      <PokemonInfoStatus
        color={getCurrentPokemonColor()}
        pokemonStatus={pokemon?.stats}
      />
      <View style={styles.battleConditionArea}>
        <Text style={styles.battleConditionHeading}>Battle condition</Text>
        <Text style={styles.battleConditionWeakTo}>Weak to</Text>
        <WeakTo loading={loading} pokemon={pokemon} />
      </View>
    </>
  );
  return (
    <View style={styles.infoArea}>
      <Tabs
        tabColor={getCurrentPokemonColor()}
        InfoChild={INFO}
        EvolutionChild={<Text>Evolucao</Text>}
        MovesChild={<Text>Moves</Text>}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  infoArea: {
    backgroundColor: theme.colors.background,
    width: '100%',
    height: '100%',
    borderTopLeftRadius: 60,
    borderTopRightRadius: 60,
    padding: 60,
  },
  flavorArea: {
    marginBottom: Number(theme.box.gaps.xxlarge.replace('px', '')),
  },
  flavorText: {
    color: theme.colors.text_03,
    fontSize: Number(theme.typography.sizes.large.replace('px', '')) + 3,
    fontWeight: '600',
  },

  battleConditionArea: {
    marginTop: 34,
  },
  battleConditionHeading: {
    fontSize: Number(theme.typography.sizes.xlarge.replace('px', '')),
    fontWeight: 'bold',
    color: theme.colors.text_01,
    marginBottom: 26,
  },
  battleConditionWeakTo: {
    fontSize: Number(theme.typography.sizes.large.replace('px', '')),
    color: theme.colors.text_01,
    marginBottom: 15,
  },
});
