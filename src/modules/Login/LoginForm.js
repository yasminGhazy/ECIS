import React, { Component } from 'react';
import { Form, Item, Input, Label, Button, Text, Spinner, View } from 'native-base';
import { StyleSheet, TouchableOpacity } from 'react-native'
import User from '../../../user'
import http from '../../core/endpoint';
import { FontAwesome } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import styles from './LoginStyle';
import * as Animatable from 'react-native-animatable';
import { Snackbar, HelperText } from 'react-native-paper';
import NetworkUtils from '../../core/NetworkUtils ';
import Is from '@flk/supportive-is';
import { BarPasswordStrengthDisplay } from 'react-native-password-strength-meter';

export default class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.navigation = props.navigation;
    this.onRegister = props.onRegister;

    this.state = {
      username: '',
      password: '',
      token: '',
      showError: false,
      Error: '',
      connectError: false,
      validation: {
        email: null,
        password: null,
        valid: null
      }

    };

  }
  validateEmail = value => {
    let input = value.nativeEvent.text;
    let validation = this.state.validation;
    validation.email = null;
    validation.valid = null;
    if (Is.empty(input)) {
      validation.email = 'Email address is required'
    }
    if (!Is.email(input) && !Is.empty(input)) {
      validation.email = 'Invalid Email Address'
    }

    this.setState({
      validation,
    })
   
  };

  validatePassword = value => {
    let input = value.nativeEvent.text;
    console.log(input)
    let validation = this.state.validation;

    validation.valid = null;
    validation.password = null;
    if (Is.empty(input)) {
      validation.password = 'Password is required'
    }
    var decimal = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;

    if (!input.match(decimal)) {
      validation.password = 'Password MUST be from 8 to 15 characters which contain at least one lowercase letter, one uppercase letter, one numeric digit, and one special character '

    }
    this.setState({
      validation,
    })

  };

  onLogin = async () => {

    console.log(this.state.username, this.state.password);

    try {
      let { data } = await http.post('/Users/Login', {
        "email": this.state.username,
        "password": this.state.password,
      })
      console.log("current", data);
      let token = data["data"].token;
      this.setState({ token });
      User.login({
        username: this.state.username,
        password: this.state.password,
        token: this.state.token,
      });
      if (data.succeeded) {

        this.navigation.push('DrawerStack');
      }

    }
    catch (error) {
      console.log(error);
      let validation = this.state.validation;
      validation.valid="Invalid data or check your connection"
      this.setState({ validation,})
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
              onChangeText={(username) => {
                this.setState({ username })
                this.setState({ showError: false });

              }}
              onChange={(value) => this.validateEmail(value)}
            />
          </Item>
          {this.state.validation.email != null &&
            <HelperText type="error" visible>
              {this.state.validation.email}
            </HelperText>
          }
          <Item>
            <Entypo name="lock-open" size={20} color="white" />
            <Input placeholder='Password'
              placeholderTextColor="white"
              secureTextEntry={true}
              style={styles.input}
              value={this.state.password}
              onChangeText={(password) => this.setState({ password })}
              onChange={(value) => this.validatePassword(value)}

            />

          </Item>

          {this.state.validation.password != null &&
            <HelperText type="error" visible>
              {this.state.validation.password}
            </HelperText>
          }

          {this.state.validation.valid != null &&
            <HelperText type="error" visible>
              {this.state.validation.valid}
            </HelperText>
          }

          <TouchableOpacity >
            <Animatable.View animation="zoomIn">
              <Button transparent light bordered
                style={styles.Btn}
                onPress={this.onLogin}
              >
                <Text style={styles.color}>Login</Text>
              </Button>
            </Animatable.View>
          </TouchableOpacity>
          <Animatable.View animation="zoomIn"></Animatable.View>
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
