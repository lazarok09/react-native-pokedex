import {StyleSheet, SafeAreaView, View} from 'react-native';
import React from 'react';

import {HeartPressableIcon} from '../../components/HeartPressableIcon';
import {BackButton} from '../../components/BackButton';
import {Pokemon} from '../../containers/Pokemon';
import * as Styled from './styles';

type PokemonResultProps = {
  name: string;
  handleBackButton: () => void;
};
export const PokemonResult = ({name, handleBackButton}: PokemonResultProps) => {
  return (
    <Styled.Wrapper>
      <SafeAreaView>
        <View style={styles.header}>
          <BackButton handleBackButton={handleBackButton} />
          <HeartPressableIcon />
        </View>
        <Pokemon name={name} />
      </SafeAreaView>
    </Styled.Wrapper>
  );
};

const styles = StyleSheet.create({
  header: {
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
});
