
import Pie from 'react-native-fab-pie';
import MyLabels from '../test';
import React from 'react';
import {
  Text,
  View,
  Dimensions, Button
} from 'react-native';
import { PieChart } from 'react-native-svg-charts'
export default class Chart4 extends React.PureComponent {
  constructor(props) {
    super(props);
    let { accepted, rejected, pending } = props;
    console.log("here",accepted, rejected, pending);
    const data = [{
      'id': '  pending',
      'value': 17,
    },
    {
      'id': '  rejected',
      'value': 12,
    },
    {
      'id': 'accepted',
      'value': 11,
    }];

    const colors = ['FCA311', '14213D', '70798c'];
    const pieData = data
      .filter(value => value.value > 0)
      .map((value, index) => {
        const toRet = {
          value: value.value,
          title: `${value.value} ${value.id}`,
          color: `#${colors[index]}`,
          key: `pie-${index}`,
        };
        return toRet;
      });

    this.state = {
      pieData,
    };
  }

  componentDidMount() {
    this.pie.current.animate();
  }

  animate = () => {
    this.pie.current.reset().then(this.pie.current.animate);
  };

  pie = React.createRef();

  render() {
    return (
      <View
      style={{
        marginRight: 60,
      }}
    >
      <Pie
        ref={this.pie}
        containerStyle={{
          flexDirection: 'row',
          justifyContent: 'center',
          marginVertical: 20,
        }}
        pieStyle={{
          width: 200,
          height: 240,
          flex: 1,
        }}
        outerRadius={40}
        innerRadius={30}
        data={this.state.pieData}
        animate
      >
        <MyLabels />
      </Pie>
      {/* <Button title="animate" onPress={this.animate} /> */}
    </View>

    );
  }
}