import React from 'react';

import {HomeSearchBar} from '../../containers/HomeSearchBar';
import {Categories} from '../../components/Categories';
import {HomeScreenProps} from '../../screens/Home';
import {Heading} from '../../components/Heading';
import * as Styled from './styles';

type Props = {
  navigation: HomeScreenProps['navigation'];
};
enum HomePage {
  Title = 'What are you looking for ?',
}

export const Home = (props: Props) => {
  const {navigation} = props;

  const onSearchSubmit = (pokemonName: string) => {
    navigation.navigate('Pokemon', {
      name: pokemonName,
    });
  };
  const handleOnPokemonCategoryClick = () => {
    navigation.navigate('Pokemons');
  };

  return (
    <Styled.Wrapper>
      <Heading as="h1">{HomePage.Title}</Heading>
      <HomeSearchBar onSearchSubmit={onSearchSubmit} />
      <Categories
        handleOnPressOut={() => {}}
        handleOnPokemonCategoryClick={handleOnPokemonCategoryClick}
      />
    </Styled.Wrapper>
  );
};
