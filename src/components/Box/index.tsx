import {View} from 'react-native';
import React from 'react';

import * as Styled from './styles';

type BoxProps = {
  children: JSX.Element;
};
export const Box = ({children}: BoxProps) => {
  <View>
    <Styled.Box>{children}</Styled.Box>
  </View>;
};
