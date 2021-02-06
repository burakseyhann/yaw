import React from 'react';
import {View, Text} from 'react-native';
import styles from './style';

function LogoView(props) {
  return (
    <View style={{...styles.logo, width: props.width, height: props.height}}>
      <Text>{props.label}</Text>
    </View>
  );
}

export default LogoView;
