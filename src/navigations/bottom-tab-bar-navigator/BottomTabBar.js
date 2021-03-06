import React from 'react';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import {getFocusedRouteNameFromRoute} from '@react-navigation/native';

import Matches from '../../screens/matches/Matches';
import ProfileDetails from '../../screens/matches/profile-details/ProfileDetails';
import Messages from '../../screens/messages/Messages';
import Settings from '../../screens/settings/Settings';
import EditProfile from '../../screens/settings/edit-profile/EditProfile';
import MyTabBar from '../../shared/components/tab-bar/MyTabBar';
import headerOptions from '../../shared/components/header/MyHeader';
import MessageDetail from '../../screens/messages/message-detail/MessageDetail';


function getTabBarVisibility(route) {
  const routeName = getFocusedRouteNameFromRoute(route) ?? 'Messages';
  if (routeName === 'MessageDetails') {
    console.log(routeName);
    return false;
  }
  return true;
}

const MessageStack = createStackNavigator();
function messagesStack() {
  return (
    <MessageStack.Navigator
      headerMode={'screen'}
      screenOptions={{
        header: ({scene, previous, navigation}) => {
          return headerOptions(scene, previous, navigation);
        },
      }}>
      <MessageStack.Screen name={'Messages'} component={Messages} />
      <MessageStack.Screen name={'MessageDetails'} component={MessageDetail} />
      <MessageStack.Screen name={'ProfileDetails'} component={ProfileDetails} />
    </MessageStack.Navigator>
  );
}
const MatchStack = createStackNavigator();
function matchStack() {
  return (
    <MatchStack.Navigator
      headerMode={'screen'}
      screenOptions={{
        header: ({scene, previous, navigation}) => {
          return headerOptions(scene, previous, navigation);
        },
      }}>
      <MatchStack.Screen name={'Matches'} component={Matches} />
    </MatchStack.Navigator>
  );
}
const SettingStack = createStackNavigator();
function settingStack() {
  return (
    <SettingStack.Navigator
      headerMode={'screen'}
      screenOptions={{
        header: ({scene, previous, navigation}) => {
          return headerOptions(scene, previous, navigation);
        },
      }}>
      <SettingStack.Screen name={'Settings'} component={Settings} />
      <SettingStack.Screen name={'EditProfile'} component={EditProfile} />
    </SettingStack.Navigator>
  );
}

const Tab = createBottomTabNavigator();
function TabBar(props) {
  return (
    <Tab.Navigator tabBar={(props) => <MyTabBar {...props} />}>
      <Tab.Screen
        name={'Messages'}
        component={messagesStack}
        options={({route}) => ({
          tabBarVisible: getTabBarVisibility(route),
        })}
      />
      <Tab.Screen name={'Matches'} component={matchStack} />
      <Tab.Screen name={'Settings'} component={settingStack} />
    </Tab.Navigator>
  );
}

export default TabBar;
