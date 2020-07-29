import * as React from 'react';
import styles from './style';
import { Entypo } from '@expo/vector-icons';
import { Foundation } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { TouchableOpacity, ScrollView, View, StyleSheet } from 'react-native';
import { Form, Item, Input, Text, Icon, Picker } from 'native-base';
import { Button, Dialog, TextInput } from 'react-native-paper';
import RNPickerSelect from 'react-native-picker-select';
import http from '../../core/endpoint';
import axios from 'axios';
import Users from '../../core/services/Users';


export default class RegisterForm extends React.Component {
    constructor(props) {
        super(props);
        this.visible = props.visible;
        this.hideDialog = props.hideDialog;

        this.state = {
            nationalId: '',
            email: '',
            userName: '',
            phoneNumber: '',
            firstName: '',
            lastName: '',
            address: '',
            password: '',
            confirmPassword: '',
            accountNumber: '',
            currencyId: 0,
            branchId: 0,
            accountTypeId: 0,
        };
    }
    currency = () => {
        let arr = [];
        this.props.currencies.map((value, key) => {
            arr.push({ label: value.name, value: value.id })
        });
        return arr;
    }
    banks = () => {
        let arr = [];
        this.props.banks.map((value, key) => {
            arr.push({ label: value.bank.name, value: value.bank.id })
        });
        return arr;
    }
    types = () => {
        let arr = [];
        this.props.types.map((value, key) => {
            arr.push({ label: value.name, value: value.id })
        });
        return arr;
    }
    // currenciesRender = () => {

    //     return this.props.currencies.map((value, key) => {
    //         return <Picker.Item label={value.name} value={value.id} key={key} />
    //     });
    // }
    // typeRender = () => {
    //     console.log(this.props.types);

    //     return this.props.types.map((value, key) => {
    //         return <Picker.Item label={value.name} value={value.id} key={key} />
    //     });
    // }
    // setBankRender = () => {
    //     return this.props.banks.map((value, key) => {
    //         return <Picker.Item label={value.bank.name} value={value.bank.id} key={key} />

    //     });
    // }

    onRegister = async () => {

        console.log(await Users.Register({
            "nationalId": this.state.nationalId,
            "email": this.state.email,
            "userName": this.state.userName,
            "phoneNumber": this.state.phoneNumber,
            "firstName": this.state.firstName,
            "lastName": this.state.lastName,
            "address": this.state.address,
            "password": this.state.password,
            "confirmPassword": this.state.confirmPassword,
            "accountNumber": this.state.accountNumber,
            "currencyId": this.state.currencyId,
            "branchId": this.state.branchId,
            "accountTypeId": this.state.accountTypeId   
          }));
    };


