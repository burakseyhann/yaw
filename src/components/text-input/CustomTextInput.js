import React from 'react';
import {TextInput} from 'react-native';
import styles from './style';

function CustomTextInput(props) {
  return (
    <TextInput
      placeholder={props.placeholder}
      secureTextEntry={props.secureTextEntry}
      autoCorrect={props.autoCorrect}
      keyboardType={props.autoCompleteType}
      style={{...styles.textInput, width: props.width, height: props.height}}
    />
  );
}

export default CustomTextInput;
