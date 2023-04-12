import {
  useColorScheme,
  SafeAreaView,
  ScrollView,
  StatusBar,
  View,
} from 'react-native';
import {QueryClientProvider, QueryClient} from '@tanstack/react-query';
import {Colors, Header} from 'react-native/Libraries/NewAppScreen';
import React from 'react';

import {Pokemons} from './src/containers/pokemons';
import {Avatar} from './src/components/avatar';

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
            backgroundColor: isDarkMode ? Colors.black : Colors.white,
          }}>
          <QueryClientProvider client={queryClient}>
            <Avatar
              imageSrc={'https://avatars.githubusercontent.com/u/45147892?v=4'}
            />
            <Pokemons />
          </QueryClientProvider>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default App;
