import React, { Component } from 'react';
import Background from './../../shared/background';
import RestfulEndpoint from './../../core/restfull_endpoint';
import styles from './style';
import { AppRegistry, StyleSheet, Text } from 'react-native'

import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Body, Right, View } from 'native-base';
import { Card, Title, Paragraph } from 'react-native-paper';
import Chart4 from '../Chart/chart3';
// import Chart3 from '../Chart/chart3';
// import { createDrawerNavigator } from 'react-navigation-drawer';
import CustomDrawer, { DrawerContent } from '../drawer';
import { createDrawerNavigator } from '@react-navigation/drawer';
import user from '../../../user';
import CustomHeader from './../../shared/Header';
import MyComponent from './../../shared/background'


import Swiper from 'react-native-swiper'

const styles2 = StyleSheet.create({
  wrapper: {
    color:"white",
  },
  slide1: {
    marginHorizontal:100,
  },
  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold'
  }
})
export default class Home extends Component {
  constructor(props) {
    super(props);
    this.navigation = props.navigation;
    this.state = {
      totalTransactions: '',
      firstName: '',
      lastName: '',
      accepted: 0,
      rejected: 0,
      pending: 0,

    };
    this.GetTotalCheques();

  }

  GetTotalCheques = async () => {
    try {
      let { data } = await RestfulEndpoint.get(`/Cheques/GetCurrentUserAvailableChequesCount`);
      let totalTransactions = data.data;
      this.setState({ totalTransactions });
      console.log(totalTransactions);
    }
    catch (error) {
      console.log("error");
    }
    try {
      let { data } = await RestfulEndpoint.list(`/Users/GetCurrentUserInfo`);
      let { firstName, lastName } = data.data;
      this.setState({ firstName, lastName, });
      console.log(firstName, lastName);
    }
    catch (error) {
      console.log("error");
    }
    try {
      let { data } = await RestfulEndpoint.get(`/Requests/GetByCurrentUser`);
      let items = data["data"]["items"];
      console.log("items", items.length);

      let accepted = items.filter(function (item) {
        if (item.status == 2) {
          return true
        }
        else return false;
      })
      accepted = accepted.length;
      //  accepted =accepted.length;

      console.log("accepted", accepted);
      let pending = items.filter(function (item) {
        if (item.status == 1) {
          return true
        }
        else return false;
      })
      pending = pending.length;
      // pending =pending.length;

      console.log("pending", pending);

      let rejected = items.filter(function (item) {
        if (item.status == 3) {
          return true
        }
        else return false;
      })
      rejected = rejected.length
      // rejected=rejected.length;

      console.log("rejected", rejected);

      this.setState({ accepted, rejected, pending });
      console.log(accepted, rejected, pending);

    }


    catch (error) {
      console.log(error.Text);
    }
  }

  logout = () => {
    user.logout();
    this.navigation.navigate('Register');

  }


  render() {
    return (
      <Background>
        {this.state.firstName !== '' &&
          <CustomHeader lastName={this.state.lastName} firstName={this.state.firstName} />}
        <Swiper style={styles2.wrapper}  autoplay activeDotColor="white">
          <>
            {this.state.rejected > 0 &&
              <Chart4 rejected={this.state.rejected} pending={this.state.pending} accepted={this.state.accepted} />}
          </>
          <View style={styles2.slide2}>
            <Text style={styles2.text}>Account 1</Text>
          </View>
          <View style={styles2.slide3}>
            <Text style={styles2.text}>Acount2</Text>
          </View>
        </Swiper>

        <View style={styles.container}>
          <View style={styles.rect6Row}>
            <Card style={styles.rect6}>
              <Card.Content style={{ zIndex: 3 }}>
                <Title style={{ color: "white", alignSelf: "center" }}>E-Wallet</Title>
                <Paragraph style={{ color: "white", alignSelf: "center" }}>cheques | {this.state.totalTransactions} </Paragraph>
              </Card.Content>
            </Card>
            <Card style={styles.rect}>
              <Card.Content style={{ zIndex: 3 }}>
                <Title style={{ color: "white", alignSelf: "center" }}>E-Wallet</Title>
                <Paragraph style={{ color: "white", alignSelf: "center" }}>cheques | {this.state.totalTransactions} </Paragraph>
              </Card.Content>
            </Card>
          </View>
          <View style={styles.rect4StackStack}>

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
          </View>
        </View>

        {/* <View style={styles.container}>
          <View style={styles.rect6Row}>
            style={{ width: "46%", marginTop: 50, marginBottom: 10, marginHorizontal: 40, backgroundColor: "black" }}
            <View style={styles.rect6}></View>
            <View></View>
          </View>
          <View style={styles.rect4StackStack}>

            <View style={styles.rect4}></View>


            <View style={styles.rect5}>

            </View>
          </View>
        </View> */}
      </Background>


    )
  }
}
