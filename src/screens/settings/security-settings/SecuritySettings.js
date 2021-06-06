import React, {useState} from 'react';
import {Text, View, TextInput,ScrollView,KeyboardAvoidingView,Platform} from 'react-native';
import CustomButton from '../../../shared/components/button/CustomButton';
import styles from './style';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { Colors } from '../../../shared/Styles/Color';
function SecuritySetting({navigation}) {
  const [passwordVisible, setPasswordVisible] = useState(true);
  const [iconEye, setIconEye] = useState(false);
  const [lastPassword, setLastPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [checkNewPass, setCheckNewPass] = useState('');

  return (
    <View style={styles.mainContainer}>
      <View style={styles.container}>
        <View style={styles.inputContainer}>
          <ScrollView>
            <KeyboardAvoidingView
              behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
              keyboardVerticalOffset={-100}>
              <View>  
              <TextInput
              secureTextEntry={passwordVisible}
                placeholder={'Mevcut Şİfre:'}
                style={styles.input}
                value={lastPassword}
                onChangeText={(value) => setLastPassword(value)}
              />
              <Icon name={iconEye ? 'eye' : 'eye-slash'}
               size={18} 
               color={Colors.blue} 
               style={{position:'absolute',right:0,top:13}} 
               onPress={() => {
                //for vsible or hide the password
                setPasswordVisible(!passwordVisible);
                setIconEye(!iconEye);
              }}
               />
              </View>
              <View>
              <TextInput
              secureTextEntry={passwordVisible}
                placeholder={'Yeni Şifre:'}
                style={styles.input}
                value={newPassword}
                onChangeText={(value) => setNewPassword(value)}
              />
             <Icon name={iconEye ? 'eye' : 'eye-slash'}
               size={18} 
               color={Colors.blue} 
               style={{position:'absolute',right:0,top:13}} 
               onPress={() => {
                //for vsible or hide the password
                setPasswordVisible(!passwordVisible);
                setIconEye(!iconEye);
              }} />
              </View>
              <View>
              <TextInput
              secureTextEntry={passwordVisible}
                placeholder={'Yeni Şifreyi Doğrula:'}
                style={styles.input}
                value={checkNewPass}
                onChangeText={(value) => setCheckNewPass(value)}
              />
            <Icon name={iconEye ? 'eye' : 'eye-slash'}
               size={18} 
               color={Colors.blue} 
               style={{position:'absolute',right:0,top:13}} 
               onPress={() => {
                //for vsible or hide the password
                setPasswordVisible(!passwordVisible);
                setIconEye(!iconEye);
              }} />
              </View>
            </KeyboardAvoidingView>
            <View style={styles.buttonContainer}>
              <CustomButton
                activeOpacity={0.8}
                label={'Kaydet'}
                style={{...styles.button, ...styles.acceptButton}}
              />
              <CustomButton
                activeOpacity={0.8}
                label={'İptal'}
                style={{...styles.button, ...styles.rejectButton}}
              />
            </View>
          </ScrollView>
        </View>
      </View>
    </View>
  );
}

export default SecuritySetting;
