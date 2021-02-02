import React from 'react';
import {View} from 'react-native';
import LoginScreen from './src/screens/login-screen/LoginScreen';
function App(props) {
  return (
    <View style={{flex: 1}}>
      <LoginScreen />
    </View>
  );
}

export default App;
