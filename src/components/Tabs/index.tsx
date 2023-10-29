import {View, Pressable, StyleSheet, Text} from 'react-native';
import React, {useState} from 'react';

import {verticalScale} from '../../utils/metric';

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
      <View style={styles.tabContainer}>
        <Pressable onPress={() => setActiveTab('INFO')}>
          <View style={styles.tabItemContainer}>
            <Text style={[styles.tabText, {backgroundColor: tabColor}]}>
              Info
            </Text>
          </View>
        </Pressable>
        <Pressable onPress={() => setActiveTab('EVOLUTION')}>
          <View style={styles.tabItemContainer}>
            <Text style={[styles.tabText, {backgroundColor: tabColor}]}>
              Evolution
            </Text>
          </View>
        </Pressable>
        <Pressable onPress={() => setActiveTab('MOVES')}>
          <View style={styles.tabItemContainer}>
            <Text style={[styles.tabText, {backgroundColor: tabColor}]}>
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
  tabContainer: {
    flexDirection: 'row',
    gap: 20,
    marginBottom: verticalScale(42),
  },
  tabItemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  tabText: {
    fontSize: 36,
    color: '#ffffff',
    paddingTop: 12,
    paddingBottom: 12,
    width: 250,
    textAlign: 'center',
    borderRadius: 34,
  },
});
