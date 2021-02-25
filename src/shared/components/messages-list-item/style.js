import {StyleSheet} from 'react-native';

export default StyleSheet.create({
    containerView: {
    marginHorizontal: 28,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 20,
    marginVertical: 10,
    flexDirection: 'row',
    backgroundColor:'white',
    paddingRight: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 10,
  
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
