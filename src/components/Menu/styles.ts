import { StyleSheet, Dimensions } from 'react-native';
import Constants from 'expo-constants';
// global styles
import globalStyles from '../../styles/global';

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    zIndex: 999,
    width: Dimensions.get("window").width * 0.75,
    height: '100%',
    paddingTop: 32 + Constants.statusBarHeight,
    padding: 32,
    backgroundColor: globalStyles.colors.headerColor,
    shadowColor: "#000",
    shadowOffset: {
      width: 5,
      height: 0,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 15,
  },
  menuTop: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  menuTopText: {
    fontFamily: 'Poppins_600SemiBold',
    fontSize: 20,
    textTransform: 'uppercase',
    color: '#ffffff',
    marginBottom: -4
  },
  menuOptions: {
    flex: 1,
    width: '100%',
    paddingTop: 48
  },
  menuItem: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 32
  },
  menuItemText: {
    fontFamily: 'Poppins_500Medium',
    fontSize: 16,
    textTransform: 'uppercase',
    color: '#ffffff',
    marginLeft: 16,
    marginBottom: -4
  },
  menuBottom: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center'
  },
  menuOpen: {
    opacity: 1,
    backfaceVisibility: 'visible'
  },
  menuClose: {
    opacity: 0,
    backfaceVisibility: 'hidden'
  }
});

export default styles;
