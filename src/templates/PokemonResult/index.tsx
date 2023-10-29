import {StyleSheet, SafeAreaView, View, StatusBar} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import React, {useContext} from 'react';

import {HeartPressableIcon} from '../../components/HeartPressableIcon';
import {PokemonContext} from '../../context/Pokemon/context';
import {BackButton} from '../../components/BackButton';
import {Pokemon} from '../../containers/Pokemon';
import theme from '../../styles/theme';

type PokemonResultProps = {
  name: string;
  handleBackButton: () => void;
};
export const PokemonResult = ({name, handleBackButton}: PokemonResultProps) => {
  const {color} = useContext(PokemonContext);

  return (
    <ScrollView style={[styles.wrapper, {backgroundColor: color}]}>
      <StatusBar backgroundColor={color} />
      <SafeAreaView>
        <View style={styles.header}>
          <BackButton handleBackButton={handleBackButton} />
          <HeartPressableIcon />
        </View>
        <Pokemon name={name} />
      </SafeAreaView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    color: '#FFFF',
  },
  header: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingTop: Number(theme.box.gaps.xxlarge.replace('px', '')),
    paddingLeft: 16,
    paddingRight: 16,
  },
});
