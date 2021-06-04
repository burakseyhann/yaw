import {StyleSheet, Dimensions} from 'react-native';

let isBigScreen = Dimensions.get('window').height > 600;

import {Colors} from '../../../shared/Styles/Color';

export default StyleSheet.create({
  mainContainer: {
    flex: 1,
    paddingVertical: isBigScreen ? 18 : 15,
    paddingHorizontal: isBigScreen ? 22 : 28,
  },
  container: {
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: Colors.grey,
    borderRadius: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,
    elevation: 10,
    overflow: 'hidden',
  },
  input: {
    width:'100%',
    marginBottom: isBigScreen ? 10 : 6,
    borderBottomWidth: 1,
    borderBottomColor: Colors.blue,
    paddingHorizontal: 5,
    paddingBottom: isBigScreen ? 5 : 2,
  },
  inputContainer: {
    paddingHorizontal: isBigScreen ? 16 : 10,
    paddingVertical: isBigScreen ? 20 : 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom:15
  },
  button: {
    borderRadius:isBigScreen?10:18,
    marginTop:isBigScreen?25:20,
    width:isBigScreen?'40%':'37%',
    height:isBigScreen?43:37
  },
  acceptButton: {
    backgroundColor: Colors.blue,
  },
  rejectButton: {
    backgroundColor: Colors.red,
  },
});
