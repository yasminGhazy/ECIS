import React, { Component } from 'react';
import Header from '../../Shared/Header/Header';
import Background from '../../Shared/background';
import Swiper from 'react-native-swiper';
import { StyleSheet, Dimensions, View, ScrollView, YellowBox } from 'react-native';
import { Card, Title, Paragraph, FAB, Portal, Snackbar } from 'react-native-paper';
import { FontAwesome, AntDesign, Entypo } from '@expo/vector-icons';
import Cheques from '../../core/services/Cheques';
import { Button, Form, Item, Input, Text } from 'native-base';
import { TouchableOpacity } from 'react-native-gesture-handler';
import CustomDialog from '../../Shared/Dialog/CustomDialog';
import RNPickerSelect from 'react-native-picker-select';
import Accounts from '../../core/services/Accounts';
import Beneficiaries from '../../core/services/Beneficiaries';
import BaseComponent from '../../core/BaseComponent';
import NetworkUtils from '../../core/NetworkUtils ';


const styles = StyleSheet.create({
    wrapper: { marginBottom: 50 },
    slide: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'transparent'
    },
    fab: {
        position: 'absolute',
        backgroundColor: "green",
        margin: 30,
        right: 0,
        bottom: 0,
    },
    rect: {
        height: 180,
        backgroundColor: "black",
        opacity: 0.7,
        borderRadius: 30,
        marginHorizontal: 40,
        marginVertical: 10
    },

    text: {
        color: '#fff',
        fontSize: 30,
        fontWeight: 'bold'
    }
})

export default class EWallet extends React.Component {
    constructor(props) {
        super(props);
        this.navigation = props.navigation;
        this.state = {
            fk_SenderId: '',
            fk_ReceiverId: '',
            fk_SenderAccountId: 0,
            dueDate: '',
            amount: '',
            micr: null,
            received: {},
            sent: {},
            Cheque: {},
            accountNumber: {},
            beneficiaryName: {},
            isLoading: true,
            visible: false,
            userID: '',
            showDate:false,
            connectionStatus:' Loading your Data .......',

        };
       
    }
   
    showDialog = () => {  this.setState({ visible: true }) }
    hideDialog = () => this.setState({ visible: false })
    showDatepicker = () => this.setState({showDate:true});
     
   onChangeDatePicker = (selectedDate) => {
    let currentDate = selectedDate || date;
    this.setState({dueDate:currentDate})
  };   
    async componentDidMount() {
        if (await NetworkUtils.isNetworkAvailable()) {
         this.setState({ accountNumber: await Accounts.GetByCurrentUser(2) })
        this.setState({ received: await Cheques.GetReceivedChequesByCurrentUser() })
        this.setState({ sent: await Cheques.GetSentChequesByCurrentUser() })
        this.setState({ beneficiaryName: await Beneficiaries.GetByCurrentUser() })
        this.setState({ isLoading: false });
        }
        else this.setState({ connectionStatus: 'check your connections and try again' })

    }
    ReceivedCheques = () => {
        return this.state.received.map((value, key) => {

            return (
                <Card style={styles.rect} key={key}>
                    <Card.Content style={{ zIndex: 3 }}>
                        <Title style={{ color: "white", alignSelf: "center" }}>

                            {value.status === 2 && <AntDesign name="exclamationcircle" size={14} color="#81C784" style={{ margin: 10 }} />}
                            {value.status === 3 && <FontAwesome name="warning" size={16} color="#FFD54F" />}

                        </Title>
                        {/* <Subheading style={{ color: "white", fontSize: 20 }}> hey</Subheading> */}
                        <Paragraph style={{ color: "white", alignSelf: "center", fontSize: 20 }}>{`from  ${value.sender.firstName} ${value.sender.lastName}`} </Paragraph>
                        <Paragraph style={{ color: "white", alignSelf: "center", fontSize: 20 }}>   {value.amount}  </Paragraph>
                        <Paragraph style={{ color: "white", alignSelf: "center", fontSize: 20 }}>reply Date :{value.replyDate}  </Paragraph>
                        {/* <Paragraph style={{ color: "white", alignSelf: "center", fontSize: 20 }}>due Date  :{value.dueDate}  </Paragraph>
                        <Paragraph style={{ color: "white", alignSelf: "center", fontSize: 20 }}>send Date :{value.sendDate}  </Paragraph> */}
                    </Card.Content>
                </Card>

            )
        });
    }
    SentCheques = () => {

        return this.state.sent.map((value, key) => {

            return (
                <Card style={styles.rect} key={key}>
                    <Card.Content style={{ zIndex: 3 }}>
                        <Title style={{ color: "white", alignSelf: "center" }}>

                            {value.status === 2 && <AntDesign name="exclamationcircle" size={14} color="#81C784" style={{ margin: 10 }} />}
                            {value.status === 1 && <FontAwesome name="warning" size={16} color="#FFD54F" />}
                            {value.status === 3 && <Entypo name="block" size={14} color="#E57373" />}
                        </Title>
                        {/* <Subheading style={{ color: "white", fontSize: 20 }}> hey</Subheading> */}
                        <Paragraph style={{ color: "white", alignSelf: "center", fontSize: 20 }}>{`to  ${value.receiver.firstName} ${value.receiver.lastName}`} </Paragraph>
                        <Paragraph style={{ color: "white", alignSelf: "center", fontSize: 20 }}>   {value.amount}  </Paragraph>
                        <Paragraph style={{ color: "white", alignSelf: "center", fontSize: 20 }}>reply Date :{value.sendDate}  </Paragraph>
                        {/* <Paragraph style={{ color: "white", alignSelf: "center", fontSize: 20 }}>due Date  :{value.dueDate}  </Paragraph>
                        <Paragraph style={{ color: "white", alignSelf: "center", fontSize: 20 }}>send Date :{value.sendDate}  </Paragraph> */}
                    </Card.Content>
                </Card>

            )
        });
    }

