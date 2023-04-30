import Icon from 'react-native-vector-icons/Ionicons';
import {Pressable, Text} from 'react-native';
import React from 'react';

import theme from '../../styles/theme';

type Props = {
  handleBackButton: () => void;
};
export const BackButton = ({handleBackButton}: Props) => (
  <Pressable onPress={handleBackButton}>
    <Text>
      <Icon name="chevron-back-sharp" size={60} color={theme.colors.text_01} />
    </Text>
  </Pressable>
);
