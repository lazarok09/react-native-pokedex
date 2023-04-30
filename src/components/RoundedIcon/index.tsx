import {StyleProp, StyleSheet, TextStyle} from 'react-native';
import {View} from 'react-native';
import React from 'react';

type RoundedIconProps = {
  icon: React.ReactNode;
  color: PokemonTypeColors;
  customStyles?: StyleProp<TextStyle>;
};
export const RoundedIcon = ({icon, color, customStyles}: RoundedIconProps) => {
  return (
    <View style={[styles.container, {backgroundColor: color}, customStyles]}>
      {icon}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
