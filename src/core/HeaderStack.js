import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeStack from './HomeStack';
import Register from '../modules/Users/components/Register/Register';
import HomeStackNavigator from './HomeStack';
import Home from '../modules/Home/Home';

const Stack = createStackNavigator();

export default function HeaderStackNavigator() {
    return (

        <Stack.Navigator initialRouteName='tab'>
            
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="tab" component={HomeStackNavigator} />

        </Stack.Navigator>
  
  
    );
}