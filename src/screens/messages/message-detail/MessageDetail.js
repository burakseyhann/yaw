import React, {useEffect} from 'react';
import {
  SafeAreaView,
  TextInput,
  View,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/Ionicons';
import {Colors} from '../../../shared/Styles/Color';

//import styles from './style';

function MessageDetail(props) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.messagesContainer}>
        <FlatList />
      </View>
      <LinearGradient
        colors={[Colors.main, Colors.second]}
        style={styles.inputContainer}>
        <View style={styles.textInputContainer}>
          <TextInput
            multiline
            maxLength={140}
            style={{borderWidth: 1, borderRadius:100,borderColor:Colors.second}}
          />
        </View>
        <View style={styles.buttonContainer}>
          <Icon name={'send-sharp'} size={30} color={Colors.white} />
        </View>
      </LinearGradient>
    </SafeAreaView>
  );
}

export default MessageDetail;
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  messagesContainer: {
    flex: 0.9,
  },
  inputContainer: {
    flex: 0.1,
    flexDirection: 'row',
  },
  textInputContainer: {
    flex: 0.9,
    padding: 10,
  },
  buttonContainer: {
    flex: 0.1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal:5
  },
});
