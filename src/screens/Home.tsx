import type {NativeStackScreenProps} from '@react-navigation/native-stack';
import {StyleSheet} from 'react-native';
import {View} from 'react-native';
import React from 'react';

import {StackParamList} from '../../App';
import {Home} from '../templates/Home';
import theme from '../styles/theme';

export type HomeScreenProps = NativeStackScreenProps<StackParamList>;

const HomeScreen = (props: HomeScreenProps) => {
  const {navigation} = props;
  return (
    <View style={styles.container}>
      <Home navigation={navigation} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
  },
});
export default HomeScreen;
