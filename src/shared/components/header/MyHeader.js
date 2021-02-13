import React from 'react';
import {View, Text} from 'react-native';
import {Colors} from '../../Styles/Color';
import LinearGradient from 'react-native-linear-gradient';

function MyHeader(props) {
  return (
    <LinearGradient
      colors={[Colors.main, Colors.second]}
      style={{height: 80, flexDirection: 'row', alignItems: 'center'}}>
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
      // leftButton={
      //   previous ? <MyBackButton onPress={navigation.goBack} /> : undefined
      // }
      // style={options.headerStyle}
    />
  );
}
export default headerOptions;
