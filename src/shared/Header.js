
import { Header, Body, Right, View, Left, Title } from 'native-base';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import React, { Component } from 'react';
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { Appbar,DataTable  } from 'react-native-paper';
import user from '../../user';
import Users from '../core/services/Users';
import { Image, StyleSheet } from 'react-native';

export default class CustomHeader extends Component {
  constructor(props) {
    super(props);
    this.navigation = props.navigation;
    this.state = {

      firstName: '',
      lastName: '',
      isLoading: true
    };

  }

  async componentDidMount() {
    let { firstName, lastName } = await Users.GetCurrentUserInfo()
    this.setState({ firstName, lastName });
    // console.log("done" ,this.state)
    this.setState({ isLoading: false });

  }
  logout = () => {
    user.logout();
    this.props.navigation.popToTop();

  }

  render() {

    return (
      <Appbar.Header dark style={{ backgroundColor: 'transparent' }}>
        
        <View style={styles.container}>

          <Image
            style={styles.tinyLogo}
            source={require('./../img/logo.png')}
          />

        </View>
       { !this.state.isLoading &&<Appbar.Content title={"Hi,"} subtitle={`      ${this.state.firstName} ${this.state.lastName}`} style={{marginTop:15}}/>}
        <Appbar.Action icon="account-tie" onPress={this.logout} />
      </Appbar.Header>

    )
  }
}
   
    const styles = StyleSheet.create({
  
     
      container: {
        marginTop:0,
        marginLeft: 10,
      
      },
      tinyLogo: {
        width:75,
      
        height: 100,
      },
      logo: {
        height: 58,
      },
    });

    const MyComponent = () => (
      <DataTable>
        <DataTable.Header>
          <DataTable.Title>Dessert</DataTable.Title>
          <DataTable.Title numeric>Calories</DataTable.Title>
          <DataTable.Title numeric>Fat</DataTable.Title>
        </DataTable.Header>
    
        <DataTable.Row>
          <DataTable.Cell>Frozen yogurt</DataTable.Cell>
          <DataTable.Cell numeric>159</DataTable.Cell>
          <DataTable.Cell numeric>6.0</DataTable.Cell>
        </DataTable.Row>
    
        <DataTable.Row>
          <DataTable.Cell>Ice cream sandwich</DataTable.Cell>
          <DataTable.Cell numeric>237</DataTable.Cell>
          <DataTable.Cell numeric>8.0</DataTable.Cell>
        </DataTable.Row>
    
        <DataTable.Pagination
          page={1}
          numberOfPages={3}
          onPageChange={page => {
            console.log(page);
          }}
          label="1-2 of 6"
        />
      </DataTable>
    );