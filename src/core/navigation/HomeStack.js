import * as React from 'react';
import { Home1,Home5,Home6 } from '../../../App';
import Home from '../../modules/Home/Home';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { MaterialCommunityIcons, AntDesign } from '@expo/vector-icons';
import { Fontisto } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import Accounts from '../../modules/Accounts/Accounts';
import EWallet from '../../modules/E-wallet/E-wallet';
const Tab = createMaterialBottomTabNavigator();

export default function HomeStackNavigator() {
    return (
  
      <Tab.Navigator initialRouteName="Home"
      activeColor="#f0edf6"
      inactiveColor="#3e2465"
      barStyle={{ backgroundColor: 'black' }} screenOptions={{
        headerShown: false
      }}   >
        {/* <Tab.Screen name="Home" component={Home} /> */}
       
        <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color }) => (
            <AntDesign name="home" size={24} color="white"  />

            
          ),
        }}
      />
        <Tab.Screen
        name="Home1"
        component={Home1}
        options={{
          tabBarLabel: 'Transactions',
          tabBarIcon: ({ color }) => (
            <Fontisto name="arrow-swap" size={24} color="white" />
          ),
        }}
      />
      <Tab.Screen
        name="EWallet"
        component={EWallet}
        options={{
          tabBarLabel: 'E-Wallet',
          tabBarIcon: ({ color }) => (
            <FontAwesome5 name="wallet" size={24} color="white" />
          ),
        }}
      />
       <Tab.Screen
        name="Home4"
        component={Accounts}
        options={{
          tabBarLabel: 'Accounts',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="view-carousel" size={24} color="white" />
          ),
        }}
      />
      <Tab.Screen
        name="Home5"
        component={Home5}
        options={{
          tabBarLabel: 'Requests',
          tabBarIcon: ({ color }) => (
            // <MaterialIcons name="assignment-return" size={24} color="white" />
            <MaterialCommunityIcons name="file-document-edit" size={24} color="white" />
          ),
        }}
      />
            <Tab.Screen
        name="Home6"
        component={Home6}
        options={{
          tabBarLabel: 'Beneficiary',
          tabBarIcon: ({ color }) => (
            // <MaterialIcons name="assignment-return" size={24} color="white" />
            <FontAwesome name="users" size={24} color="white" />
          ),
        }}
      />
      </Tab.Navigator>
  
    );
  }