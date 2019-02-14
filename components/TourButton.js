import React from 'react';
import {
    View,
    Text,
    TouchableOpacity
} from 'react-native';

import style from '../assets/Style.js';

export class TourButton extends React.Component {
    render() {
      return (
          <TouchableOpacity
              onPress={this.props.buttonFunc}
              accessibilityLabel="Button"
              style={style.buttonClass}
          >
            <Text style={style.buttonText}>{this.props.buttonTitle}</Text>
          </TouchableOpacity>
      )
    }
}

export class DisabledButton extends React.Component {
    render() {
      return (
          <View
              accessibilityLabel="Disabled Button"
              style={style.buttonDisabled}
          >
            <Text style={style.buttonTextDisabled}>{this.props.buttonTitle}</Text>
          </View>
      )
    }
}

