import React from 'react';
import {Text, View, TouchableOpacity, FlatList} from 'react-native';
import styles from './style';
import {DATA} from '../../../data/MatchesListData';
import Icon from 'react-native-vector-icons/FontAwesome5';

function MatchesListItem({props}) {
  return (
    <FlatList 
      data={DATA}
      renderItem={({item}) => (
        <View style={styles.containerView}>
          <TouchableOpacity style={styles.profilePictureView}>
            <View style={styles.profilePicture}>
              <Icon name="user" size={30} color="#2680eb"  />
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.textView}>
            <Text style={styles.textUsername}>{item.username}</Text>
            <Text style={styles.textMatch}>{item.message}</Text>
          </TouchableOpacity>
        </View>
      )}
      keyExtractor={(item) => item.id}
    />
  );
}
export default MatchesListItem;
