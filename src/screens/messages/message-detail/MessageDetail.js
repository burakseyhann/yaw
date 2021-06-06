import React, {useEffect, useState} from 'react';
import {Text, View,TextInput,KeyboardAvoidingView, SafeAreaView,Dimensions,Platform} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import LinearGradient from 'react-native-linear-gradient';
import { Colors } from '../../../shared/Styles/Color';



const {height,width}=Dimensions.get('window');
function MessageDetail  ({navigation}){
  const [messages,setMessages]=useState('');
  const [Fmessages,setFMessages]=useState('');
  return (

  <View style={{flex:1}}>
   <View style={{flex:0.9,padding:10}}>
 {    <View style={{
   opacity:Fmessages?1:0,
  minHeight:50,
  backgroundColor:'white',
  padding:10,
  borderRadius:10,
  borderBottomRightRadius:0, 
  borderColor: '#d1cccc',
  borderWidth: 1,
  shadowColor: '#000',
  shadowOffset: {
    width: 0,
    height: 2,
  },
  shadowOpacity: 0.25,
  shadowRadius: 3.84,
  elevation: 10,}}>
       <Text>{Fmessages}</Text>
     </View>}
   </View>
   <LinearGradient
      colors={[Colors.main, Colors.second]} style={{flex:0.1,justifyContent:'center'}}>
     
     <View style={{height:50,flexDirection:'row',justifyContent:'space-between'}}>
      
     <TextInput value={messages} onChangeText={(input)=>setMessages(input)} style={{height:'100%',padding:10,width:'93%',borderWidth:1,borderRadius:50,borderColor:'white',}}/>
     <Icon name={'ios-send-sharp'} size={23} color={'rgb(253,132,163)'} onPress={()=>{setFMessages(messages)}} style={{marginTop:10}}/>
     </View>
   </LinearGradient>
    
   
  </View>
 
);}

export default MessageDetail;
