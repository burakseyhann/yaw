import React from 'react';
import { Text, View } from 'react-native';

import Matches from '../../screens/matches/Matches'
import Messages from '../../screens/messages/Messages'
import Settings from '../../screens/settings/Settings'


import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
const Tab= createBottomTabNavigator();
function TabBar(props){
  
    return(
        <Tab.Navigator>
            <Tab.Screen name={"Messages"} component={Messages} />
            <Tab.Screen name={"Matches"} component={Matches} />
            <Tab.Screen name={"Settings"} component={Settings} />
        </Tab.Navigator>
);
};

export default TabBar;
