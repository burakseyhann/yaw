import 'react-native-gesture-handler';
import React from 'react';
import {View} from 'react-native';

import RootNavigator from './src/navigations/root-navigation/RootNavigator.js';
function App(props) {
  return (
    <View style={{flex: 1}}>
      <RootNavigator/>
    </View>
  );
}

export default App;
