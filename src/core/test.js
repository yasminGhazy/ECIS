import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeStack from './HomeStack';
import Register from '../modules/Users/components/Register/Register';
import HomeStackNavigator from './HomeStack';
import Home from '../modules/Home/Home';
import HeaderStackNavigator from './HeaderStack';

const Stack = createStackNavigator();

export default function StackNavigator() {
    return (

        <Stack.Navigator >
            <Stack.Screen name="Home" component={HeaderStackNavigator} />
            <Stack.Screen name="Tab" component={HomeStackNavigator} />

        </Stack.Navigator>
  
  
    );
}