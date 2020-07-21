import HomeButtons from './HomeButtons';
import Slider from './Slider'
import React from 'react';
import Background from '../../Shared/background';
import Header from '../../Shared/Header/Header';

const Home = ({navigation})=> {

        return (
            <Background>
                <Header navigation={navigation} />
                <Slider />
                <HomeButtons />
            </Background>
        )
}
export default  Home;