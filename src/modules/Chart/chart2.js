
// import { AppLoading } from 'expo';
// import * as Font from 'expo-font';
// import { Ionicons } from '@expo/vector-icons';
// import 'react-native-gesture-handler';
// import * as React from 'react';
// import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';
// import Login from './src/modules/Users/components/Login/Login'
// import Home from '@Home/Home';
// import Register from './src/modules/Users/components/Register/Register';
// import { Provider as PaperProvider } from 'react-native-paper';
// import MyComponent from './src/shared/navigator';

// const Stack = createStackNavigator();

// export default class App extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       isReady: false,
//     };
//   }

//   async componentDidMount() {
//     await Font.loadAsync({
//       Roboto: require('native-base/Fonts/Roboto.ttf'),
//       Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
//       ...Ionicons.font,
//     });
//     this.setState({ isReady: true });
//   }

//   render() {
//     if (!this.state.isReady) {
//       return <AppLoading />;
//     }

//     return (
    
//     );
//   }
// }






// export default function Register(props) {
//   const [currencies, setCurrency] = React.useState();
//   const [banks, setBank] = React.useState();
//   const [types, settypes] = React.useState();
//   const [visible, setVisible] = React.useState(false);
//   const showDialog = () => setVisible(true);
//   const hideDialog = () => setVisible(false);

//   React.useEffect(() => {
//       // restfull_endpoint.get(`/Accounts/GetCurrencies`)
//       //     .then(({ data }) => {
//       //         setCurrency(data["data"]);
//       //          console.log(currencies);

//       //     });

//       // restfull_endpoint.get(`Accounts/GetAccountTypes`)
//       //     .then(({ data }) => {
//       //         settypes(data["data"].items);
//       //         // console.log(types);

//       //     });
//       // restfull_endpoint.get(`/Branches/GetAll`)
//       //     .then(({ data }) => {
//       //         setBank(data["data"].items);
//       //         //  console.log(banks);
//       //         // console.log(banks);
//       //     });
//      Branches.getGetAll() .then (({data})=>  { setTimeout(() => { setBank(data["data"].items,0)}0), console.log("banks",banks) } );
//      setTimeout(() => { cache.set('user', userData)}, 0);
//   },[]);
//   const currenciesRender = () => {
//       // return currencies.map((value, key) => {
//       //     return <Picker.Item label={value.name} value={value.name} key={key} />

//       // });
//   }
//   const typeRender = () => { 
//       // return types.map((value, key) => {
//       //     return <Picker.Item label={value.name} value={value.name} key={key} />

//       // });
//   }
//   const setBankRender = () => { 
//       // return banks.map((value, key) => {
//       //     return <Picker.Item label={value.bank.name} value={value.bank.name} key={key} />

//       // });
//   }

//   let newUser = {
//       nationalId: '',
//       email: '',
//       userName: '',
//       phoneNumber: '',
//       firstName: '',
//       lastName: '',
//       address: '',
//       password: '',
//       confirmPassword: '',
//       accountNumber: '',
//       currencyId: 0,
//       branchId: 0,
//       accountTypeId: 0,

//   }

//   const onRegister =  () => {
//       console.log(newUser.firstName);
//       // try {
//       //     let { data } = await restfull_endpoint.get(`/Users/Register` , {
//       //         "nationalId": "string",
//       //         "email": "user@example.com",
//       //         "userName": "string",
//       //         "phoneNumber": "string",
//       //         "firstName": "string",
//       //         "lastName": "string",
//       //         "address": "string",
//       //         "password": "string",
//       //         "confirmPassword": "string",
//       //         "accountNumber": "string",
//       //         "currencyId": 0,
//       //         "branchId": 0,
//       //         "accountTypeId": 0   
//       //     });
//       //     console.log("get", data);
//       //     hideDialog;
//       // }
//       // catch (error) {
//       //     console.log("error");
//       // }
//   };

//   return (
//       <React.Fragment>
//           <Login onRegister={showDialog} visible={visible} navigation={props.navigation} />
//           <Portal>
//               <Dialog visible={visible} onDismiss={hideDialog}>
//                   <Dialog.ScrollArea>
//                       <ScrollView >
//                           <Dialog.Title style={{ color: '#FCA311' }}>Create an Account</Dialog.Title>
//                           <Dialog.Content>
//                               <Form >

