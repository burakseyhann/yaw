import React from 'react';
import { Text, View } from 'react-native';

function Settings  ({navigation}){
    return(
    <View>
        <Text onPress={()=> {navigation.navigate('EditProfile')}}>Settings</Text>
    </View>
);
}

export default Settings;
