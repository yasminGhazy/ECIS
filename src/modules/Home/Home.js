import React, { Component } from 'react';
import Background from './../../shared/background';
import styles from './style';
import { AppRegistry, StyleSheet, Text, Dimensions } from 'react-native'
import { Body, Right, View } from 'native-base';
import { Card, Title, Paragraph, DataTable } from 'react-native-paper';
import Chart4 from '../Chart/chart3';
import CustomHeader from './../../shared/Header';
import Swiper from 'react-native-swiper'
import Cheques from '../../core/services/Cheques';
import Users from '../../core/services/Users';
import Requests from '../../core/services/Requests';
import Accounts from '../../core/services/Accounts';
import SwiperFlatList from 'react-native-swiper-flatlist';
import Transactions from '../../core/services/Transactions';
import { FontAwesome, AntDesign, Entypo } from '@expo/vector-icons';
import Index from '../../Component (4)';
import UntitledComponent from '../../Component (4)/src/components/UntitledComponent';

export default class Home extends Component {
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
if(key<=2)
      return (
        <DataTable.Row key={key} style={{ paddingHorizontal: 5 }}>
          <DataTable.Cell style={{ width: 200 }}> {value.status === 0 && <FontAwesome name="warning" size={16} color="#FFD54F" style={{padding:5}}/>}
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

        <View key={value.id} style={[styles2.child, { backgroundColor: 'transparent' }]}>
          <Text style={styles2.text}>iD : {value.number}</Text>
          <Text style={styles2.text}>balance : {value.balance}</Text>
        </View>


      )
    }

    );

  }

  render() {
    return (
      // <UntitledComponent/>
      <Background>

        <CustomHeader navigation={this.navigation} />
        {this.Chart()}
        {!this.state.isLoading && <>
          <Swiper style={{ flexShrink: 0 }} autoplay activeDotColor="white">

            {/* {this.Chart()} */}
            {this.Accounts()}
          </Swiper>

          <View style={styles.container}>

           
                <DataTable>
                  <DataTable.Header style={{ padding:0}}>
                    <DataTable.Title  style={{ width: 500 }} width='200'> <Text style={{ color: "white" ,width:"40%"}}>From</Text></DataTable.Title>
                    <DataTable.Title > <Text style={{ color: "white" ,width:"40%"}}>To</Text></DataTable.Title>
                    <DataTable.Title > <Text style={{ color: "white" ,width:"20%"}}>Amount</Text></DataTable.Title>

                  </DataTable.Header>

                  {!this.state.isLoading && this.transactions()}


                </DataTable>
          



            {/* <View style={styles.rect4StackStack}>

              <Card style={styles.rect4}>
                <Card.Content style={{ zIndex: 3 }}>
                  <Title style={{ color: "white", alignSelf: "center" }}>E-Wallet</Title>
                  <Paragraph style={{ color: "white", alignSelf: "center" }}>cheques | {this.state.totalTransactions} </Paragraph>
                </Card.Content>
              </Card>

              <Card style={styles.rect5}>
                <Card.Content style={{ zIndex: 3 }}>
                  <Title style={{ color: "white", alignSelf: "center" }}>E-Wallet</Title>
                  <Paragraph style={{ color: "white", alignSelf: "center" }}>cheques | {this.state.totalTransactions} </Paragraph>
                </Card.Content>
              </Card>
            </View> */}
          </View>
        </>}
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
  }
});

