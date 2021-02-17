import React from 'react';

import { Text, View} from 'react-native';

import Questions from '../questions/Questions';

function Messages({navigation}) {
  return (
    <View>
      <Text onPress={() => navigation.navigate('MessageDetails')}>
        Messages
      </Text>
      <Questions />
    </View>
  );
}

export default Messages;
