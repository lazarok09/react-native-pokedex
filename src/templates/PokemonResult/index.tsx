import {Pressable, StyleSheet, Text, SafeAreaView, View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import React from 'react';

import {HeartPressableIcon} from '../../components/HeartPressableIcon';
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
        <View style={styles.header}>
          <Pressable onPress={handleBackButton}>
            <Text>
              <Icon
                name="chevron-back-sharp"
                size={60}
                color={theme.colors.text_01}
              />
            </Text>
          </Pressable>
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
