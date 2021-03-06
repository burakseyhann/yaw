import {StyleSheet} from 'react-native';

import {Colors} from '../../shared/Styles/Color';

export default StyleSheet.create({
  mainContainer: {
    flex: 1,
    paddingVertical: 18,
    paddingHorizontal: 22,
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
    flex: 0.2,
    borderBottomWidth: 1,
    borderBottomColor: Colors.grey,
    flexDirection: 'row',
    paddingHorizontal: 16,
    paddingVertical: 25,
    alignItems: 'center',
  },
  imageContainer: {
    width: 85,
    height: 85,
    borderWidth: 1,
    borderColor: Colors.blue,
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },
  userDsc: {
    marginLeft: 25,
    paddingTop: 5,
  },
  nameText: {
    fontSize: 17,
  },
  userNameText: {
    fontSize: 15,
    marginTop: 6,
    color: Colors.grey,
  },
  mainView: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 30,
  },
  settingsOption: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  iconText: {
    fontSize: 17,
    color: Colors.blue,
    marginLeft: 8,
  },
  lineView: {
    marginTop: 20,
  },
  line: {
    marginBottom: 30,
  },
});
