import React, { Component } from 'react';
import { Animated } from 'react-native';


class AnimatedBar extends Component {
  constructor(props) {
    super(props);

    this._width = new Animated.Value(0);
    this.state = {
      color: '#841584',
    };
  }

  componentDidMount() {
    this.animateTo(this.props.delay, this.props.value);
  }

  componentWillReceiveProps(nextProps) {
    this.animateTo(nextProps.delay, nextProps.value);
  }

  animateTo = (delay, value) => {
    Animated.sequence([
      Animated.delay(delay),
      Animated.timing(this._width, {
        toValue: value,
      }),
    ]).start();
  }

  render() {
    const barStyles = {
      backgroundColor: this.state.color,
      height: this._width,
      width: 40,
      borderTopRightRadius: 5,
      borderBottomRightRadius: 5
    };

    return (
      <Animated.View style={barStyles} />
    );
  }
}

export default AnimatedBar;