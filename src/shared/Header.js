
import { Header, Body, Right, View, Left, Title } from 'native-base';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import React, { Component } from 'react';
import { Ionicons } from '@expo/vector-icons';


export default function CustomHeader(props) {
  return (

    <Header transparent style={{ margin: 0 }} >
      {/* <Left>
          <MaterialCommunityIcons name="view-dashboard-outline" size={24} color="white" />
        </Left> */}
      <Body>
        <Title style={{ color: "white", marginLeft: 50 }}>{`${props.firstName} ${props.lastName}`}</Title>
      </Body>
      <Right>
        <MaterialCommunityIcons name="account-tie" size={24} color="white" style={{ marginRight: 10 }} />
        {/* <AntDesign name="logout" size={18} color="white" onPress={this.logout} /> */}
        <Ionicons name="ios-notifications-outline" size={24} color="white" style={{ marginRight: 10 }} />
      </Right>
    </Header>

  )
}