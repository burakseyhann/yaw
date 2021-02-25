import {StyleSheet} from 'react-native';
import { Colors } from '../../Styles/Color';
export default StyleSheet.create({
    line: {
        borderBottomWidth: 1,
        borderBottomColor: Colors.blue,
        paddingHorizontal:5,
      },
      descriptor:{
        fontSize:16,
        color: Colors.grey,
      },
      description:{
        fontSize:17,
        color:'black'
      }
});