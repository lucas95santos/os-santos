import { StyleSheet } from 'react-native';
// global styles
import globalStyles from '../../styles/global';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  mainContent: {
    flex: 1,
    width: '100%',
    padding: 32
  },
  titleArea: {
    borderLeftWidth: 4,
    borderLeftColor: globalStyles.colors.buttonBackgroundColor,
    paddingLeft: 16
  },
  title: {
    color: globalStyles.colors.titleColor,
    fontSize: 24,
    fontFamily: 'Poppins_500Medium',
    letterSpacing: 0.5,
    marginBottom: -8
  },
  lastOrders: {
    height: '100%',
    paddingTop: 16,
  },
  lastOrdersItem: {
    flex: 1,
    maxHeight: 48,
    borderBottomWidth: 1,
    borderBottomColor: '#DDDDDD',
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  lastOrdersItemText: {
    color: '#999999',
    fontSize: 15,
    fontFamily: 'Poppins_400Regular',
    letterSpacing: 0.5
  },
  lastOrdersItemDateText: {
    textAlign: 'right',
    color: '#999999',
    fontSize: 11,
    fontFamily: 'Poppins_300Light',
    letterSpacing: 0.5
  },
  ordersLink: {
    justifyContent: 'flex-start',
    marginTop: 16,
    position: 'absolute',
    bottom: 0
  },
  bottomContent: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 32
  },
  button: {
    width: 200,
    height: 40,
    backgroundColor: globalStyles.colors.buttonBackgroundColor
  }
});

export default styles;
