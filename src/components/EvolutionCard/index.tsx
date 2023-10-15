import {View, StyleSheet} from 'react-native';
import React from 'react';

import {horizontalScale, verticalScale} from '../../utils/metric';
import ArrowRight from '../../assets/icons/arrow-right.svg';
import {Avatar} from '../Avatar';

type Props = {
  pokemonUrl: string;
  evolutionUrl: string;
};
export const EvolutionCard = ({evolutionUrl, pokemonUrl}: Props) => {
  return (
    <View style={styles.container}>
      <View style={styles.img}>
        <Avatar imageSrc={pokemonUrl} />
      </View>

      <ArrowRight width={horizontalScale(94)} height={verticalScale(8)} />
      <View style={styles.img}>
        <Avatar imageSrc={evolutionUrl} />
      </View>
    </View>
  );
};

const width = horizontalScale(85);
const height = verticalScale(85);

const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-around',
    alignSelf: 'center',
    flexDirection: 'row',
    alignItems: 'center',
  },
  img: {
    flex: 1,
    height,
    width,
  },
});
