import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
    View,
    Text
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
    }))

    let participant = this.props.name;
    let checkedState = this.state.checked;

    this.props.checkerFunc(participant, checkedState);
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
          {this.props.owner ?
            <Text style={style.itemText}>
              {this.props.name} {' '}
              <MaterialCommunityIcons name={'crown'} size={14} />
            </Text>
          :
            <Text style={style.itemText}>{this.props.name}</Text>
          }
        </View>

        <Text style={style.itemNumber}>
          {this.props.playedMatches} / {this.props.totalMatches}
        </Text>

      </View>
    )
  }

}

const mapStateToProps = (state) => {
  return {
    partic: state.partic
   };
};

export default connect(mapStateToProps, null)(Participant);
