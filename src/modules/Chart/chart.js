import React, { Component } from 'react';
import { View, Text } from 'react-native';

import {
    LineChart,
    BarChart,
    PieChart,
    ProgressChart,
    ContributionGraph
} from 'react-native-chart-kit'

import { Dimensions } from 'react-native'




export default class Chart extends Component {
    render() {

        return (
            <View>
                <Text>
                    
            </Text>
                <PieChart
                    data={data}
                    width={screenWidth}
                    height={220}
                    chartConfig={chartConfig}
                    accessor="population"
                    backgroundColor="transparent"
                    paddingLeft="15"
                />
            
            </View>
        );
    }
}
const chartConfig = {
    backgroundGradientFrom: '#1E2923',
    backgroundGradientTo: '#08130D',
    color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`
}
const screenWidth = Dimensions.get('window').width

const data = [
    { name: 'pending', population: 21500000, color: '#088087', legendFontColor: '#088087', legendFontSize: 15 },
    { name: 'confimed', population: 2800000, color: '#007ad9', legendFontColor: '#007ad9', legendFontSize: 15 },
    { name: 'rejected', population: 527612, color: '#cacaca', legendFontColor: '#cacaca', legendFontSize: 15 },


    
]