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

import Icon from 'react-native-vector-icons/FontAwesome5';
import LinearGradient from 'react-native-linear-gradient';

import LogoView from '../../components/logo/LogoView';
import CustomTextInput from '../../components/text-input/CustomTextInput';
import CustomButton from '../../components/button/CustomButton';

function RegisterScreen(props) {
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
    <SafeAreaView style={{flex: 1,backgroundColor:'white'}}>
      <TouchableWithoutFeedback style={{flex: 1}} onPress={Keyboard.dismiss}>
        <View style={styles.container}>
          <LinearGradient
            colors={['rgb(65, 29, 108)', 'rgb(198, 166, 236)']}
            style={styles.headerContainer}>
            <LogoView label="LOGO" width={height / 5} height={height / 5} />
          </LinearGradient>

          <View style={styles.mainContainer}>
            <CustomTextInput placeholder="Kullanici Adi" />
            <View>
              <CustomTextInput
                placeholder="Şifre"
                secureTextEntry={true}
                width={'100%'}
              />

            </View>
            <CustomTextInput
              placeholder="mail"
              autoCompleteType={'visible-password'}
              autoCorrect={false}
            />
            <CustomTextInput placeholder="Seni Kimler Görsün OÇ" />
            <CustomButton label="Giris Yap" />
          </View>
        </View>
      </TouchableWithoutFeedback>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerContainer: {
    flex: 1.5,
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
    alignItems: 'center', //horizontal
    justifyContent: 'center', //vertical
  },
  mainContainer: {
    backgroundColor: 'white',
    paddingHorizontal: 23,
    paddingVertical: 33,
    flex: 3,
  },

});

export default RegisterScreen;
