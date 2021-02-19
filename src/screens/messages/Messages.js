import React from 'react';
import {SafeAreaView} from 'react-native';
import MessagesListItem from '../../shared/components/messages-list-item/MessagesListItem';
import Questions from '../questions/Questions';
import styles from './style';

function Messages({navigation}) {
  return (
    <SafeAreaView style={styles.mainContainer}>
      <Questions />
      <MessagesListItem />
    </SafeAreaView>
  );
}

export default Messages;
