import * as React from 'react';
import Home from '../../modules/Home/Home';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { MaterialCommunityIcons, AntDesign } from '@expo/vector-icons';
import { Fontisto } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import Account from '../../modules/Accounts/Accounts';
import EWallet from '../../modules/E-wallet/E-wallet';
import Beneficiary from '../../modules/Beneficiaries/Beneficiaries';
import Transaction from '../../modules/Transactions/Transactions';
import AllRequests from '../../modules/Requests/Requests';
import TestHome from '../../modules/TestHome'
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
        component={TestHome}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color }) => (
            <AntDesign name="home" size={24} color="white"  />

            
          ),
        }}
      />
        <Tab.Screen
        name="Transaction"
        component={Transaction}
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
        component={Account}
        options={{
          tabBarLabel: 'Accounts',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="view-carousel" size={24} color="white" />
          ),
        }}
      />
      <Tab.Screen
        name="Request"
        component={AllRequests}
        options={{
          tabBarLabel: 'Requests',
          tabBarIcon: ({ color }) => (
            // <MaterialIcons name="assignment-return" size={24} color="white" />
            <MaterialCommunityIcons name="file-document-edit" size={24} color="white" />
          ),
        }}
      />
            <Tab.Screen
        name="Beneficiary"
        component={Beneficiary}
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