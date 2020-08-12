import React from 'react';
import { Easing } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, CardStyleInterpolators } from '@react-navigation/stack';
// pages
import { SignIn, SignUp, ResetPassword, Home, Orders, NewOrder } from './pages';
// global styles
import globalStyles from './styles/global';

const AppStack = createStackNavigator();

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

const Routes = () => {
  return (
    <NavigationContainer>
      <AppStack.Navigator
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
        <AppStack.Screen name="SignIn" component={SignIn} />
        <AppStack.Screen name="SignUp" component={SignUp} />
        <AppStack.Screen name="ResetPassword" component={ResetPassword} />
        <AppStack.Screen name="Home" component={Home} />
        <AppStack.Screen name="Orders" component={Orders} />
        <AppStack.Screen name="NewOrder" component={NewOrder} />
      </AppStack.Navigator>
    </NavigationContainer>
  );
}

export default Routes;
