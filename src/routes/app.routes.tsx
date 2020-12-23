import React from 'react';
import { Easing } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, CardStyleInterpolators } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
// components
import CustomDrawerContent from '../components/Menu';
// pages
import {
  Home,
  Orders,
  NewOrder,
  Account,
  ChangePassword,
  Questions
} from '../pages';
// global styles
import globalStyles from '../styles/global';

const AppStack = createStackNavigator();
const AppDrawer = createDrawerNavigator();

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

const HomeDrawer = () => {
  return (
    <AppDrawer.Navigator
      initialRouteName="Home"
      drawerContent={CustomDrawerContent}
      drawerStyle={{
        backgroundColor: globalStyles.colors.headerColor
      }}
    >
      <AppDrawer.Screen
        name="Home"
        component={Home}
        options={{
          title: "Home"
        }}
      />
      <AppDrawer.Screen
        name="Account"
        component={Account}
        options={{
          title: "Conta"
        }}
      />
      <AppDrawer.Screen
        name="ChangePassword"
        component={ChangePassword}
        options={{
          title: "Alterar Senha"
        }}
      />
      <AppDrawer.Screen
        name="Questions"
        component={Questions}
        options={{
          title: "Dúvidas"
        }}
      />
    </AppDrawer.Navigator>
  );
}

export const AppRoutes = () => {
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
        <AppStack.Screen name="HomeDrawer" component={HomeDrawer} />
        <AppStack.Screen name="Orders" component={Orders} />
        <AppStack.Screen name="NewOrder" component={NewOrder} />
      </AppStack.Navigator>
    </NavigationContainer>
  );
}
