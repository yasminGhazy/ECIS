import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, Dimensions } from 'react-native'
import { Body, Right, View, Button } from 'native-base';
import { Card, Title, Paragraph, DataTable } from 'react-native-paper';
import Swiper from 'react-native-swiper'

import SwiperFlatList from 'react-native-swiper-flatlist';
import { FontAwesome, AntDesign, Entypo, Fontisto, FontAwesome5, MaterialCommunityIcons } from '@expo/vector-icons';
import Cheques from '../core/services/Cheques';
import Requests from '../core/services/Requests';
import Transactions from '../core/services/Transactions';
import Accounts from '../core/services/Accounts';
import CustomHeader from '../shared/Header';
import Background from '../shared/background';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import { SafeAreaView } from 'react-navigation';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default class TestHome extends Component {
    constructor(props) {
        super(props);
        this.navigation = props.navigation;
        this.state = {
            totalTransactions: 0,
            // firstName: '',
            // lastName: '',
            accepted: 0,
            rejected: 0,
            pending: 0,
            accounts: {},
            allTransactions: {},

            isLoading: true
        };

    }
    async componentDidMount() {
        // let { firstName, lastName } = await Users.GetCurrentUserInfo()
        // this.setState({ firstName, lastName });

        this.setState({ totalTransactions: await Cheques.GetCurrentUserAvailableChequesCount() })

        let data = await Requests.GetCurrentUserInfo()
        let accepted = data.filter(function (item) {
            if (item.status == 2) return true
            else return false;
        })
        let pending = data.filter(function (item) {
            if (item.status == 1) return true
            else return false;
        })
        let rejected = data.filter(function (item) {
            if (item.status == 3) return true
            else return false;
        })
        rejected = rejected.length
        pending = pending.length;
        accepted = accepted.length;
        this.setState({ rejected, pending, accepted });
        console.log(rejected, pending, accepted)
        // 2 for only accepted account 
        this.setState({ allTransactions: await Transactions.GetByCurrentUser() })

        this.setState({ accounts: await Accounts.GetByCurrentUser(2) })

        //console.log("test ", this.state.accounts);
        this.setState({ isLoading: false });
    }
    Chart = () => {
        //console.log(this.state.pending)
        // if (!this.state.isLoading)
        //   return <Chart4 rejected={this.state.rejected} pending={this.state.pending} accepted={this.state.accepted} />

    }
    transactions = () => {
        return this.state.allTransactions.map((value, key) => {
            if (key <= 2)
                return (
                    <DataTable.Row key={key} style={{ paddingHorizontal: 5 }}>
                        <DataTable.Cell style={{ width: 200 }}> {value.status === 0 && <FontAwesome name="warning" size={16} color="#FFD54F" style={{ padding: 5 }} />}
                            {value.status === 1 && <AntDesign name="exclamationcircle" size={14} color="#81C784" style={{ margin: 10 }} />}
                            {value.status === 2 && <Entypo name="block" size={14} color="#E57373" />}
                            <Text style={{ color: "white" }}>{value.senderAccount.user.firstName} </Text></DataTable.Cell>

                        <DataTable.Cell ><Text style={{ color: "white" }}>{value.receiverAccount.user.firstName} </Text></DataTable.Cell>
                        <DataTable.Cell ><Text style={{ color: "white" }}>{value.amount}</Text></DataTable.Cell>
                    </DataTable.Row>



                    // {value.status === 0 && <FontAwesome name="warning" size={16} color="#FFD54F" />}
                    // {value.status === 1 && <AntDesign name="exclamationcircle" size={14} color="#81C784" style={{ margin: 10 }} />}
                    // {value.status === 2 && <Entypo name="block" size={14} color="#E57373" />}


                    // <Paragraph style={{ color: "white", alignSelf: "center", fontSize: 20 }}>{`From  ${value.senderAccount.user.firstName} ${value.senderAccount.user.lastName}`}</Paragraph>
                    // <Paragraph style={{ color: "white", alignSelf: "center", fontSize: 20 }}>{`TO  ${value.receiverAccount.user.firstName} ${value.receiverAccount.user.lastName}`} </Paragraph>
                    // <Paragraph style={{ color: "white", alignSelf: "center", fontSize: 20 }}>   {value.amount}  </Paragraph>



                )
        });
    }
    Accounts() {

        return this.state.accounts.map((value, key) => {
            return (

                <View style={styles.card} key={value.id}>
                    <Text style={styles2.text}>iD : {value.number}</Text>
                    <Text style={styles2.text}>balance : {value.balance}</Text>

                </View>

                // <View key={value.id} style={[styles2.child, { backgroundColor: 'transparent' }]}>

                // </View>


            )
        }

        );

    }

    render() {
        return (

            <Background>

                <CustomHeader navigation={this.navigation} />
                <MyCarousel />
                <View style={{ flexDirection: "row", justifyContent: "space-between", margin: 20 }}>
                    <TouchableOpacity >
                        <Button transparent light bordered
                            style={{ width: 100, height: 100, justifyContent: "center", borderRadius: 80 }}

                        >
                            <Fontisto name="arrow-swap" size={24} color="white" />
                            <Text style={{ color: "white" }}></Text>
                        </Button>
                    </TouchableOpacity>
                    <TouchableOpacity >
                        <Button transparent light bordered
                            style={{ width: 100, height: 100, justifyContent: "center", borderRadius: 80 }}

                        >
                            <FontAwesome5 name="wallet" size={24} color="white" />
                            <Text style={{ color: "white" }}></Text>
                        </Button>
                    </TouchableOpacity>
                    <TouchableOpacity >
                        <Button transparent light bordered
                            style={{ width: 100, height: 100, justifyContent: "center", borderRadius: 80 }}

                        >
                            <MaterialCommunityIcons name="view-carousel" size={24} color="white" />
                            <Text style={{ color: "white" }}></Text>
                        </Button>
                    </TouchableOpacity>
                </View>
                <View style={{ flexDirection: "row", justifyContent: "space-between", margin: 20 }}>
                    <TouchableOpacity >
                        <Button transparent light bordered
                            style={{ width: 100, height: 100, justifyContent: "center", borderRadius: 80 }}

                        >
                            <Fontisto name="arrow-swap" size={24} color="white" />
                            <Text style={{ color: "white" }}></Text>
                        </Button>
                    </TouchableOpacity>
                    <TouchableOpacity >
                        <Button transparent light bordered
                            style={{ width: 100, height: 100, justifyContent: "center", borderRadius: 80 }}

                        >
                            <MaterialCommunityIcons name="file-document-edit" size={24} color="white" />

                            <Text style={{ color: "white" }}></Text>
                        </Button>
                    </TouchableOpacity>
                    <TouchableOpacity >
                        <Button transparent light bordered
                            style={{ width: 100, height: 100, justifyContent: "center", borderRadius: 80 }}

                        >
                            <FontAwesome name="users" size={24} color="white" />

                            <Text style={{ color: "white" }}></Text>
                        </Button>
                    </TouchableOpacity>
                </View>
            </Background>

        )
    }
}

