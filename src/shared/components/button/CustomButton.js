import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
import styles from './style';

function CustomButton(props) {
  return (
    <TouchableOpacity activeOpacity={props.activeOpacity} style={{...styles.signInButton,...props.style}} onPress={props.onPress}>
    <Text style={styles.text}>{props.label}</Text>
  </TouchableOpacity>
  );
};

export default CustomButton;
