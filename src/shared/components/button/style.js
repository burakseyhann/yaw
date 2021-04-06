import {StyleSheet,Dimensions} from 'react-native';

let isBigScreen=Dimensions.get('window').height>600;

export default StyleSheet.create({
  signInButton: {
    alignItems: 'center',
    justifyContent:'center',
    paddingVertical:isBigScreen?15:10,
  },
  text: {
    fontSize:isBigScreen?20:16,
    fontStyle: 'italic',
    color: 'white',
  },
});
