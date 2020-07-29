import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import {
  DrawerItem,
  DrawerContentScrollView
} from '@react-navigation/drawer';

import {
  Avatar,
  Title,
  Caption,
  Paragraph,
  Drawer,
  Text,
  TouchableRipple,
  Switch,
} from 'react-native-paper';
import { MaterialCommunityIcons ,MaterialIcons} from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import styles from './DrawerStyle';
import Users from '../../core/services/Users';

export default function DrawerContent(props) {
  const navigation = useNavigation();
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [mail, setMail] = useState();
  const [lastLogin, setLastLogin] = useState();


  useEffect(() => {
    async function fetchData() {
      let data = await Users.GetCurrentUserInfo()
      setFirstName(data.firstName)
      setLastName(data.lastName)
      setMail(data.email)
      setLastLogin(data.lastLogin)
 
    }
    fetchData();
  }, []);

  return (
    <DrawerContentScrollView {...props} style={{ marginTop: 50 }}>
      <View
        style={
          styles.drawerContent
        }
      >
        <View style={styles.userInfoSection}>
          {/* <Avatar.Image
            source={{
              uri:
                'https://pbs.twimg.com/profile_images/952545910990495744/b59hSXUd_400x400.jpg',
            }}
            size={50}
          /> */}
          <Title style={styles.title}>{`${firstName} ${lastName}`}</Title>
          <Caption style={styles.caption}>{mail}</Caption>
       
        </View>
        <Drawer.Section style={styles.drawerSection}>
          <DrawerItem
            icon={({ color, size }) => (
              <MaterialCommunityIcons
                name="home"
                color={color}
                size={size}
              />
            )}
            label="Home"
            onPress={() => { navigation.push('Home') }}
          />
          {/* <DrawerItem
            icon={({ color, size }) => (
              <MaterialIcons name="notifications" color={color}
              size={size} />
            )}
            label="Notifications"
            onPress={() => { navigation.push('Notification') }}
            
          /> */}
          <DrawerItem
            icon={({ color, size }) => (
              <MaterialCommunityIcons
                name="logout"
                color={color}
                size={size}
              />
            )}
            label="Logout"
            onPress={() => { navigation.push('Login') }}
          />
        </Drawer.Section>
        {/* <Drawer.Section title="Preferences">
          <TouchableRipple onPress={() => { }}>
            <View style={styles.preference}>
              <Text>Dark Theme</Text>
              <View pointerEvents="none">
                <Switch value={false} />
              </View>
            </View>
          </TouchableRipple>
          <TouchableRipple onPress={() => { }}>
            <View style={styles.preference}>
              <Text>RTL</Text>
              <View pointerEvents="none">
                <Switch value={false} />
              </View>
            </View>
          </TouchableRipple>
        </Drawer.Section> */}
      </View>
    </DrawerContentScrollView>
  );
}


