import {SafeAreaView, ScrollView, StatusBar, View} from 'react-native';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import {ThemeProvider} from 'styled-components/native';
import React from 'react';

import {Avatar} from './src/components/avatar';
import {Home} from './src/templates/Home';
import theme from './src/styles/theme';

const queryClient = new QueryClient();

function App(): JSX.Element {
  const backgroundStyle = {
    backgroundColor: theme.colors.background,
    backgroundStyle: 'flex: 1',
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={'light-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
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

export default App;
