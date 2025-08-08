import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import CustomDrawer from '../layouts/CustomDrawer';

import ProfileScreen from '../features/user/screens/UserProfile';
import CommunityScreen from '../features/user/screens/CommunityScreen';
import AboutScreen from '../features/user/screens/AboutScreen';

import SettingsScreen from '../features/user/screens/UserSetting';
import SupportScreen from '../features/user/screens/UserSupport';
import HomeScreen from './Home';
import COLORS from '../shared/constants/colors';

const Drawer = createDrawerNavigator();

const App = () => {
  return (
    <NavigationContainer

    >
      <Drawer.Navigator

        drawerContent={(props) => <CustomDrawer {...props} />}
        screenOptions={{
          headerShown: true,
          headerStyle: {
            backgroundColor: COLORS.background,
          },
          drawerStyle: {
            backgroundColor: COLORS.background,
          }

        }}
      >
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="Hồ sơ cá nhân" component={ProfileScreen} />
        <Drawer.Screen name="Cộng đồng" component={CommunityScreen} />
        <Drawer.Screen name="Giới thiệu ứng dụng" component={AboutScreen} />
        <Drawer.Screen name="Cài đặt" component={SettingsScreen} />
        <Drawer.Screen name="Hỗ trợ" component={SupportScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default App;
