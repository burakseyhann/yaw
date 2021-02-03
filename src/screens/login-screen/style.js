import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  headerContainer: {
    flex: 3,
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
    alignItems: 'center', //horizontal
    justifyContent: 'center', //vertical
  },
  mainContainer: {
    backgroundColor: 'white',
    paddingHorizontal: 23,
    paddingVertical: 33,
    flex: 4,
  },
  footerContainer: {
    flex: 1,
    backgroundColor: 'white',
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
  forgotPassword: {
    marginTop: 22,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 20,
    fontStyle: 'italic',
    color: 'grey',
  },
  line: {
    borderWidth: 0.8,
    borderColor: 'grey',
  },
  signUpText: {
    color: '#2680eb',
    fontWeight: 'bold',
    fontSize: 20,
  },
});
