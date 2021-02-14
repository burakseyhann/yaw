import React from 'react';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';

import Matches from '../../screens/matches/Matches';
import ProfileDetails from '../../screens/matches/profile-details/ProfileDetails';
import Messages from '../../screens/messages/Messages';
import MessageDetail from '../../screens/messages/message-detail/MessageDetail';
import Settings from '../../screens/settings/Settings';
import EditProfile from '../../screens/settings/edit-profile/EditProfile';
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
        name={'ProfileDetails'}
        component={ProfileDetails}
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
    <SettingStack.Navigator  headerMode={'screen'}>
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
    </SettingStack.Navigator>
  );
}

const Tab = createBottomTabNavigator();
function TabBar(props) {
  return (
    <Tab.Navigator tabBar={(props) => <MyTabBar {...props} />}>
      <Tab.Screen name={'Messages'} component={messagesStack} />
      <Tab.Screen name={'Matches'} component={matchStack} />
      <Tab.Screen name={'Settings'} component={settingStack} />
    </Tab.Navigator>
  );
};

export default TabBar;
