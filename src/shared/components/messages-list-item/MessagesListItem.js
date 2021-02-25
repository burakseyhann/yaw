import * as React from 'react';
import {Text, View, TouchableOpacity, FlatList} from 'react-native';
import styles from './style';
import {MESSAGESDATA} from '../../../data/messages-list-data/MessagesListData';
import Icon from 'react-native-vector-icons/FontAwesome5';

//import * as RootNavigation from '../../../navigations/root-navigation/RootNavigator';

function MessagesListItem() {
  return (
    <FlatList
      data={MESSAGESDATA}
      renderItem={({item}) => (
        <View style={styles.containerView}>
          <TouchableOpacity activeOpacity={0.6} style={styles.profilePictureView}>
            <View style={styles.profilePicture}>
              <Icon name="user" size={30} color="#2680eb" />
            </View>
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={0.6} style={styles.textView}>
            <Text style={styles.textUsername}>{item.username}</Text>
            <Text style={styles.textMatch}>{item.message}</Text>
          </TouchableOpacity>
        </View>
      )}
      keyExtractor={(item) => item.id}
    />
  );
}
export default MessagesListItem;
