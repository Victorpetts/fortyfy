import React from 'react';
import {
    Text,
    TouchableOpacity
} from 'react-native';

import style from '../assets/Style.js';

export class TourButton extends React.Component {
  render() {
    return (
      <TouchableOpacity
        onPress={this.props.buttonFunc}
        accessibilityLabel="A button"
        style={style.buttonClass}
      >
        <Text style={style.buttonText}>{this.props.buttonTitle}</Text>
      </TouchableOpacity>
    )
  }
}
