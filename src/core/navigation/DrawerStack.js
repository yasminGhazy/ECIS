import * as React from 'react';
import HomeStackNavigator from './HomeStack';
import Login from '../../modules/Login/Login';
import DrawerContent from '../../modules/drawer';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { useWindowDimensions } from 'react-native';

const Drawer = createDrawerNavigator();

export default function DrawerStack() {
  const dimensions = useWindowDimensions();
  const isLargeScreen = dimensions.width >= 568;

  return (

    <Drawer.Navigator
      drawerContent={props => <DrawerContent {...props} />}
      openByDefault={false}
      drawerType={isLargeScreen ? 'permanent' : 'back'}
      drawerStyle={isLargeScreen ? null : { width: '70%', }}
      drawerPosition="right"
      overlayColor="transparent"
      initialRouteName="Home"
    >
      <Drawer.Screen
        name="Home"
        component={HomeStackNavigator}
        options={{ drawerLabel: 'Home' }}
      />
      <Drawer.Screen
        name="Logout"
        component={Login}
        options={{ drawerLabel: 'Logout' }}
      />

    </Drawer.Navigator>

  );
}
