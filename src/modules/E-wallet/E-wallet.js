import * as React from 'react';
import CustomHeader from '../../shared/Header';
import Background from '../../shared/background';
import Swiper from 'react-native-swiper';
import { StyleSheet, Dimensions, Text, View, ScrollView } from 'react-native';
import { Card, Title, Paragraph, FAB } from 'react-native-paper';
import { FontAwesome, AntDesign, Entypo } from '@expo/vector-icons';


const styles = StyleSheet.create({
    wrapper: { marginBottom: 50 },
    slide: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'transparent'
    },
    fab: {
        position: 'absolute',
        backgroundColor: "green",
        margin: 30,
        right: 0,
        bottom: 0,
    },
    rect: {
        height: 180,
        backgroundColor: "black",
        opacity: 0.7,
        borderRadius: 30,
        marginHorizontal: 40,
        marginVertical: 10
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

            <Swiper style={styles.wrapper} activeDotColor="white" >

                <View style={styles.slide}>
                    <Text style={styles.text}>Recieved Cheques</Text>
                    <ScrollView style={{ marginTop: 20 }}>
                        <Card style={styles.rect}>
                            <Card.Content style={{ zIndex: 3 }}>
                                <Title style={{ color: "white", alignSelf: "center" }}><FontAwesome name="warning" size={16} color="#FFD54F" /> </Title>
                                {/* <Subheading style={{ color: "white", fontSize: 20 }}> hey</Subheading> */}
                                <Paragraph style={{ color: "white", alignSelf: "center", fontSize: 20 }}>xxxx-xxxx-xxxx-1213 </Paragraph>
                                <Paragraph style={{ color: "white", alignSelf: "center", fontSize: 20 }}>1000,000 AUD  </Paragraph>
                            </Card.Content>
                        </Card>
                        <Card style={styles.rect}>

                            <Card.Content style={{ zIndex: 3 }}>

                                <Title style={{ color: "white", alignSelf: "center" }}><FontAwesome name="warning" size={16} color="#FFD54F" /> </Title>

                                {/* <Subheading style={{ color: "white", fontSize: 20 }}> hey</Subheading> */}
                                <Paragraph style={{ color: "white", alignSelf: "center", fontSize: 20 }}>xxxx-xxxx-xxxx-1213 </Paragraph>
                                <Paragraph style={{ color: "white", alignSelf: "center", fontSize: 20 }}>1000,000 AUD  </Paragraph>

                            </Card.Content>
                        </Card>
                        <Card style={styles.rect}>


                            <Card.Content style={{ zIndex: 3 }}>

                                <Title style={{ color: "white", alignSelf: "center" }}><FontAwesome name="warning" size={16} color="#FFD54F" /> </Title>

                                {/* <Subheading style={{ color: "white", fontSize: 20 }}> hey</Subheading> */}
                                <Paragraph style={{ color: "white", alignSelf: "center", fontSize: 20 }}>xxxx-xxxx-xxxx-1213 </Paragraph>
                                <Paragraph style={{ color: "white", alignSelf: "center", fontSize: 20 }}>1000,000 AUD  </Paragraph>

                            </Card.Content>
                        </Card>

                        <Card style={styles.rect}>


                            <Card.Content style={{ zIndex: 3 }}>

                                <Title style={{ color: "white", alignSelf: "center" }}><FontAwesome name="warning" size={16} color="#FFD54F" /> </Title>

                                {/* <Subheading style={{ color: "white", fontSize: 20 }}> hey</Subheading> */}
                                <Paragraph style={{ color: "white", alignSelf: "center", fontSize: 20 }}>xxxx-xxxx-xxxx-1213 </Paragraph>
                                <Paragraph style={{ color: "white", alignSelf: "center", fontSize: 20 }}>1000,000 AUD  </Paragraph>

                            </Card.Content>
                        </Card>
                        <Card style={styles.rect}>


                            <Card.Content style={{ zIndex: 3 }}>

                                <Title style={{ color: "white", alignSelf: "center" }}><FontAwesome name="warning" size={16} color="#FFD54F" /> </Title>

                                {/* <Subheading style={{ color: "white", fontSize: 20 }}> hey</Subheading> */}
                                <Paragraph style={{ color: "white", alignSelf: "center", fontSize: 20 }}>xxxx-xxxx-xxxx-1213 </Paragraph>
                                <Paragraph style={{ color: "white", alignSelf: "center", fontSize: 20 }}>1000,000 AUD  </Paragraph>

                            </Card.Content>
                        </Card>
                    </ScrollView>
                </View>
                <View style={styles.slide}>
                    <Text style={styles.text}>Send Cheques</Text>
                </View>
            </Swiper>

        )
    }
}

export default function EWallet(props) {
    return (
        <Background>
            <CustomHeader />
            <SwiperComponent />
            <MyComponent />
            <View style={{ margin: 10 }}>

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

const MyComponent = () => (
    <FAB
        style={styles.fab}
        small
        icon="plus"

        onPress={() => console.log('Pressed')}
    />
);

