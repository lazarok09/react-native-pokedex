import {
  useColorScheme,
  SafeAreaView,
  ScrollView,
  StatusBar,
  View,
} from 'react-native';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import {Colors, Header} from 'react-native/Libraries/NewAppScreen';
import {ThemeProvider} from 'styled-components/native';
import React from 'react';

import {lightTheme} from './src/styles/light-theme';
import {ColorizedBox} from './src/components/box';
import {Avatar} from './src/components/avatar';
import theme from './src/styles/theme';

const queryClient = new QueryClient();

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <Header />
        <View
          style={{
            backgroundColor: isDarkMode
              ? theme.colors.background
              : lightTheme.colors.background,
          }}>
          <QueryClientProvider client={queryClient}>
            <ThemeProvider theme={isDarkMode ? theme : lightTheme}>
              <Avatar
                imageSrc={
                  'https://avatars.githubusercontent.com/u/45147892?v=4'
                }
              />
              <ColorizedBox color="green" text={'Pokémon'} />
            </ThemeProvider>
          </QueryClientProvider>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default App;
