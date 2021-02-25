import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import styles from './style'
import Icon from 'react-native-vector-icons/FontAwesome';
import Line from '../../shared/components/line/Line';

function Settings({navigation}) {
  return (
    <SafeAreaView style={styles.mainContainer}>
      <View style={styles.container}>
        <View style={styles.headerView}>
          <TouchableOpacity activeOpacity={0.6} style={styles.imageContainer}>
            <Icon name="user" size={40} color="#2680eb" />
          </TouchableOpacity>
          <View style={styles.userDsc}>
            <Text style={styles.nameText}>Deniz Ay</Text>
            <Text style={styles.userNameText}>@de.nizay</Text>
          </View>
        </View>
        <View style={styles.mainView}>
          <TouchableOpacity activeOpacity={0.6} style={styles.settingsOption} onPress={()=>navigation.navigate('EditProfile')}>
            <Icon name="pencil" size={25} color="#2680eb" />
            <Text style={styles.iconText}>Düzenle</Text>
          </TouchableOpacity >
          <View style={styles.lineView}>
            <Line descriptor={'AD'} description={'Deniz'} style={styles.line} />
            <Line descriptor={'SOYAD'} description={'AY'}  style={styles.line} />
            <Line descriptor={'KULLANICI ADI'} description={'@de.nizay'}  style={styles.line} />
            <Line descriptor={'ŞİFRE'} description={'********'}  style={styles.line} />
            <Line descriptor={'MAİL'} description={'deniz@gmail.com'}  style={styles.line} />
            <Line descriptor={'EŞLEŞMELER'} description={'Karı'}  style={styles.line} />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

export default Settings;
