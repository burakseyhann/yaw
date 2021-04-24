import {StyleSheet,Dimensions} from 'react-native';
let isBigScreen=Dimensions.get('window').height>600;
export default StyleSheet.create({
  containerView:{
   flex:1,
   paddingHorizontal:isBigScreen?28:20,
   paddingVertical:isBigScreen?10:7,
  
  },

  itemContainerView: {
  borderColor: 'gray',
  borderWidth: 1,
  borderRadius: 20,
  alignItems:'center',
  height:isBigScreen?85:63,
  flexDirection: 'row',
  backgroundColor:'white',
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
  marginHorizontal:10,
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
