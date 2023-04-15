import React from 'react';

import {ColorizedBox} from '../box';
import * as Styled from './styles';

export const Categories = () => {
  return (
    <Styled.Wrapper>
      <ColorizedBox color="green" text="Pokémon" />

      <Styled.DoubleItems>
        <ColorizedBox color="tomato" text="Items" />
        <ColorizedBox color="blue" text="Moves" />
      </Styled.DoubleItems>
      <Styled.DoubleItems>
        <ColorizedBox color="yellow" text="Types" />
        <ColorizedBox color="purple" text="Favorite" />
      </Styled.DoubleItems>
    </Styled.Wrapper>
  );
};
