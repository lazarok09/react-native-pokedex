import {View, Text, Image, StyleSheet} from 'react-native';
import React from 'react';

export type NamedAvatarProps = {
  name: string;
  url: string;
};
export const NamedAvatar = ({name, url}: NamedAvatarProps) => {
  return (
    <View style={styles.alignCenter}>
      <Image
        style={styles.picture}
        source={{
          uri: url,
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
    height: 250,
    width: 310,
    borderRadius: 200 / 2,
  },
});
