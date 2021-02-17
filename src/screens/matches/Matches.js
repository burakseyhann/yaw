import React from 'react';
import {SafeAreaView, StyleSheet, View} from 'react-native';
import MatchesListItem from '../../shared/components/matches-list-item/MatchesListItem';
import styles from './style';

function Matches({navigation}) {
  return (
    <SafeAreaView style={styles.mainContainer}>
      <MatchesListItem />
    </SafeAreaView>
  );
}

export default Matches;
