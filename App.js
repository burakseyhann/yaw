import React from 'react';
import {
  Text,
  View,
  TextInput,
  SafeAreaView,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import LinearGradient from 'react-native-linear-gradient';

function App() {
  return (
    <SafeAreaView style={{flex: 1}}>
      <LinearGradient
        colors={['rgb(65, 29, 108)', 'rgb(198, 166, 236)']}
        style={styles.headerContainer}>
        <View style={styles.logo}>
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
          <Text style={{color: 'grey'}}>Şifreyi göster</Text>
          <Icon style={styles.passwordIcon} name="eye" size={20} color="grey" />
        </TouchableOpacity>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.signInButton}>
            <Text style={{...styles.text, color: 'white'}}>Giriş Yap</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.forgotPassword}>
            <Text style={{...styles.text, fontWeight: 'normal'}}>
              Şifreni mi unuttun?
            </Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.line}></View>
      <View style={styles.footerContainer}>
        <Text>Henüz bir hesabın yok mu? </Text>
        <TouchableOpacity>
          <Text style={styles.signUp}>Kayıt ol</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
export default App;
const styles = StyleSheet.create({
  headerContainer: {
    flex: 2.5,
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
    alignItems: 'center', //horizontal
    justifyContent: 'center', //vertical
  },
  logo: {
    alignItems: 'center', //horizontal
    justifyContent: 'center', //vertical
    width: 150,
    height: 150,
    borderWidth: 3,
    borderColor: 'rgb(253,132,163)',
    borderRadius: 100,
  },
  mainContainer: {
    backgroundColor: 'white',
    padding: 23,
    flex: 4,
  },
  footerContainer: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection:'row'
  },
  linearGradient: {
    flex: 1,
  },
  textInput: {
    backgroundColor: 'white',
    borderRadius: 10,
    height: 50,
    marginBottom: 17,
    borderWidth: 1,
    borderColor: 'black',
  },
  visiblePassword: {
    justifyContent: 'flex-end',
    flexDirection: 'row',
  },
  passwordIcon: {
    marginLeft: 11,
  },
  signInButton: {
    borderRadius: 25,
    alignItems: 'center',
    paddingVertical: 15,
    backgroundColor: '#2680eb',
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
    fontSize: 17,
    fontWeight: 'bold',
    color: 'grey',
  },
  line: {
    borderWidth: 1,
    borderColor: 'black',
  },
  signUp: {
    color: '#2680eb',
  },
});
