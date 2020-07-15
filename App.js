import user from './user';
import * as React from 'react';
import { AppLoading } from 'expo';
import * as Font from 'expo-font';
import 'react-native-gesture-handler';
import { Ionicons } from '@expo/vector-icons';
import HomeStackNavigator from './src/core/navigation/HomeStack';
import AuthStackNavigator from './src/core/navigation/AuthStack';
import { NavigationContainer } from '@react-navigation/native';
import { Text, View, Button, StyleSheet, Platform } from 'react-native';
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import TextHome from './src/modules/TestHome';

const style = StyleSheet.create({
  droidSafeArea: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? 25 : 0
  },
});


const theme = {
  ...DefaultTheme,
  roundness: 2,
  colors: {
    ...DefaultTheme.colors,
    primary: '#FCA311',
    accent: '#14213D',
    background: '#14213D'
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
      <PaperProvider >
        <NavigationContainer  >
          {user.isLoggedIn() ? <TextHome /> : <AuthStackNavigator />}

          {/* <AuthStack.Navigator initialRouteName="Register">
            <AuthStack.Screen name="HomeScreen" component={HomeScreen} />
          </AuthStack.Navigator> */}
        </NavigationContainer>
      </PaperProvider>
      
      )
  }
}


