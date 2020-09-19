import { StyleSheet } from 'react-native';
import Constant from 'expo-constants';

const styles = StyleSheet.create({
  scrollView: {
    flex: 1
  },
  container: {
    flex: 1,
    paddingTop: 40 + Constant.statusBarHeight,
    padding: 32,
  },
  topArea: {
    position: 'relative',
    alignItems: 'center'
  },
  back: {
    position: 'absolute',
    left: 0
  },
  form: {
    width: '100%',
    marginTop: 64
  },
  formInput: {
    marginBottom: 32
  },
  formButton: {
    marginTop: 16
  }
});

export default styles;
