import {StyleSheet, Text} from 'react-native';
import React from 'react';

import theme from '../../styles/theme';

export type Keys = 'h1' | 'h2' | 'h3' | 'h4' | 'h5';

type HeadingProps = {
  as: Keys;
  children: React.ReactNode;
};

export const Heading = ({as, children}: HeadingProps) => {
  return <Text style={[styles[as], styles.commonStyles]}>{children}</Text>;
};

const styles = StyleSheet.create({
  commonStyles: {
    color: theme.colors.text_01,
    fontWeight: '700',
  },

  h1: {
    fontSize: 72,
  },
  h2: {
    fontSize: 64,
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
