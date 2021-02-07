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
import {Colors} from '../../shared/Styles/Color';
import LogoView from '../../shared/components/logo/LogoView';
import CustomTextInput from '../../shared/components/text-input/CustomTextInput';
import CustomButton from '../../shared/components/button/CustomButton';

function RegisterScreen({navigation}) {
  const [width, setWidth] = useState(Dimensions.get('window').width);
  const [height, setHeight] = useState(Dimensions.get('window').height);
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [mail, setMail] = useState("");
  const [choice, setChoie] = useState("");

  const [passwordVisible, setPasswordVisible] = useState(false);

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
        <View style={styles.container}>
          <LinearGradient
            colors={[Colors.main, Colors.second]}
            style={styles.headerContainer}>
            <LogoView label="LOGO" width={height / 5} height={height / 5} />
          </LinearGradient>

          <View style={styles.mainContainer}>
            <CustomTextInput
              placeholder="Kullanici Adi"
              value={userName}
              onChangeText={(item) => setUserName(item)}
            />
            <View>
              <CustomTextInput
                placeholder="Şifre"
                secureTextEntry={passwordVisible}
                value={password}
                onChangeText={(item) => setPassword(item)}
                iconName={'eye'}
                iconSize={20}
                iconColor={'gray'}
                onPress={() => {
                  //for vsible or hide the password
                  setPasswordVisible(!passwordVisible);
                  console.log('password is visible: ', passwordVisible);
                }}
              />
            </View>
            <CustomTextInput
              placeholder="mail"
              value={mail}
              onChangeText={(item) => setMail(item)}
              autoCorrect={false}
            />
            <CustomTextInput
              placeholder="Seni Kimler Görsün OÇ sjgah"
              value={choice}
              onChangeText={(item) => setChoie(item)}
            />
            <CustomButton label="Giris Yap" onPress={() => {
              navigation.navigate('Home');
            }} />
          </View>
        </View>
      </TouchableWithoutFeedback>
    </SafeAreaView>
  );
}

export default RegisterScreen;
