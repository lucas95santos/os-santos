import { StyleSheet } from 'react-native';
// global styles
import globalStyles from '../../styles/global';

interface StyleProps {

}

const styles = (props: StyleProps) => StyleSheet.create({
  containerInput: {
  },
  input: {
    width: '100%',
    height: 48,
    backgroundColor: globalStyles.colors.inputBackgroundColor,
    color: globalStyles.colors.inputTextColor,
    fontFamily: 'Poppins_400Regular',
    fontSize: 18,
    borderRadius: 8,
    borderWidth: 2,
    borderColor: globalStyles.colors.inputBorderColor,
    paddingHorizontal: 16
  },
  inputFocus: {
    borderColor: globalStyles.colors.inputBorderColorFocus
  },
  inputError: {
    borderColor: globalStyles.colors.dangerColor,
  },
  errorContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconError: {
    fontSize: 18,
    color: globalStyles.colors.dangerColor,
    marginTop: 2
  },
  errorText: {
    color: globalStyles.colors.dangerColor,
    marginTop: 8,
    marginLeft: 8,
    fontFamily: 'Poppins_400Regular',
    fontSize: 14
  }
});

export default styles;
