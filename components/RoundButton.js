import React from 'react';
import {
    TouchableOpacity,
    View
} from 'react-native';

import style from '../assets/Style.js';
import FontAwesome, { Icons } from 'react-native-fontawesome';

export class RoundButton extends React.Component {

  state = {
    show: false
  }

  buttonFunc = () => {
    // this.setState(prevState => ({
    //   show: !prevState.show
    // }))
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
