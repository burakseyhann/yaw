import React, {useEffect, useState} from 'react';
import { Text, View } from 'react-native';
import {Picker} from '@react-native-picker/picker';
import CustomButton from '../../../shared/components/button/CustomButton'

import styles from './style';
import { Colors } from '../../../shared/Styles/Color';
function MatchesSettings({navigation}) {
    const [selectedLanguage, setSelectedLanguage] = useState('selam');
    return(
        <View style={styles.mainContainer}>
        <View style={styles.container}>
            <View style={{padding:10}}>
            <Text style={{marginBottom:15,fontSize:16,fontWeight:'bold',color:Colors.grey}}>SENİ KİMLER İLE EŞLEŞTİRELİM</Text>
        <View style={{borderWidth:1,borderColor:'black',borderRadius:50,width:'95%',alignSelf:'center',marginBottom:20,}}>
            <Picker
              selectedValue={selectedLanguage}
              onValueChange={(itemValue, itemIndex) =>
                setSelectedLanguage(itemValue)
              }

              >
              <Picker.Item label="Kadın" value="Kadın" />
              <Picker.Item label="Erkek" value="Erkek" />
              <Picker.Item label="Diğer" value="Diğer" />
            </Picker>
            </View>
           
            <CustomButton
              style={styles.signInButton}
              textStyle={{fontSize:16}}
              label="Bitti"
              onPress={() => {
                navigation.navigate('Home');
              }}
            />
             </View>
        </View>
      </View>
);}

export default MatchesSettings;
