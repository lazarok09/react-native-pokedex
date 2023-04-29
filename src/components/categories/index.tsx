import React from 'react';

import {ColorizedBox} from '../Box';
import * as Styled from './styles';

type CategoriesProps = {
  handleOnPressOut: () => void;
};
export const Categories = (props: CategoriesProps) => {
  const {handleOnPressOut} = props;
  return (
    <Styled.Wrapper>
      <Styled.Item>
        <ColorizedBox
          handleOnPressOut={handleOnPressOut}
          color="green"
          text="Pokémon"
        />
      </Styled.Item>
      <Styled.DoubleItems>
        <ColorizedBox
          handleOnPressOut={handleOnPressOut}
          color="tomato"
          text="Items"
        />
        <ColorizedBox
          handleOnPressOut={handleOnPressOut}
          color="blue"
          text="Moves"
        />
      </Styled.DoubleItems>
      <Styled.DoubleItems>
        <ColorizedBox
          handleOnPressOut={handleOnPressOut}
          color="yellow"
          text="Types"
        />
        <ColorizedBox
          handleOnPressOut={handleOnPressOut}
          color="purple"
          text="Favorite"
        />
      </Styled.DoubleItems>
    </Styled.Wrapper>
  );
};
