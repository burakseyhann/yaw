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
import CustomTextInput from '../../components/text-input/CustomTextInput';
import CustomButton from '../../components/button/CustomButton';
import LogoView from '../../components/logo/LogoView';
import styles from './style';

function LoginScreen({navigation}) {
  const [width, setWidth] = useState(Dimensions.get('window').width);
  const [height, setHeight] = useState(Dimensions.get('window').height);

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
    <SafeAreaView style={{flex:1, backgroundColor:'white'}}>
      <TouchableWithoutFeedback style={{flex: 1}} onPress={Keyboard.dismiss}>
        <KeyboardAvoidingView
          behavior="padding"
          style={{flex: 1}}
          keyboardVerticalOffset={-50}>
          <LinearGradient
            colors={['rgb(65, 29, 108)', 'rgb(198, 166, 236)']}
            style={styles.headerContainer}>
            <LogoView label="LOGO" width={height / 5} height={height / 5} />
          </LinearGradient>
          <View style={styles.mainContainer}>
            <CustomTextInput placeholder="Kullanici Adi" />
            <CustomTextInput placeholder="Şifre" secureTextEntry={true} />
            <TouchableOpacity style={styles.visiblePassword}>
              <Text style={{...styles.text, fontSize: 17}}>Şifreyi göster</Text>
              <Icon
                style={styles.passwordIcon}
                name="eye"
                size={20}
                color="grey"
              />
            </TouchableOpacity>
            <View style={styles.buttonContainer}>
              <CustomButton label="Giris Yap" />
              <TouchableOpacity style={styles.forgotPassword}>
                <Text
                  style={{
                    ...styles.text,
                    fontWeight: 'normal',
                    color: '#2680eb',
                  }}>
                  Şifreni mi unuttun?
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
