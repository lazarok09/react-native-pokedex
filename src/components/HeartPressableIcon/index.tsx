import Icon from 'react-native-vector-icons/Ionicons';
import {Pressable, Text} from 'react-native';
import React, {useState} from 'react';

import {verticalScale} from '../../utils/metric';
import theme from '../../styles/theme';

export const HeartPressableIcon = () => {
  const [checked, setChecked] = useState(false);

  return (
    <Pressable
      onPress={() => {
        setChecked(prev => !prev);
      }}>
      <Text>
        <Icon
          name={checked ? 'heart-outline' : 'heart'}
          size={verticalScale(60)}
          color={checked ? theme.colors.text_01 : 'red'}
        />
      </Text>
    </Pressable>
  );
};
