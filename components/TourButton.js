import React from 'react';
import {
    View,
    Text,
    TouchableOpacity
} from 'react-native';

import style from '../assets/Style.js';
import FontAwesome, { Icons } from 'react-native-fontawesome';

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

export class RoundButton extends React.Component {
    
    state = {
        show: false
    }

    render() {

      return (
        <View>
        {this.state.show &&
          <TouchableOpacity
            onPress={this.buttonFunc}
            accessibilityLabel="A button"
            style={style.roundButton}
          >
            <FontAwesome style={{ fontSize: 30, color: 'black', textAlign: 'center', marginTop: 12 }}>{Icons.userCircle}</FontAwesome>
          </TouchableOpacity>
        }
          <TouchableOpacity
            onPress={this.buttonFunc}
            accessibilityLabel="A button"
            style={style.roundButton}
          >
            <FontAwesome style={{ fontSize: 35, color: 'black', textAlign: 'center', marginTop: 12 }}>{Icons.plus}</FontAwesome>
          </TouchableOpacity>
        </View>
      )
    }
  }
  
