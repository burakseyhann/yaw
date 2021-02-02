import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
import styles from './style';

function CustomButton(props) {
  return (
    <TouchableOpacity style={styles.signInButton}>
    <Text style={styles.text}>{props.label}</Text>
  </TouchableOpacity>
  );
}

export default CustomButton;
