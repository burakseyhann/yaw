import {StyleSheet, Dimensions} from 'react-native';

import  {Colors} from '../../shared/Styles/Color';

let isBigScreen = Dimensions.get('window').height > 600;
export default StyleSheet.create({
  itemContainer: {
    width: isBigScreen?'45%':'46%',
    height:isBigScreen?190:165,
    marginBottom: 15,
    borderColor:isBigScreen? '#F6F6F6':'#d1cccc',
    borderWidth: 1,
    borderRadius: 20,
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 8,
    overflow: 'hidden',
  },
  headerContainer: {
    flex:isBigScreen?0.45:0.4,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal:isBigScreen?5:10,
  },
  imageContainer: {
    width:isBigScreen?55:40,
    height:isBigScreen?55:40,
    borderWidth: 1,
    borderColor: Colors.blue,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  nameTextView: {
    marginLeft: 5,
  },
  nameText: {
    fontSize:isBigScreen?18:14,
    fontWeight: 'bold',
  },
  mainContainer: {
    flex:isBigScreen?0.55:0.7,
    paddingHorizontal:isBigScreen?0:3,
  },
  matchesText: {
    alignSelf: 'center',
    opacity: 0.5,
    fontSize:isBigScreen?14:12
  },
  messageText: {
    alignSelf: 'center',
    marginTop:3,
    fontSize:isBigScreen?14:12
  },
  messageButton: {
    color: Colors.blue,
    marginTop:isBigScreen?15:18,
    alignSelf: 'center',
    fontSize:isBigScreen?15:13
  },
});
