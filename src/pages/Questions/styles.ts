import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  mainContent: {
    flex: 1,
    width: '100%',
    padding: 32,
    alignItems: 'center'
  },
  formInput: {
    height: 160,
    marginBottom: 24,
    paddingTop: 16,
    textAlignVertical: 'top'
  },
  formButton: {
    position: 'absolute',
    bottom: 32
  }
});

export default styles;
