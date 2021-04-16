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

function RegisterScreenSecondStep({navigation}) {
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
              placeholder="mail"
              value={mail}
              keyboardType="visible-password"
              onChangeText={(item) => setMail(item)}
              autoCorrect={false}
            />
            <View>
              <CustomTextInput
                placeholder="Şifre"
                secureTextEntry={passwordVisible}
                autoCorrect={false}
                value={password}
                onChangeText={(item) => setPassword(item)}
                iconName={iconEye ? 'eye' : 'eye-slash'}
                iconSize={20}
                iconColor={iconEye ? Colors.blue : Colors.grey}
                onPress={() => {
                  //for vsible or hide the password
                  setPasswordVisible(!passwordVisible);
                  setIconEye(!iconEye);
                }}
              />
            </View>
            <View>
              <CustomTextInput
                placeholder="Şifreyi Tekrarla"
                secureTextEntry={passwordVisible}
                autoCorrect={false}
                value={password}
                onChangeText={(item) => setPassword(item)}
                iconName={iconEye ? 'eye' : 'eye-slash'}
                iconSize={20}
                iconColor={iconEye ? Colors.blue : Colors.grey}
                onPress={() => {
                  //for vsible or hide the password
                  setPasswordVisible(!passwordVisible);
                  setIconEye(!iconEye);
                }}
              />
            </View>
            <View style={{flexDirection:'row',justifyContent:'space-between' }}>
              <CustomButton
                style={{...styles.signInButton,backgroundColor:'red'}}
                label="Geri"
                onPress={() => {
                  navigation.navigate('RegisterFirst');
                }}
              />
              <CustomButton
                style={styles.signInButton}
                label="İleri"
                onPress={() => {
                  navigation.navigate('RegisterThird');
                }}
              />
            </View>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </SafeAreaView>
  );
}

export default RegisterScreenSecondStep;
