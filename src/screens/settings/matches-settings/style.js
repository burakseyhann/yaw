import {StyleSheet,Dimensions} from 'react-native';

let isBigScreen=Dimensions.get('window').height>600;

import {Colors} from '../../../shared/Styles/Color';

export default StyleSheet.create({
    mainContainer: {
        flex: 1,
        paddingVertical:isBigScreen?18:15,
        paddingHorizontal:isBigScreen?22:28,
      },
      container: {
     
        backgroundColor: 'white',
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
      signInButton:{
        marginRight:10,
        borderRadius: 10,
        backgroundColor: '#2680eb',
        width:'20%',
        alignSelf:'flex-end',
        height:40
      },
});