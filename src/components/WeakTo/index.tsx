import {Text, View, StyleSheet} from 'react-native';
import {useEffect, useState} from 'react';
import React from 'react';

import {getColorByType, getIconByType} from '../../utils/pokemon';
import {getTypes} from '../../services/pokemon';
import {RoundedIcon} from '../RoundedIcon';
import theme from '../../styles/theme';

type Props = {
  loading: boolean;
  pokemon: Pokedex;
};
function getNamesByTpe(type: PokedexType) {
  const typeNames = type.damage_relations.double_damage_from.map(i => i.name);
  return typeNames;
}
export const WeakTo = ({loading, pokemon}: Props): JSX.Element => {
  const [types, setType] = useState<PokedexType[]>([]);

  useEffect(() => {
    async function doSearchForTypes() {
      if (!loading) {
        const mappedTypes =
          pokemon?.types && pokemon?.types.map(t => t.type?.name);
        if (pokemon?.types[0]?.type?.name) {
          const data = await Promise.all(
            mappedTypes.map(type => getTypes(type)),
          );
          setType(data);
        }
      }
    }
    doSearchForTypes();
  }, [loading, pokemon]);

  if (!types?.length) {
    return (
      <View>
        <Text style={styles.tagText}>...</Text>
      </View>
    );
  }

  return (
    <View style={styles.tagContainer}>
      {types.map(type => {
        return getNamesByTpe(type).map(typeName => (
          <View style={styles.tagItem}>
            <RoundedIcon
              customStyles={styles.tag}
              icon={getIconByType(typeName)}
              color={getColorByType(typeName)}
            />
            <Text style={styles.tagText}>2x</Text>
          </View>
        ));
      })}
    </View>
  );
};
const styles = StyleSheet.create({
  tagContainer: {
    flexDirection: 'row',
    gap: 12,
    background: '#181818',
    flexWrap: 'wrap',
  },
  tagItem: {
    flexDirection: 'row',
    paddingRight: 12,
    backgroundColor: '#141414',
    borderTopRightRadius: 15,
    borderBottomRightRadius: 15,
  },
  tag: {
    height: 44,
    width: 44,
    borderRadius: 44 / 2,
  },
  tagText: {
    fontSize: Number(theme.typography.sizes.medium.replace('px', '')),
    color: theme.colors.text_01,
    verticalAlign: 'middle',
    paddingRight: 16,
    paddingLeft: 16,
  },
});
