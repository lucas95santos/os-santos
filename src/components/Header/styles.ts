import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';
// global styles
import globalStyles from '../../styles/global';

const styles = StyleSheet.create({
  container: {
    flex: 0.5,
    width: '100%',
    maxHeight: 240,
    backgroundColor: globalStyles.colors.headerColor,
    paddingTop: 32 + Constants.statusBarHeight,
    paddingHorizontal: 32,
    paddingBottom: 32
  },
  headerTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  infoArea: {
    marginTop: 32
  },
  title: {
    color: '#ffffff',
    fontSize: 28,
    fontFamily: 'Poppins_600SemiBold',
    letterSpacing: 0.5
  },
  infoAreaDetails: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 4
  },
  infoAreaDetailsItem: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  detailItemText: {
    fontSize: 16,
    fontFamily: 'Poppins_300Light',
    color: '#ffffff',
    letterSpacing: 0.5,
    marginTop: 5,
    marginLeft: 8
  }
});

export default styles;
