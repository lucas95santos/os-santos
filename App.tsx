import React from 'react';
import { StatusBar } from 'react-native';
import { AppLoading } from 'expo';
// routes
import Routes from './src/routes';
// global styles
import globalStyles from './src/styles/global';
// fonts
import {
  Poppins_300Light,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_600SemiBold,
  useFonts
} from '@expo-google-fonts/poppins';

export default function App() {
  const [fontsLoaded] = useFonts({
    Poppins_300Light,
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_600SemiBold
  });

  if (!fontsLoaded) {
    return <AppLoading />
  }

  return (
    <>
      <StatusBar
        barStyle="light-content"
        backgroundColor={`${globalStyles.colors.headerColor}`}
        translucent
      />
      <Routes />
    </>
  );
}
