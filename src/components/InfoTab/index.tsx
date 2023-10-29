import {useCallback, useContext, useMemo} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import React from 'react';

import {PokemonContext} from '../../context/Pokemon/context';
import {getEnglishFlavor} from '../../utils/general';
import {getColorByType} from '../../utils/pokemon';
import {PokemonInfoStatus} from '../PokemonInfo';
import {verticalScale} from '../../utils/metric';
import {EvolutionCard} from '../EvolutionCard';
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
  const evolutions = useMemo(
    () => [
      pokemon?.sprites?.front_default,
      pokemon?.sprites?.back_default,
      pokemon?.sprites?.front_shiny,
      pokemon?.sprites?.back_default,
    ],
    [pokemon],
  );

  const renderEvolution = useCallback(() => {
    return (
      <View>
        {evolutions.map((url, index) => {
          return (
            <EvolutionCard pokemonUrl={url} evolutionUrl={url} key={index} />
          );
        })}
      </View>
    );
  }, [evolutions]);

  return (
    <View style={styles.infoArea}>
      <Tabs
        tabColor={getCurrentPokemonColor()}
        InfoChild={INFO}
        EvolutionChild={renderEvolution()}
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
    borderTopLeftRadius: verticalScale(60),
    borderTopRightRadius: verticalScale(60),
    padding: verticalScale(60),
  },
  flavorArea: {
    marginBottom: verticalScale(42),
  },
  flavorText: {
    color: theme.colors.text_03,
    fontSize: verticalScale(29),
    fontWeight: '600',
  },

  battleConditionArea: {
    marginTop: verticalScale(34),
  },
  battleConditionHeading: {
    fontSize: verticalScale(32),

    fontWeight: 'bold',
    color: theme.colors.text_01,
    marginBottom: verticalScale(26),
  },
  battleConditionWeakTo: {
    fontSize: verticalScale(26),
    color: theme.colors.text_01,
    marginBottom: verticalScale(15),
  },
});
