import React, { Component } from 'react';
import {View, Dimensions} from 'react-native';
import {BarChart} from 'react-native-chart-kit'

const window = Dimensions.get('window');
const screenWidth = window.width
const data = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June'],
  datasets: [{
    data: [ 20, 45, 28, 80, 99, 43 ]
  }]
}

class BusyHours extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
    };
  }

  componentDidMount() {
    this.generateData();
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  generateData = () => {
    const data = [];
    for (let i = 0; i < 10; i++) {
      data.push(Math.floor(Math.random()*500));
    }

    this.setState({
      data,
    });
  }

  render() {
    const barStyles = {
      borderTopRightRadius: 5,
      borderBottomRightRadius: 5
    };

    const data = {
        labels: ['January', 'February', 'March', 'April', 'May', 'June'],
        datasets: [{
            data: [ 20, 45, 28, 80, 99, 43 ]
        }]
    };

    return (
      <View style={{flexDirection: 'row', backgroundColor: '#F5FCFF'}}>
          <BarChart
            style={{
      marginVertical: 8,
      borderRadius: 16
    }}
            data={data}
            width={screenWidth}
            height={220}
            chartConfig={{
                backgroundColor: '#fdfdfd',
                backgroundGradientFrom: '#adadad',
                backgroundGradientTo: '#efefef',
                color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                style: {
                    borderRadius: 5
                }
            }}
            />
      </View>
    );
  }
}

export default BusyHours;