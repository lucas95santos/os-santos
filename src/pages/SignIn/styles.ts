import { StyleSheet, Dimensions } from 'react-native';
import Constant from 'expo-constants';

const styles = StyleSheet.create({
  scrollView: {
    flex: 1
  },
  container: {
    flex: 1,
    height: Dimensions.get('window').height + 30,
    paddingTop: 40 + Constant.statusBarHeight,
    padding: 32,
    alignItems: 'center'
  },
  form: {
    flex: 1,
    width: '100%',
    marginTop: 64
  },
  formInput: {
    marginBottom: 32,
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
