import React from 'react';

import LoginScreen from '../../screens/login-screen/LoginScreen';
import RegisterScreen from '../../screens/register-screen/RegisterScreen';
import TabBar from '../bottom-tab-bar-navigator/BottomTabBar';
import MessageDetail from '../../screens/messages/message-detail/MessageDetail';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import headerOptions from '../../shared/components/header/MyHeader';

const Stack = createStackNavigator();

// export const navigationRef = React.createRef();

// export function navigate(name, params) {
//   navigationRef.current?.navigate(name, params);
// }

function RootNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Register"
          component={RegisterScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Home"
          component={TabBar}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default RootNavigator;
