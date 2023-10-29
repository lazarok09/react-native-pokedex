import {View, Pressable, StyleSheet, Text} from 'react-native';
import React, {useState} from 'react';

import {horizontalScale, verticalScale} from '../../utils/metric';

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
        <Pressable
          style={styles.tabItemContainer}
          onPress={() => setActiveTab('INFO')}>
          <Text style={[styles.tabText, {backgroundColor: tabColor}]}>
            Info
          </Text>
        </Pressable>
        <Pressable
          style={styles.tabItemContainer}
          onPress={() => setActiveTab('EVOLUTION')}>
          <Text style={[styles.tabText, {backgroundColor: tabColor}]}>
            Evolution
          </Text>
        </Pressable>
        <Pressable
          style={styles.tabItemContainer}
          onPress={() => setActiveTab('MOVES')}>
          <Text style={[styles.tabText, {backgroundColor: tabColor}]}>
            Moves
          </Text>
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
    flex: 1,
  },
  tabText: {
    flex: 1,
    fontSize: verticalScale(16),
    color: '#ffffff',
    paddingTop: verticalScale(12),
    paddingBottom: verticalScale(12),
    textAlign: 'center',
    borderRadius: 34,
  },
});
