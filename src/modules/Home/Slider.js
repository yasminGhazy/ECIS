import React, { Component } from 'react';
import Accounts from '../../core/services/Accounts';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import * as Animatable from 'react-native-animatable';
import { View, Text } from 'native-base';
import styles from './HomeStyle';
import { Snackbar } from 'react-native-paper';

export default class Slider extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeIndex: 0,
            carouselItems: [],
            isLoading: true,
        }
    }
    async componentDidMount() {
        let accounts = await Accounts.GetByCurrentUser(2)
        let carouselItems = [];
        accounts.map((value, key) => {
            carouselItems.push({
                title: `${value.accountType.name} Account`,
                text: `XXXX-XXXX-XXXX-${value.number.substring(value.number.length - 4, value.number.length)}`,
                text1: value.balance,
                text2: ` ${value.currency.name}`,
            })
        });
        this.setState({ carouselItems });
        this.setState({ isLoading: false });
    }

    _renderItem = ({ item, index }) => {
        return (
            <View style={styles.card}>
                <Text style={{ fontSize: 24, color: "#fff", opacity: 1 }}>{item.title}</Text>
                <Text style={{ color: "#fff" }}>{item.text} </Text>
                <Text style={{ color: "#fff", fontSize: 18 }}>{item.text1}{item.text2}</Text>
            </View>
        );
    }

    get pagination() {
        const { carouselItems, activeIndex } = this.state;
        return (
            <Pagination
                dotsLength={carouselItems.length}
                activeDotIndex={activeIndex}
                containerStyle={{ display: "flex", backgroundColor: 'transparent' }}
                dotStyle={{
                    width: 10,
                    height: 10,
                    borderRadius: 5,
                    marginHorizontal: 8,
                    backgroundColor: 'rgba(255, 255, 255, 0.92)'
                }}
                inactiveDotStyle={{
                    // Define styles for inactive dots here
                }}
                inactiveDotOpacity={0.4}
                inactiveDotScale={0.6}
            />
        );
    }
    render() {
        return (
            <>

                <View >
                    {!this.state.isLoading &&
                        <Animatable.View animation="slideInDown">

                            <Carousel
                                containerCustomStyle={{ alignSelf: "center", marginTop: 30, }}

                                ref={ref => this.carousel = ref}
                                data={this.state.carouselItems}
                                sliderWidth={700}
                                itemWidth={700}
                                itemHeight={300}
                                renderItem={this._renderItem}
                                autoplay
                                loop
                                inactiveSlideScale={0.2}
                                autoplayInterval={4000}
                                onSnapToItem={index => this.setState({ activeIndex: index })}
                                layout={'default'}
                                layoutCardOffset={0.5}
                            />
                            {this.pagination}
                        </Animatable.View>

                    }

                </View>    
                
            </>
        );
    }
}