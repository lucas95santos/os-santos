import { StyleSheet } from 'react-native';
import Constant from 'expo-constants';
// global styles
import globalStyles from '../../styles/global';

const styles = StyleSheet.create({
  scrollView: {
    flex: 1
  },
  container: {
    flex: 1,
    paddingTop: 40 + Constant.statusBarHeight,
    padding: 32,
  },
  form: {
    width: '100%',
    marginTop: 64
  },
  formTitle: {
    fontFamily: 'Poppins_500Medium',
    fontSize: 16,
    color: globalStyles.colors.primaryColor,
    textAlign: 'center'
  },
  formInput: {
    marginVertical: 32
  },
  formButton: {
    marginTop: 16
  },
});

export default styles;
