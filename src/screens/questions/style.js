import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  modal: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  questionContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  buttonContainer: {
    flex: 0.3,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  yesButton: {
    borderBottomLeftRadius: 25,
    width: '50%',
  },
  noButton: {
    borderBottomRightRadius: 25,
    width: '50%',
  },
  buttons: {width: '100%', height: '100%'},
  itemContainer: {
    backgroundColor: 'white',
    width: '80%',
    height: '35%',
    borderRadius: 25,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 7,
  },
});
