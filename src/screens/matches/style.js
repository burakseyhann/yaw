import {StyleSheet,Dimensions} from 'react-native';
let isBigScreen=Dimensions.get('window').height>600;
export default StyleSheet.create({
  containerView: {
    marginHorizontal:isBigScreen?28:20,
    backgroundColor:'white',
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 20,
    alignItems:'center',
    height:isBigScreen?85:63,
    marginVertical:isBigScreen?10:7,
    flexDirection: 'row',
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
    paddingTop:isBigScreen?15:0,
    paddingBottom:isBigScreen?15:0,
    flex: 1,
    borderTopLeftRadius: 20,
    borderBottomLeftRadius: 20,
  },
  profilePicture: {
    width:isBigScreen?60:45,
    height: isBigScreen?60:45,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#2680eb',
    borderWidth: 1.5,
  },
  textView: {
    flex: 3.5,
    justifyContent:'center',
    borderTopRightRadius: 20,
    borderBottomRightRadius: 20,
    paddingTop: 15,
    paddingBottom: 15,
  },
  textUsername: {
    fontSize:isBigScreen?20:14,
    fontWeight: 'bold',
  },
  textMatch: {
    fontSize:isBigScreen?17:13,
    opacity: 0.5,
  },
});