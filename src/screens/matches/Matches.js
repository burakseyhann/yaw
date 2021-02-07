import React from 'react';
import { Text, View } from 'react-native';

function Matches  ({navigation}){
    return(
    <View>
        <Text onPress={()=>{navigation.navigate('ProfileDetails')}}>Matches</Text>
    </View>
);
}

export default Matches;