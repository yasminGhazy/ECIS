
import Pie from 'react-native-fab-pie';
import MyLabels from '../test';
import React from 'react';
import {
  Text,
  View,
  Dimensions, Button
} from 'react-native';
import { PieChart } from 'react-native-svg-charts'

export default class Chart4 extends React.Component {
  constructor(props) {
    super(props);
    let { accepted, rejected, pending } = props;
    const data = [{
      'id': 'pending',
      'value': props.pending,
    },
    {
      'id': '  rejected',
      'value':props.rejected,
    },
    {
      'id': 'accepted',
      'value': props.accepted,
    }];

    const colors = ['FFD54F', 'E57373', '81C784'];
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
    
      <Pie
        ref={this.pie}
        containerStyle={{
          flexDirection: 'row',
          justifyContent: 'center',
          marginVertical: 20,
        }}
        pieStyle={{
          width: 200,
          height: 140,
          flex: 1,
        }}
        outerRadius={40}
        innerRadius={30}
        data={this.state.pieData}
        animate
      >
        <MyLabels />
       
      </Pie>
   

    );
  }
}