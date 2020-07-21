import * as React from 'react';
import { ImageBackground, StyleSheet,Image } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient';
import { Container, Text, View, Content } from 'native-base';
import CustomHeader from './Header/Header';


// export default function Background(props) {
//     return (
//         <ImageBackground
//             source={require('./../img/4.jpg')}
//             style={{ flex: 1 , justifyContent:'center',alignItems:'center'}}
//         >
//             <LinearGradient
//                 colors={['rgba(255,255,255,0)', '#000000']}
//                 style={styles.linearGradient}
//             />
//             {props.children}
//         </ImageBackground>
//     )
// }

const styles = StyleSheet.create({
  linearGradient: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    height: '100%',
    opacity:0.5
  },
  container: {
    flex: 1,
    flexDirection: "column",
  
   
  },
  image: {
    flex: 1,

    
  },

});
// const image = { uri: "./../img/4.jpg" };

export default function Background(props) {
  return (
    <View style={styles.container}>
         <ImageBackground source={require('./../img/2a5d60b374112294f2e17dfdf7b54984.jpg')} style={styles.image}>
         <LinearGradient
                // colors={['rgba(150, 100, 10,0.26)', '#000000']}
                colors={['#000','#000']}

                style={styles.linearGradient}
            />
        {props.children}
     </ImageBackground>
    </View>

  )
}