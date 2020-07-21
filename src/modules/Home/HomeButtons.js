import { Text, View } from 'react-native'
import { FontAwesome ,Fontisto, FontAwesome5, MaterialCommunityIcons } from '@expo/vector-icons';
import React, { Component } from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';
import * as Animatable from 'react-native-animatable';
import { Button } from 'native-base';
import { useNavigation } from '@react-navigation/native';

const HomeButtons = () => {
  const navigation = useNavigation();

  return (
    <>
      <View style={{ flexDirection: "row", justifyContent: "space-between", margin: 20, marginTop: 100 }}>
        <TouchableOpacity onPress={() => { console.log("here"); navigation.navigate('Transaction') }}>
          <Animatable.View  animation="zoomIn">
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
        <TouchableOpacity >
          <Animatable.View animation="zoomIn">
            <Button transparent light bordered
              style={{ width: 100, height: 100, justifyContent: "center", borderRadius: 80, flexDirection: "column" }}
              onPress={() => navigation.navigate('EWallet')}

            >
              <FontAwesome5 name="wallet" size={24} color="white" />
              <Text style={{ color: "white", fontSize: 12, textAlign: "center", alignSelf: "center" }}> E-Wallet</Text>

            </Button>
          </Animatable.View>
        </TouchableOpacity>
        <TouchableOpacity >
          <Animatable.View animation="zoomIn"  >
            <Button transparent light bordered
              style={{ width: 100, height: 100, justifyContent: "center", borderRadius: 80, flexDirection: "column" }}
              onPress={() => navigation.push('Accounts')}

            >
              <MaterialCommunityIcons name="view-carousel" size={24} color="white" />
              <Text style={{ color: "white", fontSize: 12, textAlign: "center", alignSelf: "center" }}> Accounts</Text>
            </Button>

          </Animatable.View>
        </TouchableOpacity>
      </View>
      <View style={{ flexDirection: "row", justifyContent: "space-around", margin: 20 }}>
      
        <TouchableOpacity >
          <Animatable.View animation="zoomIn">
            <Button transparent light bordered
              style={{ width: 100, height: 100, justifyContent: "center", borderRadius: 80, flexDirection: "column" }}
              onPress={() => navigation.push('Requests')}

            >
              <MaterialCommunityIcons name="file-document-edit" size={24} color="white" />

              <Text style={{ color: "white", fontSize: 12, textAlign: "center", alignSelf: "center" }}> Requests</Text>

            </Button></Animatable.View>
        </TouchableOpacity>
        <TouchableOpacity >
          <Animatable.View animation="zoomIn">
            <Button transparent light bordered
              style={{ width: 100, height: 100, justifyContent: "center", borderRadius: 80, flexDirection: "column" }}
              onPress={() => navigation.push('Beneficiary')}

            >
              <FontAwesome name="users" size={24} color="white" />
              <Text style={{ color: "white", fontSize: 12, textAlign: "center", alignSelf: "center" }}>Beneficiaries</Text>
            </Button></Animatable.View>
        </TouchableOpacity>
      </View>
    </>

  );
};
export default HomeButtons;
