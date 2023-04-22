import React from 'react';

import {Pokemon} from '../../containers/Pokemon';
import * as Styled from './styles';

export const PokemonResult = ({name}: {name: string}) => {
  return (
    <Styled.Wrapper>
      <Pokemon name={name} />
    </Styled.Wrapper>
  );
};
