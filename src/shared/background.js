import * as React from 'react';
import { ImageBackground, StyleSheet } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient';
import { Container, Text, View, Content } from 'native-base';


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
         <ImageBackground source={require('./../img/5.jpg')} style={styles.image}>
         <LinearGradient
                colors={['rgba(252, 163, 17,0.25)', '#000000']}
                style={styles.linearGradient}
            />
        {props.children}
     </ImageBackground>
    </View>

  )
}


