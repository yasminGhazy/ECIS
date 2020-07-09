import * as React from 'react';
import CustomHeader from '../../shared/Header';
import Background from '../../shared/background';
import AccountForm from './AccountForm';
import Swiper from 'react-native-swiper';
import { StyleSheet, Dimensions, Text, View } from 'react-native';
import { Card, Title, Paragraph } from 'react-native-paper';
import { FontAwesome, AntDesign, Entypo } from '@expo/vector-icons';


const styles = StyleSheet.create({
  wrapper: { marginBottom: 150 },
  slide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent'
  },

  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold'
  }
})

class SwiperComponent extends React.Component {
  render() {
    return (

      <Swiper style={styles.wrapper} autoplay activeDotColor="white">
        <View style={styles.slide}>
          <Card style={styles.card}>
            <Card.Content style={{ zIndex: 3 }}>
              <Title style={{ color: "white", alignSelf: "center" }}><FontAwesome name="warning" size={16} color="#FFD54F" /> </Title>
              {/* <Subheading style={{ color: "white", fontSize: 20 }}> hey</Subheading> */}
              <Paragraph style={{ color: "white", alignSelf: "center", fontSize: 20 }}>xxxx-xxxx-xxxx-1213 </Paragraph>
              <Paragraph style={{ color: "white", alignSelf: "center", fontSize: 20 }}>1000,000 AUD  </Paragraph>
            </Card.Content>
          </Card>
        </View>
        <View style={styles.slide}>
          <Text style={styles.text}>Beautiful</Text>
        </View>
        <View style={styles.slide}>
          <Text style={styles.text}>And simple</Text>
        </View>
      </Swiper>

    )
  }
}

export default function Accounts(props) {
  return (
    <Background>
      <CustomHeader />

      <AccountForm/>
      <View style={{ margin: 20 }}>

        <Text style={{ color: "white" }}>
          <FontAwesome name="warning" size={16} color="#FFD54F" /> pending
      </Text>
        <Text style={{ color: "white" }}>
          {/* <AntDesign name="warning" size={16} color="#FFD54F" />  */}
          <Entypo name="block" size={14} color="#E57373" /> Rejected
      </Text>
        <Text style={{ color: "white" }}>
          <AntDesign name="exclamationcircle" size={14} color="#81C784" style={{ margin: 10 }} /> accepted
      </Text>
      </View>
    </Background>
  )
}
export const { width, height } = Dimensions.get('window');

// const styles2 = StyleSheet.create({
//   container: {
//     flex: 1,
//     zIndex: 5,
//     backgroundColor:"black"
//   },
//   child: {
//     height: height * .3,
//     width,
//     justifyContent: 'center',

//     backgroundColor: "black",
//     opacity: 0.7,
//     borderRadius: 30,
//     margin: 20,
//     zIndex:5
//   },
//   text: {

//     textAlign: 'center',
//     color: "white"
//   }
// });

// const styles = StyleSheet.create({
//   fab: {
//     position: 'absolute',
//     backgroundColor: "green",
//     marginHorizontal: 50,
//     right: 0,
//     bottom: 0,
//   },
//   rect: {
//     height: 180,
//     backgroundColor: "black",
//     opacity: 0.7,
//     borderRadius: 30,
//     margin: 20,
//   },
// })