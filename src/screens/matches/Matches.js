import React from 'react';
import {Text, View, TouchableOpacity, FlatList,SafeAreaView} from 'react-native';
import styles from './style';
import {MATCHESDATA} from '../../data/matches-list-data/MatchesListData';
import Icon from 'react-native-vector-icons/FontAwesome5';

function Matches({navigation}) {
  return (
    <SafeAreaView style={styles.mainContainer}>
  <FlatList 
      data={MATCHESDATA}
      renderItem={({item}) => (
        <TouchableOpacity  activeOpacity={0.8} style={styles.containerView}>
          <View style={styles.profilePictureView}>
            <View style={styles.profilePicture}>
              <Icon name="user" size={30} color="#2680eb"  />
            </View>
          </View>
          <View style={styles.textView}>
            <Text style={styles.textUsername}>{item.username}</Text>
            <Text style={styles.textMatch}>{item.message}</Text>
          </View>
        </TouchableOpacity>
      )}
      keyExtractor={(item) => item.id}
    />
    </SafeAreaView>
  );
}

export default Matches;
