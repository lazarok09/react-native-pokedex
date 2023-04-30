import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import {NavigationContainer} from '@react-navigation/native';
import {ThemeProvider} from 'styled-components/native';
import {StatusBar} from 'react-native';
import 'react-native-gesture-handler';
import React from 'react';

import PokemonsScreen from './src/screens/Pokemons';
import PokemonScreen from './src/screens/Pokemon';
import HomeScreen from './src/screens/Home';
import theme from './src/styles/theme';

export type StackParamList = {
  Home: undefined;
  Pokemon: {
    name: string;
  };
  Pokemons: undefined;
};

const queryClient = new QueryClient();
const Stack = createNativeStackNavigator<StackParamList>();

function App(): JSX.Element {
  return (
    <NavigationContainer>
      <StatusBar
        barStyle={'light-content'}
        backgroundColor={theme.colors.background}
      />

      <QueryClientProvider client={queryClient}>
        <ThemeProvider theme={theme}>
          <Stack.Navigator
            screenOptions={{
              headerShown: false,
            }}
            initialRouteName="Home">
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Pokemon" component={PokemonScreen} />
            <Stack.Screen name="Pokemons" component={PokemonsScreen} />
          </Stack.Navigator>
        </ThemeProvider>
      </QueryClientProvider>
    </NavigationContainer>
  );
}

export default App;
