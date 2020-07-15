import * as React from 'react';
import { Entypo } from '@expo/vector-icons';
import { Foundation } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { TouchableOpacity, ScrollView, View, StyleSheet } from 'react-native';
import { Form, Item, Input, Text, Icon, Picker } from 'native-base';
import { Button, Dialog, TextInput } from 'react-native-paper';
import RNPickerSelect from 'react-native-picker-select';

import Accounts from '../../core/services/Accounts';
// const BankAccount {
//     id: number,
//     number: string,
//     balance: number,
//     currency: Currency,
//     fk_CurrencyId: number,
//     creationDate: Date,
//     availableChequesCount: number,
//     status: RequestStatus,
//     requestDate: Date,
//     responseDate: Date,
//     accountType: BankAccountType,
//     user: User,
//     bank: Bank,
//     branch: Branch,
// }


export default class AddAccount extends React.Component {
    constructor(props) {
        super(props);
        this.visible = props.visible;
        this.hideDialog = props.hideDialog;

        this.state = {
            account: {
                
            }
        };
    }

    currency = () => {
        let arr = [];
        this.props.currencies.map((value, key) => {
            arr.push({ label: value.name, value: value })
        });
        return arr;
    }
    banks = () => {
        let arr = [];
        this.props.banks.map((value, key) => {
            arr.push({ label: value.bank.name, value: value })
            console.log(value)
        });
        return arr;
    }
    types = () => {
        let arr = [];
        this.props.types.map((value, key) => {
            arr.push({ label: value.name, value: value })
        });
        return arr;
    }

    addAccount = async () => {
        console.log(await Accounts.AddBankAccount({
           
            "Number": this.state.accountNumber,
            "fk_CurrencyId": this.state.currencyId,
            "branchId": this.state.branchId,
            "accountTypeId": this.state.accountTypeId
        }));
    };

    render() {
        return (
            <Dialog visible={this.props.visible} onDismiss={this.hideDialog}>
                <Dialog.ScrollArea>
                    <ScrollView >
                        <Dialog.Title style={{ color: '#FCA311' }}>Add new bank account</Dialog.Title>
                        <Dialog.Content>
                            <Form>

                                <Item style={styles.Item} >
                                    <FontAwesome name="user" size={20} color="#14203E" />
                                    <Input placeholder=' Account Number'
                                        placeholderTextColor="#E5E5E5"
                                        onChangeText={(accountNumber) => this.setState({ accountNumber })}
                                    />
                                </Item>
                                <Item style={styles.Item}>
                                    <FontAwesome name="user" size={20} color="#14203E" />
                                    <Input placeholder=' Account Opening Date'
                                        placeholderTextColor="#E5E5E5"
                                        onChangeText={(date) => this.setState({ date })}

                                    />
                                </Item>

                                <RNPickerSelect
                                    onValueChange={(value) => this.setState({ branchId: value })}
                                    items={this.banks()}
                                    style={{

                                        iconContainer: {
                                            top: 20,

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
                                        styles,
                                        iconContainer: {
                                            top: 20,

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

                                    }}
                                    Icon={() => {
                                        return <FontAwesome5 name="file-invoice" size={18} color="#14203E" />
                                    }}
                                />


                                <TouchableOpacity >
                                    <Button transparent light bordered
                                        style={styles.Btn}
                                        onPress={this.addAccount}
                                    >
                                        <Text style={styles.color}></Text>
                                    </Button>
                                </TouchableOpacity>

                            </Form>
                        </Dialog.Content>
                        <Dialog.Actions>
                            <Button onPress={this.onRegister} style={{ color: '#FCA311' }}>Create</Button>
                        </Dialog.Actions>
                    </ScrollView>
                </Dialog.ScrollArea>

            </Dialog>

        );
    }
}
const styles = StyleSheet.create({
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

    },

    color: {
        color: "black"
    },

    Btn: {
        alignSelf: 'center',

    },
    input: {
        color: "black",
        alignSelf: 'center',
        backgroundColor: "white"

    },
    Item: {
        marginLeft: 0,
    }
});
