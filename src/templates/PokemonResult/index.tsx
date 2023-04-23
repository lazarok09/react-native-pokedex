import {Pressable, StyleSheet, Text, SafeAreaView} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import React from 'react';

import {Pokemon} from '../../containers/Pokemon';
import theme from '../../styles/theme';
import * as Styled from './styles';

type PokemonResultProps = {
  name: string;
  handleBackButton: () => void;
};
export const PokemonResult = ({name, handleBackButton}: PokemonResultProps) => {
  return (
    <Styled.Wrapper>
      <SafeAreaView>
        <Pressable style={styles.button} onPress={handleBackButton}>
          <Text>
            <Icon
              name="chevron-back-sharp"
              size={60}
              color={theme.colors.text_01}
            />
            "
          </Text>
        </Pressable>
        <Pokemon name={name} />
      </SafeAreaView>
    </Styled.Wrapper>
  );
};

const styles = StyleSheet.create({
  button: {},
});
