import { StyleSheet } from 'react-native';
import Constant from 'expo-constants';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40 + Constant.statusBarHeight,
    padding: 32,
    alignItems: 'center'
  },
  form: {
    width: '100%',
    marginTop: 64
  },
  formInput: {
    marginBottom: 32
  },
  formButton: {
    marginTop: 48
  },
  signUpArea: {
    position: 'absolute',
    bottom: 32,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  signUpAreaText: {
    fontFamily: 'Poppins_300Light',
    fontSize: 16,
    color: '#999999'
  },
  signUpAreaButton: {
    marginLeft: 4
  }
});

export default styles;
