import {View, Text, StyleSheet, Pressable} from 'react-native';
import React, {useState} from 'react';

import theme from '../../styles/theme';

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
  const [activeTab, setActiveTab] = useState<TABS>('INFO');

  const switcher: SwitchTabsOptions = {
    ['INFO']: InfoChild,
    ['EVOLUTION']: EvolutionChild,
    ['MOVES']: MovesChild,
  };

  return (
    <View>
      <View style={styles.tabsContainer}>
        <Pressable onPress={() => setActiveTab('INFO')}>
          <View style={styles.tabItemContainer}>
            <Text
              style={[
                styles.text,
                {backgroundColor: activeTab === 'INFO' ? tabColor : undefined},
              ]}>
              Info
            </Text>
          </View>
        </Pressable>
        <Pressable onPress={() => setActiveTab('EVOLUTION')}>
          <View style={styles.tabItemContainer}>
            <Text
              style={[
                styles.text,

                {
                  backgroundColor:
                    activeTab === 'EVOLUTION' ? tabColor : undefined,
                },
              ]}>
              Evolution
            </Text>
          </View>
        </Pressable>
        <Pressable onPress={() => setActiveTab('MOVES')}>
          <View style={styles.tabItemContainer}>
            <Text
              style={[
                styles.text,
                {backgroundColor: activeTab === 'MOVES' ? tabColor : undefined},
              ]}>
              Moves
            </Text>
          </View>
        </Pressable>
      </View>
      {switcher[activeTab]}
    </View>
  );
};

const styles = StyleSheet.create({
  tabsContainer: {
    flexDirection: 'row',
    gap: 20,
    marginBottom: Number(theme.box.gaps.xxlarge.replace('px', '')) + 10,
  },
  tabItemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    fontSize: 36,
    color: '#FFFFFF',
    paddingTop: 12,
    paddingBottom: 12,
    width: 250,
    textAlign: 'center',
    borderRadius: 34,
  },
});