export const { width, height } = Dimensions.get('window');

const styles2 = StyleSheet.create({
    container: {
        flex: 1,
        zIndex: 5
    },
    child: {
        height: height * .3,
        width,
        justifyContent: 'center'
    },
    text: {

        textAlign: 'center',
        color: "white"
    },

});

const styles = StyleSheet.create({
    card: {
        display: "flex",
        justifyContent: "center",
        alignContent: "center",
        alignSelf: "center",
        borderRadius: 17,

        borderColor: "#fff",
        width: 270,
        height: 140,
        padding: 20

    },

});


class MyCarousel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeIndex: 0,
            carouselItems: [
                {
                    title: "Payroll",
                    text: "XXXX-XXXX-XXXX-1234",
                    text1: "1000 LE",
                },
                {
                    title: "Payroll",
                    text: "XXXX-XXXX-XXXX-5678",
                    text1: "1000 LE",
                },
                {
                    title: "Payroll",
                    text: "XXXX-XXXX-XXXX-8965",
                    text1: "1000 LE",
                },
            ]
        }
    }
    _renderItem = ({ item, index }) => {
        return (


            <View style={styles.card}>
                <Text style={{ fontSize: 30, color: "#fff", opacity: 1 }}>{item.title}</Text>
                <Text style={{ color: "#fff" }}>{item.text} </Text>
                <Text style={{ color: "#fff" }}>{item.text1}</Text>
            </View>

        );
    }

    get pagination() {
        const { carouselItems, activeIndex } = this.state;
        return (
            <Pagination
                dotsLength={carouselItems.length}
                activeDotIndex={activeIndex}
                containerStyle={{ display: "flex", backgroundColor: 'transparent' }}
                dotStyle={{
                    width: 10,
                    height: 10,
                    borderRadius: 5,
                    marginHorizontal: 8,
                    backgroundColor: 'rgba(255, 255, 255, 0.92)'
                }}
                inactiveDotStyle={{
                    // Define styles for inactive dots here
                }}
                inactiveDotOpacity={0.4}
                inactiveDotScale={0.6}
            />
        );
    }
    render() {
        return (

            <View >
                <Carousel
                    containerCustomStyle={{ alignSelf: "center", marginTop: 30, }}

                    ref={ref => this.carousel = ref}
                    data={this.state.carouselItems}
                    sliderWidth={700}
                    itemWidth={700}
                    itemHeight={300}
                    renderItem={this._renderItem}
                    autoplay
                    loop
                    inactiveSlideScale={0.2}
                    autoplayInterval={4000}
                    onSnapToItem={index => this.setState({ activeIndex: index })}
                    layout={'default'}
                    layoutCardOffset={0.5}
                />
                {this.pagination}

            </View>

        );
    }
}