import {View, StyleSheet} from 'react-native';
import React from 'react';

import {Label, Progress, StatusNumber} from '../Stats';

type Props = {
  pokemonStatus: Stat[];
  color: PokemonTypeColors;
};

export const PokemonInfoStatus = ({pokemonStatus, color}: Props) => {
  return (
    <View style={styles.pokemonInfoContainer}>
      <View>
        {pokemonStatus?.map((stat, index: number) => {
          return <Label label={stat.stat.name} key={index} />;
        })}
      </View>
      <View>
        {pokemonStatus?.map((stat, index) => {
          return (
            <View style={styles.progress}>
              <View style={styles.statusNumber}>
                <StatusNumber statsNumber={stat.base_stat} key={index} />
              </View>
              <Progress color={color} statsNumber={stat.base_stat} />
            </View>
          );
        })}
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  pokemonInfoContainer: {
    flexDirection: 'row',
    gap: 14,
  },
  statusNumber: {
    width: 60,
  },
  progress: {
    flexDirection: 'row',
    alignItems: 'center',

    gap: 24,
  },
});
