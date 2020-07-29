import React, { Component } from 'react';
import { Appbar } from 'react-native-paper';
import { Image, View } from 'react-native';
import { useRoute } from '@react-navigation/native';
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
      {
        route.name === 'Home' ?
          <View style={styles.container}>
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