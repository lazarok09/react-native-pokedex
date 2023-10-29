import {View, Image, StyleSheet} from 'react-native';
import React from 'react';

import {verticalScale} from '../../utils/metric';

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
    height: verticalScale(250),
    width: verticalScale(250),
    borderRadius: verticalScale(100),
  },
});
