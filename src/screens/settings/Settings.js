import React from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import { Colors } from '../../shared/Styles/Color';

function Settings({navigation}) {
  return (
    <SafeAreaView style={styles.mainContainer}>
      <View style={styles.container}>
      <View style={styles.headerView}>
       <View style={styles.imageContainer}>
        
       </View>
       <View style={styles.userDsc}>
        <Text>
         Deniz Ay
        </Text>
        <Text>
         @de.nizay
        </Text>
       </View>
      </View>
      <View style={styles.mainView}>

      </View>
      </View>
      
    </SafeAreaView>
  );
}

export default Settings;
const styles=StyleSheet.create({
  mainContainer:{
    flex: 1,
    paddingVertical:18,
    paddingHorizontal:22,
  },
  container:{
    flex: 1,
    backgroundColor:'white',
    borderWidth:1,
    borderColor:Colors.grey,
    borderRadius:30,
    shadowColor: "#000",
shadowOffset: {
	width: 0,
	height: 5,
},
shadowOpacity: 0.34,
shadowRadius: 6.27,

elevation: 10,
overflow:'hidden'

  },
  headerView:{
   flex:0.20,
   backgroundColor:'red',
   borderBottomWidth:1,
   borderBottomColor:Colors.grey,
   flexDirection:'row',
   paddingHorizontal:16,
   paddingVertical:25,
  alignItems:'center',

  },
  imageContainer:{
    backgroundColor:'yellow',
   width:90,
   height:90,
   borderWidth:1,
   borderRadius:100, 
  },
  userDsc:{
    marginLeft:25,
  
    backgroundColor:'green'
  },
  mainView:{
    flex:1,
    backgroundColor:'blue',

 
  },

});