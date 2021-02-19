import 'react-native-gesture-handler';
import React from 'react';
import {View} from 'react-native';
import RootNavigator from './src/navigations/root-navigation/RootNavigator.js';
import { navigationRef } from './src/navigations/root-navigation/RootNavigator';

function App(props) {
  return (
    <View style={{flex: 1}}>
      <RootNavigator ref={navigationRef}/>
    </View>
  );
}

export default App;
