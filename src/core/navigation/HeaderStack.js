import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeStack from './HomeStack';
import Register from '../modules/Users/components/Register/Register';
import HomeStackNavigator from './HomeStack';
import Home from '../../modules/Home/Home';
import Login from '../../modules/Login/Login';
import AuthStackNavigator from './AuthStack';
import  Notifications  from '../../modules/Notifications/Notifications';

const Stack = createStackNavigator();
const ModalStack = createStackNavigator();

export default function HeaderStackNavigator() {
    return (

        <Stack.Navigator initialRouteName='tab'>

            <Stack.Screen
                name="Main"
                component={HomeStackNavigator}
                options={{ headerShown: false }}
            />
            
            <Stack.Screen name="MyModal" component={ModalStackScreen} />

        </Stack.Navigator>

    );
}
function ModalStackScreen() {
    return (
      <ModalStack.Navigator>
        <ModalStack.Screen name="Logout" component={AuthStackNavigator} />
        <StaModalStackck.Screen name="Notification" component={Notifications} />
      </ModalStack.Navigator>
    );
  }
  