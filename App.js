import React from 'react';
import {
  Text,
  View,
  TextInput,
  SafeAreaView,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import LinearGradient from 'react-native-linear-gradient';

function App() {
  return (
    //colors={['rgba(65,29,108)','rgba(198, 166, 236)']}
    <SafeAreaView style={{flex: 1}}>
      <LinearGradient  colors={['#4c669f', '#3b5998', '#192f6a']} >
        <View style={styles.headerContainer}>
          <View>
            <Text>lsakdljsajkda</Text>
          </View>
        </View>
      </LinearGradient>
      <View style={styles.mainContainer}>
        <TextInput />
        <TextInput />
        <TouchableOpacity></TouchableOpacity>
        <Icon />
        <TouchableOpacity></TouchableOpacity>
        <TouchableOpacity></TouchableOpacity>
      </View>
      <View style={styles.footerContainer}>
        <TouchableOpacity>
          <Text>asdfadad</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
export default App;
const styles = StyleSheet.create({
  headerContainer: {
    backgroundColor: 'red',
    flex: 2,
  },
  mainContainer: {
    backgroundColor: 'grey',
    flex: 4,
  },
  footerContainer: {
    flex: 1,
    backgroundColor: 'blue',
  },
});
