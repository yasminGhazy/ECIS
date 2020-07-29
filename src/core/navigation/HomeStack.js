import * as React from 'react';
import Account from '../../modules/Accounts/Accounts';
import EWallet from '../../modules/E-wallet/E-wallet';
import Beneficiary from '../../modules/Beneficiaries/Beneficiaries';
import Transaction from '../../modules/Transactions/Transactions';
import AllRequests from '../../modules/Requests/Requests';
import Home from '../../modules/Home/Home'
import { createStackNavigator } from '@react-navigation/stack';
import Notify from '../../modules/Notifications/Notifications';

const HomeStack = createStackNavigator();

export default function HomeStackNavigator() {
    return (
      <HomeStack.Navigator initialRouteName="Home" screenOptions={{
        headerShown: false
      }}>
      <HomeStack.Screen name="Home" component={Home} />
      <HomeStack.Screen name="Transaction" component={Transaction} />
      <HomeStack.Screen name="Beneficiary" component={Beneficiary} />
      <HomeStack.Screen name="Requests" component={AllRequests} />
      <HomeStack.Screen name="EWallet" component={EWallet} />
      <HomeStack.Screen name="Accounts" component={Account} />
      <HomeStack.Screen name="Notification" component={Notify} />
     
    
    </HomeStack.Navigator>
  
  
    );
  }
