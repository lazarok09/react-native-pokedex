import React from 'react';

import {Categories} from '../../components/categories';
import {SearchBar} from '../../components/searchBar';
import * as Styled from './styles';

export const Home = () => {
  return (
    <Styled.Wrapper>
      <SearchBar />
      <Categories />
    </Styled.Wrapper>
  );
};
