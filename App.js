import * as React from 'react';
import { Text, View, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import Register from './src/modules/Users/components/Register/Register';
import { AppLoading } from 'expo';
import * as Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons';
import 'react-native-gesture-handler';
import Login from './src/modules/Users/components/Login/Login'
import Home from '@Home/Home';
import { DefaultTheme,Provider as PaperProvider } from 'react-native-paper';
import MyComponent from './src/shared/navigator';
import AuthStackNavigator from './src/core/AuthStack';
import user from './user';
import HomeStackNavigator from './src/core/HomeStack';
import { SafeAreaProvider } from 'react-native-safe-area-context';





const theme = {
  ...DefaultTheme,
  roundness: 2,
  colors: {
    ...DefaultTheme.colors,
    primary: '#FCA311',
    accent: '#14213D',
    background:'#14213D'
  },
};
export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isReady: false,
    };
  }

  async componentDidMount() {
    await Font.loadAsync({
      Roboto: require('native-base/Fonts/Roboto.ttf'),
      Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
      ...Ionicons.font,
    });
    this.setState({ isReady: true });
  }

  render() {
    if (!this.state.isReady) {
      return <AppLoading />;
    }
    return (
      <SafeAreaProvider>
      <PaperProvider >
        
        <NavigationContainer   headerMode="none"  >
          {user.isLoggedIn() ? <HomeStackNavigator/> :  <AuthStackNavigator/>}
         
          {/* <AuthStack.Navigator initialRouteName="Register">
            <AuthStack.Screen name="HomeScreen" component={HomeScreen} />
          </AuthStack.Navigator> */}
        </NavigationContainer>
      </PaperProvider>
</SafeAreaProvider>
    )
  }
}

export  function Home1() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Home1!</Text>
    </View>
  );
}
export   function Home2() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Home2!</Text>
    </View>
  );
}

export   function Home3() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Home2!</Text>
    </View>
  );
}
export function Home5({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Details Screen</Text>
      <Button
        title="Go to home"
        onPress={() => navigation.navigate('Home')}
      />
    </View>
  );
}

export function Home6({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Details Screen</Text>
      <Button
        title="Go to home"
        onPress={() => navigation.navigate('Home')}
      />
    </View>
  );
}
export function Home4({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Details Screen</Text>
      <Button
        title="Go to home"
        onPress={() => navigation.navigate('Home')}
      />
    </View>
  );
}