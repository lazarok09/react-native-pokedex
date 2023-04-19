import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

import theme from '../../styles/theme';

export type Keys = 'h1' | 'h2' | 'h3' | 'h4' | 'h5';

type HeadingProps = {
  as: Keys;
  children: React.ReactNode;
};

export const Heading = ({as, children}: HeadingProps) => {
  return (
    <View>
      <Text style={[styles[as], styles.color]}>{children}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  color: {
    color: theme.colors.text_01,
  },
  h1: {
    fontSize: 60,
  },
  h2: {
    fontSize: 54,
  },
  h3: {
    fontSize: 48,
  },
  h4: {
    fontSize: 38,
  },
  h5: {
    fontSize: 32,
  },
  h6: {
    fontSize: 26,
  },
});
