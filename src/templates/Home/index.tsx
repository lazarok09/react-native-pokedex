import React from 'react';

import {Categories} from '../../components/categories';
import * as Styled from './styles';

export const Home = () => {
  return (
    <Styled.Wrapper>
      <Categories />
    </Styled.Wrapper>
  );
};
