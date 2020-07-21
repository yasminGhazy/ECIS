import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeStackNavigator from './HomeStack';
import Login from '../../modules/Login/Login';
import DrawerScreen from '../../modules/drawer';
import DrawerStack from './DrawerStack';

const AuthStack = createStackNavigator();

export default function AuthStackNavigator() {
    return (

        <AuthStack.Navigator initialRouteName="Login" screenOptions={{
            headerShown: false
          }}>
            <AuthStack.Screen name="Login" component={Login} />

            <AuthStack.Screen name="DrawerStack" component={DrawerStack} />
        </AuthStack.Navigator>
  
  
    );
}