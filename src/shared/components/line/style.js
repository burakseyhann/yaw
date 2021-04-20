import {StyleSheet,Dimensions} from 'react-native';

let isBigScreen=Dimensions.get('window').height>600;

import { Colors } from '../../Styles/Color';
export default StyleSheet.create({
    line: {
        borderBottomWidth: 1,
        borderBottomColor: Colors.blue,
        paddingHorizontal:5,
       paddingBottom:3
      },
      descriptor:{
        fontSize:isBigScreen?15:13,
        color: Colors.grey,
      },
      description:{
        fontSize:isBigScreen?17:14,
        color:'black'
      }
});