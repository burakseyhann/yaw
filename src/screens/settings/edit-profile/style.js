import {StyleSheet,Dimensions} from 'react-native';

import {Colors} from '../../../shared/Styles/Color';

let isBigScreen=Dimensions.get('window').height>600;
export default StyleSheet.create({
  mainContainer: {
    flex: 1,
    paddingVertical:isBigScreen?18:15,
    paddingHorizontal:isBigScreen?22:28,
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
    flex:isBigScreen?0.25:0.4,
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomWidth: 2,
    borderBottomColor: Colors.grey,
  },
  imageCircle: {
    width:isBigScreen?100:75,
    height:isBigScreen?100:75,
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
    fontSize:isBigScreen?15:11
  },
  desriptorContainer: {
    flex: 0.75,
    paddingHorizontal:isBigScreen?16:10,
    paddingTop:isBigScreen?20:10,
  },
  input: {
    marginBottom:isBigScreen?10:6,
    borderBottomWidth: 1,
    borderBottomColor: Colors.blue,
    paddingHorizontal:5,
    paddingBottom:isBigScreen?5:2
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
