import React, {useState} from 'react';
import {Text, View, TextInput,ScrollView,KeyboardAvoidingView,Platform} from 'react-native';
import CustomButton from '../../../shared/components/button/CustomButton';
import styles from './style';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { Colors } from '../../../shared/Styles/Color';
function SecuritySetting({navigation}) {
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
                placeholder={'Mevcut Şİfre:'}
                style={styles.input}
                value={lastPassword}
                onChangeText={(value) => setLastPassword(value)}
              />
              <Icon name={'eye'} size={18} color={Colors.blue} style={{position:'absolute',right:0,top:13}} />
              </View>
              <View>
              <TextInput
                placeholder={'Yeni Şifre:'}
                style={styles.input}
                value={newPassword}
                onChangeText={(value) => setNewPassword(value)}
              />
             <Icon name={'eye'} size={18} color={Colors.blue} style={{position:'absolute',right:0,top:13}} />
              </View>
              <View>
              <TextInput
                placeholder={'Yeni Şifreyi Doğrula:'}
                style={styles.input}
                value={checkNewPass}
                onChangeText={(value) => setCheckNewPass(value)}
              />
            <Icon name={'eye'} size={18} color={Colors.blue} style={{position:'absolute',right:0,top:13}} />
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
