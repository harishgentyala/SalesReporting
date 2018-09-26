import React, { Component } from 'react';
import {
  View,
  Dimensions,
} from 'react-native';
import AnimatedBar from '../Components/AnimatedBar';

const window = Dimensions.get('window');
const DELAY = 100;

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
    return (
      <View style={{flexDirection: 'row', backgroundColor: '#F5FCFF'}}>
          {this.state.data.map((value, index) => <View style={{flex: 1}}><AnimatedBar value={value} delay={DELAY * index} key={index} /></View>)}
      </View>
    );
  }
}

export default BusyHours;