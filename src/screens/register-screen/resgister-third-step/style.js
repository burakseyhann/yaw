import {StyleSheet } from 'react-native';

import {Colors} from '../../../shared/Styles/Color'
export default StyleSheet.create({
    container: {
      flex: 1,
    },
    headerContainer: {
      flex: 1.5,
      borderBottomLeftRadius: 40,
      borderBottomRightRadius: 40,
      alignItems: 'center', //horizontal
      justifyContent: 'center', //vertical
    },
    mainContainer: {
      backgroundColor: Colors.white,
      paddingHorizontal: 23,
      paddingVertical: 33,
      flex: 3,
    },
    signInButton:{
      borderRadius: 10,
      backgroundColor: '#2680eb',
      width:'20%',
      alignSelf:'flex-end',
      height:40
    },
  });