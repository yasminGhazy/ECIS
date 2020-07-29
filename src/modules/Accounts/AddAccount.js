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
import DateTest from '../../Shared/Form/DatePicker';
import DateTimePicker from '@react-native-community/datetimepicker';
import CustomDialog from '../../Shared/Dialog/CustomDialog';

export default class AddAccount extends React.Component {
    constructor(props) {
        super(props);
        this.visible = props.visible;
        this.hideDialog = props.hideDialog;

        this.state = {
            accountTypeId: '',
            branchId: '',
            date: new Date(),
            mode: 'date',
            show: false,
            accountNumber: '',
            fulldate: new Date(),

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
            arr.push({ label: value.bank.name, value: value })

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

            "accountType": this.state.accountTypeId,
            "fk_CurrencyId": this.state.currencyId,
            "branch": this.state.branchId,
            "bank": this.state.branchId.bank,
            "creationDate": this.state.fulldate,
            "number": this.state.accountNumber
        }));
    };

    onChange = async (event, selectedDate) => {
        this.setState({ show: false })

        let months = {
            Jan: 1,
            Feb: 2,
            Mar: 3,
            Apr: 4,
            May: 5,
            Jun: 6,
            Jul: 7,
            Aug: 8,
            Sep: 9,
            Oct: 10,
            Nov: 11,
            Dec: 12,

        };
        let currentDate = selectedDate || this.state.fulldate;
        if (Platform.OS === 'ios')
            this.setState({ show: true })

        let year = currentDate.toString().substring(11, 15);
        let month = currentDate.toString().substring(4, 7);
        let day = currentDate.toString().substring(8, 10);
        let fullDate = `${day}-${months[`${month}`]}-${year}`;
        this.setState({ fullDate });
        console.log("date", this.state.fullDate)

    };
    showMode = (currentmode) => {
        this.setState({ show: true })
        this.setState({ mode: currentmode })
    }
    showDatepicker = () => {
        this.showMode('date');
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
                                    <FontAwesome5 name="file-invoice" size={20} color="#14203E" style={{ paddingRight: 10 }} />
                                    <Input placeholder='Account Number'
                                        placeholderTextColor="#E5E5E5"
                                        onChangeText={(accountNumber) => this.setState({ accountNumber })}
                                        keyboardType="numeric"
                                    />
                                </Item>
                                <Item style={styles.Item}  >
                                    <FontAwesome name="calendar" size={20} color="#14203E" style={{ paddingRight: 10 }} onPress={this.showDatepicker} />
                                    <Input placeholder='Opening Date : dd-mm-yyyy'
                                        placeholderTextColor="#E5E5E5"
                                        value={this.state.fullDate}
                                        onChangeText={(date) => this.setState({ date })}
                                    />
                                </Item>

                                <RNPickerSelect
                                    onValueChange={(value) => this.setState({ branchId: value })}
                                    items={this.banks()}
                                    placeholder={{
                                        label: 'Select a branch...',

                                    }}
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
                                    placeholder={{
                                        label: 'Select a branch...',

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
                                    placeholder={{
                                        label: 'Select account type  ...',

                                    }}
                                />
                                {this.state.show && <>

                                    <DateTimePicker
                                        value={this.state.fulldate}
                                        mode={this.state.mode}

                                        display="calendar"
                                        onChange={this.onChange}

                                    />
                                </>
                                }

                            </Form>
                        </Dialog.Content>
                        <Dialog.Actions>
                            <Button onPress={this.addAccount} style={{ color: '#FCA311' }}>Create</Button>
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
