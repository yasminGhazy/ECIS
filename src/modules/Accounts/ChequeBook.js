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


export default class ChequeBook extends React.Component {
    constructor(props) {
        super(props);
        this.visible = props.visible;
        this.hideDialog = props.hideDialog;

        this.state = {
            date: '',
            accountNumber: '',
           
            numberOfPapers: 0,
        };
    }

    account = () => {
        let arr = [];
        this.props.accounts.map((value, key) => {
            if(value.status===2)
            arr.push({ label: value.number, value: value.number })
        });
        return arr;
    }
   

    RequestCheque = async () => {
        console.log(this.state.accountNumber , this.state.numberOfPapers)
        console.log(await Accounts.RequestNewChequeBook(this.state.accountNumber,this.state.numberOfPapers ));
    };

    render() {
        return (
            <Dialog visible={this.props.visible} onDismiss={this.hideDialog}>
                <Dialog.ScrollArea>
                    <ScrollView >
                        <Dialog.Title style={{ color: '#FCA311' }}>Add new bank account</Dialog.Title>
                        <Dialog.Content>
                            <Form>

                                <RNPickerSelect
                                    onValueChange={(accountNumber) => this.setState({ accountNumber })}
                                    items={this.account()}
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
                                    placeholder={{
                                        label: 'Select account number...',

                                    }}
                                    Icon={() => {
                                        return <Foundation name="dollar-bill" size={20} color="#14203E" />
                                    }}
                                />
                                <RNPickerSelect
                                    onValueChange={(numberOfPapers) => this.setState({ numberOfPapers })}
                                    items={[
                                        { label: '12', value: '12' },
                                        { label: '24', value: '24' },
                                        { label: '48', value: '48' },
                                    ]}
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
                                    placeholder={{
                                        label: 'Select cheque pags number...',

                                    }}
                                />

                                <TouchableOpacity onPress={this.RequestCheque}>
                                    <Button transparent light bordered
                                        style={styles.Btn}
                                        
                                    >
                                        <Text style={styles.color}></Text>
                                    </Button>
                                </TouchableOpacity>

                            </Form>
                        </Dialog.Content>
                        <Dialog.Actions>
                            <Button onPress={this.RequestCheque} style={{ color: '#FCA311' }}>Create</Button>
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
