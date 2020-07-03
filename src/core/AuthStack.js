import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeStack from './HomeStack';
import Register from '../modules/Users/components/Register/Register';
import HeaderStackNavigator from './HeaderStack';
import HomeStackNavigator from './HomeStack';

const AuthStack = createStackNavigator();

export default function AuthStackNavigator() {
    return (

        <AuthStack.Navigator initialRouteName="Register">
            <AuthStack.Screen name="Register" component={Register} />

            <AuthStack.Screen name="HomeStackNavigator" component={HomeStackNavigator} />
        </AuthStack.Navigator>
  
  
    );
}