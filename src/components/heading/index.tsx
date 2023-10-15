import {Dimensions, StyleProp, StyleSheet, Text, TextStyle} from 'react-native';
import React from 'react';

import theme from '../../styles/theme';

export type Keys = 'h1' | 'h2' | 'h3' | 'h4' | 'h5';

type HeadingProps = {
  as: Keys;
  children: React.ReactNode;
  customStyles?: StyleProp<TextStyle>;
};
const {width} = Dimensions.get('window');
const pixelScreen = width < 1080; // You can adjust this threshold as needed.

function getHeadingResponsiveFontSize(as: Keys) {
  if (as === 'h1' && pixelScreen) {
    styles[as].fontSize = 32;
  }
  return styles[as];
}

export const Heading = ({as, children, customStyles}: HeadingProps) => {
  return (
    <Text
      style={[
        getHeadingResponsiveFontSize(as),
        styles.commonStyles,
        customStyles,
      ]}>
      {children}
    </Text>
  );
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