    accounts = () => {
        let arr = [];

        this.state.accountNumber.map((value, key) => {

            arr.push({ label: value.number, value: value.id })

        });

        return arr;
    }
    beneficiaryNames = () => {
        let arr = [];

        this.state.beneficiaryName.map((value, key) => {
            arr.push({ label: `${value.firstName} ${value.lastName}`, value: value.id })
            // console.log(value)

        });

        return arr;
    }
    SendCheque = async () => {
        this.setState({ Cheque: await Cheques.GetChequeToSend(this.state.fk_SenderAccountId) })
        console.log(this.state.Cheque)
        let Cheque = this.state.Cheque
        Cheque.fk_ReceiverId = this.state.fk_ReceiverId
        Cheque.fk_SenderAccountId = this.state.fk_SenderAccountId
        Cheque.dueDate = "2020-07-22"
        Cheque.amount = Number(this.state.amount)
        console.log(await Cheques.SendNewCheque(Cheque))
    }
    render() {
        return (
            <Background>
                <Header />

                <Swiper style={styles.wrapper} activeDotColor="white" >

                    <View style={styles.slide}>
                        <Text style={styles.text}>Recieved Cheques</Text>
                        <ScrollView style={{ marginTop: 20 }}>
                            {!this.state.isLoading && this.ReceivedCheques()}

                        </ScrollView>
                    </View>
                    <View style={styles.slide}>
                        <Text style={styles.text}>Send Cheques</Text>
                        <ScrollView style={{ marginTop: 20 }}>
                            {!this.state.isLoading && this.SentCheques()}

                        </ScrollView>
                    </View>

                </Swiper>
                <TouchableOpacity style={{ alignItems: "center" }}  onPress={this.showDialog}>
                    <Button transparent light bordered
                        style={{ margin: 30, justifyContent: "center", width: "60%" }}
                      
                    >
                        <Text style={{ color: "white" }}>Send Cheque</Text>
                    </Button>
                </TouchableOpacity>
                {
                    !this.state.isLoading &&

                    <CustomDialog visible={this.state.visible} onDismiss={this.hideDialog} color="white">
                        <Form>

                            <RNPickerSelect
                                onValueChange={(value) => this.setState({ fk_SenderAccountId: value })}
                                items={this.accounts()}
                                placeholder={{
                                    label: 'Select Account number...',

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

                            />
                            <RNPickerSelect

                                onValueChange={(value) => this.setState({ fk_ReceiverId: value })}
                                items={this.beneficiaryNames()}
                                placeholder={{
                                    label: 'Select Beneficiary...',

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
                            />

                            <Item style={styles.Item} >
                                <Input placeholder='Amout'
                                    placeholderTextColor="#E5E5E5"
                                    onChangeText={(amount) => this.setState({ amount })}
                                    keyboardType='numeric'
                                />
                            </Item>
                         
                            <TouchableOpacity style={{ justifyContent: "center",alignContent:'center' }}  onPress={this.SendCheque}>
                                <Button transparent light bordered
                                    style={{ margin: 40 ,color:'black' }}
                                  
                                >
                                    <Text >Send</Text>
                                </Button>
                            </TouchableOpacity>

                        </Form>
                    </CustomDialog>
                }
                   <Snackbar
                    visible={this.state.isLoading}
                // onDismiss={onDismissSnackBar}
                >
                     {this.state.connectionStatus}
                </Snackbar>
            </Background>


        );
    }
}
