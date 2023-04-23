import {Text} from 'react-native';
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
      <Text>{text}</Text>
    </Styled.Wrapper>
  );
};
