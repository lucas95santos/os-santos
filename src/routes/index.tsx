import React from 'react';
import { StatusBar } from 'react-native';
// redux
import { useSelector } from 'react-redux';
import { RootState } from '../store';
// global styles
import globalStyles from '../styles/global';
// routes
import { AppRoutes } from './app.routes';
import { AuthRoutes } from './auth.routes';

const Routes = () => {
  const signed = useSelector((state: RootState) => state.auth.signed);

  return (
    <>
      <StatusBar
        barStyle={signed ? 'light-content' : 'dark-content'}
        backgroundColor={signed ? globalStyles.colors.headerColor : globalStyles.colors.backgroundColor}
        translucent
      />
      {signed ? <AppRoutes /> : <AuthRoutes /> }
    </>
  );
}

export default Routes;
