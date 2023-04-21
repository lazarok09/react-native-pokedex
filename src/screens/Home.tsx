import {StyleSheet} from 'react-native';
import {View} from 'react-native';
import React from 'react';

import {Home} from '../templates/Home';
import theme from '../styles/theme';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Home />
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
