import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import type { DrawerScreenProps } from '@react-navigation/drawer';

import HomeScreen from '../pages/Homepage.screen';

// Định nghĩa type cho các navigator nếu cần
type LeftDrawerParamList = {
  Home: undefined;
};

type RightDrawerParamList = {
  LeftDrawer: undefined;
};

const LeftDrawer = createDrawerNavigator<LeftDrawerParamList>();
const RightDrawer = createDrawerNavigator<RightDrawerParamList>();

// Left Drawer
const LeftDrawerScreen: React.FC = () => (
  <LeftDrawer.Navigator screenOptions={{ drawerPosition: 'left' }}>
    <LeftDrawer.Screen name="Home" component={HomeScreen} />
  </LeftDrawer.Navigator>
);

// Right Drawer chứa Left Drawer
const RightDrawerScreen: React.FC = () => (
  <RightDrawer.Navigator
    screenOptions={{ drawerPosition: 'right', headerShown: false }}
  >
    <RightDrawer.Screen name="LeftDrawer" component={LeftDrawerScreen} />
  </RightDrawer.Navigator>
);

// App navigation
const Navigation: React.FC = () => (
  <NavigationContainer>
    <RightDrawerScreen />
  </NavigationContainer>
);

export default Navigation;
