import {View, Image, StyleSheet} from 'react-native';
import React from 'react';

export type PokeImageProps = {
  url: string;
};
export const PokeImage = ({url}: PokeImageProps) => {
  return (
    <View style={styles.alignCenter}>
      <Image
        style={styles.picture}
        source={{
          uri: url,
          cache: 'force-cache',
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  alignCenter: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  picture: {
    height: 290,
    width: 290,
    borderRadius: 200 / 2,
  },
});
