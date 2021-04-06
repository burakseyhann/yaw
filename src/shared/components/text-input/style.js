import {StyleSheet,Dimensions} from 'react-native';

let isBigScreen=Dimensions.get('window').height>600

export default StyleSheet.create({
  textInput: {
    flexDirection: 'row',
    alignItems:'center',
    height:isBigScreen?60:44,
    backgroundColor: 'white',
    borderRadius: 20,
    paddingVertical:isBigScreen?3:0,
    paddingHorizontal:16,
    marginBottom: isBigScreen?17:8,
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
    right:10,
  },
});
