import * as  React from 'react';
import CustomHeader from '../../Shared/Header/Header';
import Background from '../../Shared/background';
import { StyleSheet, Text, ScrollView, TouchableOpacity } from 'react-native';
import Notifications from '../../core/services/Notifications';
import { Card, Paragraph, Snackbar } from 'react-native-paper';
import styles from './NotificationStyle';
import NetworkUtils from '../../core/NetworkUtils ';

export default class Notify extends React.Component {
    constructor(props) {
        super(props);
        this.navigation = props.navigation;
        this.state = {
            Notification: {},
            NewNotificationsCount:0,
           UserNotifications:{},
           connectionStatus:' Loading your Data .......',

            isLoading: true
        };
    }

    async componentDidMount() {
        if (await NetworkUtils.isNetworkAvailable()) {

        this.setState({ Notification: await Notifications.GetByCurrentUser() })
        this.setState({ NewNotificationsCount: await Notifications.GetUserNewNotificationsCount() })

        // console.log(this.state.Notification)

        this.setState({ isLoading: false });
        }
        else this.setState({connectionStatus:'check your connections and try again'})

    }
    NotificationCard = () => {

        return this.state.Notification.map((value, key) => {
            return (
                <Card style={styles.rect} key={key}>
                    <Card.Content style={{ zIndex: 3 }}>
                        <Paragraph style={{ color: "white", alignSelf: "center", fontSize: 20 }}>{` ${value.content}`} </Paragraph>
                        <Paragraph > </Paragraph>
                    
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
                    {!this.state.isLoading && this.NotificationCard()}
                </ScrollView>
                <Snackbar
                    visible={this.state.isLoading}
                // onDismiss={onDismissSnackBar}
                >
                     {this.state.connectionStatus}
                </Snackbar>

            </Background>
        );
    }
}
