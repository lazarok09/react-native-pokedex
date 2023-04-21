import React from 'react';

import * as Styled from './styles';

type Colors = 'green' | 'tomato' | 'blue' | 'yellow' | 'purple';

type ColorsSwitch = {
  [key in Colors]: string;
};

const COLORS: ColorsSwitch = {
  ['green']: '#5DBE62',
  ['tomato']: '#F7776A',
  ['blue']: '#58A9F4',
  ['yellow']: '#FFCE4B',
  ['purple']: '#B862CF',
};

type BoxProps = {
  text: string;
  color: Colors;
  handleOnPressOut: () => void;
};

export const ColorizedBox = ({text, color, handleOnPressOut}: BoxProps) => {
  return (
    <Styled.Box onPress={handleOnPressOut} backgroundColor={COLORS[color]}>
      <Styled.Title>{text}</Styled.Title>
    </Styled.Box>
  );
};
