import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
import styles from './style';

function CustomButton(props) {
  return (
    <TouchableOpacity activeOpacity={0.9} style={styles.signInButton} onPress={props.onPress}>
    <Text style={styles.text}>{props.label}</Text>
  </TouchableOpacity>
  );
};

export default CustomButton;
