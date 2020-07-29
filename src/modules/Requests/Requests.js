import React, { Component } from 'react';
import Swiper from 'react-native-swiper';
import { StyleSheet, Dimensions, Text, View, ScrollView } from 'react-native';
import { Card, Title, Paragraph, FAB, Snackbar } from 'react-native-paper';
import { FontAwesome, AntDesign, Entypo } from '@expo/vector-icons';
import Cheques from '../../core/services/Cheques';
import Transactions from '../../core/services/Transactions';
import Requests from '../../core/services/Requests';
import Background from '../../Shared/background';
import Header from '../../Shared/Header/Header';
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

export default class AllRequests extends Component {
    constructor(props) {
        super(props);
        this.navigation = props.navigation;
        this.state = {
            allRequests: {},
            connectionStatus:' Loading your Data .......',

            isLoading: true
        };
    }

    async componentDidMount() {
        if (await NetworkUtils.isNetworkAvailable()) {

        this.setState({ allRequests: await Requests.GetCurrentUserInfo() })
        // console.log("transactions", this.state.allRequests.length)
        this.setState({ isLoading: false });
        }
        else this.setState({ connectionStatus: 'check your connections and try again' })

    }
    Request = () => {
        return this.state.allRequests.map((value, key) => {

            return ( 
                <Card style={styles.rect} key={key}>
                    <Card.Content style={{ zIndex: 3 }}>
                        
                        <Title style={{ color: "white", alignSelf: "center" }}>

                            {value.status === 1 && <FontAwesome name="warning" size={16} color="#FFD54F" />}
                            {value.status === 2 && <AntDesign name="exclamationcircle" size={14} color="#81C784" style={{ margin: 10 }} />}
                            {value.status === 3 && <Entypo name="block" size={14} color="#E57373" />}

                          
                        </Title>
                        <Paragraph style={{ color: "white", alignSelf: "center", fontSize: 20 }}>{`From  ${value.sender.firstName} ${value.sender.lastName}`}</Paragraph>
                        <Paragraph style={{ color: "white", alignSelf: "center", fontSize: 20 }}>{`From  ${value.requestDate} `}</Paragraph>

                           {value.type ===0 &&<Paragraph style={{ color: "white", alignSelf: "center", fontSize: 20 }}>  Add Account Request  </Paragraph>}
                           {value.type ===1 &&<Paragraph style={{ color: "white", alignSelf: "center", fontSize: 20 }}>  Add Beneficiary Request  </Paragraph>}
                           {value.type ===2 &&<Paragraph style={{ color: "white", alignSelf: "center", fontSize: 20 }}>  Send Cheque Request </Paragraph>}
                           {value.type ===3&&<Paragraph style={{ color: "white", alignSelf: "center", fontSize: 20 }}>  Cheque Book Request  </Paragraph>}


                    </Card.Content>
                </Card>

            )
        });
    }


    render() {
        return (

            <Background>
                <Header />

                <ScrollView style={{ marginTop: 20 }}>
                    {!this.state.isLoading && this.Request()}

                </ScrollView>

                <View style={{ margin: 20 }}>

                    <Text style={{ color: "white" }}>
                        <FontAwesome name="warning" size={16} color="#FFD54F" /> pending
                 </Text>
                    <Text style={{ color: "white" }}>
                        {/* <AntDesign name="warning" size={16} color="#FFD54F" />  */}
                        <Entypo name="block" size={14} color="#E57373" /> Rejected
                 </Text>
                    <Text style={{ color: "white" }}>
                        <AntDesign name="exclamationcircle" size={14} color="#81C784" style={{ margin: 10 }} /> accepted
                 </Text>
                </View>
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
