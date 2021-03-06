import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {Colors} from '../../Styles/Color';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/Ionicons';

function MyBackButton(props) {
  return (
    <TouchableOpacity
      activeOpacity={0.6}
      style={{paddingLeft: 10}}
      onPress={props.onPress}>
      <Icon name={'ios-chevron-back-outline'} size={30} color={Colors.white} />
    </TouchableOpacity>
  );
}

function MyHeader(props) {
  return (
    <LinearGradient
      colors={[Colors.main, Colors.second]}
      style={{height: 90, flexDirection: 'row', alignItems: 'center'}}>
      {props.leftButton}
      <View
        style={{
          width: 55,
          height: 55,
          borderWidth: 2,
          borderColor: 'rgb(253,132,163)',
          borderRadius: 50,
          alignItems: 'center',
          justifyContent: 'center',
          marginHorizontal: 21,
        }}>
        <Text>LOGO</Text>
      </View>
      <Text>{props.title}</Text>
    </LinearGradient>
  );
}

function headerOptions(scene, previous, navigation) {
  const {options} = scene.descriptor;
  const title =
    options.headerTitle !== undefined
      ? options.headerTitle
      : options.title !== undefined
      ? options.title
      : scene.route.name;

  return (
    <MyHeader
      title={title}
      leftButton={
        previous ? <MyBackButton onPress={navigation.goBack} /> : undefined
      }
    />
  );
}
export default headerOptions;
