import React from 'react';

import {Categories} from '../../components/categories';
import {SearchBar} from '../../components/searchBar';
import {Heading} from '../../components/heading';
import * as Styled from './styles';

export const Home = () => {
  return (
    <Styled.Wrapper>
      <Heading as="h1">What are you looking for ?</Heading>
      <SearchBar />
      <Categories />
    </Styled.Wrapper>
  );
};
