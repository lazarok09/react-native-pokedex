import {View, Pressable} from 'react-native';
import React, {useState} from 'react';

import * as Styled from './styles';

type TABS = 'INFO' | 'EVOLUTION' | 'MOVES';

type SwitchTabsOptions = {
  [key in TABS]: React.ReactNode;
};
type Props = {
  tabColor: PokemonTypeColors;
} & ChildrenList;

type ChildrenList = {
  InfoChild: React.ReactNode;
  EvolutionChild: React.ReactNode;
  MovesChild: React.ReactNode;
};

export const Tabs = ({
  EvolutionChild,
  InfoChild,
  MovesChild,
  tabColor,
}: Props) => {
  const [activeTab, setActiveTab] = useState<TABS>('EVOLUTION');

  const switcher: SwitchTabsOptions = {
    ['INFO']: InfoChild,
    ['EVOLUTION']: EvolutionChild,
    ['MOVES']: MovesChild,
  };

  return (
    <View>
      <Styled.TabContainer>
        <Pressable onPress={() => setActiveTab('INFO')}>
          <Styled.TabItemContainer>
            <Styled.TabText backgroundColor={tabColor}>Info</Styled.TabText>
          </Styled.TabItemContainer>
        </Pressable>
        <Pressable onPress={() => setActiveTab('EVOLUTION')}>
          <Styled.TabItemContainer>
            <Styled.TabText backgroundColor={tabColor}>
              Evolution
            </Styled.TabText>
          </Styled.TabItemContainer>
        </Pressable>
        <Pressable onPress={() => setActiveTab('MOVES')}>
          <Styled.TabItemContainer>
            <Styled.TabText backgroundColor={tabColor}>Moves</Styled.TabText>
          </Styled.TabItemContainer>
        </Pressable>
      </Styled.TabContainer>
      {switcher[activeTab]}
    </View>
  );
};
