import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Home1, Home2, Home3,Home5, Home4,Home6 } from '../../App';
import Home from '../modules/Home/Home';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { MaterialCommunityIcons, AntDesign } from '@expo/vector-icons';
import { Fontisto } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
const Tab = createMaterialBottomTabNavigator();

export default function HomeStackNavigator() {
    return (
  
      <Tab.Navigator initialRouteName="Home"
      activeColor="#f0edf6"
      inactiveColor="#3e2465"
      barStyle={{ backgroundColor: 'black' }}>
        {/* <Tab.Screen name="Home" component={Home} /> */}
       
        <Tab.Screen
        name="Home2"
        component={Home}
        options={{
          tabBarLabel: 'Home1',
          tabBarIcon: ({ color }) => (
            <AntDesign name="home" size={24} color="white"  />

            
          ),
        }}
      />
        <Tab.Screen
        name="Home1"
        component={Home1}
        options={{
          tabBarLabel: 'Home1',
          tabBarIcon: ({ color }) => (
            <Fontisto name="arrow-swap" size={24} color="white" />
          ),
        }}
      />
      <Tab.Screen
        name="Home3"
        component={Home3}
        options={{
          tabBarLabel: 'Home1',
          tabBarIcon: ({ color }) => (
            <FontAwesome5 name="wallet" size={24} color="white" />
          ),
        }}
      />
       <Tab.Screen
        name="Home4"
        component={Home4}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="view-carousel" size={24} color="white" />
          ),
        }}
      />
      <Tab.Screen
        name="Home5"
        component={Home5}
        options={{
          tabBarLabel: 'Home',
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
          tabBarLabel: 'Home',
          tabBarIcon: ({ color }) => (
            // <MaterialIcons name="assignment-return" size={24} color="white" />
            <FontAwesome name="users" size={24} color="white" />
          ),
        }}
      />
      </Tab.Navigator>
  
    );
  }