import {View, Text, StyleSheet} from 'react-native';
import React from 'react';

import {getColorByType, getIconByType} from '../../utils/pokemon';
import {RoundedIcon} from '../../components/RoundedIcon';
import {getPokemonImageSRC} from '../../utils/image';
import {Avatar} from '../../components/Avatar';
import usePokemon from '../../hooks/pokemon';
import useSpecie from '../../hooks/specie';

export const ItemDivider = () => {
  return <View style={styles.divider} />;
};

export const PokemonListItem = ({currentPokemon}: {currentPokemon: string}) => {
  const {pokemon} = usePokemon(currentPokemon);
  const {specie} = useSpecie(currentPokemon);

  if (!Object.keys(pokemon).length || !Object.keys(specie).length) {
    return <Text>Loading...</Text>;
  }
  return (
    <View style={styles.container}>
      <View style={styles.img}>
        <Avatar imageSrc={getPokemonImageSRC(pokemon)} />
      </View>
      <View style={styles.tagContainer}>
        {pokemon.types.map(type => (
          <RoundedIcon
            customStyles={styles.tag}
            icon={getIconByType(type.type.name)}
            color={getColorByType(type.type.name)}
          />
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    flex: 1,
  },
  img: {
    height: 180,
    width: 180,
  },
  tagContainer: {
    flexDirection: 'row',
    gap: 12,
  },
  tag: {
    height: 44,
    width: 44,
    borderRadius: 44 / 2,
  },
  divider: {
    height: 1,
    width: '100%',
    backgroundColor: '#607D8B',
  },
});
