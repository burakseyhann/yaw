import React,{useState} from 'react';
import {Text, View,Modal} from 'react-native';

import LinearGradient from 'react-native-linear-gradient';

import CustomButton from '../../shared/components/button/CustomButton';
import styles from './style';
import {Colors} from '../../shared/Styles/Color';

function Questions(props) {
  const [modalVisible, setModalVisible] = useState(true);

  return (
    <Modal visible={modalVisible} transparent={true}>
    <View style={styles.modal}>
      <View style={styles.itemContainer}>
        <View style={styles.questionContainer}>
          <Text>
            Merhaba Nasılsın??erhaba Nasılsın?erhaba Nasılsın?erhaba
            Nasılsın?erhaba Nasılsın?{' '}
          </Text>
        </View>
        <View style={styles.buttonContainer}>
          <LinearGradient
            style={styles.yesButton}
            colors={[Colors.blue, Colors.blueSecond]}>
            <CustomButton
              activeOpacity={0.7}
              style={styles.buttons}
              label={'Evet'}
              onPress={() =>setModalVisible(!modalVisible)}
            />
          </LinearGradient>
          <LinearGradient
            style={styles.noButton}
            colors={[Colors.red, Colors.redSecond]}>
            <CustomButton
              activeOpacity={0.7}
              style={styles.buttons}
              onPress={() =>setModalVisible(!modalVisible)}
              label={'Hayır'}
            />
          </LinearGradient>
        </View>
      </View>
    </View>
    </Modal>
  );
}
export default Questions;
