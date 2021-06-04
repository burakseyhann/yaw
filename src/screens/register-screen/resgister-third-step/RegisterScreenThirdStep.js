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
import {Picker} from '@react-native-picker/picker';

import CustomButton from '../../../shared/components/button/CustomButton';

function RegisterScreenThirdStep({navigation}) {
  const [width, setWidth] = useState(Dimensions.get('window').width);
  const [height, setHeight] = useState(Dimensions.get('window').height);
  const [selectedLanguage, setSelectedLanguage] = useState('selam');

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
            <View style={{borderWidth:1,borderColor:'black',borderRadius:50,width:'95%',alignSelf:'center',marginBottom:20}}>
            <Picker
              selectedValue={selectedLanguage}
              onValueChange={(itemValue, itemIndex) =>
                setSelectedLanguage(itemValue)
              }

              >
              <Picker.Item label="Kadın" value="Kadın" />
              <Picker.Item label="Erkek" value="Erkek" />
              <Picker.Item label="Diğer" value="Diğer" />
            </Picker>
            </View>
            <CustomButton
              style={styles.signInButton}
              textStyle={{fontSize:16}}
              label="Kayıt Ol"
              onPress={() => {
                navigation.navigate('Home');
              }}
            />
          </View>
        </View>
      </TouchableWithoutFeedback>
    </SafeAreaView>
  );
}

export default RegisterScreenThirdStep;
