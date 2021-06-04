import React, {useState} from 'react';
import {
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
  TextInput,
  KeyboardAvoidingView,
  Platform,
  Dimensions,
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome5';
import styles from './style';
import {Colors} from '../../../shared/Styles/Color';
import CustomButton from '../../../shared/components/button/CustomButton';

let isBigScreen = Dimensions.get('window').height > 600;
function EditProfile(props) {
  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [userName, setUserName] = useState('');
  const [mail, setMail] = useState('');

  return (
    <SafeAreaView style={styles.mainContainer}>
      <View style={styles.itemContainer}>
        <View style={styles.imageContainer}>
          <TouchableOpacity activeOpacity={0.6} style={styles.imageCircle}>
            <View style={{flex: 0.75, justifyContent: 'center'}}>
              <Icon
                name="user"
                size={isBigScreen ? 40 : 30}
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
              placeholder={'Ad:'}
              style={styles.input}
              value={name}
              onChangeText={(value) => setName(value)}
            />
            <TextInput
              placeholder={'soyad:'}
              style={styles.input}
              value={lastName}
              onChangeText={(value) => setLastName(value)}
            />
            <TextInput
              placeholder={'Kullanıcı Adı:'}
              style={styles.input}
              value={userName}
              onChangeText={(value) => setUserName(value)}
            />
            <TextInput
              placeholder={'mail:'}
              style={styles.input}
              value={mail}
              onChangeText={(value) => setMail(value)}
            />
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
        </View>
      </View>
    </SafeAreaView>
  );
}

export default EditProfile;
