import React, {useEffect} from 'react';
import {
  Text,
  View,
  TextInput,
  SafeAreaView,
  TouchableOpacity,
  StyleSheet,
  KeyboardAvoidingView,
  Dimensions,
  Keyboard
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import LinearGradient from 'react-native-linear-gradient';
import { useState } from 'react';

function App() {
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

  const _keyboardDidShow  = (e) => {
    const keyboardHeight= height - e.endCoordinates.height;
    setHeight(keyboardHeight);
    console.log(keyboardHeight,'keyboardHeight');
  };

  const _keyboardDidHide = () => {
    const screenHeight= Dimensions.get('window').height;
    setHeight(screenHeight);
  };
  return (
    <SafeAreaView style={{flex: 1}}>
      <KeyboardAvoidingView
        behavior="padding"
        style={{flex: 1}}
        keyboardVerticalOffset={-50}>
        <LinearGradient
          colors={['rgb(65, 29, 108)', 'rgb(198, 166, 236)']}
          style={styles.headerContainer}>
          <View style={{...styles.logo, width:height/5, height:height/5}} >
            <Text>LOGO</Text>
          </View>
        </LinearGradient>
        <View style={styles.mainContainer}>
          <TextInput placeholder="Kullanıcı Adı" style={styles.textInput} />
          <TextInput
            placeholder="Şifre"
            secureTextEntry={true}
            style={styles.textInput}></TextInput>
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
            <TouchableOpacity style={styles.signInButton}>
              <Text style={{...styles.text, color: 'white'}}>Giriş Yap</Text>
            </TouchableOpacity>
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
          <TouchableOpacity>
            <Text style={styles.signUpText}>Kayıt ol</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
export default App;
const styles = StyleSheet.create({
  headerContainer: {
    flex: 3,
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
    alignItems: 'center', //horizontal
    justifyContent: 'center', //vertical
  },
  logo: {
    alignItems: 'center', //horizontal
    justifyContent: 'center', //vertical
    borderWidth: 3,
    borderColor: 'rgb(253,132,163)',
    borderRadius: 100,
  },
  mainContainer: {
    backgroundColor: 'white',
    paddingHorizontal: 23,
    paddingVertical: 33,
    flex: 4,
  },
  footerContainer: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  linearGradient: {
    flex: 1,
  },
  textInput: {
    backgroundColor: 'white',
    borderRadius: 20,
    paddingVertical: 15,
    paddingHorizontal: 16,
    marginBottom: 17,
    borderWidth: 1,
    borderColor: '#707070',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 7,
  },
  visiblePassword: {
    justifyContent: 'flex-end',
    flexDirection: 'row',
    marginBottom: 7,
    alignItems: 'center',
  },
  passwordIcon: {
    marginLeft: 11,
  },
  signInButton: {
    borderRadius: 25,
    alignItems: 'center',
    paddingVertical: 15,
    backgroundColor: '#2680eb',
    marginBottom: 20,
  },
  buttonContainer: {
    paddingTop: 22,
  },
  forgotPassword: {
    marginTop: 22,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 20,
    fontStyle: 'italic',
    color: 'grey',
  },
  line: {
    borderWidth: 0.8,
    borderColor: 'grey',
  },
  signUpText: {
    color: '#2680eb',
    fontWeight: 'bold',
    fontSize: 20,
  },
});
