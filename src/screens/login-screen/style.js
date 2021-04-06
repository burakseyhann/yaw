import {StyleSheet,Dimensions} from 'react-native';

import {Colors} from '../../shared/Styles/Color'

let isBigScreen=Dimensions.get('window').height>600;
export default StyleSheet.create({
  headerContainer: {
    flex: 3,
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
    alignItems: 'center', //horizontal
    justifyContent: 'center', //vertical
  },
  mainContainer: {
    backgroundColor: Colors.white,
    paddingHorizontal: 23,
    paddingVertical: 33,
    flex: 4,
  },
  footerContainer: {
    flex: 1,
    backgroundColor:Colors.white,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  linearGradient: {
    flex: 1,
  },
  visiblePassword: {
    justifyContent: 'flex-end',
    flexDirection: 'row',
    marginBottom: 7,
    alignItems: 'center',
  },
  passwordIcon: {
    marginLeft: 11,
  },
  buttonContainer: {
    paddingTop: 22,
  },
  signInButton:{
    borderRadius: 25,
    backgroundColor: '#2680eb',
    marginBottom:isBigScreen?20:14,
  },
  forgotPassword: {
    marginTop: 22,
    alignItems: 'center',
    justifyContent: 'center',

  },
  text: {
    fontSize:isBigScreen?20:16,
    fontStyle: 'italic',
    color:Colors.grey
  },
  line: {
    borderWidth: 0.8,
    borderColor: Colors.grey,
  },
  signUpText: {
    color: Colors.blue,
    fontWeight: 'bold',
    fontSize: isBigScreen?20:16,
  },
});
