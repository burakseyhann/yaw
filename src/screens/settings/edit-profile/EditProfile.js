import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  TextInput,
  KeyboardAvoidingView,
  Platform,
  Keyboard,
  TouchableWithoutFeedback
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome5';
import styles from './style';
import {Colors} from '../../../shared/Styles/Color';
import CustomButton from '../../../shared/components/button/CustomButton';

function EditProfile(props) {
  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [mail, setMail] = useState('');
  const [choice, setChoice] = useState('');
  const [showPass, setShowPass] = useState(false);
  return (
    <SafeAreaView style={styles.mainContainer}>
       <TouchableWithoutFeedback style={{flex: 1}} onPress={Keyboard.dismiss}>
      <View style={styles.itemContainer}>
        <View style={styles.imageContainer}>
          <TouchableOpacity activeOpacity={0.6} style={styles.imageCircle}>
            <View style={{flex: 0.75, justifyContent: 'center'}}>
              <Icon
                name="user"
                size={40}
                color="#2680eb"
                style={{alignSelf: 'center'}}
              />
            </View>
            <View style={styles.imageTextContainer}>
              <Text style={styles.imagesText}>Düzenle</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.desriptorContainer}>
          <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            keyboardVerticalOffset={-100}>
            <TextInput
              placeholder={'AD:'}
              style={styles.input}
              value={name}
              onChangeText={(value) => setName(value)}
            />
            <TextInput
              placeholder={'SOYAD:'}
              style={styles.input}
              value={lastName}
              onChangeText={(value) => setLastName(value)}
            />
            <TextInput
              placeholder={'KULLANICI ADI:'}
              style={styles.input}
              value={userName}
              onChangeText={(value) => setUserName(value)}
            />
            <View
              style={{flexDirection: 'row', justifyContent: 'space-around'}}>
              <TextInput
                placeholder={'ŞİFRE:'}
                autoCorrect={false}
                secureTextEntry={showPass}
                style={{...styles.input, width: '100%'}}
                value={password}
                onChangeText={(value) => setPassword(value)}
              />
              <Icon
                name={showPass ? 'eye-slash' : 'eye'}
                size={20}
                color={showPass ? Colors.grey : Colors.blue}
                style={{position: 'absolute', right: 5, top: 10}}
                onPress={() => setShowPass(!showPass)}
              />
            </View>
            <TextInput
              placeholder={'MAİL:'}
              style={styles.input}
              value={mail}
              onChangeText={(value) => setMail(value)}
            />
            <TextInput
              placeholder={'EŞLEŞMELER:'}
              style={styles.input}
              value={choice}
              onChangeText={(value) => setChoice(value)}
            />
          </KeyboardAvoidingView>
          <View style={styles.buttonContainer}>
            <CustomButton activeOpacity={0.8} label={'Kaydet'} style={{...styles.button,...styles.acceptButton}}/>
            <CustomButton activeOpacity={0.8} label={'İptal'} style={{...styles.button,...styles.rejectButton}}/>
          </View>
        </View>
      </View>
      </TouchableWithoutFeedback>
    </SafeAreaView>
  );
}

export default EditProfile;

