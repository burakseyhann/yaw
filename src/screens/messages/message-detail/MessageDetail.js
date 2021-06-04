import React from 'react';
// import { Header } from 'react-navigation-stack';
import { useHeaderHeight } from '@react-navigation/stack';

import {Text, View,TextInput,KeyboardAvoidingView, SafeAreaView,Dimensions,Platform} from 'react-native';
import { log } from 'react-native-reanimated';
const {height,width}=Dimensions.get('window');
function MessageDetail  ({navigation}){
  const headerHeight = useHeaderHeight();
 console.log('yükseklik',headerHeight)

  return (

  <View>
    <View style={{backgroundColor:'red',height:height*0.7}}></View>
    <KeyboardAvoidingView behavior={ 'padding' } keyboardVerticalOffset={-headerHeight+20} >
    <View style={{backgroundColor:'yellow',height:height*0.1}}>
   
      <TextInput placeholder='mesaj'/>
      
    </View>
    </KeyboardAvoidingView>
   
  </View>
 
);}

export default MessageDetail;
