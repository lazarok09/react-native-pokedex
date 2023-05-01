import {View, Text, StyleSheet, Pressable} from 'react-native';
import React, {useState} from 'react';

type TABS = 'INFO' | 'EVOLUTION' | 'MOVES';

type SwitchTabsOptions = {
  [key in TABS]: React.ReactNode;
};
type ChildrenList = {
  InfoChild: React.ReactNode;
  EvolutionChild: React.ReactNode;
  MovesChild: React.ReactNode;
};

export const Tabs = ({EvolutionChild, InfoChild, MovesChild}: ChildrenList) => {
  const [activeTab, setActiveTab] = useState<TABS>('INFO');

  const switcher: SwitchTabsOptions = {
    ['INFO']: InfoChild,
    ['EVOLUTION']: EvolutionChild,
    ['MOVES']: MovesChild,
  };

  return (
    <View>
      <Pressable onPress={() => setActiveTab('INFO')}>
        <Text style={styles.text}>Info</Text>
      </Pressable>
      <Pressable onPress={() => setActiveTab('EVOLUTION')}>
        <Text style={styles.text}>Evolution</Text>
      </Pressable>
      <Pressable onPress={() => setActiveTab('MOVES')}>
        <Text style={styles.text}>Moves</Text>
      </Pressable>

      {switcher[activeTab]}
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 24,
    color: '#FFFFFF',
  },
});
