import {StyleSheet} from 'react-native';

import {Colors} from '../../../shared/Styles/Color';

export default StyleSheet.create({
  mainContainer: {
    flex: 1,
    paddingVertical: 18,
    paddingHorizontal: 22,
  },
  itemContainer: {
    flex: 1,
    backgroundColor: Colors.white,
    borderWidth: 1,
    borderColor: Colors.grey,
    borderRadius: 30,
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
  imageContainer: {
    flex: 0.25,
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomWidth: 2,
    borderBottomColor: Colors.grey,
  },
  imageCircle: {
    width: 100,
    height: 100,
    borderWidth: 1,
    borderColor: Colors.blue,
    borderRadius: 100,
    justifyContent: 'center',
    overflow: 'hidden',
    backgroundColor: 'white',
  },
  imageTextContainer: {
    flex: 0.25,
    backgroundColor: 'rgba(0,0,0,0.2)',
    alignItems: 'center',
  },
  imagesText: {
    color: Colors.blue,
  },
  desriptorContainer: {
    flex: 0.75,
    paddingHorizontal: 16,
    paddingTop: 20,
  },
  input: {
    marginBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: Colors.blue,
    paddingHorizontal: 5,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  button: {
    borderRadius: 20,
    marginTop: 25,
    width: '40%',
  },
  acceptButton: {
    backgroundColor: Colors.blue,
  },
  rejectButton: {
    backgroundColor: Colors.red,
  },
});
