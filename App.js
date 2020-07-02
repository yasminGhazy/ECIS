
import { AppLoading } from 'expo';
import * as Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons';
import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './src/modules/Users/components/Login/Login'
import Home from '@Home/Home';
import Register from './src/modules/Users/components/Register/Register';
import { Provider as PaperProvider } from 'react-native-paper';
import MyComponent from './src/shared/navigator';

const Stack = createStackNavigator();

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
      <PaperProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Register" screenOptions={{
          headerShown: false
        }}>
          <Stack.Screen name="Register" component={Register} />
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Navigator" component={MyComponent} />

        </Stack.Navigator>
      </NavigationContainer></PaperProvider>
    );
  }
}
