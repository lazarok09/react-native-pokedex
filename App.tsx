import {SafeAreaView, ScrollView, StatusBar, View} from 'react-native';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import {ThemeProvider} from 'styled-components/native';
import {StyleSheet} from 'react-native';
import React from 'react';

import {Avatar} from './src/components/avatar';
import {Home} from './src/templates/Home';
import theme from './src/styles/theme';

const queryClient = new QueryClient();

function App(): JSX.Element {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        barStyle={'light-content'}
        backgroundColor={theme.colors.background}
      />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={styles.scrollView}>
        <View>
          <QueryClientProvider client={queryClient}>
            <ThemeProvider theme={theme}>
              <Avatar
                imageSrc={
                  'https://avatars.githubusercontent.com/u/45147892?v=4'
                }
              />
              <Home />
            </ThemeProvider>
          </QueryClientProvider>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollView: {
    backgroundColor: theme.colors.background,
  },
});
export default App;
