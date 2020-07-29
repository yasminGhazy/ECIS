import { Text, View } from 'react-native'
import { FontAwesome, Fontisto, FontAwesome5, MaterialCommunityIcons } from '@expo/vector-icons';
import React, { Component } from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';
import * as Animatable from 'react-native-animatable';
import { Button } from 'native-base';
import { useNavigation } from '@react-navigation/native';
import { MaterialIcons } from '@expo/vector-icons';
import { Badge } from 'react-native-paper';
import Notifications from '../../core/services/Notifications';



export default class HomeButtons extends Component {
  constructor(props) {
    super(props);
    this.navigation = props.navigation;

    this.state = {
      count: '',
      isLoading: true,
      data: '',

    };
  }
  async componentDidMount() {
    this.setState({ count: await Notifications.GetUserNewNotificationsCount() })
    this.setState({ isLoading: false })

  }
  render() {
    return (
      <>
        <View style={{ flexDirection: "row", justifyContent: "space-around", margin: 20, marginTop: 100 }}>
          <TouchableOpacity onPress={() => { console.log("here"); this.navigation.push('Transaction') }}>
            <Animatable.View animation="zoomIn">
              <Button transparent light bordered
                style={{ width: 100, height: 100, justifyContent: "center", borderRadius: 80, flexDirection: "column" }}

              >
                <Fontisto name="arrow-swap" size={24} color="white" />
                <Animatable.Text animation="zoomIn">
                  <Text style={{ color: "white", fontSize: 12, textAlign: "center", alignSelf: "center" }}> Transactions</Text>
                </Animatable.Text>
              </Button>
            </Animatable.View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.navigation.push('EWallet')} >
            <Animatable.View animation="zoomIn">
              <Button transparent light bordered
                style={{ width: 100, height: 100, justifyContent: "center", borderRadius: 80, flexDirection: "column" }}


              >
                <FontAwesome5 name="wallet" size={24} color="white" />
                <Text style={{ color: "white", fontSize: 12, textAlign: "center", alignSelf: "center" }}> E-Wallet</Text>

              </Button>
            </Animatable.View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.navigation.push('Accounts')}>
            <Animatable.View animation="zoomIn"  >
              <Button transparent light bordered
                style={{ width: 100, height: 100, justifyContent: "center", borderRadius: 80, flexDirection: "column" }}


              >
                <MaterialCommunityIcons name="view-carousel" size={24} color="white" />
                <Text style={{ color: "white", fontSize: 12, textAlign: "center", alignSelf: "center" }}> Accounts</Text>
              </Button>

            </Animatable.View>
          </TouchableOpacity>
        </View>
        <View style={{ flexDirection: "row", justifyContent: "space-around", margin: 20 }}>

          <TouchableOpacity onPress={() => this.navigation.push('Requests')}>
            <Animatable.View animation="zoomIn">
              <Button transparent light bordered
                style={{ width: 100, height: 100, justifyContent: "center", borderRadius: 80, flexDirection: "column" }}


              >
                <MaterialCommunityIcons name="file-document-edit" size={24} color="white" />

                <Text style={{ color: "white", fontSize: 12, textAlign: "center", alignSelf: "center" }}> Requests</Text>

              </Button></Animatable.View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.navigation.push('Beneficiary')}>
            <Animatable.View animation="zoomIn">
              <Button transparent light bordered
                style={{ width: 100, height: 100, justifyContent: "center", borderRadius: 80, flexDirection: "column" }}
              >
                <FontAwesome name="users" size={24} color="white" />
                <Text style={{ color: "white", fontSize: 12, textAlign: "center", alignSelf: "center" }}>Beneficiaries</Text>
              </Button></Animatable.View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.navigation.push('Notification')} >

            <Animatable.View animation="zoomIn">

              <Button transparent light bordered
                style={{ width: 100, height: 100, justifyContent: "center", borderRadius: 80, flexDirection: "column" }}


              >{!this.state.isLoading && this.state.count >= 0 &&
                <Badge style={{ alignSelf: 'flex-end' }}>{this.state.count}</Badge>}
                <MaterialIcons name="notifications" size={24} color="white" />
                <Text style={{ color: "white", fontSize: 12, textAlign: "center", alignSelf: "center", paddingBottom: 25 }}>Notification</Text>
              </Button></Animatable.View>
          </TouchableOpacity>
        </View>

      </>
    )
  }
}





