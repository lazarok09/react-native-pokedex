import {StyleSheet, Image, View} from 'react-native';
import React from 'react';

type AvatarProps = {
  imageSrc: string;
};

export const Avatar = ({imageSrc}: AvatarProps): JSX.Element => {
  return (
    <View style={styles.alignCenter}>
      <Image
        style={styles.picture}
        source={{
          uri: imageSrc,
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  alignCenter: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  picture: {
    height: 200,
    width: 200,
    alignSelf: 'center',
    borderRadius: 200 / 2,
  },
});
