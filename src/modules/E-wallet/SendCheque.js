import * as React from 'react';
import { Foundation } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { TouchableOpacity, ScrollView } from 'react-native';
import { Form, Item, Input, Text } from 'native-base';
import { Button, Dialog } from 'react-native-paper';
import RNPickerSelect from 'react-native-picker-select';
import styles from './EwalletStyle';

export default class SendCheque extends React.Component {
    constructor(props) {
        super(props);
        this.visible = props.visible;
        this.hideDialog = props.hideDialog;
        console.log("send", this.visible)
        this.state = {
            account: {

            }
        };
    }

    // currency = () => {
    //     let arr = [];
    //     this.props.currencies.map((value, key) => {
    //         arr.push({ label: value.name, value: value })
    //     });
    //     return arr;
    // }

    SendCheque = async () => {
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
                                    // items={this.banks()}
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
                                    // items={this.currency()}
                                    style={{
                                        styles,
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
                                    // items={this.types()}
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


                                <TouchableOpacity >
                                    <Button transparent light bordered
                                        style={styles.Btn}
                                        onPress={this.SendCheque}
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