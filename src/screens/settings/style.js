import {StyleSheet,Dimensions} from 'react-native';

let isBigScreen=Dimensions.get('window').height>600;

import {Colors} from '../../shared/Styles/Color';

export default StyleSheet.create({
  mainContainer: {
    flex: 1,
    paddingVertical:isBigScreen?18:15,
    paddingHorizontal:isBigScreen?22:28,
  },
  container: {
    flex: 1,
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
  headerView: {
    flex:isBigScreen?0.2:0.4,
    borderBottomWidth: 1,
    borderBottomColor: Colors.grey,
    flexDirection: 'row',
    paddingHorizontal:isBigScreen?16:10,
    paddingVertical:isBigScreen?25:16,
    alignItems: 'center',
    justifyContent:'space-between',
  },
  imageContainer: {
    width:isBigScreen?85:65,
    height:isBigScreen?85:65,
    borderWidth: 1,
    borderColor: Colors.blue,
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },
  userDsc: {
    marginRight:isBigScreen?15:13,
    paddingTop:isBigScreen?5:3,
  },
  nameText: {
    fontSize:isBigScreen?17:14,
  },
  userNameText: {
    fontSize:isBigScreen?15:13,
    marginTop:isBigScreen?6:3,
    color: Colors.grey,
  },
  mainView: {
    flex: 1,
    paddingHorizontal:isBigScreen?16:10,
    paddingTop:isBigScreen?30:10,
  },
  settingsOption: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    alignSelf:'flex-start',
  },
  iconText: {
    fontSize:isBigScreen?16:14,
    color: Colors.blue,
    marginLeft: isBigScreen?8:5,
  },
  lineView: {
    marginTop:isBigScreen?20:15,
  },
  line: {
    marginBottom:isBigScreen?30:25,
  },
});
