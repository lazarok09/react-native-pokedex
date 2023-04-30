import {StyleSheet, View, Text} from 'react-native';
import {useContext} from 'react';
import React from 'react';

import {getColorByType, getIconByType} from '../../utils/pokemon';
import {PokemonContext} from '../../context/Pokemon/context';
import {getEnglishFlavor} from '../../utils/general';
import {PokemonInfoStatus} from '../PokemonInfo';
import usePokemon from '../../hooks/pokemon';
import useSpecie from '../../hooks/specie';
import {RoundedIcon} from '../RoundedIcon';
import theme from '../../styles/theme';
import useType from '../../hooks/type';

export const InfoTab = ({pokemonName}: {pokemonName: string}) => {
  const {setColor} = useContext(PokemonContext);
  const {pokemon} = usePokemon(pokemonName);
  const {specie} = useSpecie(pokemon.name);
  const {type} = useType(pokemon?.types && pokemon?.types[0]?.type?.name);

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
      {type && Object.keys(type).length > 0 && (
        <View style={styles.tagContainer}>
          <RoundedIcon
            customStyles={styles.tag}
            icon={getIconByType(
              type.damage_relations.double_damage_from[0].name,
            )}
            color={getColorByType(
              type.damage_relations.double_damage_from[0].name,
            )}
          />
          <Text style={styles.tagText}>2x</Text>
        </View>
      )}
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
  tagContainer: {
    flexDirection: 'row',
    gap: 12,
    background: '#181818',
  },
  tag: {
    height: 44,
    width: 44,
    borderRadius: 44 / 2,
  },
  tagText: {
    width: 20,
  },
});
