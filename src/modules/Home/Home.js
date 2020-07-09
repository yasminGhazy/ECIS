import React, { Component } from 'react';
import Background from './../../shared/background';
import styles from './style';
import { AppRegistry, StyleSheet, Text, Dimensions } from 'react-native'
import { Body, Right, View } from 'native-base';
import { Card, Title, Paragraph } from 'react-native-paper';
import Chart4 from '../Chart/chart3';
import CustomHeader from './../../shared/Header';
import Swiper from 'react-native-swiper'
import Cheques from '../../core/services/Cheques';
import Users from '../../core/services/Users';
import Requests from '../../core/services/Requests';
import Accounts from '../../core/services/Accounts';
import SwiperFlatList from 'react-native-swiper-flatlist';

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

    this.setState({ accounts: await Accounts.GetByCurrentUser(2) })

    //console.log("test ", this.state.accounts);
    this.setState({ isLoading: false });
  }
  Chart = () => {
    //console.log(this.state.pending)
    if (!this.state.isLoading)
      return <Chart4 rejected={this.state.rejected} pending={this.state.pending} accepted={this.state.accepted} />

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
      <Background>
    
          <CustomHeader navigation={this.navigation} />
        { !this.state.isLoading && <>
            <Swiper style={styles2.wrapper} autoplay activeDotColor="white">
            
              {this.Chart()}
              {this.Accounts()}
            </Swiper>

            {/* <View style={styles2.container}>
              <SwiperFlatList
                autoplay
                autoplayDelay={20}
                autoplayLoop
                index={2}
                showPagination
              >
                {this.Chart()}
                {this.Accounts()}

              </SwiperFlatList>
            </View> */}
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
          </>}
      </Background>

    )
  }
}

// const styles2 = StyleSheet.create({
//   wrapper: {
//     color: "white",
//   },
//   slide1: {
//     marginHorizontal: 100,
//   },
//   slide2: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   slide3: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',

//   },
//   text: {
//     color: '#fff',
//     fontSize: 30,
//     fontWeight: 'bold'
//   }
// })
export const { width, height } = Dimensions.get('window');

const styles2 = StyleSheet.create({
  container: {
    flex: 1,
zIndex:5
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