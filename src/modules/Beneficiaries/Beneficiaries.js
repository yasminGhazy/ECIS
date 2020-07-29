import * as  React from 'react';
import CustomHeader from '../../Shared/Header/Header';
import Background from '../../Shared/background';
import { StyleSheet, Text, ScrollView, TouchableOpacity, NetInfo } from 'react-native';
import { Card, Paragraph, Dialog, Button, Portal, Snackbar } from 'react-native-paper';
import { FontAwesome, AntDesign, Entypo } from '@expo/vector-icons';
import Beneficiaries from '../../core/services/Beneficiaries';
import { Item, Input } from 'native-base';
import Fab from '../../Shared/FAB/Fab';
import styles from './BeneficiaryStyle';
import CustomDialog from '../../Shared/Dialog/CustomDialog';
import NetworkUtils from './../../core/NetworkUtils '
import BaseComponent from '../../core/BaseComponent';

export default class Beneficiary extends React.Component {
    constructor(props) {
        super(props);
        this.navigation = props.navigation;
        this.state = {
            addMsg: "",
            email: '',
            beneficiary: {},
            request: {},
            visible: false,
            addVisible: false,
            isLoading: true,
            connectionStatus:' Loading your Data .......',
        };
    }
  
    BeneficiaryShowDialog = () => { this.setState({ visible: true }) }
    BeneficiaryHideDialog = () => this.setState({ visible: false })

    AddBeneficiaryShowDialog = () => { this.setState({ addVisible: true }) }
    AddBeneficiaryHideDialog = () => this.setState({ addVisible: false })

    async componentDidMount() {
        if (await NetworkUtils.isNetworkAvailable()) {
            this.setState({ request: await Beneficiaries.GetUserBeneficiaryRequests() })
            this.setState({ beneficiary: await Beneficiaries.GetByCurrentUser() })
            console.log(this.state.request);

            this.setState({ isLoading: false });
        }
        else this.setState({connectionStatus:'check your connections and try again'})

    }
    Beneficiaries = () => {
        return this.state.beneficiary.map((value, key) => {

            return (
                <Card style={styles.rect} key={key}>
                    <Card.Content style={{ zIndex: 3 }}>
                        <Paragraph style={{ color: "white", alignSelf: "center", fontSize: 20 }}>{` ${value.firstName} ${value.lastName}`} </Paragraph>
                        <Paragraph > </Paragraph>
                        <Paragraph style={{ color: "white", alignSelf: "center", fontSize: 16 }}>   {value.email}  </Paragraph>
                        <Paragraph style={{ color: "white", alignSelf: "center", fontSize: 16 }}>{value.phoneNumber}  </Paragraph>
                    </Card.Content>
                </Card>

            )
        });
    }

    Requests = () => {
        if (this.state.request.length == 0) return (<Card style={styles.rect} >
            <Card.Content style={{ zIndex: 3 }}>

                <Paragraph style={{ color: "white", alignSelf: "center", fontSize: 20 }}>No Requests</Paragraph>

            </Card.Content>
        </Card>)
        else
            return this.state.request.map((value, key) => {

                return (
                    <Card style={styles.rect} key={key}>
                        <Card.Content style={{ zIndex: 3 }}>

                            <Paragraph style={{ color: "white", alignSelf: "center", fontSize: 20 }}>{`To : ${value.receivedUser.firstName} ${value.receivedUser.lastName}`} </Paragraph>
                            <Paragraph > </Paragraph>
                            <Paragraph style={{ color: "white", alignSelf: "center", fontSize: 20 }}>  {`From : ${value.sentUser.firstName} ${value.sentUser.lastName}`} </Paragraph>
                            <Paragraph style={{ color: "white", alignSelf: "center", fontSize: 16 }}>{value.status == 1 && `Pending request`} {value.status == 2 && `Approved request`} {value.status == 3 && `rejected request`} </Paragraph>
                            <Card.Actions>
                                <Button color="#FCA311" onPress={async () => {
                                    let req = this.state.request[key]
                                    req.status = 2;
                                    await Beneficiaries.RespondToBeneficiaryRequest(req);
                                }}>Approve</Button>
                                <Button color="#FCA311" onPress={async () => {
                                    let req = this.state.request[key]
                                    req.status = 3;
                                    console.log(await Beneficiaries.RespondToBeneficiaryRequest(req));
                                }} >Reject</Button>

                            </Card.Actions>
                        </Card.Content>
                    </Card>

                )
            });
    }
    addAccount = async () => {
        // console.log()
        this.setState({ addMsg: await Beneficiaries.AddBeneficiary(this.state.email) });
    }
    render() {
        return (
            <Background>
                <CustomHeader />

                <ScrollView style={{ marginTop: 20 }}>
                    {!this.state.isLoading && this.Requests()}
                </ScrollView>

                <Fab
                    BeneficiaryShowDialog={this.BeneficiaryShowDialog}
                    AddBeneficiaryShowDialog={this.AddBeneficiaryShowDialog}
                />
                <Portal>
                    {!this.state.isLoading &&
                        <>
                            <CustomDialog visible={this.state.visible} onDismiss={this.BeneficiaryHideDialog}>
                                {!this.state.isLoading && this.Beneficiaries()}
                            </CustomDialog>

                            <CustomDialog visible={this.state.addVisible} onDismiss={this.AddBeneficiaryHideDialog}>
                                <Item style={styles.Item} >
                                    <FontAwesome name="user" size={20} color="#fff" />
                                    <Input placeholder=' email'
                                        placeholderTextColor="#E5E5E5"
                                        style={{ color: "white" }}
                                        onChangeText={(email) => this.setState({ email })}
                                    />
                                </Item>
                                <TouchableOpacity onPress={this.addAccount}>
                                    <Button transparent light bordered
                                        style={{ color: "white" }}

                                    >
                                        <Text style={{ color: "white" }}> add</Text>
                                    </Button>
                                </TouchableOpacity>
                                <Text style={{ color: "white" }}> {this.state.addMsg[0]}</Text>
                            </CustomDialog>

                        </>
                    }
                </Portal>
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
