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

export default class Chart2 extends Component {
    constructor(props) {
        super(props);
        this.state ={
            accepted :props.accepted,
            rejected:props.rejected,
            pending:props.pending,
            data:[props.accepted,props.rejected,props.pending],
        }
    
// let {accepted ,rejected,pending} = props;
console.log( this.state.accepted,this.state.pending,this.state.accepted );
    }
    render() {

        return (
            <View> 
               
                <ProgressChart
                    data={{
                        labels: ["pending", "confirmd", "rejected"], // optional
                        data: [0.4,0.45,0.15]
                        // data: [this.state.pending ,this.state.accepted,this.state.rejected]
                    
                    }}
                    width={screenWidth}
                    height={220}
                    strokeWidth={16}
                    radius={32}
                    chartConfig={chartConfig}
                    hideLegend={false}
                />
            </View>
        );
    }
}
const screenWidth = Dimensions.get("window").width;
console.log()
let data = {
    labels: ["pending", "confirmd", "rejected"], // optional
    // data: this.state.data
    // data: [this.state.pending ,this.state.accepted,this.state.rejected]

};
const chartConfig = {
    backgroundGradientFrom: "black",
    backgroundGradientFromOpacity: 1,
    backgroundGradientTo: "black",
    backgroundGradientToOpacity: 0.8,
    color: (opacity = 2) => `rgba(255, 255, 255, ${opacity})`,
    strokeWidth: 2, // optional, default 3
    barPercentage: 0.5,
    useShadowColorFromDataset: false // optional
  };