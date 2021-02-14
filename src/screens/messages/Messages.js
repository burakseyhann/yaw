import React from 'react';
import { Text, View } from 'react-native';

function Messages({navigation}){
    
return(
<View>
<Text onPress={() => navigation.navigate('MessageDetails') } >Messages</Text>
</View>
)
};

export default Messages;

