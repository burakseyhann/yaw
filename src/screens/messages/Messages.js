import * as React from 'react';
import {Text, View, TouchableOpacity, FlatList,SafeAreaView,Dimensions} from 'react-native';
import {MESSAGESDATA} from '../../data/messages-list-data/MessagesListData';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Questions from '../questions/Questions';
import styles from './style';
let isBigScreen=Dimensions.get('window').height>600;
function Messages({navigation}) {
  return (
    <SafeAreaView style={{flex:1}}>
      <Questions />
      <FlatList
      data={MESSAGESDATA}
      renderItem={({item}) => (
        <View style={styles.containerView}>
          <TouchableOpacity activeOpacity={0.6} style={styles.profilePictureView} onPress={()=>navigation.navigate('ProfileDetails')}>
            <View style={styles.profilePicture}>
              <Icon name="user" size={isBigScreen?30:25} color="#2680eb" />
            </View>
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={0.6} style={styles.textView} onPress={()=>navigation.navigate('MessageDetails')}>
            <Text style={styles.textUsername}>{item.username}</Text>
            <Text style={styles.textMatch}>{item.message}</Text>
          </TouchableOpacity>
        </View>
      )}
      keyExtractor={(item) => item.id}
    />
    </SafeAreaView>
  );
}

export default Messages;
