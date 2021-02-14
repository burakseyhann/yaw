import React, {useEffect, useState} from 'react';
import {
  Text,
  View,
  TextInput,
  SafeAreaView,
  TouchableOpacity,
  StyleSheet,
  KeyboardAvoidingView,
  Dimensions,
  Keyboard,
  TouchableWithoutFeedback,
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome5';
import LinearGradient from 'react-native-linear-gradient';

import CustomTextInput from '../../shared/components/text-input/CustomTextInput';
import CustomButton from '../../shared/components/button/CustomButton';
import LogoView from '../../shared/components/logo/LogoView';
import styles from './style';
import {Colors} from '../../shared/Styles/Color';

function LoginScreen({navigation}) {
  const [width, setWidth] = useState(Dimensions.get('window').width);
  const [height, setHeight] = useState(Dimensions.get('window').height);
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [passwordVisible, setPasswordVisible] = useState(true);
  const [iconEye, setIconEye] = useState(false);

  useEffect(() => {
    Keyboard.addListener('keyboardDidShow', _keyboardDidShow);
    Keyboard.addListener('keyboardDidHide', _keyboardDidHide);

    // cleanup function
    return () => {
      Keyboard.removeListener('keyboardDidShow', _keyboardDidShow);
      Keyboard.removeListener('keyboardDidHide', _keyboardDidHide);
    };
  }, []);

  const _keyboardDidShow = (e) => {
    const keyboardHeight = height - e.endCoordinates.height;
    setHeight(keyboardHeight);
  };

  const _keyboardDidHide = () => {
    const screenHeight = Dimensions.get('window').height;
    setHeight(screenHeight);
  };
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: Colors.white}}>
      <TouchableWithoutFeedback style={{flex: 1}} onPress={Keyboard.dismiss}>
        <KeyboardAvoidingView
          behavior="padding"
          style={{flex: 1}}
          keyboardVerticalOffset={-50}>
          <LinearGradient
            colors={[Colors.main, Colors.second]}
            style={styles.headerContainer}>
            <LogoView label="LOGO" width={height / 5} height={height / 5} />
          </LinearGradient>
          <View style={styles.mainContainer}>
            <CustomTextInput
              placeholder="Kullanici Adi"
              value={userName}
              keyboardType="visible-password"
              onChangeText={(item) => setUserName(item)}
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
                iconColor={'gray'}
                onPress={() => {
                  //for vsible or hide the password
                  setPasswordVisible(!passwordVisible);
                  setIconEye(!iconEye);
                }}
              />
            </View>
            <View style={styles.buttonContainer}>
              <CustomButton
                label="Giris Yap"
                onPress={() => {
                  navigation.replace('Home');
                }}
              />
              <TouchableOpacity style={styles.forgotPassword}>
                <Text
                  style={{
                    ...styles.text,
                    fontWeight: 'normal',
                    color: Colors.blue,
                  }}>
                  Şifreni mi unuttusdaFDsdgagsn?
                </Text>
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.line}></View>
          <View style={styles.footerContainer}>
            <Text style={styles.text}>Henüz bir hesabın yok mu? </Text>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('Register');
              }}>
              <Text style={styles.signUpText}>Kayıt ol</Text>
            </TouchableOpacity>
          </View>
        </KeyboardAvoidingView>
      </TouchableWithoutFeedback>
    </SafeAreaView>
  );
}
export default LoginScreen;
