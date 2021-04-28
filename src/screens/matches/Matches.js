import React from 'react';
import {Text, View, TouchableOpacity,Dimensions,FlatList,SafeAreaView} from 'react-native';
import styles from './style';
import {MATCHESDATA} from '../../data/matches-list-data/MatchesListData';
import Icon from 'react-native-vector-icons/FontAwesome5';
let isBigScreen=Dimensions.get('window').height>600;
function Matches({navigation}) {
  return (
    <SafeAreaView style={styles.mainContainer}>
  <FlatList 
  numColumns={2}
      data={MATCHESDATA}
      renderItem={({item}) => (
        <View style={styles.containerView}>
        <TouchableOpacity  activeOpacity={0.8} style={styles.itemContainer}>
          <View style={styles.profilePictureView}>
            <View style={styles.profilePicture}>
              <Icon name="user" size={isBigScreen?30:25} color="#2680eb"  />
            </View>
          </View>
          <View style={styles.textView}>
            <Text style={styles.textUsername}>{item.username}</Text>
            <Text numberOfLines={2} ellipsizeMode={'tail'} style={styles.textMatch}>{item.message}</Text>
          </View>
        </TouchableOpacity>
        </View>
      )}
      keyExtractor={(item) => item.id}
    />
    </SafeAreaView>
  );
}

export default Matches;
