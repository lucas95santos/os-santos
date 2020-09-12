import React from 'react';
import { Easing } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, CardStyleInterpolators } from '@react-navigation/stack';
// pages
import {
  SignIn,
  SignUp,
  ResetPassword,
  Home,
  Orders,
  NewOrder,
  Account,
  ChangePassword,
  Questions
} from '../pages';
// global styles
import globalStyles from '../styles/global';

const AuthStack = createStackNavigator();

const config: any = {
  animation: 'spring',
  config: {
    stiffness: 1000,
    damping: 500,
    mass: 3,
    overshootClamping: false,
    restDisplacementThreshold: 0.01,
    restSpeedThreshold: 0.01,
  },
};

const closeConfig: any = {
  animation: 'timing',
  config: {
    duration: 500,
    easing: Easing.linear
  },
};

export const AuthRoutes = () => {
  return (
    <NavigationContainer>
      <AuthStack.Navigator
        headerMode="none"
        initialRouteName="SignIn"
        screenOptions={{
          cardStyle: { backgroundColor: globalStyles.colors.backgroundColor },
          gestureEnabled: true,
          gestureDirection: 'horizontal',
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
          transitionSpec: {
            open: config,
            close: closeConfig
          }
        }}
      >
        <AuthStack.Screen name="SignIn" component={SignIn} />
        <AuthStack.Screen name="SignUp" component={SignUp} />
        <AuthStack.Screen name="ResetPassword" component={ResetPassword} />
      </AuthStack.Navigator>
    </NavigationContainer>
  );
}
