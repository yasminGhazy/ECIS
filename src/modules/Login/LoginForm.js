import React, { Component } from 'react';
import { Form, Item, Input, Label, Button, Text, Spinner, View } from 'native-base';
import { StyleSheet, TouchableOpacity } from 'react-native'
import User from '../../../user'
import http from '../../core/endpoint';
import { FontAwesome } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import styles from './LoginStyle';

export default class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.navigation = props.navigation;
    this.onRegister = props.onRegister;

    this.state = {
      username: '',
      password: '',
      token: '',

    };
  }

  onLogin = async () => {
    console.log(this.state.username, this.state.password);
    try {
      let { data } = await http.post('/Users/Login', {
        "email": this.state.username,
        "password": this.state.password,
      })
      //console.log("current", data);
      let token = data["data"].token;
      this.setState({ token });
      User.login(this.state);

      this.navigation.push('DrawerStack');
    }
    catch (error) {
      console.log(error.response.data.errors);
    }
  }

  render() {
    return (
      <>
        <Form style={styles.form}>
          <Item >
            <FontAwesome name="user" size={20} color="white" />
            <Input placeholder='Email'
              placeholderTextColor="white"
              style={styles.input}
              value={this.state.username}
              onChangeText={(username) => this.setState({ username })}
            />
          </Item>

          <Item>
            <Entypo name="lock-open" size={20} color="white" />
            <Input placeholder='Password'
              placeholderTextColor="white"
              secureTextEntry={true}
              style={styles.input}
              value={this.state.password}
              onChangeText={(password) => this.setState({ password })}
            />
          </Item>

          <TouchableOpacity >
            <Button transparent light bordered
              style={styles.Btn}
              onPress={this.onLogin}
            >
              <Text style={styles.color}>Login</Text>
            </Button>
          </TouchableOpacity>

          <TouchableOpacity >
            <Button transparent light bordered
              style={styles.Btn}
              onPress={this.onRegister}
            >
              {
                this.props.isLoading ? <Spinner color='white' /> :
                  <Text style={styles.color}>Register</Text>
              }
            </Button>
          </TouchableOpacity>

        </Form>
      </>
    );
  }
}