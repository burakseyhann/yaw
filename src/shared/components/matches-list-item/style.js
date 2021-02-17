import {StyleSheet} from 'react-native';

export default StyleSheet.create({
    containerView: {
    marginHorizontal: 28,
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 20,
    marginBottom: 20,
    flexDirection: 'row',
    paddingRight: 10,
    shadowColor: '#000',
    
  },
  profilePictureView: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 15,
    paddingBottom: 15,
    flex: 1,
    borderTopLeftRadius: 20,
    borderBottomLeftRadius: 20,
  },
  profilePicture: {
    width: 50,
    height: 50,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#2680eb',
    borderWidth: 1.5,
  },
  textView: {
    flex: 3.5,
    borderTopRightRadius: 20,
    borderBottomRightRadius: 20,
    paddingTop: 15,
    paddingBottom: 15,
  },
  textUsername: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  textMatch: {
    fontSize: 16,
    opacity: 0.5,
  },
});
