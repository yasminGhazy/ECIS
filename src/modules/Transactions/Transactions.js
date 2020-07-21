import React, { Component } from 'react';
import Background from '../../Shared/background';
import { StyleSheet, Dimensions, Text, View, ScrollView ,Platform } from 'react-native';
import { Card, Title, Paragraph, FAB } from 'react-native-paper';
import { FontAwesome, AntDesign, Entypo } from '@expo/vector-icons';
import Transactions from '../../core/services/Transactions';
import Chart4 from '../Chart/chart3';
import {  Tab, Tabs,TabHeading } from 'native-base';
import Header from '../../Shared/Header/Header';


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

export default class Transaction extends Component {
    constructor(props) {
        super(props);
        this.navigation = props.navigation;
        this.state = {
            allTransactions: {},
            accepted: 0,
            pending: 0,
            rejected: 0,

            isLoading: true
        };
    }

    async componentDidMount() {
        let accepted = 0;
        let pending = 0;
        let rejected = 0;
        this.setState({ allTransactions: await Transactions.GetByCurrentUser() })
        this.state.allTransactions.map((value, key) => {
            if (value.status === 1)
                accepted++;
            else if (value.status === 2)
                rejected++;
            else pending++;

        })
        this.setState({ rejected, pending, accepted });

        console.log(this.state.accepted, rejected, pending, this.state.allTransactions.length)

        this.setState({ isLoading: false });
    }
    transactions = (status) => {
        return this.state.allTransactions.map((value, key) => {
            // if (key == 0)
            //     console.log(value);
            if(value.status===status)
            return (
                <Card style={styles.rect} key={key}>
                    <Card.Content style={{ zIndex: 3 }}>
                        <Title style={{ color: "white", alignSelf: "center" }}>

                            {value.status === 0 && <FontAwesome name="warning" size={16} color="#FFD54F" />}
                            {value.status === 1 && <AntDesign name="exclamationcircle" size={14} color="#81C784" style={{ margin: 10 }} />}
                            {value.status === 2 && <Entypo name="block" size={14} color="#E57373" />}

                        </Title>
                        <Paragraph style={{ color: "white", alignSelf: "center", fontSize: 20 }}>{`From  ${value.senderAccount.user.firstName} ${value.senderAccount.user.lastName}`}</Paragraph>
                        <Paragraph style={{ color: "white", alignSelf: "center", fontSize: 20 }}>{`TO  ${value.receiverAccount.user.firstName} ${value.receiverAccount.user.lastName}`} </Paragraph>
                        <Paragraph style={{ color: "white", alignSelf: "center", fontSize: 20 }}>   {value.amount}  </Paragraph>

                    </Card.Content>
                </Card>
            )
        });
    }

    render() {
        return (
            <Background>
                <Header/>
                {!this.state.isLoading &&
                    <> 
                    { Platform.OS === 'android' &&
                        <Chart4 rejected={this.state.rejected} pending={this.state.pending} accepted={this.state.accepted} />}

                        <Tabs tabBarUnderlineStyle={{ borderBottomWidth: 6 }}>
                           
                            <Tab heading="Succeded" style={{ backgroundColor: "transparent" }} tabStyle={{ backgroundColor: "black" }} activeTabStyle={{ backgroundColor: "black" , color:"white"}}>

                                <ScrollView style={{ marginTop: 20 }}>
                                    {this.transactions(1)}
                                </ScrollView>
                            </Tab>
                            <Tab heading="Pending" style={{ backgroundColor: "transparent" }} tabStyle={{ backgroundColor: "black" }} activeTabStyle={{ backgroundColor: "black" }}>

                                <ScrollView style={{ marginTop: 20 }}>
                                    {this.transactions(0)}
                                </ScrollView>
                            </Tab>
                            <Tab heading="Failed" style={{ backgroundColor: "transparent" }} tabStyle={{ backgroundColor: "black" }} activeTabStyle={{ backgroundColor: "black" }} >

                                <ScrollView style={{ marginTop: 20 }}>
                                    {this.transactions(2)}
                                </ScrollView>
                            </Tab>
                        </Tabs>
                    </>
                }
            </Background>
        );
    }
}
