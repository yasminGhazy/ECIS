import * as React from 'react';
import styles from './style';
import { Entypo } from '@expo/vector-icons';
import { Foundation } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { TouchableOpacity, ScrollView, View, StyleSheet, Platform } from 'react-native';
import { Form, Item, Input, Text, Icon, Picker } from 'native-base';
import { Button, Dialog, TextInput, HelperText, Snackbar } from 'react-native-paper';
import RNPickerSelect from 'react-native-picker-select';

import Users from '../../core/services/Users';
import Is from '@flk/supportive-is';


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
            validation: {
                email: null,
                password: null,
                valid: null,
                emptyUser: null,
                emptyFirst: null,
                emptyLast: null,
                confirmPssword: null,
                national: null,
                accountNumber: null,
                phoneNumber: null,
                info: null,
            }
        };
    }
    validatePhoneNumber = value => {
        let input = value.nativeEvent.text;

        let validation = this.state.validation;

        validation.phoneNumber = null;
        validation.valid = null;

        if (input.length != 10) {

            validation.phoneNumber = 'phone number is 10 digits'
        }
        if (!Is.numeric(input)) {
            validation.phoneNumber = 'phone number must be number'
        }

        this.setState({
            validation,
        })

    };
    validateNational = value => {
        let input = value.nativeEvent.text;

        let validation = this.state.validation;

        validation.national = null;
        validation.valid = null;

        if (input.length != 15) {

            validation.national = 'National ID is 15 digits'
        }
        if (!Is.numeric(input)) {
            validation.national = 'National ID must be number'
        }

        this.setState({
            validation,
        })

    };
    validateAccountNumber = value => {
        let input = value.nativeEvent.text;

        let validation = this.state.validation;

        validation.accountNumber = null;
        validation.valid = null;

        if (input.length != 16) {

            validation.accountNumber = 'Accoount number is 16 digits'
        }
        if (!Is.numeric(input)) {
            validation.accountNumber = 'Accoount number must be number'
        }

        this.setState({
            validation,
        })

    };
    validateConfirmPssword = value => {

        let input = value.nativeEvent.text;
        let validation = this.state.validation;
        validation.confirmPssword = null;
        validation.valid = null;

        if (input != this.state.password) {
            validation.confirmPssword = 'password mismatch'
        }

        this.setState({
            validation,
        })
    };
    validateEmptyFirst = value => {

        let input = value.nativeEvent.text;
        let validation = this.state.validation;
        validation.emptyFirst = null;
        validation.valid = null;

        if (Is.empty(input)) {
            validation.emptyFirst = 'First name is required'
        }

        this.setState({
            validation,
        })

    };
    validateEmptyLast = value => {

        let input = value.nativeEvent.text;
        let validation = this.state.validation;
        validation.emptyLast = null;
        validation.valid = null;

        if (Is.empty(input)) {
            validation.emptyLast = 'Last name is required'
        }

        this.setState({
            validation,
        })

    };
    validateEmptyUserName = value => {

        let input = value.nativeEvent.text;
        let validation = this.state.validation;
        validation.emptyUser = null;
        validation.valid = null;

        if (Is.empty(input)) {
            validation.emptyUser = 'User name is required'
        }

        this.setState({
            validation,
        })

    };
    validateEmail = value => {
        let input = value.nativeEvent.text;
        let validation = this.state.validation;
        validation.email = null;
        validation.valid = null;
        if (Is.empty(input)) {
            validation.email = 'Email address is required'
        }
        if (!Is.email(input) && !Is.empty(input)) {
            validation.email = 'Invalid Email Address'
        }

        this.setState({
            validation,
        })

    };

    validatePassword = value => {
        let input = value.nativeEvent.text;

        let validation = this.state.validation;

        validation.valid = null;
        validation.password = null;
        if (Is.empty(input)) {
            validation.password = 'Password is required'
        }
        var decimal = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;

        if (!input.match(decimal)) {
            validation.password = 'Password MUST be from 8 to 15 characters which contain at least one lowercase letter, one uppercase letter, one numeric digit, and one special character '

        }
        this.setState({
            validation,
        })

    };
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

    onRegister = async () => {
        let data = await Users.Register({
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
        })
        if (Is.array(data.errors)) {

            let validation = this.state.validation
            validation.info = null
            validation.valid = data.errors[0]
            this.setState({ validation })


            console.log(this.state.validation)
        }
        else {
            let validation = this.state.validation
            validation.valid = null
            validation.info = "Registeration done successfully"
            this.setState({ validation, })
            //  this.hideDialog()
        }
        console.log(data.succeeded)
        console.log(data.errors)
 
        console.log(data);
    };


    render() {
        return (
            <Dialog visible={this.props.visible} onDismiss={this.hideDialog} style={{ marginVertical: 80 }} >
                <Dialog.ScrollArea>
                    <ScrollView >
                        <Dialog.Title style={{ color: '#000' }}>Create account</Dialog.Title>
                        <Dialog.Content>
                            <Form  >
                                <Item style={styles.Item}>
                                    <FontAwesome name="user" size={20} color="#14203E" />

                                    <Input placeholder=' First Name'
                                        placeholderTextColor="#ADB5BD"
                                        onChangeText={(firstName) => this.setState({ firstName })}
                                        onChange={(value) => this.validateEmptyFirst(value)}

                                    />
                                </Item >
                                {this.state.validation.emptyFirst != null &&
                                    <HelperText type="error" visible>
                                        {this.state.validation.emptyFirst}
                                    </HelperText>
                                }
                                <Item style={styles.Item} >
                                    <FontAwesome name="user" size={20} color="#14203E" />
                                    <Input placeholder=' Last Name'
                                        placeholderTextColor="#ADB5BD"
                                        onChangeText={(lastName) => this.setState({ lastName })}
                                        onChange={(value) => this.validateEmptyLast(value)}

                                    />
                                </Item>
                                {this.state.validation.emptyLast != null &&
                                    <HelperText type="error" visible>
                                        {this.state.validation.emptyLast}
                                    </HelperText>
                                }
                                <Item style={styles.Item}>
                                    <FontAwesome name="user" size={20} color="#14203E" />
                                    <Input placeholder=' User name'
                                        placeholderTextColor="#ADB5BD"
                                        onChangeText={(userName) => this.setState({ userName })}
                                        onChange={(value) => this.validateEmptyUserName(value)}

                                    />
                                </Item>
                                {this.state.validation.emptyUser != null &&
                                    <HelperText type="error" visible>
                                        {this.state.validation.emptyUser}
                                    </HelperText>
                                }
                                <Item style={styles.Item}>
                                    <Entypo name="email" size={20} color="#14203E" />
                                    <Input placeholder=' Email'
                                        placeholderTextColor="#ADB5BD"
                                        onChangeText={(email) => this.setState({ email })}
                                        onChange={(value) => this.validateEmail(value)}

                                    />
                                </Item>
                                {this.state.validation.email != null &&
                                    <HelperText type="error" visible>
                                        {this.state.validation.email}
                                    </HelperText>
                                }

                                <Item style={styles.Item}>
                                    <Entypo name="lock-open" size={20} color="#14203E" />
                                    <Input placeholder=' Password'
                                        placeholderTextColor="#ADB5BD"
                                        textContentType="password"
                                        secureTextEntry
                                        onChangeText={(password) => this.setState({ password })}
                                        onChange={(value) => this.validatePassword(value)}

                                    />
                                </Item>
                                {this.state.validation.password != null &&
                                    <HelperText type="error" visible>
                                        {this.state.validation.password}
                                    </HelperText>
                                }
                                <Item style={styles.Item}>
                                    <Entypo name="lock-open" size={20} color="#14203E" />
                                    <Input placeholder=' Confirm Password'
                                        placeholderTextColor="#ADB5BD"
                                        onChangeText={(confirmPassword) => this.setState({ confirmPassword })}
                                        secureTextEntry
                                        onChange={(value) => this.validateConfirmPssword(value)}

                                    />
                                </Item>
                                {this.state.validation.confirmPssword != null &&
                                    <HelperText type="error" visible>
                                        {this.state.validation.confirmPssword}
                                    </HelperText>
                                }
                                <Item style={styles.Item}>
                                    <FontAwesome name="id-card" size={18} color="#14203E" />
                                    <Input placeholder=' National ID'
                                        placeholderTextColor="#ADB5BD"
                                        keyboardType={Platform == 'iOS' ? 'numbers-and-punctuation' : "numeric"}
                                        onChangeText={(nationalId) => this.setState({ nationalId })}
                                        onChange={(value) => this.validateNational(value)}

                                    />
                                </Item>
                                {this.state.validation.national != null &&
                                    <HelperText type="error" visible>
                                        {this.state.validation.national}
                                    </HelperText>
                                }
                                <Item style={styles.Item}>
                                    <FontAwesome5 name="mobile-alt" size={20} color="#14203E" />
                                    <Input placeholder=' Mobile Number'
                                        placeholderTextColor="#ADB5BD"
                                        keyboardType={Platform == 'iOS' ? 'numbers-and-punctuation' : "numeric"}

                                        onChangeText={(phoneNumber) => this.setState({ phoneNumber })}
                                        onChange={(value) => this.validatePhoneNumber(value)}

                                    />
                                </Item>
                                {this.state.validation.phoneNumber != null &&
                                    <HelperText type="error" visible>
                                        {this.state.validation.phoneNumber}
                                    </HelperText>
                                }
                                <Item style={styles.Item}>
                                    <FontAwesome5 name="file-invoice" size={20} color="#14203E" />
                                    <Input placeholder=' Account Number'
                                        placeholderTextColor="#ADB5BD"
                                        keyboardType={Platform == 'iOS' ? 'numbers-and-punctuation' : "numeric"}

                                        onChangeText={(accountNumber) => this.setState({ accountNumber })}
                                        onChange={(value) => this.validateAccountNumber(value)}

                                    />
                                </Item>
                                {this.state.validation.accountNumber != null &&
                                    <HelperText type="error" visible>
                                        {this.state.validation.accountNumber}
                                    </HelperText>
                                }
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
                                    <Input placeholder='Address' placeholderTextColor="#ADB5BD"
                                        onChangeText={(Address) => this.setState({ Address })}
                                    />
                                </Item>
                                {this.state.validation.valid != null &&
                                    <HelperText type="error" visible>
                                        {this.state.validation.valid}
                                    </HelperText>
                                }
                           
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
                        {this.state.validation.info != null &&
                        <Snackbar visible
                        onDismiss={()=>{ this.hideDialog()}}

                        action={{
                            label: 'Done',
                            onPress: () => {
                           
                            },
                          }}>
                            {this.state.validation.info}
                        </Snackbar>}
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