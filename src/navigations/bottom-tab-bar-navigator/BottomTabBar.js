import React from 'react';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import {getFocusedRouteNameFromRoute} from '@react-navigation/native';

import Matches from '../../screens/matches/Matches';
import ProfileDetails from '../../screens/matches/profile-details/ProfileDetails';
import Messages from '../../screens/messages/Messages';
import MessageDetail from '../../screens/messages/message-detail/MessageDetail';
import Settings from '../../screens/settings/Settings';
import EditProfile from '../../screens/settings/edit-profile/EditProfile';
import SecuritySettings from '../../screens/settings/security-settings/SecuritySettings';
import MatchesSettings from '../../screens/settings/matches-settings/MatchesSettings';
import MyTabBar from '../../shared/components/tab-bar/MyTabBar';
import headerOptions from '../../shared/components/header/MyHeader';

const MessageStack = createStackNavigator();
const MatchStack = createStackNavigator();
const SettingStack = createStackNavigator();

function messagesStack() {
  return (
    <MessageStack.Navigator  headerMode={'screen'}>
      <MessageStack.Screen
        name={'Messages'}
        component={Messages}
        options={{
          header: ({scene, previous, navigation}) => {
            return headerOptions(scene, previous, navigation);
          },
        }}
      />
      <MessageStack.Screen
        name={'MessageDetails'}
        component={MessageDetail}
        options={{
          header: ({scene, previous, navigation}) => {
            return headerOptions(scene, previous, navigation);
          },
        }}
      />
      <MessageStack.Screen
        name={'ProfileDetails'}
        component={ProfileDetails}
        options={{
          header: ({scene, previous, navigation}) => {
            return headerOptions(scene, previous, navigation);
          },
        }}
      />
    </MessageStack.Navigator>
  );
}

function matchStack() {
  return (
    <MatchStack.Navigator headerMode={'screen'}>
      <MatchStack.Screen
        name={'Matches'}
        component={Matches}
        options={{
          header: ({scene, previous, navigation}) => {
            return headerOptions(scene, previous, navigation);
          },
        }}
      />
      <MatchStack.Screen
        name={'MessageDetails'}
        component={MessageDetail}
        options={{
          header: ({scene, previous, navigation}) => {
            return headerOptions(scene, previous, navigation);
          },
        }}
      />
    </MatchStack.Navigator>
  );
}

function settingStack() {
  return (
    <SettingStack.Navigator headerMode={'screen'}>
      <SettingStack.Screen
        name={'Settings'}
        component={Settings}
        options={{
          header: ({scene, previous, navigation}) => {
            return headerOptions(scene, previous, navigation);
          },
        }}
      />
      <SettingStack.Screen
        name={'EditProfile'}
        component={EditProfile}
        options={{
          header: ({scene, previous, navigation}) => {
            return headerOptions(scene, previous, navigation);
          },
        }}
      />
      <SettingStack.Screen
        name={'SecuritySettings'}
        component={SecuritySettings}
        options={{
          header: ({scene, previous, navigation}) => {
            return headerOptions(scene, previous, navigation);
          },
        }}
      />
      <SettingStack.Screen
        name={'MatchesSettings'}
        component={MatchesSettings}
        options={{
          header: ({scene, previous, navigation}) => {
            return headerOptions(scene, previous, navigation);
          },
        }}
      />
    </SettingStack.Navigator>
  );
}

const getTabBarVisibility = (route) => {
  const routeName = getFocusedRouteNameFromRoute(route) ?? '';
  if (routeName === 'MessageDetails') {
    return false;
  }

  return true;
};

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
