import React from 'react';
import {TextInput,View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import styles from './style';

function CustomTextInput(props) {
  return (
    <View  style={styles.textInput}>
    <TextInput
      placeholder={props.placeholder}
      value={props.value}
      onChangeText={props.onChangeText}
      secureTextEntry={props.secureTextEntry}
      autoCorrect={props.autoCorrect}
      keyboardType={props.autoCompleteType}
      style={{width:'100%'}}
     
    />
     <Icon style={styles.icon} name={props.iconName} size={props.iconSize} color={props.iconColor} onPress={props.onPress} />
    </View>
  );
}

export default CustomTextInput;
