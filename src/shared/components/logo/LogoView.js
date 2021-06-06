import React from 'react';
import {View, Text,Image} from 'react-native';
import styles from './style';

function LogoView(props) {
  return (
    <View style={{...styles.logo, width: props.width, height: props.height}}>
      <Image source={require('../../images/Adsız.png')} style={{width:'100%',height:'100%'}}/>
    </View>
  );
}

export default LogoView;
