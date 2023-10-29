import {View, StyleSheet} from 'react-native';
import React from 'react';

import {moderateScale} from '../../utils/metric';
import {ColorizedBox} from '../Box';

type CategoriesProps = {
  handleOnPressOut: () => void;
  handleOnPokemonCategoryClick: () => void;
};
export const Categories = (props: CategoriesProps) => {
  const {handleOnPressOut, handleOnPokemonCategoryClick} = props;
  return (
    <View style={styles.wrapper}>
      <View style={styles.item}>
        <ColorizedBox
          handleOnPressOut={handleOnPokemonCategoryClick}
          color="green"
          text="Pokémon"
        />
      </View>
      <View style={styles.doubleItems}>
        <ColorizedBox
          handleOnPressOut={handleOnPressOut}
          color="tomato"
          text="Items"
        />
        <ColorizedBox
          handleOnPressOut={handleOnPressOut}
          color="blue"
          text="Moves"
        />
      </View>
      <View style={styles.doubleItems}>
        <ColorizedBox
          handleOnPressOut={handleOnPressOut}
          color="yellow"
          text="Types"
        />
        <ColorizedBox
          handleOnPressOut={handleOnPressOut}
          color="purple"
          text="Favorite"
        />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  wrapper: {
    gap: moderateScale(20),
  },
  item: {
    flexDirection: 'row',
  },
  doubleItems: {
    flexDirection: 'row',
    gap: moderateScale(20),
    width: '100%',
  },
});
