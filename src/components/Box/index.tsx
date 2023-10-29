import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import React from 'react';

import {moderateScale} from '../../utils/metric';

type Colors = 'green' | 'tomato' | 'blue' | 'yellow' | 'purple';

type ColorsSwitch = {
  [key in Colors]: string;
};

const COLORS: ColorsSwitch = {
  ['green']: '#5DBE62',
  ['tomato']: '#F7776A',
  ['blue']: '#58A9F4',
  ['yellow']: '#FFCE4B',
  ['purple']: '#B862CF',
};

type BoxProps = {
  text: string;
  color: Colors;
  handleOnPressOut: () => void;
};

export const ColorizedBox = ({text, color, handleOnPressOut}: BoxProps) => {
  return (
    <TouchableOpacity
      style={[styles.box, {backgroundColor: COLORS[color]}]}
      onPress={handleOnPressOut}>
      <View style={styles.titleContainer}>
        <Text style={[styles.title]}>{text}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  box: {
    flex: 1,
    minHeight: moderateScale(150),
    maxHeight: moderateScale(200),
    borderRadius: moderateScale(20),
  },
  titleContainer: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  title: {
    fontSize: moderateScale(42),
    fontWeight: '900',
    font: "'Roboto'",
    color: '#fefefe',
    padding: moderateScale(32),
  },
});
