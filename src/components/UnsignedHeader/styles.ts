import { StyleSheet } from 'react-native';
import Constant from 'expo-constants';

const styles = StyleSheet.create({
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
});

export default styles;
