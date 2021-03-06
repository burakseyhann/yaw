import React from 'react';
import {TouchableOpacity} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';
import LinearGradient from 'react-native-linear-gradient';

import {Colors} from '../../Styles/Color';


function MyTabBar({state, navigation, descriptors}) {
  // there is for  handle current Messages Detail route options
  const focusedOptions = descriptors[state.routes[state.index].key].options;
  if (focusedOptions.tabBarVisible === false) {
    return null;
  }
    // Tab icon  
  function TabIcon(route, navigation, isFocused) {
    let iconName;
    if (route.name === 'Matches') {
      iconName = 'key';
    } else if (route.name === 'Settings') {
      iconName = 'cogs';
    } else if (route.name === 'Messages') {
      iconName = 'envelope-open';
    }

    return (
      <TouchableOpacity
        activeOpacity={1}
        style={{
          flex: 1,
          alignItems: 'center',
          height: '100%',
          justifyContent: 'center',
        }}
        key={route.name}
        onPress={() => navigation.navigate(route.name)}>
        <Icon
          name={iconName}
          style={{
            color: isFocused ? 'rgb(253,132,163)' : Colors.white,
            fontSize: 23,
          }}
        />
      </TouchableOpacity>
    );
  }

  // custom tab bar
  return (
    <LinearGradient
      colors={[Colors.main, Colors.second]}
      style={{
        flexDirection: 'row',
        height: '9%',
        justifyContent: 'space-around',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
      }}>
      {state.routes.map((route, index) => {
        const isFocused = state.index === index;
        return TabIcon(route, navigation, isFocused);
      })}
    </LinearGradient>
  );
}

export default MyTabBar;
