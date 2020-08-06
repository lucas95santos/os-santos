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
    padding: 32,
    paddingTop: 24
  },
  sortBy: {
    fontFamily: 'Poppins_600SemiBold',
    fontSize: 16,
    color: globalStyles.colors.primaryColor
  },
  allOrders: {
    height: '100%',
    paddingTop: 16,
  },
  allOrdersItem: {
    height: 48,
    borderBottomWidth: 1,
    borderBottomColor: '#DDDDDD',
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  allOrdersItemText: {
    color: '#999999',
    fontSize: 15,
    fontFamily: 'Poppins_400Regular',
    letterSpacing: 0.5
  },
  allOrdersItemDateText: {
    textAlign: 'right',
    color: '#999999',
    fontSize: 11,
    fontFamily: 'Poppins_300Light',
    letterSpacing: 0.5
  }
});

export default styles;