    render() {
        return (
            <Dialog visible={this.props.visible} onDismiss={this.hideDialog}>
                <Dialog.ScrollArea>
                    <ScrollView >
                        <Dialog.Title style={{ color: '#FCA311' }}>Create an Account</Dialog.Title>
                        <Dialog.Content>
                            <Form  >
                                <Item style={styles.Item}>
                                    <FontAwesome name="user" size={20} color="#14203E" />
                                    <TextInput placeholder=' First Name'
                                        style={styles.input}
                                        placeholderTextColor="#E5E5E5"

                                        underlineColorAndroid='rgba(0,0,0,0)'

                                        onChangeText={(firstName) => this.setState({ firstName })}
                                    />
                                </Item >
                                <Item style={styles.Item} >
                                    <FontAwesome name="user" size={20} color="#14203E" />
                                    <Input placeholder=' Last Name'
                                        placeholderTextColor="#E5E5E5"
                                        onChangeText={(lastName) => this.setState({ lastName })}
                                    />
                                </Item>
                                <Item style={styles.Item}>
                                    <FontAwesome name="user" size={20} color="#14203E" />
                                    <Input placeholder=' User name'
                                        placeholderTextColor="#E5E5E5"
                                        onChangeText={(userName) => this.setState({ userName })}

                                    />
                                </Item>
                                <Item style={styles.Item}>
                                    <Entypo name="email" size={20} color="#14203E" />
                                    <Input placeholder=' Email'
                                        placeholderTextColor="#E5E5E5"
                                        onChangeText={(email) => this.setState({ email })}
                                    />
                                </Item>
                                <Item style={styles.Item}>
                                    <Entypo name="lock-open" size={20} color="#14203E" />
                                    <Input placeholder=' Password'
                                        placeholderTextColor="#E5E5E5"
                                        textContentType="password"
                                        secureTextEntry
                                        onChangeText={(password) => this.setState({ password })}
                                    />
                                </Item>
                                <Item style={styles.Item}>
                                    <Entypo name="lock-open" size={20} color="#14203E" />
                                    <Input placeholder=' Confirm Password'
                                        placeholderTextColor="#E5E5E5"
                                        onChangeText={(confirmPassword) => this.setState({ confirmPassword })}
                                    />
                                </Item>
                                <Item style={styles.Item}>
                                    <FontAwesome name="id-card" size={18} color="#14203E" />
                                    <Input placeholder=' National ID'
                                        placeholderTextColor="#E5E5E5"
                                        onChangeText={(nationalId) => this.setState({ nationalId })}

                                    />
                                </Item>
                                <Item style={styles.Item}>
                                    <FontAwesome5 name="mobile-alt" size={20} color="#14203E" />
                                    <Input placeholder=' Mobile Number'
                                        placeholderTextColor="#E5E5E5"
                                        onChangeText={(phoneNumber) => this.setState({ phoneNumber })}
                                    />
                                </Item>
                                <Item style={styles.Item}>
                                    <FontAwesome5 name="file-invoice" size={20} color="#14203E" />
                                    <Input placeholder=' Account Number'
                                        placeholderTextColor="#E5E5E5"
                                        onChangeText={(accountNumber) => this.setState({ accountNumber })}

                                    />
                                </Item>
                                <RNPickerSelect
                                    onValueChange={(value) => this.setState({ branchId: value })}
                                    items={this.banks()}
                                    style={{

                                        iconContainer: {
                                            top: 20,

                                        },
                                        inputIOS: {
                                            color: 'black',
                                            paddingTop: 13,
                                            paddingHorizontal: 10,
                                            paddingBottom: 12,
                                        },
                                        inputAndroid: {
                                            color: 'black',
                                        },

                                    }}
                                    Icon={() => {
                                        return <FontAwesome name="bank" size={16} color="#14203E" />


                                    }}
                                />
                                <RNPickerSelect
                                    onValueChange={(value) => this.setState({ currencyId: value })}
                                    items={this.currency()}
                                    style={{

                                        iconContainer: {
                                            top: 20,
                                        },
                                        inputIOS: {
                                            color: 'black',
                                            paddingTop: 13,
                                            paddingHorizontal: 10,
                                            paddingBottom: 12,
                                        },
                                        inputAndroid: {
                                            color: 'black',
                                        },

                                    }}
                                    Icon={() => {
                                        return <Foundation name="dollar-bill" size={20} color="#14203E" />
                                    }}
                                />
                                <RNPickerSelect
                                    onValueChange={(value) => this.setState({ accountTypeId: value })}
                                    items={this.types()}
                                    style={{
                                        iconContainer: {
                                            top: 20,
                                        },
                                        inputIOS: {
                                            color: 'black',
                                            paddingTop: 13,
                                            paddingHorizontal: 10,
                                            paddingBottom: 12,
                                        },
                                        inputAndroid: {
                                            color: 'black',
                                        },

                                    }}
                                    Icon={() => {
                                        return <FontAwesome5 name="file-invoice" size={18} color="#14203E" />
                                    }}
                                />
                           
                                <Item style={styles.Item}>
                                    <FontAwesome name="user" size={20} color="#14203E" />
                                    <Input placeholder='Address' placeholderTextColor="#E5E5E5"
                                        onChangeText={(Address) => this.setState({ Address })}
                                    />
                                </Item>

                                <TouchableOpacity >
                                    <Button transparent light bordered
                                        style={styles.Btn}
                                        onPress={this.onRegister}
                                    >
                                        <Text style={styles.color}></Text>
                                    </Button>
                                </TouchableOpacity>

                            </Form>
                        </Dialog.Content>
                        <Dialog.Actions>
                            <Button onPress={this.onRegister} style={{ color: '#FCA311' }}>Create account</Button>
                        </Dialog.Actions>
                    </ScrollView>
                </Dialog.ScrollArea>
            </Dialog>
        );
    }
}
const pickerSelectStyles = StyleSheet.create({
    inputIOS: {
        fontSize: 16,
        paddingVertical: 12,
        paddingHorizontal: 10,
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 4,
        color: 'black',
        paddingRight: 30, // to ensure the text is never behind the icon
        marginRight: 100,
    },
    inputAndroid: {

        fontSize: 16,
        paddingHorizontal: 50,
        paddingVertical: 8,
        borderWidth: 0.5,
        borderColor: 'purple',
        borderRadius: 8,
        color: 'black',
        paddingLeft: 30, // to ensure the text is never behind the icon
    },
    iconContainer: {
        top: 10,
        left: 0,

    }
});