import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
    View,
    Text,
    ScrollView
} from 'react-native';

import { MaterialCommunityIcons } from '@expo/vector-icons';
import style from '../assets/Style.js';

class Participant extends Component {

  render() {
    return (
      <View style={style.itemContainer}>
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
    partic: state.partic,
    tours: state.tours
   };
};

export default connect(mapStateToProps, null)(Participant);
