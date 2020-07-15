import React,{Component} from 'react';
import CustomHeader from '../../shared/Header';
import Background from '../../shared/background';
import Swiper from 'react-native-swiper';
import { StyleSheet, Dimensions, Text, View, ScrollView } from 'react-native';
import { Card, Title, Paragraph, FAB } from 'react-native-paper';
import { FontAwesome, AntDesign, Entypo } from '@expo/vector-icons';
import Cheques from '../../core/services/Cheques';


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

export default class EWallet extends Component {
    constructor(props) {
        super(props);
        this.navigation = props.navigation;
        this.state = {
            received: {},
            sent: {},
            isLoading: true
        };
    }

    async componentDidMount() {
        this.setState({ received: await Cheques.GetReceivedChequesByCurrentUser() })
        this.setState({ sent: await Cheques.GetSentChequesByCurrentUser() })
        console.log("recieved", this.state.sent)
        this.setState({ isLoading: false });
    }
    ReceivedCheques = () => {
        return this.state.received.map((value, key) => {

            return (
                <Card style={styles.rect} key={key}>
                    <Card.Content style={{ zIndex: 3 }}>
                        <Title style={{ color: "white", alignSelf: "center" }}>

                            {value.status === 2 && <AntDesign name="exclamationcircle" size={14} color="#81C784" style={{ margin: 10 }} />}
                            {value.status === 3 && <FontAwesome name="warning" size={16} color="#FFD54F" />}

                        </Title>
                        {/* <Subheading style={{ color: "white", fontSize: 20 }}> hey</Subheading> */}
                        <Paragraph style={{ color: "white", alignSelf: "center", fontSize: 20 }}>{`from  ${value.sender.firstName} ${value.sender.lastName}`} </Paragraph>
                        <Paragraph style={{ color: "white", alignSelf: "center", fontSize: 20 }}>   {value.amount}  </Paragraph>
                        <Paragraph style={{ color: "white", alignSelf: "center", fontSize: 20 }}>reply Date :{value.replyDate}  </Paragraph>
                        {/* <Paragraph style={{ color: "white", alignSelf: "center", fontSize: 20 }}>due Date  :{value.dueDate}  </Paragraph>
                        <Paragraph style={{ color: "white", alignSelf: "center", fontSize: 20 }}>send Date :{value.sendDate}  </Paragraph> */}
                    </Card.Content>
                </Card>

            )
        });
    }
    SentCheques = () => {
        console.log("start")
        return this.state.sent.map((value, key) => {

            return (
                <Card style={styles.rect} key={key}>
                    <Card.Content style={{ zIndex: 3 }}>
                        <Title style={{ color: "white", alignSelf: "center" }}>

                            {value.status === 2 && <AntDesign name="exclamationcircle" size={14} color="#81C784" style={{ margin: 10 }} />}
                            {value.status === 1 && <FontAwesome name="warning" size={16} color="#FFD54F" />}
                            {value.status === 3 && <Entypo name="block" size={14} color="#E57373" />}
                        </Title>
                        {/* <Subheading style={{ color: "white", fontSize: 20 }}> hey</Subheading> */}
                        <Paragraph style={{ color: "white", alignSelf: "center", fontSize: 20 }}>{`to  ${value.receiver.firstName} ${value.receiver.lastName}`} </Paragraph>
                        <Paragraph style={{ color: "white", alignSelf: "center", fontSize: 20 }}>   {value.amount}  </Paragraph>
                        <Paragraph style={{ color: "white", alignSelf: "center", fontSize: 20 }}>reply Date :{value.sendDate}  </Paragraph>
                        {/* <Paragraph style={{ color: "white", alignSelf: "center", fontSize: 20 }}>due Date  :{value.dueDate}  </Paragraph>
                        <Paragraph style={{ color: "white", alignSelf: "center", fontSize: 20 }}>send Date :{value.sendDate}  </Paragraph> */}
                    </Card.Content>
                </Card>

            )
        });
    }
    render() {
        return (

            <Background>
                <CustomHeader />
                <Swiper style={styles.wrapper} activeDotColor="white" >

                    <View style={styles.slide}>
                        <Text style={styles.text}>Recieved Cheques</Text>
                        <ScrollView style={{ marginTop: 20 }}>
                            {!this.state.isLoading && this.ReceivedCheques()}

                        </ScrollView>
                    </View>
                    <View style={styles.slide}>
                        <Text style={styles.text}>Send Cheques</Text>
                        <ScrollView style={{ marginTop: 20 }}>
                            {!this.state.isLoading && this.SentCheques()}

                        </ScrollView>
                    </View>
                </Swiper>
                <MyComponent />
                <View style={{ margin: 0 }}>

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


        );
    }
}

// export default function EWallet(props) {
//     return (
//         <Background>
//             <CustomHeader />
//             <SwiperComponent />
//             <MyComponent />
//             <View style={{ margin: 10 }}>

//                 <Text style={{ color: "white" }}>
//                     <FontAwesome name="warning" size={16} color="#FFD54F" /> pending
//                  </Text>
//                 <Text style={{ color: "white" }}>
//                     {/* <AntDesign name="warning" size={16} color="#FFD54F" />  */}
//                     <Entypo name="block" size={14} color="#E57373" /> Rejected
//                  </Text>
//                 <Text style={{ color: "white" }}>
//                     <AntDesign name="exclamationcircle" size={14} color="#81C784" style={{ margin: 10 }} /> accepted
//                  </Text>
//             </View>
//         </Background>
//     )
// }
export const { width, height } = Dimensions.get('window');

const MyComponent = () => (
    <FAB
        style={styles.fab}
        small
        icon="plus"

        onPress={() => console.log('Pressed')}
    />
);

