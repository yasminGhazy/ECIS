import React, { Component } from 'react';
import CustomHeader from '../../shared/Header';
import Background from '../../shared/background';
import Swiper from 'react-native-swiper';
import { StyleSheet, Dimensions, Text, View, ScrollView } from 'react-native';
import { Card, Title, Paragraph, FAB } from 'react-native-paper';
import { FontAwesome, AntDesign, Entypo } from '@expo/vector-icons';
import Cheques from '../../core/services/Cheques';
import Transactions from '../../core/services/Transactions';


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

            isLoading: true
        };
    }

    async componentDidMount() {
        this.setState({ allTransactions: await Transactions.GetByCurrentUser() })
        console.log("transactions", this.state.allTransactions)
        this.setState({ isLoading: false });
    }
    transactions = () => {
        return this.state.allTransactions.map((value, key) => {

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
                <CustomHeader />

                <ScrollView style={{ marginTop: 20 }}>
                    {!this.state.isLoading && this.transactions()}

                </ScrollView>

                <View style={{ margin: 20 }}>

                    <Text style={{ color: "white" }}>
                        <FontAwesome name="warning" size={16} color="#FFD54F" /> Pending
                 </Text>
                    <Text style={{ color: "white" }}>
                        {/* <AntDesign name="warning" size={16} color="#FFD54F" />  */}
                        <Entypo name="block" size={14} color="#E57373" /> Failed
                 </Text>
                    <Text style={{ color: "white" }}>
                        <AntDesign name="exclamationcircle" size={14} color="#81C784" style={{ margin: 10 }} /> Succeeded
                 </Text>
                </View>
            </Background>
        );
    }
}
