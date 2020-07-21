import React, { Component } from 'react';
import { Appbar } from 'react-native-paper';
import user from '../../../user';
import Users from '../../core/services/Users';
import { Image, View } from 'react-native';
import { useRoute } from '@react-navigation/native';

// class Headers extends Component {
//   constructor(props) {
//     super(props);
//     this.navigation = props.navigation;
//     this.state = {

//       firstName: '',
//       lastName: '',
//       isLoading: true
//     };

//   }

//   async componentDidMount() {
//     let { firstName, lastName } = await Users.GetCurrentUserInfo()
//     this.setState({ firstName, lastName });
//     // console.log("done" ,this.state)
//     this.setState({ isLoading: false });

//   }
//   openDrawer = () => {
//     user.logout();
//     this.props.navigation.popToTop();

//   }

//   render() {

//     return (
//       <Appbar.Header dark style={{ backgroundColor: 'transparent' }}>

//         <View style={styles.container}>

//           <Image
//             style={styles.tinyLogo}
//             source={require('./../img/logo.png')}
//           />

//         </View>
//         {!this.state.isLoading && <Appbar.Content title={"Hi,"} subtitle={`      ${this.state.firstName} ${this.state.lastName}`} style={{ marginTop: 15 }} />}
//         <Appbar.Action icon="account-tie" onPress={this.openDrawer} />
//       </Appbar.Header>

//     )
//   }
// }
import { useNavigation } from '@react-navigation/native';
import styles from './HeaderStyle';

const Header = () => {
  const navigation = useNavigation();
  const route = useRoute();
  goBack = () => {
    navigation.navigate('Home');
  }
  openDrawer = () => {
    navigation.openDrawer();
  }
  return (
    <Appbar.Header dark style={{ backgroundColor: 'transparent' }}>
      {route.name === 'Home' ? <View style={styles.container}>

        <Image
          style={styles.tinyLogo}
          source={require('./../../img/logo.png')}
        />

      </View> : <Appbar.BackAction onPress={goBack} />
      }
      <Appbar.Content />
      <Appbar.Action icon="account-tie" onPress={openDrawer} />
    </Appbar.Header>

  )
}


export default Header;