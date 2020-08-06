import { StyleSheet } from 'react-native';
// global styles
import globalStyles from '../../styles/global';

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  mainContent: {
    flex: 1,
    width: '100%',
    padding: 32
  },
  button: {
    width: 200,
    height: 40,
    backgroundColor: globalStyles.colors.buttonBackgroundColor
  }
});

export default styles;
