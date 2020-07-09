import { DataTable } from 'react-native-paper';
import { View, Container } from 'native-base';
import { StyleSheet, ScrollView } from 'react-native';
import { Card, FAB, Title, Paragraph, Text, Subheading } from 'react-native-paper';

import React, { Component } from 'react';
import Requests from '../../core/services/Requests';
import Accounts from './../../core/services/Accounts';
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
export default class AccountForm extends Component {
    constructor(props) {
        super(props);
        this.navigation = props.navigation;
        this.state = {

            accounts: {},
            isLoading: true
        };

    }

    async componentDidMount() {
        this.setState({ accounts: await Accounts.GetByCurrentUser() })

        // let data = await Requests.GetCurrentUserInfo()

        //console.log("accounts", this.state.accounts)
        this.setState({ isLoading: false });

    }
    accounts =  () => {
        return this.state.accounts.map((value, key) => {
          
            return (
                <Card style={styles.rect} key={key}>
                <Card.Content style={{ zIndex: 3 }}>
                    <Title style={{ color: "white", alignSelf: "center" }}>
                        
                        {value.status===2 &&  <AntDesign name="exclamationcircle" size={14} color="#81C784" style={{ margin: 10 }} />}
                        {value.status===3 &&<FontAwesome name="warning" size={16} color="#FFD54F" />}
                        
                        
                         </Title>
                    {/* <Subheading style={{ color: "white", fontSize: 20 }}> hey</Subheading> */}

                    <Paragraph style={{ color: "white", alignSelf: "center", fontSize: 20 }}>ID: {value.number}</Paragraph>
                    {value.status===2 &&  <Paragraph style={{ color: "white", alignSelf: "center", fontSize: 20 }}>balance :{value.balance}  </Paragraph>}

                </Card.Content>
            </Card>
               
            )
        });
    }

    render() {
        return (
            <>
                <ScrollView style={{ marginTop: 20 }}>
                    {!this.state.isLoading && this.accounts()}
                  
                </ScrollView>
                {/* <FontAwesome name="warning" size={16} color="#FFD54F" /> */}
                <MyComponent />

            </>
        )
    }

}

const MyComponent = () => (
    <FAB
        style={styles.fab}
        small
        icon="plus"

        onPress={() => console.log('Pressed')}
    />
);

const styles = StyleSheet.create({
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
})
