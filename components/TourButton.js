import React from 'react';
import {
    View,
    Text,
    TouchableOpacity
} from 'react-native';

import style from '../assets/Style.js';
import { FontAwesome } from '@expo/vector-icons';

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
            <FontAwesome name="user-circle" size={30} color="black" style={{ textAlign: 'center', marginTop: 15 }} />
          </TouchableOpacity>
        }
          <TouchableOpacity
            onPress={this.buttonFunc}
            accessibilityLabel="A button"
            style={style.roundButton}
          >
            <FontAwesome name="plus" size={35} color="black" style={{ textAlign: 'center', marginTop: 15 }} />
          </TouchableOpacity>
        </View>
      )
    }
  }
  
