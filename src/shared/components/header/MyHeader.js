import React from 'react';
import {View, Text, TouchableOpacity,Dimensions, SafeAreaView} from 'react-native';
import {Colors} from '../../Styles/Color';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/Ionicons';
import { isEnabled } from 'react-native/Libraries/Performance/Systrace';

let height=Dimensions.get('window').height;
let isBigScreen=Dimensions.get('window').height>600;

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
    <SafeAreaView>
    <LinearGradient
      colors={[Colors.main, Colors.second]}
      style={{height:isBigScreen?90:75, flexDirection: 'row', alignItems: 'center'}}>
      {props.leftButton}
      <View
        style={{
          width:isBigScreen?(height/13) :(height/10),
          height: isBigScreen?(height/13) :(height/10),
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
    </SafeAreaView>

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