//                                   <Item style={styles.Item}>
//                                       <FontAwesome name="user" size={20} color="#14203E" />
//                                       <Input placeholder=' First Name' 
//                                              style={styles.input} 
//                                              placeholderTextColor="#E5E5E5" 
//                                              value={newUser.firstName}
//                                              onChangeText={(firstName) => newUser.firstName=firstName  }  
//                                       />
//                                   </Item >
//                                   <Item style={styles.Item} >
//                                       <FontAwesome name="user" size={20} color="#14203E" />
//                                       <Input placeholder=' Last Name' placeholderTextColor="#E5E5E5" />
//                                   </Item>
//                                   <Item style={styles.Item}>
//                                       <FontAwesome name="user" size={20} color="#14203E" />
//                                       <Input placeholder=' User name' placeholderTextColor="#E5E5E5" />
//                                   </Item>
//                                   <Item style={styles.Item}>
//                                       <Entypo name="email" size={20} color="#14203E" />
//                                       <Input placeholder=' Email' placeholderTextColor="#E5E5E5" />
//                                   </Item>
//                                   <Item style={styles.Item}>
//                                       <Entypo name="lock-open" size={20} color="#14203E" />
//                                       <Input placeholder=' Password' placeholderTextColor="#E5E5E5" />
//                                   </Item>
//                                   <Item style={styles.Item}>
//                                       <Entypo name="lock-open" size={20} color="#14203E" />
//                                       <Input placeholder=' Confirm Password' placeholderTextColor="#E5E5E5" />
//                                   </Item>
//                                   <Item style={styles.Item}>
//                                       <FontAwesome name="id-card" size={18} color="#14203E" />
//                                       <Input placeholder=' National ID' placeholderTextColor="#E5E5E5" />
//                                   </Item>
//                                   <Item style={styles.Item}>
//                                       <FontAwesome5 name="mobile-alt" size={20} color="#14203E" />
//                                       <Input placeholder=' Mobile Number' placeholderTextColor="#E5E5E5" />
//                                   </Item>
//                                   <Item style={styles.Item}>
//                                       <FontAwesome5 name="file-invoice" size={20} color="#14203E" />
//                                       <Input placeholder=' Account Number' placeholderTextColor="#E5E5E5" />
//                                   </Item>
//                                   <Item picker>
//                                       <FontAwesome name="bank" size={16} color="#14203E" />
//                                       <Picker
//                                           mode="dropdown"
//                                           iosIcon={<Icon name="arrow-down" />}
//                                           style={{ width: undefined }}
//                                           placeholder="currencies"
//                                           placeholderStyle={{ color: "#bfc6ea" }}
//                                           placeholderTextColor="#E5E5E5"
//                                       // selectedValue={state.selected2}
//                                       // onValueChange={onValueChange2.bind(}
//                                       >
//                                           {visible===true && setBankRender()}
//                                       </Picker>
//                                   </Item>
//                                   <Item picker>
//                                       <FontAwesome5 name="file-invoice" size={18} color="#14203E" />
//                                       <Picker
//                                           mode="dropdown"
//                                           iosIcon={<Icon name="arrow-down" />}
//                                           style={{ width: undefined }}
//                                           placeholder="Select Account Type"
//                                           placeholderStyle={{ color: "#E5E5E5" }}
//                                           placeholderTextColor="#E5E5E5"
//                                       // selectedValue={state.selected2}
//                                       // onValueChange={onValueChange2.bind(}
//                                       >
//                                          {visible===true && currenciesRender()}

//                                       </Picker>
//                                   </Item>
//                                   <Item picker>
//                                       <Foundation name="dollar-bill" size={20} color="#14203E" />
//                                       <Picker
//                                           mode="dropdown"
//                                           iosIcon={<Icon name="arrow-down" />}
//                                           style={{ width: undefined }}
//                                           placeholder="Select Currency"
//                                           placeholderStyle={{ color: "#E5E5E5" }}
//                                           placeholderTextColor="#E5E5E5"
//                                       // selectedValue={state.selected2}
//                                       // onValueChange={onValueChange2.bind(}
//                                       >
//                                        {visible===true && typeRender()}
//                                       </Picker>
//                                   </Item>
//                                   <Item style={styles.Item}>
//                                       <FontAwesome name="user" size={20} color="#14203E" />
//                                       <Input placeholder='Addresse' placeholderTextColor="#E5E5E5" />
//                                   </Item>

//                                   <TouchableOpacity >
//                                       <Button transparent light bordered
//                                           style={styles.Btn}
//                                       // onPress={ToRegister}
//                                       >
//                                           <Text style={styles.color}></Text>
//                                       </Button>
//                                   </TouchableOpacity>

//                               </Form>
//                           </Dialog.Content>
//                           <Dialog.Actions>
//                               <Button onPress={onRegister} style={{ color: '#FCA311' }}>Create account</Button>
//                           </Dialog.Actions>
//                       </ScrollView>
//                   </Dialog.ScrollArea>
//               </Dialog>
//           </Portal>
//       </React.Fragment>
//   )
// }
