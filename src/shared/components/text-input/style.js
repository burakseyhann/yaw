import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  textInput: {
    flexDirection: 'row',
    alignItems:'center',
  
    backgroundColor: 'white',
    borderRadius: 20,
    paddingVertical: 3,
    paddingHorizontal: 16,
    marginBottom: 17,
    borderWidth: 1,
    borderColor: '#707070',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 7,
  },
  icon: {
    position: 'absolute',
    right:12,
  },
});
