import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
    View,
    Text,
    ImageBackground
} from 'react-native';

import { CheckBox } from 'react-native-elements';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import style from '../assets/Style.js';


class Participant extends Component {

  state = {
    checked: false
  }

  insideFunc = () => {
    this.setState(prevState =>({
      checked: !prevState.checked
    }));

    let participant = this.props.name;
    let checkedState = this.state.checked;

    this.props.outsideFunc(participant, checkedState);
  }

  render() {
    return (
      <View style={style.itemContainer}>
        {this.props.checkBox === true &&
          <CheckBox
            checked={this.state.checked}
            onPress={this.insideFunc}
          />
        }
        <View style={{ flexDirection: 'row', flex: 1 }}>
          <ImageBackground
            source={require('../assets/images/gold-badge.png')}
            style={{ height: 30, width: 30 }}
          >
          <Text style={style.lvlText}>{this.props.lvl}</Text>
          </ImageBackground>
          <Text style={style.itemText}>{this.props.name}</Text>
        </View>
        <Text style={style.itemNumber}>
          {this.props.playedMatches} / {this.props.totalMatches}
        </Text>
      </View>
    )
  }

}

export default Participant;
