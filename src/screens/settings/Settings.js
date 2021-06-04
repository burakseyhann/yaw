import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Dimensions,
  ScrollView,
} from 'react-native';

import styles from './style';
import Icon from 'react-native-vector-icons/FontAwesome';
import Line from '../../shared/components/line/Line';
import {Colors} from '../../shared/Styles/Color';

let isBigScreen = Dimensions.get('window').height > 600;

function Settings({navigation}) {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.container}>
        <View style={styles.headerView}>
          <TouchableOpacity activeOpacity={0.6} style={styles.imageContainer}>
            <Icon name="user" size={isBigScreen ? 40 : 31} color="#2680eb" />
          </TouchableOpacity>
          <View style={styles.userDsc}>
            <Text style={styles.nameText}>Deniz Ay</Text>
            <Text style={styles.userNameText}>@de.nizay</Text>
          </View>
        </View>
        <View style={styles.bodyContainer}>
          <View style={styles.itemContainer}>
            <Text style={styles.settingOptionsText}>Profil Ayarları</Text>
            <TouchableOpacity style={styles.iconButton} onPress={()=>navigation.navigate('EditProfile')}>
              <Icon
                name={'angle-right'}
                size={25}
                color={Colors.blue}
                style={{alignSelf: 'flex-end'}}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.itemContainer}>
            <Text style={styles.settingOptionsText}>Güvenlik Ayarları</Text>
            <TouchableOpacity style={styles.iconButton}  onPress={()=>navigation.navigate('SecuritySettings')}>
              <Icon
                name={'angle-right'}
                size={25}
                color={Colors.blue}
                style={{alignSelf: 'flex-end'}}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.itemContainer}>
            <Text style={styles.settingOptionsText}>Eşleşme Ayarları</Text>
            <TouchableOpacity style={styles.iconButton} onPress={()=>navigation.navigate('MatchesSettings')}>
              <Icon
                name={'angle-right'}
                size={25}
                color={Colors.blue}
                style={{alignSelf: 'flex-end'}}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}

export default Settings;
