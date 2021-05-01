import React from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  Dimensions,
  FlatList,
  SafeAreaView,
} from 'react-native';
import styles from './style';
import  {Colors} from '../../shared/Styles/Color' 
import {MATCHESDATA} from '../../data/matches-list-data/MatchesListData';
import Icon from 'react-native-vector-icons/FontAwesome5';
let isBigScreen = Dimensions.get('window').height > 600;
function Matches({navigation}) {
  return (
 
      <FlatList
        numColumns={2}
        data={MATCHESDATA}
        columnWrapperStyle={{justifyContent: 'space-between'}}
        contentContainerStyle={{paddingHorizontal:isBigScreen?30:20, paddingVertical:isBigScreen?15:10}}
        renderItem={({item}) => (
          <View style={styles.itemContainer}>
            <View style={styles.headerContainer}>
               <View style={styles.imageContainer}>
               <Icon name="user" size={isBigScreen?28:23} color={Colors.blue}  />
               </View>
               <View style={styles.nameTextView}>
                 <Text style={styles.nameText}>{item.username}</Text>
               </View>
            </View>
            <View style={styles.mainContainer}>
            <Text style={styles.matchesText}>{item.matches}</Text>
            <Text style={styles.messageText}>{item.message}</Text>
            <Text style={styles.messageButton} onPress={()=>console.log('mesajlaş')}>Hemen Mesajlaş</Text>
            </View>
          
         </View>
        )}
        keyExtractor={(item) => item.id}
      />

  );
}

export default Matches;
