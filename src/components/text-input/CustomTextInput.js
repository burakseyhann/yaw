import React from 'react';
import {TextInput} from 'react-native';
import styles from './style';

function CustomTextInput(props) {
  return (
    <TextInput
      placeholder={props.placeholder}
      secureTextEntry={props.secureTextEntry}
      style={styles.textInput}
    />
  );
}

export default CustomTextInput;
