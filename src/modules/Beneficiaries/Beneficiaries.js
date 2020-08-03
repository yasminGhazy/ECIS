import * as  React from 'react';
import CustomHeader from '../../Shared/Header/Header';
import Background from '../../Shared/background';
import { StyleSheet, Text, ScrollView, TouchableOpacity, NetInfo } from 'react-native';
import { Card, Paragraph, Dialog, Button, Portal, Snackbar, HelperText } from 'react-native-paper';
import { FontAwesome, AntDesign, Entypo } from '@expo/vector-icons';
import Beneficiaries from '../../core/services/Beneficiaries';
import { Item, Input } from 'native-base';
import Fab from '../../Shared/FAB/Fab';
import styles from './BeneficiaryStyle';
import CustomDialog from '../../Shared/Dialog/CustomDialog';
import NetworkUtils from './../../core/NetworkUtils '
import BaseComponent from '../../core/BaseComponent';
import Is from '@flk/supportive-is';
import { onChange } from 'react-native-reanimated';

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
            connectionStatus: ' Loading your Data .......',
            validation: {
                email: null,
                valid: null
            }
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

            this.setState({ isLoading: false });
        }
        else this.setState({ connectionStatus: 'check your connections and try again' })

    }
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
                                    this.componentDidMount()
                                }}>Approve</Button>
                                <Button color="#FCA311" onPress={async () => {
                                    let req = this.state.request[key]
                                    req.status = 3;
                                    console.log(await Beneficiaries.RespondToBeneficiaryRequest(req));
                                    this.componentDidMount()

                                }} >Reject</Button>

                            </Card.Actions>
                        </Card.Content>
                    </Card>

                )
            });
    }
    addAccount = async () => {
        let data = await Beneficiaries.AddBeneficiary(this.state.email);
        let validation= this.state.validation
        if (data.succeeded)
        validation.valid="Request sent successfully"
            
        else
            
            validation.valid=data.errors[0] 

            this.setState({ validation,  })
        // this.setState({ addMsg: await Beneficiaries.AddBeneficiary(this.state.email) });
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
                                        onChangeText={(email) => { this.setState({ email }) }}
                                        onChange={(value) => this.validateEmail(value)}
                                    />
                                </Item>
                                {this.state.validation.email != null &&
                                    <HelperText type="error" visible style={{color:"white"}}>
                                        {this.state.validation.email}
                                    </HelperText>
                                }
                                {this.state.validation.valid != null &&
                                    <HelperText type="info" visible style={{color:"white"}}>
                                        {this.state.validation.valid}
                                    </HelperText>
                                }
                                <TouchableOpacity onPress={this.addAccount}>
                                    <Button transparent bordered
                                        style={{ color: "white" }}

                                    >
                                        <Text style={{ color: "white" }}> add</Text>
                                    </Button>
                                </TouchableOpacity>
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
