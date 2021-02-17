import React from 'react';
import {SafeAreaView, StyleSheet, View} from 'react-native';

import MatchesListItem from '../../shared/components/matches-list-item/MatchesListItem';
import styles from './style';
import Questions from '../questions/Questions';

function Messages({navigation}) {
  return (
    <SafeAreaView style={styles.mainContainer}>
      <MatchesListItem />
      <Questions />
    </SafeAreaView>
  );
}

export default Messages;
