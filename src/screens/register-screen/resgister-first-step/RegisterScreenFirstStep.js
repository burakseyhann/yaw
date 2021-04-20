import React, {useEffect, useState} from 'react';
import {
  Text,
  View,
  StyleSheet,
  SafeAreaView,
  TouchableWithoutFeedback,
  Dimensions,
  Keyboard,
} from 'react-native';

import LinearGradient from 'react-native-linear-gradient';

import styles from './style';
import {Colors} from '../../../shared/Styles/Color';
import LogoView from '../../../shared/components/logo/LogoView';
import CustomTextInput from '../../../shared/components/text-input/CustomTextInput';
import CustomButton from '../../../shared/components/button/CustomButton';

function RegisterScreenFirstStep({navigation}) {
  const [width, setWidth] = useState(Dimensions.get('window').width);
  const [height, setHeight] = useState(Dimensions.get('window').height);
  const [userName, setUserName] = useState('');
  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [password, setPassword] = useState('');
  const [mail, setMail] = useState('');
  const [choice, setChoice] = useState('');

  const [passwordVisible, setPasswordVisible] = useState(true);
  const [iconEye, setIconEye] = useState(false);

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: Colors.white}}>
      <TouchableWithoutFeedback style={{flex: 1}} onPress={Keyboard.dismiss}>
        <View style={styles.container}>
          <LinearGradient
            colors={[Colors.main, Colors.second]}
            style={styles.headerContainer}>
            <LogoView label="LOGO" width={height / 5} height={height / 5} />
          </LinearGradient>
          
          <View style={styles.mainContainer}>
          <CustomTextInput
              placeholder="Ad"
              value={name}
              keyboardType="visible-password"
              onChangeText={(item) => setName(item)}
            />
                        <CustomTextInput
              placeholder="Soyadı"
              value={lastName}
              keyboardType="visible-password"
              onChangeText={(item) => setLastName(item)}
            />
            <CustomTextInput
              placeholder="Kullanici Adi"
              value={userName}
              keyboardType="visible-password"
              onChangeText={(item) => setUserName(item)}
            />
            <CustomButton
            style={styles.signInButton}
              label="İleri"
              onPress={() => {
                navigation.navigate('RegisterSecond');
              }}
            />
          </View>
        </View>
      </TouchableWithoutFeedback>
    </SafeAreaView>
  );
}

export default RegisterScreenFirstStep;
