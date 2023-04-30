import React from 'react';

import * as Styled from './styles';

type TagProps = {
  text: string;
  icon: React.ReactNode;
  color: PokemonTypeColors;
};
export const Tag = ({icon, text, color}: TagProps) => {
  return (
    <Styled.Wrapper backgroundColor={color}>
      {icon}
      {text && <Styled.Text>{text}</Styled.Text>}
    </Styled.Wrapper>
  );
};
