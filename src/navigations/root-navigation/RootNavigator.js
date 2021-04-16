import React from 'react';

import LoginScreen from '../../screens/login-screen/LoginScreen';
import RegisterScreenFirstStep from '../../screens/register-screen/resgister-first-step/RegisterScreenFirstStep';
import RegisterScreenSecondStep from '../../screens/register-screen/register-second-step/RegisterScreenSecondStep';
import RegisterScreenThirdStep from '../../screens/register-screen/resgister-third-step/RegisterScreenThirdStep';
import TabBar from '../bottom-tab-bar-navigator/BottomTabBar';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

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
          name="RegisterFirst"
          component={RegisterScreenFirstStep}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="RegisterSecond"
          component={RegisterScreenSecondStep}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="RegisterThird"
          component={RegisterScreenThirdStep}
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
