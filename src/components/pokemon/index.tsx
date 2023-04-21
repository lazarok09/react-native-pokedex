import {View, Text, Image, StyleSheet} from 'react-native';
import React from 'react';

import {getPokemonImgSrc} from '../../utils/pokemon';

type PokemonProps = {
  name: string;
  id: number;
};
export const Pokemon = ({name}: PokemonProps) => {
  return (
    <View style={styles.alignCenter}>
      <Image
        style={styles.picture}
        source={{
          uri: getPokemonImgSrc(name),
          cache: 'force-cache',
          height: 220,
          width: 440,
        }}
      />
      <Text>{name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  alignCenter: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  picture: {
    height: 200,
    width: 200,
    borderRadius: 200 / 2,
  },
});
