import {StyleSheet, SafeAreaView, View, StatusBar} from 'react-native';
import React, {useContext} from 'react';

import {HeartPressableIcon} from '../../components/HeartPressableIcon';
import {PokemonContext} from '../../context/Pokemon/context';
import {BackButton} from '../../components/BackButton';
import {Pokemon} from '../../containers/Pokemon';
import {InfoTab} from '../../components/InfoTab';
import * as Styled from './styles';

type PokemonResultProps = {
  name: string;
  handleBackButton: () => void;
};
export const PokemonResult = ({name, handleBackButton}: PokemonResultProps) => {
  const {color} = useContext(PokemonContext);

  return (
    <Styled.Wrapper backgroundColor={color}>
      <StatusBar backgroundColor={color} />
      <SafeAreaView>
        <Styled.PokemonArea>
          <View style={styles.header}>
            <BackButton handleBackButton={handleBackButton} />
            <HeartPressableIcon />
          </View>
          <Pokemon name={name} />
        </Styled.PokemonArea>

        <InfoTab pokemonName={name} />
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
