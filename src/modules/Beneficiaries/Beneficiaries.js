import * as  React from 'react';
import CustomHeader from '../../shared/Header';
import Background from '../../shared/background';
import Swiper from 'react-native-swiper';
import { StyleSheet, Dimensions, Text, View, ScrollView, TouchableOpacity } from 'react-native';
import { Card, Title, Paragraph, FAB, Provider, Portal, Dialog, Button } from 'react-native-paper';
import { FontAwesome, AntDesign, Entypo } from '@expo/vector-icons';
import Cheques from '../../core/services/Cheques';
import Beneficiaries from '../../core/services/Beneficiaries';

import { Item, Input } from 'native-base';

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
        marginVertical: 10
    },

    text: {
        color: '#fff',
        fontSize: 30,
        fontWeight: 'bold'
    }
})

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
            isLoading: true
        };
    }
    BeneficiaryShowDialog = () => { console.log("start"); this.setState({ visible: true }) }
    BeneficiaryHideDialog = () => this.setState({ visible: false })

    AddBeneficiaryShowDialog = () => { console.log("start"); this.setState({ addVisible: true }) }
    AddBeneficiaryHideDialog = () => this.setState({ addVisible: false })

    async componentDidMount() {
        this.setState({ request: await Beneficiaries.GetUserBeneficiaryRequests() })
        this.setState({ beneficiary: await Beneficiaries.GetByCurrentUser() })
        // console.log(this.state.request[0]);
        // let test =this.state.request[0];
        // test.status = 2;
        // console.log(test);
        // console.log("test", await Beneficiaries.RespondToBeneficiaryRequest(test)) // ??

        this.setState({ isLoading: false });
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
                                <Button color="#FCA311" onPress={async()=>{
                                    let req =this.state.request[key]
                                     req.status =2 ;
                                     await Beneficiaries.RespondToBeneficiaryRequest(req);
                                }}>Approve</Button>
                                <Button color="#FCA311"  onPress={async()=>{
                                    let req =this.state.request[key]
                                     req.status =3 ;
                                    console.log( await Beneficiaries.RespondToBeneficiaryRequest(req));
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

                <MyComponent
                    BeneficiaryShowDialog={this.BeneficiaryShowDialog}
                    AddBeneficiaryShowDialog={this.AddBeneficiaryShowDialog}
                />
                <Portal>
                    {!this.state.isLoading &&
                        <>
                            <Dialog visible={this.state.visible} onDismiss={this.BeneficiaryHideDialog} style={{ backgroundColor: "transparent", margin: 0 }} >
                                <Dialog.ScrollArea>
                                    <ScrollView contentContainerStyle={{ margin: 0 }}>
                                        <ScrollView style={{ marginTop: 0 }}>
                                            {!this.state.isLoading && this.Beneficiaries()}
                                        </ScrollView>
                                    </ScrollView>
                                </Dialog.ScrollArea>
                            </Dialog>

                            <Dialog visible={this.state.addVisible} onDismiss={this.AddBeneficiaryHideDialog} style={{ backgroundColor: "transparent", margin: 0 }} >
                                <Dialog.ScrollArea>
                                    <ScrollView contentContainerStyle={{ margin: 0 }}>
                                        <Item style={styles.Item} >
                                            <FontAwesome name="user" size={20} color="#14203E" />
                                            <Input placeholder=' email'
                                                placeholderTextColor="#E5E5E5"
                                                style={{ color: "white" }}
                                                onChangeText={(email) => this.setState({ email })}
                                            />
                                        </Item>
                                        <TouchableOpacity >
                                            <Button transparent light bordered
                                                style={{ color: "white" }}
                                                onPress={this.addAccount}
                                            >
                                                <Text style={{ color: "white" }}> add</Text>
                                            </Button>
                                        </TouchableOpacity>
                                        <Text style={{ color: "white" }}> {this.state.addMsg[0]}</Text>
                                    </ScrollView>
                                </Dialog.ScrollArea>
                            </Dialog>
                        </>}
                </Portal>
            </Background>
        );
    }
}


function MyComponent(props) {

    const [state, setState] = React.useState({ open: false });
    const onStateChange = ({ open }) => setState({ open });
    const { open } = state;

    return (
        <Provider>
            <Portal>
                <FAB.Group
                    open={open}
                    icon={open ? 'calendar-today' : 'plus'}

                    actions={[
                        {
                            icon: 'email',
                            label: 'Add Beneficiary',
                            onPress: props.AddBeneficiaryShowDialog,
                        },
                        {
                            icon: 'email',
                            label: 'Your Beneficiaries',
                            onPress: props.BeneficiaryShowDialog,
                        },
                    ]}
                    onStateChange={onStateChange}
                    onPress={() => {
                        if (open) {
                            // do something if the speed dial is open
                        }
                    }}
                />
            </Portal>
        </Provider>
    );
};

