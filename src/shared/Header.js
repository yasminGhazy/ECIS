
import { Header, Body, Right, View, Left, Title } from 'native-base';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import React, { Component } from 'react';
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { Appbar } from 'react-native-paper';
import user from '../../user';
import Users from '../core/services/Users';

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
    props.navigation.popToTop();

  }

  render() {
    
    return (
      <Appbar.Header dark style={{ backgroundColor: 'transparent' }}>

       { !this.state.isLoading &&<Appbar.Content title="Hi," subtitle={`      ${this.state.firstName} ${this.state.lastName}`} />
}
        <Appbar.Action icon="account-tie" onPress={this.logout} />
      </Appbar.Header>

    )
  }
}
    // <Header transparent style={{ margin: 0 }}  >
    //    {/* <Left>
    //    <AntDesign name="home" size={24} color="white" style={{ marginLeft: 10 }} />

    //     </Left>  */}
    //   <Body>
    //     <Title style={{ color: "white", marginLeft: 10 }}>{`${props.firstName} ${props.lastName}`}</Title>
    //   </Body>
    //   <Right>
    //     <MaterialCommunityIcons name="account-tie" size={24} color="white" style={{ marginRight: 15 }} />
    //     <Ionicons name="ios-notifications-outline" size={24} color="white" style={{ marginRight: 10 }} />
    //     {/* <AntDesign name="logout" size={18} color="white"/> */}
    //   </Right>
    // </Header>}