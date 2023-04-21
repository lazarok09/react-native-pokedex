import React from 'react';

import {Categories} from '../../components/categories';
import {SearchBar} from '../../components/searchBar';
import {HomeScreenProps} from '../../screens/Home';
import {Heading} from '../../components/heading';
import * as Styled from './styles';

type Props = {
  navigation: HomeScreenProps['navigation'];
};
export const Home = (props: Props) => {
  const {navigation} = props;
  const handleOnPressOut = () => {
    navigation.navigate('Pokemons');
  };
  return (
    <Styled.Wrapper>
      <Heading as="h1">What are you looking for ?</Heading>
      <SearchBar />
      <Categories handleOnPressOut={handleOnPressOut} />
    </Styled.Wrapper>
  );
};
